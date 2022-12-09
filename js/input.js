const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  k: {
    pressed: false,
  },
  j: {
    pressed: false,
  },
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'w':
        keys.w.pressed = true
        break
      case 'a':
        keys.a.pressed = true
        break
      case 's':
        keys.s.pressed = true
        break
      case 'd':
        keys.d.pressed = true
        break
      case 'k':
        if (player.slidingLeft && !keys.k.pressed && !player.onGround) {
          inputLock = true
          player.velocity.y = -7.5
          player.velocity.x = 5
          setTimeout(() => {
            inputLock = false
          }, 255);
          keys.k.pressed = true
        }
        else if (player.slidingRight && !keys.k.pressed && !player.onGround) {
          inputLock = true
          player.velocity.y = -7.5
          player.velocity.x = -5
          setTimeout(() => {
            inputLock = false
          }, 255);
          keys.k.pressed = true
        }
        if (!keys.k.pressed && player.onGround) {
          player.velocity.y = -8.5
          keys.k.pressed = true
        }
        break
      case 'j':
        if (!keys.j.pressed && keys.w.pressed && keys.a.pressed) {
          inputLock = true
          player.gravity = 0
          player.velocity.y = -5
          player.velocity.x = -7
          setTimeout(() => {
            inputLock = false
            player.gravity = 0.4
          }, 200);
          keys.j.pressed = true
        }
        else if (!keys.j.pressed && keys.w.pressed && keys.d.pressed) {
          inputLock = true
          player.gravity = 0
          player.velocity.y = -5
          player.velocity.x = 7
          setTimeout(() => {
            inputLock = false
            player.gravity = 0.4
          }, 200);
          keys.j.pressed = true
        }
        else if (!keys.j.pressed && keys.w.pressed) {
          inputLock = true
          player.gravity = 0
          player.velocity.y = -6
          setTimeout(() => {
            inputLock = false
            player.gravity = 0.4
          }, 200);
          keys.j.pressed = true
        }
        else if (!keys.j.pressed && player.lastDirection === 'right') {
          inputLock = true
          player.velocity.y = 0
          player.gravity = 0
          player.velocity.x = 10
          setTimeout(() => {
            inputLock = false
            player.gravity = 0.4
          }, 200);
          keys.j.pressed = true
        }
        else if (!keys.j.pressed && player.lastDirection === 'left') {
          inputLock = true
          player.velocity.y = 0
          player.gravity = 0
          player.velocity.x = -10
          setTimeout(() => {
            inputLock = false
            player.gravity = 0.4
          }, 200);
          keys.j.pressed = true
        }
        break
    }
  })
  window.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'w':
        keys.w.pressed = false
        break
      case 'a':
        keys.a.pressed = false
        break
      case 's':
        keys.s.pressed = false
        break
      case 'd':
        keys.d.pressed = false
        break
      case 'k':
        keys.k.pressed = false
        break
      case 'j':
        keys.j.pressed = false
        break
    }
  })