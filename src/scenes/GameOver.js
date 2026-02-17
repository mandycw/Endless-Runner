class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    create() {
        this.add.text(160, 160, 'GAME OVER', { fontSize: '32px', fill: '#ff0000' }).setOrigin(0.5)
        this.add.text(160, 190, 'Press R to Restart', { fontSize: '16px' }).setOrigin(0.5)
        this.add.text(160, 205, 'Press M for Menu', { fontSize: '16px' }).setOrigin(0.5)

        this.input.keyboard.on('keydown-R', () => {
            this.scene.start('playScene')
        })

        this.input.keyboard.on('keydown-M', () => {
            this.scene.start('menuScene')
        })
    }
}