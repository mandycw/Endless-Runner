class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame, direction){
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setSize(this.width, this.height)
        this.body.setCollideWorldBounds(true)

        // set custom player properties
        this.direction = direction 
        this.playerVelocity = 150    // in pixels
        this.dashCooldown = 300    // in ms
        this.hurtTimer = 250  

        scene.playerFSM = new StateMachine('idle', {
            idle: new IdleState(),
            move: new MoveState(),
        }, [scene, this])
    }
    
}

class IdleState extends State {
    enter(scene, player) {
        player.setVelocity(0)
        player.anims.play(`walk-${player.direction}`)
        player.anims.stop()
    }

    execute(scene, player){
        const { left, right, up, down } = scene.keys

        if(left.isDown || right.isDown || up.isDown || down.isDown ) {
            this.stateMachine.transition('move')
            return
        }
    }
    
}

class MoveState extends State {


    execute(scene, player){
        const { left, right, up, down } = scene.keys

        if(!(left.isDown || right.isDown || up.isDown || down.isDown) ) {
            this.stateMachine.transition('idle')
            return
        }
        let moveDirection = new Phaser.Math.Vector2(0, 0)
        if(up.isDown) {
            moveDirection.y = -1
            player.direction = 'up'
        } else if(down.isDown) {
            moveDirection.y = 1
            player.direction = 'down'
        }
        if(left.isDown) {
            moveDirection.x = -1
            player.direction = 'left'
        } else if(right.isDown) {
            moveDirection.x = 1
            player.direction = 'right'
        }
        // normalize movement vector, update player position, and play proper animation
        moveDirection.normalize()
        player.setVelocity(player.playerVelocity * moveDirection.x, player.playerVelocity * moveDirection.y)
        player.anims.play(`walk-${player.direction}`, true)
    }
    
}
