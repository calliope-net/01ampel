input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.pause(2000)
    FAmpel(0, 1)
    basic.pause(7000)
    FAmpel(1, 0)
})
function FAmpel (Red: number, Green: number) {
    pins.digitalWritePin(DigitalPin.P1, Red)
    pins.digitalWritePin(DigitalPin.P2, Green)
    if (Red == 1) {
        basic.setLedColor(0xff0000)
    } else if (Green == 1) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.turnRgbLedOff()
    }
}
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    basic.pause(2000)
    FAmpel(0, 1)
    basic.pause(7000)
    FAmpel(1, 0)
})
FAmpel(1, 1)
basic.showLeds(`
    . . . . .
    . # . . .
    . . . . .
    . # . . .
    . . . . .
    `)
