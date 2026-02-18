class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload(){
        this.load.path = "./assets/"
        this.load.spritesheet('player', 'playerspritesheet.png', {
            frameWidth: 32,
            frameHeight: 32,
        })
        
        
        this.load.image('tilesetImg', 'tilesheet.png')
        this.load.tilemapTiledJSON('tilemapJson', 'tilemap.json')
        this.load.tilemapTiledJSON('nightmapJson', 'night.json')
        this.load.image('platform', 'platform.png')
        this.load.audio('menuStart', 'start.wav')
        this.load.audio('select', 'select.wav')
        this.load.audio('exit', 'lowblip.wav')
        this.load.audio('gameover', 'gameover.wav')
        this.load.audio('bgmusic', 'bgmusic.wav')
    }

    create(){
        this.anims.create({
            key:'idle',
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {start: 0, end:3})
        })

        this.anims.create({
            key: 'jump',
            frameRate: 4,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('player', {frames: [5, 4, 4, 5, 5]})

        })

        this.registry.set('highScore', 0)
        
        this.scene.start('menuScene')
    }
}