class Sprite {
  constructor({position, imageSrc }) {
    this.position = position
    this.image = new Image()
    this.image.onload = () =>{
      this.loaded = true
    }
    this.image.src = imageSrc
    this.loaded = false
  }
  draw() {
    if (!this.loaded) return
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}
class PlayerSprite {
  constructor({position, imageSrc, frameRate, animations }) {
    this.position = position
    this.image = new Image()
    this.image.onload = () =>{
      this.loaded = true
      this.width = this.image.width / frameRate
      this.height = this.image.height / 6
    }
    this.image.src = imageSrc
    this.loaded = false
    this.frameRate = frameRate
    this.animations = animations
    this.currentFrame = 0
    this.frameY = 0
    this.elapsedFrames = 0
    this.frameBuffer = 0
  }
  draw() {
    if (!this.loaded) return
    const cropbox = {
      position: {
        x: this.width * this.currentFrame,
        y: this.height * this.frameY,
      },
      width: this.width,
      height: this.height,
    }
    c.drawImage(
      this.image,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.width,
      cropbox.height,
      this.position.x, 
      this.position.y,
      this.width,
      this.height,
    )
    this.updateFrame()
  }

  updateFrame() {
    this.elapsedFrames++

    if (this.elapsedFrames % this.frameBuffer === 0) {
      if (this.currentFrame <= this.frameRate - 1) this.currentFrame++
      else this.currentFrame = 0
    }
  }
}