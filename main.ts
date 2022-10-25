basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    }
    while (!(input.buttonIsPressed(Button.A))) {
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.A))) {
        basic.pause(1000)
        music.setVolume(100000)
        music.playTone(988, music.beat(BeatFraction.Half))
    } else {
        music.stopAllSounds()
    }
})
