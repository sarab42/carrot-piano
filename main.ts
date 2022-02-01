basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(494, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Heart)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Duck)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Umbrella)
    } else {
    	
    }
})
