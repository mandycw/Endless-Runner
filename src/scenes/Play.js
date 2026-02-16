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
        
        this.physics.world.gravity.y = 200 
        const map = this.add.tilemap('tilemapJson')
        const tileset = map.addTilesetImage('tilesheet', 'tilesetImg')
        const sky = map.createLayer('Sky', tileset, 0, 0)
        const weather = map.createLayer('Weather', tileset, 0, 0)
        const sun = map.createLayer('Sun', tileset, 0, 0)
 
        const playerSpawn = map.findObject('Spawnpoint', obj => obj.name === 'SpawnPoint')
        this.player = new Player(this, playerSpawn.x, playerSpawn.y, 'player', 0, 'right')
        this.player.body.setCollideWorldBounds(true)

        
        
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        
        this.keys = this.input.keyboard.createCursorKeys()
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

 
        this.input.keyboard.on('keydown-D', function() {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear() 
        }, this)

        document.getElementById('info').innerHTML = ' Arrows: move '
        this.spawnPlatform = this.physics.add.image(playerSpawn.x , playerSpawn.y + 32, 'platform')
        this.spawnPlatform.body.setAllowGravity(false)
        this.spawnPlatform.body.setImmovable(true)
        this.physics.add.collider(this.player, this.spawnPlatform)
        //this.addPlatform(Phaser.Math.Between(this.player.x + 100, this.player.x + 100), Phaser.Math.Between(this.player.y - 20, this.player.y + 20), Phaser.Math.Between(50, 200))
        //this.physics.add.collider(this.player, this.spawnPlatforms()) 
        this.spawnPlatforms()
        
    }
    

    update(){
        this.playerFSM.step() 
        //doesnt work
        if(Phaser.Input.Keyboard.JustDown(this.spaceKey)){
            this.spawnPlatform.destroy()
        }
        // this.cleanUpPlatforms()
        if(this.player.y > 300){ 
            this.scene.restart() 
        }


    }

    addPlatform(x, y, width){
        const platform = this.physics.add.image(x, y, 'platform')
        platform.body.setSize(platform.width, platform.height/2)
        platform.body.setAllowGravity(false)
        platform.body.setImmovable(true)
        this.physics.add.collider(this.player, platform)
        platform.body.setVelocityX(-50)
        
    }
    spawnPlatforms(){
        this.addPlatform(Phaser.Math.Between(this.player.x + 100, this.player.x + 100), Phaser.Math.Between(this.player.y - 20, this.player.y + 20), Phaser.Math.Between(50, 200))

        
    }
    cleanUpPlatforms(){
        if(this.platform.x < this.player.x - 10){
            this.platform.destroy()
        }
    }
    
}


    
 
 
