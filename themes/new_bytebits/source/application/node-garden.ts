// Get a canvas element to draw on
const canvas = document.getElementsByTagName("canvas")[0] as HTMLCanvasElement,
    container = canvas.offsetParent as HTMLElement,
    context = canvas.getContext("2d") as CanvasRenderingContext2D



// Define types
type GardenNode = { x: number, y: number }

// Constants
const CANVAS_WIDTH = canvas.width = container.offsetWidth,
    CANVAS_HEIGHT = canvas.height = container.offsetHeight
const SCREEN_DENSITY = Math.round(CANVAS_WIDTH * CANVAS_HEIGHT * 0.0001)
const NODES_QUANTITY = SCREEN_DENSITY * 3,
    MAX_DISTANCE = 100



// Define a list of nodes
const nodes: GardenNode[] =
    Array.from(new Array(NODES_QUANTITY))
        .map(() => ({
            x: Math.random() * CANVAS_WIDTH,
            y: Math.random() * CANVAS_HEIGHT
        }))

// Represent every node as a dot
nodes.map(node => {
    context.beginPath();
    context.arc(node.x, node.y, 1, 0, Math.PI * 2);
    context.fill()
});


const render = () => {
    // Try to connect nodes with a line
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    for (let i = 0; i < nodes.length - 1; i++) {
        const nodeA = nodes[i]

        for (let j = i + 1; j < nodes.length; j++) {
            const nodeB = nodes[j]

            // Measure the distance between two points using pythagorean theorem
            const dx = (nodeB.x - nodeA.x),
                dy = (nodeB.y - nodeA.y)
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Connect two near nodes with a line
            if (distance < MAX_DISTANCE) {
                // Draw a line connecting those two nodes
                // Line width is based on the distance between those two nodes
                context.lineWidth = 1 - distance / MAX_DISTANCE
                context.beginPath();
                context.moveTo(nodeA.x, nodeA.y)
                context.lineTo(nodeB.x, nodeB.y)
                context.stroke()
            }
        }
    }
};



requestAnimationFrame( function frame() {
    render();

    // Animate
    for (const node of nodes) {
        node.x = node.x + (0.5 - Math.random()) * 1.15;
        node.y = node.y + (0.5 - Math.random()) * 1.15;
    }


    requestAnimationFrame(frame);
} );