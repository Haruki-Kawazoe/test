input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    control.reset()
})
input.onButtonPressed(Button.A, function () {
    led.enable(false)
    while (0 == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(25000)
        for (let index = 0; index < 8; index++) {
            pins.digitalWritePin(DigitalPin.P3, 1)
            basic.pause(250)
            pins.digitalWritePin(DigitalPin.P3, 0)
            basic.pause(250)
        }
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(30000)
        pins.digitalWritePin(DigitalPin.P4, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    led.enable(false)
    while (0 == 0) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led.enable(false)
    while (0 == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 1)
    }
})
led.enable(true)
basic.showString("This is Traffic Light for micro:bit !!BETA!! ")
while (0 == 0) {
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # #
        . # # # .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . . . .
        . # # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . . .
        . # # # .
        . . # . .
        . . . . .
        . # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # . .
        . . . . .
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # # .
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.pause(500)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
    basic.pause(500)
}
