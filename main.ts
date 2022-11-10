let compass = 0
input.onButtonPressed(Button.A, function () {
    compass = input.compassHeading()
    if (compass < 45) {
        basic.showString("N")
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (compass >= 90 && compass < 135) {
        basic.showString("E")
        music.playMelody("E B C5 A B G A F ", 120)
    } else if (compass >= 180 && compass < 225) {
        basic.showString("S")
        music.playMelody("C5 A B G A F G E ", 120)
    } else {
        basic.showString("W")
        music.playMelody("B A G A G F A C5 ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    compass = input.compassHeading()
    if (compass < 45) {
        basic.showString("N")
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (compass >= 45 && compass < 90) {
        basic.showString("NE")
        music.playMelody("C D E F G A B C5 ", 120)
    } else if (compass >= 90 && compass < 135) {
        basic.showString("E")
        music.playMelody("E B C5 A B G A F ", 120)
    } else if (compass >= 135 && compass < 180) {
        basic.showString("SE")
        music.playMelody("A F E F D G E F ", 120)
    } else if (compass >= 180 && compass < 225) {
        basic.showString("S")
        music.playMelody("C5 A B G A F G E ", 120)
    } else if (compass >= 225 && compass < 270) {
        basic.showString("SW")
        music.playMelody("G B A G C5 B A B ", 120)
    } else if (compass >= 270 && compass < 315) {
        basic.showString("W")
        music.playMelody("B A G A G F A C5 ", 120)
    } else if (compass >= 315 == compass < 360) {
        basic.showString("NW")
        music.playMelody("G F G A - F E D ", 120)
    } else {
        basic.showString("N")
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
basic.forever(function () {
	
})
