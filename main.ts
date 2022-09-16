let number_of_plates = 0
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P0)) {
        number_of_plates += 1
    } else {
        number_of_plates += 0
    }
})
