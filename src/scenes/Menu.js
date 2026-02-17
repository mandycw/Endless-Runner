class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }

    preload(){
        
    }

    create(){
       
        
        this.menuTextGroup = this.add.group()
        
        const title = this.add.text(160, 160, 'Press ENTER to Start', { fontSize: '20px' }).setOrigin(0.5)
        const directions = this.add.text(160, 180, 'Press D for Directions', { fontSize: '16px' }).setOrigin(0.5)
        const credits = this.add.text(160, 200, 'Press C for Credits', { fontSize: '16px' }).setOrigin(0.5)
        
        this.menuTextGroup.add(title)
        this.menuTextGroup.add(directions)
        this.menuTextGroup.add(credits)

        this.directionsText = this.add.text(160, 160, 
            'Press SPACE to jump\n\nPress ESC to return', 
            { fontSize: '16px', align: 'center', wordWrap: { width: 320 } }
        ).setOrigin(0.5);
        this.directionsText.setVisible(false)

        this.creditsText = this.add.text(160, 160, 
            'Credits: \nPress ESC to return', 
            { fontSize: '16px', align: 'center', wordWrap: { width: 320 } }
        ).setOrigin(0.5);
        this.creditsText.setVisible(false)

        this.input.keyboard.on('keydown-ENTER', () => {
            this.sound.play('menuStart')
            this.scene.start('playScene')

        })

        this.input.keyboard.on('keydown-D', () => {
            this.sound.play('select')
            this.menuTextGroup.setVisible(false)
            this.directionsText.setVisible(true)
            this.creditsText.setVisible(false)
        })

        this.input.keyboard.on('keydown-ESC', () => {
            this.sound.play('exit')
            this.menuTextGroup.setVisible(true)
            this.directionsText.setVisible(false)
            this.creditsText.setVisible(false)
        })

        this.input.keyboard.on('keydown-C', () => {
            this.sound.play('select')
            this.menuTextGroup.setVisible(false)
            this.directionsText.setVisible(false)
            this.creditsText.setVisible(true)
        })
    
    }   

    update(){
        
    }

}