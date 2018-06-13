import { Vector } from "../math/vector.js"



export class Sprite {

}


export class RigidBody {

    _position = Vector.create(0, 0, 0)
    _velocity = Vector.create(0, 0, 0)


    get x() {
        return Vector.get.x(this._position)
    }
    set x(x) {
        Vector.set.x(this._position, x)
    }

    get y() {
        return Vector.get.y(this._position)
    }
    set y(y) {
        Vector.set.y(this._position, y)
    }

    get z() {
        return Vector.get.z(this._position)
    }
    set z(z) {
        Vector.set.z(this._position, z)
    }


    applyForce(force: Vector) {
        this._velocity = Vector.add(this._velocity, force)
    }

    update() {
        this._position = Vector.add(this._position, this._velocity)
    }

}