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
        

        scene.playerFSM = new StateMachine('idle', {
            idle: new IdleState(),
            jump: new JumpState(),
        }, [scene, this])
    }
    
}

class IdleState extends State {
    enter(scene, player) {
        player.anims.play('idle')
        player.isGrounded = true
    }
    execute(scene, player){
        const{space} = scene.keys
        
        if(Phaser.Input.Keyboard.JustDown(space) && player.body.blocked.down && player.isGrounded){
            this.stateMachine.transition('jump')
            return
        }
        
    }
}



class JumpState extends State {
    enter(scene, player){
        player.anims.play('jump')
        player.setVelocityY(-player.playerVelocity / 2)
        player.isGround = false
       
    }
    execute(scene, player){
        if(player.body.blocked.down){
            this.stateMachine.transition('idle')
        }
    }
    
}
