class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload(){
        this.load.path = "./assets/"
        this.load.spritesheet('player', 'player.png', {
            frameWidth: 64,
            frameHeight: 64,
        })
    }

    create(){
        

        this.anims.create({
            key: 'walk-down',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { start: 1, end: 1 }),
        })
        this.anims.create({
            key: 'walk-right',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { start: 1, end: 1 }),
        })
        this.anims.create({
            key: 'walk-up',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { start: 1, end: 1 }),
        })
        this.anims.create({
            key: 'walk-left',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { start: 1, end: 1 }),
        })

        this.scene.start('playScene')
    }
}