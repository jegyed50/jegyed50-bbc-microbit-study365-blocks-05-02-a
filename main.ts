/**
 * The Magnetometer Module Blocks, Magnetic Force Stength value to Graph
 */
let mf = 0
input.setAccelerometerRange(AcceleratorRange.OneG)
if (input.compassHeading() == -1003) {
    basic.showIcon(IconNames.No)
} else {
    basic.showIcon(IconNames.Yes)
}
basic.pause(3000)
basic.forever(function () {
    mf = input.magneticForce(Dimension.Strength)
    serial.writeValue("mf", mf)
    led.plotBarGraph(
    mf / 2000,
    0
    )
})
