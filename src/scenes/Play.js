class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }
    preload(){
        this.load.spritesheet('player', 'playerspritesheet.png', {
            frameWidth: 32,
            frameHeight: 32,
        })
    }

    create(){

        this.physics.world.gravity.y = 90
        const map = this.add.tilemap('tilemapJson')
        const tileset = map.addTilesetImage('tilesheet', 'tilesetImg')
        const sky = map.createLayer('Sky', tileset, 0, 0)
        const weather = map.createLayer('Weather', tileset, 0, 0)
        const sun = map.createLayer('Sun', tileset, 0, 0)
        const terrain = map.createLayer('Terrain', tileset, 0, 0)
        const flowers = map.createLayer('Flowers', tileset, 0, 0) 

        const playerSpawn = map.findObject('Spawnpoint', obj => obj.name === 'SpawnPoint')
        this.player = new Player(this, playerSpawn.x, playerSpawn.y, 'player', 0, 'right')
        this.player.body.setCollideWorldBounds(true)

        terrain.setCollisionByProperty({collides: true})
        this.physics.add.collider(this.player, terrain)
        
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        //this.cameras.main.startFollow(this.slime, true, 0.25, 0.25)
        this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        
        this.keys = this.input.keyboard.createCursorKeys()

        this.input.keyboard.on('keydown-D', function() {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear()
        }, this)

        document.getElementById('info').innerHTML = ' Arrows: move '

        this.platforms = this.add.group({
            removeCallback: function(platform){
                player.scene.platformPool.add(platform)
            }
        })

        this.platformPool = this.add.group({
            removeCallback: function(platform){
                platform.scene.platformGroup.add(platform)
            }
        })
    }

    update(){
        this.playerFSM.step()

    }



}