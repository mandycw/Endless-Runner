class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }
    init(data) {
        this.finalScore = data.score || 0;
    }

    create() {
        this.add.text(160, 160, 'GAME OVER', { fontSize: '32px', fill: '#ff0000' }).setOrigin(0.5)
        this.add.text(160, 190, 'Press R to Restart', { fontSize: '16px' }).setOrigin(0.5)
        this.add.text(160, 205, 'Press M for Menu', { fontSize: '16px' }).setOrigin(0.5)

        this.input.keyboard.on('keydown-R', () => {
            this.sound.play('menuStart')
            this.scene.start('playScene')
        })

        this.input.keyboard.on('keydown-M', () => {
            this.sound.play('select')
            this.scene.start('menuScene')
        })

        const highScore = this.registry.get('highScore')
        this.add.text(160, 220, `Your Score: ${this.finalScore}`, { fontSize: '16px' }).setOrigin(0.5)
        this.add.text(160, 235, `High Score: ${highScore}`, { fontSize: '16px', fill: '#ffff00' }).setOrigin(0.5)
    }
}