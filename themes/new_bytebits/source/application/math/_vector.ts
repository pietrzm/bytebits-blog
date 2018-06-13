export type Vector = [ number, number, number, number ]



export const create = (x = .0, y = .0, z = .0, w = .0): Vector =>
    [ +x, +y, +z, +w ]


export const get = {
    x: (vA: Vector) => +vA[0],
    y: (vA: Vector) => +vA[1],
    z: (vA: Vector) => +vA[2],
    w: (vA: Vector) => +vA[3]
}


export const set = {
    x: (vA: Vector, x: number) => (vA[0] = +x, set),
    y: (vA: Vector, y: number) => (vA[1] = +y, set),
    z: (vA: Vector, z: number) => (vA[2] = +z, set),
    w: (vA: Vector, w: number) => (vA[3] = +w, set)
}


export const update = (vT: Vector, x = .0, y = .0, z = .0, w = .0): any => {
    set
        .x(vT, +x)
        .y(vT, +y)
        .z(vT, +z)
        .w(vT, +w)

    return vT
}


export const add = (vA: Vector, vB: Vector, vT: Vector = create()): Vector =>
    update(vT,
        get.x(vA) + get.x(vB),
        get.y(vA) + get.y(vB),
        get.z(vA) + get.z(vB),
        get.w(vA) + get.w(vB))


export const subtract = (vA: Vector, vB: Vector, vT: Vector = create()): Vector =>
    update(vT,
        get.x(vA) - get.x(vB),
        get.y(vA) - get.y(vB),
        get.z(vA) - get.z(vB),
        get.w(vA) - get.w(vB))


export const multiply = (vA: Vector, vB: Vector, vT: Vector = create()): Vector =>
    update(vT,
        get.x(vA) * get.x(vB),
        get.y(vA) * get.y(vB),
        get.z(vA) * get.z(vB),
        get.w(vA) * get.w(vB))


export const scale = (vA: Vector, scalar: number, vT: Vector = create()): Vector =>
    multiply(vA, create(+scalar, +scalar, +scalar, +scalar), vT)





export const Vector = {
    create,
    get,
    set,
    update,
    add,
    subtract,
    multiply,
    scale
}

