class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }
    
    preload(){
        this.load.spritesheet('player', 'playerspritesheet.png', {
            frameWidth: 32,
            frameHeight: 32,
        })
       this.load.image('platform', 'platform.png')
    }
    

    create(){
        this.sound.play('bgmusic', {
        loop: true,
     })
        this.physics.world.gravity.y = 250 
        const map = this.add.tilemap('tilemapJson')
        const tileset = map.addTilesetImage('tilesheet', 'tilesetImg')
        const sky = map.createLayer('Sky', tileset, 0, 0)
        const weather = map.createLayer('Weather', tileset, 0, 0)
        const sun = map.createLayer('Sun', tileset, 0, 0)
 
        const playerSpawn = map.findObject('Spawnpoint', obj => obj.name === 'SpawnPoint')
        this.player = new Player(this, playerSpawn.x, playerSpawn.y, 'player', 0, 'right')
        this.player.body.setCollideWorldBounds(false)

        
        
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        
        this.keys = this.input.keyboard.createCursorKeys()
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

 
        this.input.keyboard.on('keydown-D', function() {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear() 
        }, this)

        this.spawnPlatform = this.physics.add.image(playerSpawn.x , playerSpawn.y + 32, 'platform')
        this.spawnPlatform.body.setAllowGravity(false)
        this.spawnPlatform.body.setImmovable(true)
        this.physics.add.collider(this.player, this.spawnPlatform)

        this.platforms = this.physics.add.group({
            allowGravity: false,
            immovable: true
        })
        this.physics.add.collider(this.player, this.platforms)

        this.time.addEvent({
            delay: 1500,
            callback: this.spawnPlatforms.bind(this),
            loop: true,
            repeat: -1, 
        })
        

        this.platformSpeed = -50
        this.addSpeed = -10

        this.difficultyTimer = this.time.addEvent({
            delay: 15000,
            callback: () => {
                this.platformSpeed += this.addSpeed

            },
            loop: true,
        })
        
        this.gameOver = false

        this.score = 0
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '14px', fill: '#000000'})
        
    }

    update(){
        
        this.playerFSM.step() 
        if (!this.gameOver) {
        this.score += 1;
        this.scoreText.setText('Score: ' + Math.floor(this.score / 10));
    }
        if(this.player.body.velocity.y < 0){
            this.spawnPlatform.destroy()
        }
        this.cleanUpPlatforms()
        if(this.player.y > 600){ 
            this.sound.stopAll()
            this.sound.play('gameover')
            this.gameOver = true
            let currentHigh = this.registry.get('highScore');
            let finalScore = Math.floor(this.score / 10);
        
            if (finalScore > currentHigh) {
                this.registry.set('highScore', finalScore);
            }

            this.scene.start('gameOverScene', { score: finalScore })
        }
    }

   
    addPlatform(x, y){
        const platform = this.platforms.create(x, y, 'platform')
    
        platform.body.setSize(platform.width/2, platform.height / 2)
        platform.body.setVelocityX(this.platformSpeed)

        platform.body.checkCollision.left = false
        platform.body.checkCollision.right = false
        platform.body.checkCollision.down = false
        
    }
    spawnPlatforms(){
        this.addPlatform(this.cameras.main.width + 100, Phaser.Math.Between(this.cameras.main.height - 32, this.cameras.main.height - 90))

        
    }
    cleanUpPlatforms(){
        this.platforms.getChildren().forEach(platform => {
            if(platform.x < this.cameras.main.scrollX - platform.width){
                platform.destroy()
            }
        })
    }
    
}


    
 
 
