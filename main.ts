function taikisunadokei2 () {
    led.enable(true)
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
        . # # # .
        . . # # .
        . . # . .
        . . . . .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
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
function finish_loop () {
    A = 2
    B = 2
    M = 2
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    Reset = 1
})
input.onButtonPressed(Button.A, function () {
    A = 1
    led.enable(false)
    while (A == 1 && (B == 0 && M == 0)) {
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
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
    finish_loop()
})
function taikisunadokei () {
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
function sethensu () {
    A = 0
    B = 0
    M = 0
    Reset = 0
}
serial.onDataReceived("serial", function () {
    while (Reset == 0) {
        serial.writeNumbers([input.soundLevel(), input.runningTime() / 1000, input.temperature()])
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    B = 1
    led.enable(false)
    while (A == 0 && (B == 1 && M == 0)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    }
    finish_loop()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    M = 1
    led.enable(false)
    while (A == 0 && (B == 0 && M == 1)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 1)
    }
})
let Reset = 0
let M = 0
let B = 0
let A = 0
sethensu()
led.enable(true)
serial.redirectToUSB()
radio.setGroup(1)
basic.showString("This is Traffic Light for micro:bit !!BETA!! ")
while (0 == 0) {
    taikisunadokei()
}
basic.forever(function () {
    if (Reset == 1) {
        finish_loop()
    }
})
basic.forever(function () {
    while (input.temperature() < 60 || input.temperature() > -30) {
        Reset = 1
    }
})
