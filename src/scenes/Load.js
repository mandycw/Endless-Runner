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
        this.load.image('map', 'naturebackground.png')
    }

    create(){
        

        this.anims.create({
            key: 'walk-down',
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        })
        this.anims.create({
            key: 'walk-right',
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        })
        this.anims.create({
            key: 'walk-up',
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        })
        this.anims.create({
            key: 'walk-left',
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        })

        this.scene.start('playScene')
    }
}