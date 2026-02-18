//Name: Mandy Cai
//Title: Here Comes the Sun
//Time: ~28 hours
//Creative Tilt: changing tilemap after certain score and getting platforms to randomly spawn at the correct position with faster speed after certain times
//               

'use strict'

const config = {
    parent: 'phaser-game',  // for info text
    type: Phaser.WEBGL,     // for tinting
    width: 320,
    height: 320,
    pixelArt: true,
    zoom: 2,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Load, Menu, Play, GameOver ] 
}

const game = new Phaser.Game(config)
