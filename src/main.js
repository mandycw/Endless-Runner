'use strict'

const config = {
    parent: 'phaser-game',  // for info text
    type: Phaser.WEBGL,     // for tinting
    width: 320,
    height: 320,
    pixelArt: true,
    zoom: 2,
    //scale: Phaser.Scale.ENVELOP , 
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Load, Menu, Play, GameOver ] 
}

let keyLEFT, keyRIGHT

const game = new Phaser.Game(config)

let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3