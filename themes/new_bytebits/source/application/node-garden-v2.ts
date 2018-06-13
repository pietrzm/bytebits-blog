import { Vector3D } from "./math/Vector3D.js"
const { random } = Math
const round = (x: number) => (.5 + x) << 0





class Canvas {

    element: HTMLCanvasElement
    context: CanvasRenderingContext2D
    offsetParent: HTMLElement

    dimensions: Vector3D


    constructor(element: Element) {
        this.element = element as HTMLCanvasElement
        this.context = this.element.getContext("2d") as CanvasRenderingContext2D
        this.offsetParent = this.element.offsetParent as HTMLElement

        this.dimensions = Vector3D.of(
            this.element.width = this.offsetParent.offsetWidth,
            this.element.height = this.offsetParent.offsetHeight,
            2
        )
    }


    get width() {
        return Vector3D.get.x(this.dimensions)
    }

    get height() {
        return Vector3D.get.y(this.dimensions)
    }

    get depth() {
        return Vector3D.get.z(this.dimensions)
    }

    get volume() {
        return this.width * this.height * this.depth
    }

    get area() {
        return this.width * this.height
    }

}







window.onload = () => {
    const canvas = new Canvas(document.getElementsByTagName("canvas")[0])

    const Node = {
        QUANTITY: round(canvas.area * .00005),
        MAX_DISTANCE: round(canvas.area * .00015),

        x(node: Vector3D) {
            return Vector3D.get.x(node)
        },
        y(node: Vector3D) {
            return Vector3D.get.y(node)
        },
        z(node: Vector3D) {
            return Vector3D.get.z(node)
        }
    }

    const nodes = Array.from(new Array(Node.QUANTITY))
        .map(() =>
            Vector3D.of(
                round(canvas.width * random()),
                round(canvas.height * random()),
                round(canvas.depth * random())))



    const context = canvas.context
    const render = () => {
        context.clearRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < nodes.length - 1; i++) {
            const nodeA = nodes[i]

            for (let j = i + 1; j < nodes.length; j++) {
                const nodeB = nodes[j]



                context.beginPath()
                context.globalAlpha = Node.z(nodeA) / canvas.depth
                context.arc(Node.x(nodeA), Node.y(nodeA), Node.z(nodeA), 0, Math.PI * 2)
                context.fill()
                context.arc(Node.x(nodeB), Node.y(nodeB), Node.z(nodeB), 0, Math.PI * 2)
                context.globalAlpha = Node.z(nodeB) / canvas.depth
                context.fill()

                // Measure the distance between two points using pythagorean theorem
                const dx = (Node.x(nodeB) - Node.x(nodeA)),
                    dy = (Node.y(nodeB) - Node.y(nodeA)),
                    dz = (Node.z(nodeB) - Node.z(nodeA))
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

                // Connect two near nodes with a line
                if (distance < Node.MAX_DISTANCE) {
                    // Draw a line connecting those two nodes
                    // Line width is based on the distance between those two nodes
                    // context.lineWidth = 1 - distance / Node.MAX_DISTANCE

                    context.globalAlpha = distance / Node.MAX_DISTANCE
                    context.lineWidth = (Node.z(nodeA) + Node.z(nodeB)) / 2 / canvas.depth
                    context.beginPath();

                    context.moveTo(Node.x(nodeA), Node.y(nodeA))
                    context.lineTo(Node.x(nodeB), Node.y(nodeB))
                    context.stroke()
                }
            }
        }
    }

    requestAnimationFrame( function frame() {
        render();
        requestAnimationFrame(frame);
    } );
}


