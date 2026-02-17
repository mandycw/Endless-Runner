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
        
        this.menuTextGroup.add(title)
        this.menuTextGroup.add(directions)

        this.directionsText = this.add.text(160, 160, 
            'Press SPACE to jump\n\nPress ESC to return', 
            { fontSize: '20px', align: 'center', wordWrap: { width: 320 } }
        ).setOrigin(0.5);
        this.directionsText.setVisible(false)

        this.input.keyboard.on('keydown-ENTER', () => {
            this.scene.start('playScene')
        })

        this.input.keyboard.on('keydown-D', () => {
            this.menuTextGroup.setVisible(false)
            this.directionsText.setVisible(true)
        })

        this.input.keyboard.on('keydown-ESC', () => {
            this.menuTextGroup.setVisible(true)
            this.directionsText.setVisible(false)
        })

    
    }   

    update(){
        
    }

}