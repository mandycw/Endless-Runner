class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }

    create(){
        this.player = new Player(this, 200, 150, 'player', 0, 'down')

        // this.cameras.main.setBounds(0, 0, this.map.width, this.map.height)
        // this.cameras.main.startFollow(this.player, true, 0.5, 0.5)
        // this.physics.world.setBounds(0, 0, this.map.width, this.map.height)

        this.keys = this.input.keyboard.createCursorKeys()

        this.input.keyboard.on('keydown-D', function() {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear()
        }, this)

        document.getElementById('info').innerHTML = '<strong>CharacterFSM.js:</strong> Arrows: move | SPACE: attack | SHIFT: dash attack | F: spin attack | H: hurt (knockback) | D: debug (toggle)'

    }

    update(){
        this.playerFSM.step()
    }


}