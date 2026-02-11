class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }

    create(){

        this.map = this.add.image(0, 0, 'map').setOrigin(0)
        this.player = new Player(this, 200, 150, 'player', 0, 'down')

        this.cameras.main.setBounds(0, 0, this.map.width, this.map.height)
        this.cameras.main.startFollow(this.player, true, 0.5, 0.5)
        this.physics.world.setBounds(0, 0, this.map.width, this.map.height)

        this.keys = this.input.keyboard.createCursorKeys()

        this.input.keyboard.on('keydown-D', function() {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear()
        }, this)

        document.getElementById('info').innerHTML = ' Arrows: move '

    }

    update(){
        this.playerFSM.step()
    }


}