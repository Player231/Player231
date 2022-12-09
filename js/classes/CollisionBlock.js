class CollisionBlock {
    constructor({position}) {
        this.position = position
        this.width = 35
        this.height = 33
    }
    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
class Clearance {
    constructor({position}) {
        this.position = position
        this.width = 35
        this.height = 35
    }
    draw() {
        c.fillStyle = 'rgba(0, 255, 0, 0'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
class Thorn {
    constructor({position}) {
        this.position = position
        this.width = 35
        this.height = 5
    }
    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0'
        c.fillRect(this.position.x, this.position.y+30, this.width, this.height)
    }
}
class ThornL {
    constructor({position}) {
        this.position = position
        this.width = 5
        this.height = 35
    }
    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0'
        c.fillRect(this.position.x+30, this.position.y, this.width, this.height)
    }
}
class ThornD {
    constructor({position}) {
        this.position = position
        this.width = 35
        this.height = 5
    }
    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
class ThornR {
    constructor({position}) {
        this.position = position
        this.width = 5
        this.height = 35
    }
    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}