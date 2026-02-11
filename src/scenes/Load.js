class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload(){
        this.load.path = "./assets/"
        this.load.spritesheet('player', 'gamespritesheet.png', {
            frameWidth: 32,
            frameHeight: 32,
        })
    }

    create(){
        

        this.anims.create({
            key: 'walk-down',
            frameRate: 6,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        })
        this.anims.create({
            key: 'walk-right',
            frameRate: 6,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        })
        this.anims.create({
            key: 'walk-up',
            frameRate: 6,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        })
        this.anims.create({
            key: 'walk-left',
            frameRate: 6,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        })

        this.scene.start('playScene')
    }
}