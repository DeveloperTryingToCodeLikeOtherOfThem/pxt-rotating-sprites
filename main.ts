//% block="rotate sprite"
namespace rotateSprite {
    /**
* Rotates a sprite continuously on the screen.
* @param sprite the sprite to rotate
* @param speed rotation speed in degrees per frame, eg: 1
*/
    //% block="rotate $sprite by $speed degrees per frame"
    //% sprite.shadow=variables_get(mySprite)
    //% speed.min=1 speed.max=50
    //% help="docs/rotate"
    export function rotate(sprite: Sprite, speed: number = 1) {
        let angle = 0
        let w = sprite.image.width
        let h = sprite.image.height
        let cx = w / 2
        let cy = h / 2

        scene.createRenderable(1, (target: Image, camera: scene.Camera) => {
            let drawX = Math.floor(sprite.x - cx - camera.drawOffsetX)
            let drawY = Math.floor(sprite.y - cy - camera.drawOffsetY)

            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                    let dx = x - cx
                    let dy = y - cy
                    let sx = Math.floor(Math.cos(angle) * dx + Math.sin(angle) * dy + cx)
                    let sy = Math.floor(-Math.sin(angle) * dx + Math.cos(angle) * dy + cy)
                    if (sx >= 0 && sx < w && sy >= 0 && sy < h) {
                        let color = sprite.image.getPixel(sx, sy)
                        target.setPixel(drawX + x, drawY + y, color)
                    }
                }
            }

            angle += speed * (Math.PI / 180)
        })
    }

}



// let player = sprites.create(img`
//     . . . . c c c b b b b b . . . .
//     . . c c b 4 4 4 4 4 4 b b b . .
//     . c c 4 4 4 4 4 5 4 4 4 4 b c .
//     . e 4 4 4 4 4 4 4 4 4 5 4 4 e .
//     e b 4 5 4 4 5 4 4 4 4 4 4 4 b c
//     e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e
//     e b b 4 4 4 4 4 4 4 4 4 4 4 b e
//     . e b 4 4 4 4 4 5 4 4 4 4 b e .
//     8 7 e e b 4 4 4 4 4 4 b e e 6 8
//     8 7 2 e e e e e e e e e e 2 7 8
//     e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e
//     e c 6 7 6 6 7 7 7 6 6 7 6 c c e
//     e b e 8 8 c c 8 8 c c c 8 e b e
//     e e b e c c e e e e e c e b e e
//     . e e b b 4 4 4 4 4 4 4 4 e e .
//     . . . c c c c c e e e e e . . .
// `, SpriteKind.Player)
// rotateSprite.rotate(player, 4)
// controller.moveSprite(player)
// player.setFlag(SpriteFlag.Invisible, true)
// scene.cameraFollowSprite(player)

// function checkingErrors () {
//    return new oops.OOPs()
// }


//% block="background arcade scroll "
namespace scroller { }
