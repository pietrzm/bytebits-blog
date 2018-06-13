export type Vector3D = [ number, number, number ]



export const get = {
    x: (vT: Vector3D) => vT[0],
    y: (vT: Vector3D) => vT[1],
    z: (vT: Vector3D) => vT[2]
}


export const set = {
    x: (vT: Vector3D, x: number) => (vT[0] = x, set),
    y: (vT: Vector3D, y: number) => (vT[1] = y, set),
    z: (vT: Vector3D, z: number) => (vT[2] = z, set)
}


export const of = (x: number, y: number, z: number): Vector3D =>
    [ x, y, z ]


export const update = (vT: Vector3D, x: number, y: number, z: number): Vector3D => {
    set.x(vT, x)
    set.y(vT, y)
    set.z(vT, z)

    return vT
}


export const add = (vA: Vector3D, vB: Vector3D, vT: Vector3D): Vector3D =>
    update(vT,
        get.x(vA) + get.x(vB),
        get.y(vA) + get.y(vB),
        get.z(vA) + get.z(vB))


export const subtract = (vA: Vector3D, vB: Vector3D, vT: Vector3D): Vector3D =>
    update(vT,
        get.x(vA) - get.x(vB),
        get.y(vA) - get.y(vB),
        get.z(vA) - get.z(vB))


export const multiply = (vA: Vector3D, vB: Vector3D, vT: Vector3D): Vector3D =>
    update(vT,
        get.x(vA) * get.x(vB),
        get.y(vA) * get.y(vB),
        get.z(vA) * get.z(vB))


export const divide = (vA: Vector3D, vB: Vector3D, vT: Vector3D): Vector3D =>
    update(vT,
        get.x(vA) / get.x(vB),
        get.y(vA) / get.y(vB),
        get.z(vA) / get.z(vB))


export const scale = (vA: Vector3D, scalar: number, vT: Vector3D): Vector3D =>
    update(vT,
        get.x(vA) * scalar,
        get.y(vA) * scalar,
        get.z(vA) * scalar)





export const Vector3D = {
    of,
    get,
    set,
    update,
    add,
    subtract,
    multiply,
    divide,
    scale
}