let current = 0
basic.forever(function () {
    current = pins.analogReadPin(AnalogReadWritePin.P0)
    basic.showNumber(current)
    basic.pause(500)
    basic.clearScreen()
    if (current > 30) {
        basic.showIcon(IconNames.Heart)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.No)
        music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.LoopingInBackground)
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        5000,
        0,
        255,
        0,
        500,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
        music.stopAllSounds()
    }
})
