const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 35*16
canvas.height = 35*16

let parsedCollisions
let collisionBlocks
let clearance
let thorn
let thornL
let background

// 关卡
let level = 1

let inputLock = false


const player = new Player({
  imageSrc: './images/Player_Sheet.png',
  frameRate: 4,
  animations: {
    StandingRight: {
      frameRate: 0,
      frameY:0,
      frameBuffer: 0,
      loop: true,
    },
    StandingLeft: {
      frameRate: 0,
      frameY:1,
      frameBuffer: 0,
      loop: true,
    },
    RunRight: {
      frameRate: 3,
      frameY:2,
      frameBuffer: 8,
      loop: true,
    },
    RunLeft: {
      frameRate: 3,
      frameY:3,
      frameBuffer: 8,
      loop: true,
    },
    JumpingRight: {
      frameRate: 0,
      frameY:2,
      frameBuffer: 0,
      loop: true,
    },
    JumpingLeft: {
      frameRate: 0,
      frameY:3,
      frameBuffer: 0,
      loop: true,
    },
    SlidingRight: {
      frameRate: 0,
      frameY:4,
      frameBuffer: 0,
      loop: true,
    },
    SlidingLeft: {
      frameRate: 0,
      frameY:5,
      frameBuffer: 0,
      loop: true,
    },
  }
})

function animate() {
  window.requestAnimationFrame(animate)
  background.draw()
  collisionBlocks.forEach(collisionBlock => {
    collisionBlock.draw()
  })
  clearance.forEach(clearance => {
    clearance.draw()
  })
  thorn.forEach(thorn => {
    thorn.draw()
  })
  thornL.forEach(thornL => {
	  thornL.draw()
  })
  thornD.forEach(thornD => {
  	  thornD.draw()
  })
  thornR.forEach(thornR => {
  	  thornR.draw()
  })
  
  if (player.velocity.y >= player.maxGravity) {
    player.velocity.y = player.maxGravity
  }
  if (!player.onGround && player.lastDirection === 'right') {
    player.switchSprite('JumpingRight')
  }
  else if (player.velocity.x > 0) {
    player.switchSprite('RunRight')
    player.lastDirection = 'right'
  }
  else if (player.velocity.x < 0) {
    player.switchSprite('RunLeft')
    player.lastDirection = 'left'
  }
  else {
    if (player.lastDirection === 'left') player.switchSprite('StandingLeft')
    else player.switchSprite('StandingRight')
  }
  
  
  
  if (!inputLock) {
    if (keys.d.pressed) {
      player.velocity.x = 3.6
    }
    else if (keys.a.pressed) {
      player.lastDirection = 'left'
      player.velocity.x = -3.6
    } else {
      player.velocity.x = 0
    }
  }
  
  sliding()
  edge()
  player.draw()
  player.update()
}
levels[level].init()
animate()

function edge() {
	if (player.position.y >= canvas.height) levels[level].init()
	else if (player.position.x <= canvas.width - canvas.width) player.position.x = canvas.width - canvas.width
	else if (player.position.x + player.width >= canvas.width) player.position.x = canvas.width - player.width
}

function sliding() {
  if (player.slidingLeft) {
    player.switchSprite('SlidingLeft')
    player.maxGravity = 1
    }
    else if (player.slidingRight) {
      player.switchSprite('SlidingRight')
    player.maxGravity = 1
    }
    else {
    player.maxGravity = 3.5
    }
}