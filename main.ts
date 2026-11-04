let enemy_1: Sprite = null
let player_image = sprites.create(assets.image`Player`, SpriteKind.Player)
let speed = 80
let jump_speed = -130
let gravity = 300
info.setLife(3)
controller.moveSprite(player_image, speed, 0)
player_image.ay += gravity
scene.cameraFollowSprite(player_image)
tiles.setCurrentTilemap(tilemap`Test Level`)
for (let value of tiles.getTilesByType(assets.tile`Enemy Spawn 1`)) {
    enemy_1 = sprites.create(assets.image`Enemy 1`, SpriteKind.Enemy)
    tiles.placeOnTile(enemy_1, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
forever(function () {
    if (controller.A.isPressed() && player_image.isHittingTile(CollisionDirection.Bottom)) {
        player_image.vy = jump_speed
    }
})
