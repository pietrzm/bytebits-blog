// Get a canvas element to draw on
const canvas = document.getElementsByTagName("canvas")[0] as HTMLCanvasElement,
    container = canvas.offsetParent as HTMLElement,
    context = canvas.getContext("2d") as CanvasRenderingContext2D



const scale = (x: number) =>
    Math.round(x * x * .0025)



// Define types
type GardenNode = { x: number, y: number }

// Constants
const CANVAS_WIDTH = canvas.width = container.offsetWidth,
    CANVAS_HEIGHT = canvas.height = container.offsetHeight,
    CANVAS_AREA = CANVAS_WIDTH * CANVAS_HEIGHT,
    CANVAS_DEPTH = 3,
    CANVAS_VOLUME = CANVAS_AREA * CANVAS_DEPTH

const UNIVERSE_WIDTH = 100,
    UNIVERSE_HEIGHT = 100,
    UNIVERSE_DEPTH = 1,
    UNIVERSE_VOLUME = UNIVERSE_WIDTH * UNIVERSE_HEIGHT * UNIVERSE_DEPTH

const NODES_QUANTITY = scale(CANVAS_VOLUME / UNIVERSE_VOLUME),
    MAX_DISTANCE = 50


// Define a list of nodes
const nodes: GardenNode[] =
    Array.from(new Array(NODES_QUANTITY))
        .map(() => ({
            x: Math.random() * CANVAS_WIDTH,
            y: Math.random() * CANVAS_HEIGHT
        }))


const { round, random } = Math
const depth = round(1 + (CANVAS_DEPTH / UNIVERSE_DEPTH - 1) * random())

const render = () => {
    // Try to connect nodes with a line
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // Represent every node as a dot
    nodes.forEach(node => {
        const size = depth - 1
        context.beginPath()
        context.arc(node.x, node.y, size, 0, Math.PI * 2)
        context.fill()
    });


    for (let i = 0; i < nodes.length - 1; i++) {
        const nodeA = nodes[i]

        for (let j = i + 1; j < nodes.length; j++) {
            const nodeB = nodes[j]

            // Measure the distance between two points using pythagorean theorem
            const dx = (nodeB.x - nodeA.x),
                dy = (nodeB.y - nodeA.y)
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Connect two near nodes with a line
            if (distance < MAX_DISTANCE * depth) {
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

    // // Animate
    // for (const node of nodes) {
    //     node.x = node.x + (0.5 - Math.random()) * 1.15;
    //     node.y = node.y + (0.5 - Math.random()) * 1.15;
    // }
    //
    //
    // requestAnimationFrame(frame);
} );