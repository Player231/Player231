let levels = {
    1: {
      init: () => {
        parsedCollisions = collisionsLevel1.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 50
        player.position.y = 350
        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level1.png',
        })
      }
    },
    2: {
      init: () => {
        parsedCollisions = collisionsLevel2.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 30
        player.position.y = 450
        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level2.png',
        })
      }
    },
    3: {
      init: () => {
        parsedCollisions = collisionsLevel3.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 30
        player.position.y = 450
        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level3.png',
        })
      }
    },
    
    4: {
      init: () => {
        parsedCollisions = collisionsLevel4.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 30
        player.position.y = 450
        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level4.png',
        })
      }
    },
    5: {
      init: () => {
        parsedCollisions = collisionsLevel5.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 30
        player.position.y = 350

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level5.png',
        })
      }
    },
    6: {
      init: () => {
        parsedCollisions = collisionsLevel6.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 30
        player.position.y = 350

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level6.png',
        })
      }
    },
    7: {
      init: () => {
        parsedCollisions = collisionsLevel7.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 30
        player.position.y = 350

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level7.png',
        })
      }
    },
    8: {
      init: () => {
        parsedCollisions = collisionsLevel8.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 70
        player.position.y = 350

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level8.png',
        })
      }
    },
    9: {
      init: () => {
        parsedCollisions = collisionsLevel9.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 30
        player.position.y = 350

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level9.png',
        })
      }
    },
    10: {
      init: () => {
        parsedCollisions = collisionsLevel10.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 40
        player.position.y = 300

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level10.png',
        })
      }
    },
    11: {
      init: () => {
        parsedCollisions = collisionsLevel11.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 30
        player.position.y = 350

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level11.png',
        })
      }
    },
    12: {
      init: () => {
        parsedCollisions = collisionsLevel12.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 0
        player.position.y = 450

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level12.png',
        })
      }
    },
    13: {
      init: () => {
        parsedCollisions = collisionsLevel13.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 250
        player.position.y = 400

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level13.png',
        })
      }
    },
    14: {
      init: () => {
        parsedCollisions = collisionsLevel14.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 30
        player.position.y = 350

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level14.png',
        })
      }
    },
    15: {
      init: () => {
        parsedCollisions = collisionsLevel15.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 0
        player.position.y = 450

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level15.png',
        })
      }
    },
    16: {
      init: () => {
        parsedCollisions = collisionsLevel16.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 30
        player.position.y = 200

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level16.png',
        })
      }
    },
    17: {
      init: () => {
        parsedCollisions = collisionsLevel17.parse2D()
        collisionBlocks = parsedCollisions.createObjectsFrom2D(CollisionBlock, 1)
        clearance = parsedCollisions.createObjectsFrom2D(Clearance, 7)
        thorn = parsedCollisions.createObjectsFrom2D(Thorn, 2)
        thornL = parsedCollisions.createObjectsFrom2D(ThornL, 3)
        thornD = parsedCollisions.createObjectsFrom2D(ThornD, 4)
        thornR = parsedCollisions.createObjectsFrom2D(ThornR, 5)
        player.collisionBlocks = collisionBlocks
        player.clearance = clearance
        player.thorn = thorn
        player.thornL = thornL
        player.thornD = thornD
        player.thornR = thornR
        player.position.x = 30
        player.position.y = 350

        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './images/Level17.png',
        })
      }
    },
  }