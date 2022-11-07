function drawGrid () {
    gridSprites = []
    for (let row of grid) {
        currentX = 0
        for (let gridSpace of row) {
            if (gridSpace == 1) {
                let currentY = 0
                gridSprite = sprites.create(img`
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    `, SpriteKind.Player)
                gridSprite.setPosition(currentX, currentY)
                gridSprites.push(gridSprite)
            }
            currentX += 10
        }
        currentX += 10
    }
}
let gridSprite: Sprite = null
let currentX = 0
let gridSprites: Sprite[] = []
let grid: number[][] = []
let list = [
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
let rowTemplate: number[] = []
for (let index = 0; index < 12; index++) {
    grid.push(rowTemplate)
}
