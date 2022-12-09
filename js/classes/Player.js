class Player extends PlayerSprite {
    constructor({ collisionBlocks = [], clearance = [], thorn=[],thornL=[],thornD=[], thornR=[], imageSrc, frameRate, animations }) {
        super({ imageSrc, frameRate, animations })
        this.position = {
            x: 50,
            y: 350
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.hitbox = {
            width: 35,
            height: 34,
        }
        this.gravity = 0.4
		this.maxGravity = 3.5
        this.onGround = false
		this.touchingWall = false
		this.slidingLeft = false
		this.slidingRight = false
        this.collisionBlocks = collisionBlocks
        this.clearance = clearance
        this.thorn = thorn
		this.thornL = thornL
		this.thornD = thornD
		this.thornR = thornR
    }
    update() {
        this.position.x += this.velocity.x
        this.HorizontalCollisions()
        this.Gravity()
        this.VerticalCollisions()
        
    }

    switchSprite(name) {
        if (this.frameY === this.animations[name].frameY) return
        this.currentFrame = 0
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
        this.frameY = this.animations[name].frameY
    }
    Gravity() {
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y * 1.2
    }
    HorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                if (this.velocity.x < 0) {
                    this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
					this.touchingWall = true
					this.slidingLeft = true
                    break
                }
                if (this.velocity.x > 0) {
                    this.position.x = collisionBlock.position.x - this.hitbox.width - 0.01
					this.touchingWall = true
					this.slidingRight = true
                    break
                }
            } else {
				this.touchingWall = false
				this.slidingLeft = false
				this.slidingRight = false
			}
        }
		
    }

    VerticalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height
                ) {
                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01  
                    break
                }
                if (this.velocity.y > 0) {
                    this.onGround = true
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y - this.hitbox.height - 0.01
                    break
                } 
            } else this.onGround = false
        }
        for (let i = 0; i < this.clearance.length; i++) {
            const clearanceBlock = this.clearance[i]
            if (this.position.x <= clearanceBlock.position.x + clearanceBlock.width &&
                this.position.x + this.hitbox.width >= clearanceBlock.position.x &&
                this.position.y + this.hitbox.height >= clearanceBlock.position.y &&
                this.position.y <= clearanceBlock.position.y + clearanceBlock.height
                ) {
                    level++
                    levels[level].init()
            }
        }
        for (let i = 0; i < this.thorn.length; i++) {
            const thornBlock = this.thorn[i]
            if (this.position.x <= thornBlock.position.x + thornBlock.width &&
                this.position.x + this.hitbox.width >= thornBlock.position.x &&
                this.position.y + this.hitbox.height >= thornBlock.position.y + 30 &&
                this.position.y <= thornBlock.position.y + thornBlock.height
                ) {
					levels[level].init()
					player.velocity.y = 0
				}
        }
		for (let i = 0; i < this.thornL.length; i++) {
		    const thornLBlock = this.thornL[i]
		    if (this.position.x <= thornLBlock.position.x + thornLBlock.width &&
		        this.position.x + this.hitbox.width >= thornLBlock.position.x + 30 &&
		        this.position.y + this.hitbox.height >= thornLBlock.position.y &&
		        this.position.y <= thornLBlock.position.y + thornLBlock.height
		        ) {
					levels[level].init()
					player.velocity.y = 0
				}
		}
		for (let i = 0; i < this.thornD.length; i++) {
		    const thornDBlock = this.thornD[i]
		    if (this.position.x <= thornDBlock.position.x + thornDBlock.width &&
		        this.position.x + this.hitbox.width >= thornDBlock.position.x &&
		        this.position.y + this.hitbox.height >= thornDBlock.position.y - 30 &&
		        this.position.y <= thornDBlock.position.y + thornDBlock.height
		        ) {
					levels[level].init()
					player.velocity.y = 0
				}
		}
		for (let i = 0; i < this.thornR.length; i++) {
		    const thornRBlock = this.thornR[i]
		    if (this.position.x <= thornRBlock.position.x + thornRBlock.width &&
		        this.position.x + this.hitbox.width >= thornRBlock.position.x - 30 &&
		        this.position.y + this.hitbox.height >= thornRBlock.position.y &&
		        this.position.y <= thornRBlock.position.y + thornRBlock.height
		        ) {
					levels[level].init()
					player.velocity.y = 0
				}
		}
    }
}