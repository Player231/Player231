const collisionsLevel1 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,7,7,1,
    1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,
    1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,
    1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,
    1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
    1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,
    0,0,0,1,1,0,0,1,1,0,0,2,2,2,1,1,
    1,1,1,1,1,0,0,1,1,2,2,1,1,1,1,1,
    1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]
const collisionsLevel2 = [
    1,1,1,1,1,1,1,1,1,1,1,1,7,7,7,1,
    1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,
    1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,
    1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,
    1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,
    1,1,1,0,0,0,0,2,0,0,1,0,0,0,0,1,
    1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,
    1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,
    1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,
    1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,
    1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,
    1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,
    0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,
    0,0,0,1,0,0,0,1,2,2,2,0,0,0,0,0,
    0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
]
const collisionsLevel3 = [
    1,1,1,1,1,1,1,1,7,7,7,7,1,1,1,1,
    1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,
    1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,
    1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,
    1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
    0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,
    0,0,0,0,1,1,1,2,2,2,2,0,0,0,0,0,
    0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,2,2,2,2,0,0,0,1,1,
    0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,
    0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,
    1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,
    1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,
]
const collisionsLevel4 = [
    1,1,1,1,1,7,7,7,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,
    0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,
    0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,
    0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,
    0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,
    1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,
    1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
]
const collisionsLevel5 = [
    1,1,7,7,7,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,
    0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,1,
    0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,
    0,0,0,0,0,0,2,2,0,0,1,1,0,0,0,0,
    0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,
    0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,
    0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,
    0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,
    1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,
    0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,
    0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,
    0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,

    
]
const collisionsLevel6 = [
    1,1,1,1,1,1,1,1,1,1,1,1,7,7,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,
    1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,
    0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,
    0,0,4,4,4,0,0,0,0,0,0,0,0,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,
    1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,
    1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,

    
]
const collisionsLevel7 = [
    1,7,7,7,7,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    1,2,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,
    0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,

    
]

const collisionsLevel8 = [
    1,1,1,7,7,7,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,
    1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,
    2,2,1,2,2,2,1,1,1,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,2,2,2,1,1,2,2,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,

    
]

const collisionsLevel9 = [
    1,1,1,7,7,7,7,1,1,1,1,1,1,1,1,1,
    1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,
    1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,
    1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,
    1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,
    1,1,1,1,2,2,0,0,0,0,0,0,2,1,0,0,
    0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,
    0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,

    
]

const collisionsLevel10 = [
    1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,1,
    1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,
    1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,
    1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,
    1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,
    1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,
    1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,
    1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,
    1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,
    0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,
    0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,
    0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,
    0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,

    
]

const collisionsLevel11 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,7,7,7,
    1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,0,0,0,0,2,2,0,0,0,0,0,0,0,0,
    1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,
    1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,
    1,1,0,0,0,0,1,1,2,2,2,2,2,1,1,1,
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,3,1,5,0,0,0,0,0,
    0,0,0,0,0,2,0,0,0,4,0,0,1,0,0,0,
    0,0,0,0,3,1,5,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1,
    1,1,5,0,0,0,0,0,3,1,0,0,0,0,0,1,
    1,1,5,0,0,0,0,0,3,1,0,0,0,1,1,1,

    
]

const collisionsLevel12 = [
    1,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,
    1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,
    1,0,0,0,1,0,1,2,2,2,1,1,1,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
    1,1,1,1,1,4,4,4,4,4,1,1,1,0,0,0,
    1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,
    1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,
    1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,
    1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,
    1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,
    4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,

    
]
const collisionsLevel13 = [
    1,1,1,1,1,7,7,7,1,1,1,1,1,1,1,1,
    1,1,1,0,0,0,0,0,3,1,1,1,1,1,1,1,
    1,1,1,0,0,0,0,0,3,1,1,5,0,0,0,0,
    1,1,1,0,0,0,0,0,3,1,1,5,0,0,0,0,
    1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,2,2,2,1,1,1,2,2,2,2,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    1,1,0,0,0,3,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,3,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,3,1,1,1,1,1,0,0,0,1,0,
    0,0,0,0,0,0,4,4,4,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,

    
]

const collisionsLevel14 = [
    7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
    0,0,0,2,2,2,2,0,0,0,0,4,4,4,4,4,
    0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,
    0,0,0,0,0,1,1,1,4,4,4,4,0,0,0,0,
    0,0,0,0,0,0,3,1,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,3,1,0,0,0,0,0,1,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
    1,1,1,1,1,5,0,0,0,0,0,0,0,1,0,0,
    1,1,1,1,1,5,0,0,0,1,0,0,0,1,0,0,

    
]
const collisionsLevel15 = [
    0,0,0,0,0,0,0,0,3,1,7,7,1,1,1,1,
    0,0,0,0,0,0,0,2,2,1,0,0,0,0,0,1,
    0,0,0,0,0,0,3,1,1,1,0,0,0,0,0,1,
    0,0,0,0,0,0,0,0,3,1,1,1,0,0,0,4,
    2,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,
    1,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,
    1,0,0,0,2,0,0,0,0,0,0,2,0,0,0,1,
    4,0,0,0,1,2,0,0,0,0,3,1,0,0,0,4,
    2,0,0,0,1,1,0,0,0,0,3,1,0,0,0,2,
    1,0,0,0,4,1,0,0,0,0,0,4,0,0,0,1,
    1,0,0,0,2,1,0,0,0,0,0,2,0,0,0,1,
    4,0,0,0,1,1,0,0,0,0,0,1,0,0,0,4,
    0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,2,
    0,0,0,0,4,1,0,0,0,0,0,0,0,0,0,1,
    0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,

    
]
const collisionsLevel16 = [
    7,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,
    0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,
    0,0,0,0,0,3,1,5,0,0,0,0,0,0,0,0,
    0,0,0,2,0,0,4,0,3,1,5,0,0,0,0,0,
    0,0,3,1,5,0,0,0,0,4,0,0,0,0,0,0,
    0,0,0,4,0,0,0,2,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,3,1,5,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,
    0,1,2,2,2,2,2,2,2,2,2,2,2,2,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,5,0,
    0,1,0,0,0,0,0,1,0,0,0,0,0,1,5,0,
    0,4,0,0,0,0,0,4,0,0,0,0,0,1,5,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,

    
]
const collisionsLevel17 = [
    1,1,1,1,1,1,1,1,1,1,7,7,7,1,1,1,
    0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,
    0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,
    0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,
    0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,

    
]
