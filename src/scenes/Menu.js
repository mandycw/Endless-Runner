class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }

    preload(){
        
    }

    create(){
        
        this.cameras.main.setBackgroundColor("#88a7d4")
        
        this.menuTextGroup = this.add.group()
        
        const title = this.add.text(160, 120, 'Here Comes the Sun \n Press ENTER to Start', { fontSize: '24px', wordWrap: { width: 320 }, color: '#000000', fontFamily: 'Comic Sans MS', }, ).setOrigin(0.5)
        const directions = this.add.text(160, 180, 'Press D for Directions', { fontSize: '18px', color: '#000000', fontFamily: 'Comic Sans MS' }).setOrigin(0.5)
        const credits = this.add.text(160, 200, 'Press C for Credits', { fontSize: '18px', color: '#000000', fontFamily: 'Comic Sans MS' }).setOrigin(0.5)
        
        this.menuTextGroup.add(title)
        this.menuTextGroup.add(directions)
        this.menuTextGroup.add(credits)

        this.directionsText = this.add.text(160, 160, 
            'Press SPACE to jump\n\nPress ESC to return', 
            { fontSize: '16px', align: 'center', wordWrap: { width: 320 }, color: '#000000', fontFamily: 'Comic Sans MS' }
        ).setOrigin(0.5);
        this.directionsText.setVisible(false)

        this.creditsText = this.add.text(160, 130, 
            'Credits: \n Background music: https://freesound.org/people/ Mrthenoronha/sounds/520937/ Menu Select: https://freesound.org/people/ SamsterBirdies/sounds/377338/ Game Over: https://freesound.org/people/ connersaw8/sounds/125683/ Menu Exit: https://freesound.org/people/ SomeGuy22/sounds/431326/ Game Start: https://freesound.org/people/ Breviceps/sounds/450613/ \n Press ESC to return', 
            { fontSize: '12px', align: 'center', wordWrap: { width: 200, useAdvancedWeap: true,  }, color: '#000000', fontFamily: 'Comic Sans MS' }
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