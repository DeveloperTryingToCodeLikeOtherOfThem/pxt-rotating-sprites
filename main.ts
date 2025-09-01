//% block="rotate sprite"
namespace rotateSprite {
    /**
     * Rotates a sprite continuously on the screen.
     * @param sprite the sprite to rotate
     * @param speed rotation speed in degrees per frame
     */
    //% block="rotate %sprite=variables_get(mySprite) by $speed degrees per frame"
    //% speed.min=1 speed.max=10
    export function rotate(sprite: Sprite, speed: number = 1) {
       sprite.setFlag(SpriteFlag.Invisible, true)
        let angle = 0
        let w = sprite.image.width
        let h = sprite.image.height
        let cx = w / 2
        let cy = h / 2

        // run inside the function only
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
