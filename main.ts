input.onButtonPressed(Button.A, function () {
    if (isplaying == 0) {
        isplaying = 1
    } else {
        isplaying = 0
    }
})
let isplaying = 0
isplaying = 0
basic.forever(function () {
    if (isplaying == 0) {
        music.playTone(Math.map(pins.analogReadPin(AnalogPin.P2), 30, 900, 48, 60), music.beat(BeatFraction.Whole))
    }
})
