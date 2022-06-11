def taikisunadokei2():
    led.enable(True)
    basic.show_leds("""
        # # # # #
                . # # # .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.pause(500)
    basic.show_leds("""
        . # # # #
                . # # # .
                . . # . .
                . . . . .
                . . # . .
    """)
    basic.pause(500)
    basic.show_leds("""
        . # # # .
                . # # # .
                . . # . .
                . . . . .
                . # # . .
    """)
    basic.pause(500)
    basic.show_leds("""
        . # # # .
                . . # # .
                . . # . .
                . . . . .
                . # # # .
    """)
    basic.pause(500)
    basic.show_leds("""
        . . # . .
                . # # # .
                . . # . .
                . . . . .
                . # # # #
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . # # # .
                . . # . .
                . . . . .
                # # # # #
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . . # # .
                . . # . .
                . . # . .
                # # # # #
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . . # . .
                . . # . .
                . . # # .
                # # # # #
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . # # # .
                # # # # #
    """)
    basic.pause(500)
    for index in range(2):
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.pause(100)
    basic.pause(500)

def on_logo_long_pressed():
    global Reset
    Reset = 1
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def finish_loop():
    global A, B, M
    A = 2
    B = 2
    M = 2

def on_button_pressed_a():
    global A
    A = 1
    led.enable(False)
    while A == 1 and (B == 0 and M == 0):
        pins.digital_write_pin(DigitalPin.P0, 1)
        pins.digital_write_pin(DigitalPin.P3, 1)
        basic.pause(25000)
        for index2 in range(8):
            pins.digital_write_pin(DigitalPin.P3, 1)
            basic.pause(250)
            pins.digital_write_pin(DigitalPin.P3, 0)
            basic.pause(250)
        pins.digital_write_pin(DigitalPin.P4, 1)
        basic.pause(1000)
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.pause(3000)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 1)
        basic.pause(30000)
    finish_loop()
input.on_button_pressed(Button.A, on_button_pressed_a)

def taikisunadokei():
    basic.show_leds("""
        # # # # #
                . # # # .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.pause(500)
    basic.show_leds("""
        . # # # #
                . # # # .
                . . # . .
                . . . . .
                . . # . .
    """)
    basic.pause(500)
    basic.show_leds("""
        . # # # .
                . # # # .
                . . # . .
                . . . . .
                . # # . .
    """)
    basic.pause(500)
    basic.show_leds("""
        . # . # .
                . # # # .
                . . # . .
                . . . . .
                . # # # .
    """)
    basic.pause(500)
    basic.show_leds("""
        . # . . .
                . # # # .
                . . # . .
                . . . . .
                . # # # #
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . # # # .
                . . # . .
                . . . . .
                # # # # #
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . . # # .
                . . # . .
                . . # . .
                # # # # #
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . . # . .
                . . # . .
                . . # # .
                # # # # #
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . # # # .
                # # # # #
    """)
    basic.pause(500)
    for index3 in range(2):
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.pause(100)
    basic.pause(500)

def on_data_received():
    while Reset == 0:
        serial.write_numbers([input.sound_level(),
                input.running_time() / 1000,
                input.temperature()])
        basic.pause(500)
serial.on_data_received("serial", on_data_received)

def on_button_pressed_b():
    global B
    B = 1
    led.enable(False)
    while A == 0 and (B == 1 and M == 0):
        pins.digital_write_pin(DigitalPin.P1, 1)
        pins.digital_write_pin(DigitalPin.P4, 1)
        basic.pause(500)
        pins.digital_write_pin(DigitalPin.P1, 0)
        basic.pause(500)
    finish_loop()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global M
    M = 1
    led.enable(False)
    while A == 0 and (B == 0 and M == 1):
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 1)
        pins.digital_write_pin(DigitalPin.P3, 0)
        pins.digital_write_pin(DigitalPin.P4, 1)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def sethensu():
    global A, B, M, Reset
    A = 0
    B = 0
    M = 0
    Reset = 0
M = 0
B = 0
A = 0
Reset = 0
sethensu()
led.enable(True)
serial.redirect_to_usb()
radio.set_group(1)
basic.show_string("This is Traffic Light for micro:bit !!BETA!! ")
while 0 == 0:
    taikisunadokei()

def on_forever():
    if Reset == 1:
        finish_loop()
basic.forever(on_forever)

def on_forever2():
    global Reset
    while input.temperature() < 60 or input.temperature() > -30:
        Reset = 1
basic.forever(on_forever2)
