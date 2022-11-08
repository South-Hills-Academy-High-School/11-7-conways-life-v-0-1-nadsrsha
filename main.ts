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
let rowTemplate: number[] = []
for (let row = 0; row <= 11; row++) {
    grid.push([])
    for (let collumn = 0; collumn <= 15; collumn++) {
        grid[row].push(1)
    }
}
drawGrid()
