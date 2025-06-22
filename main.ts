bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startLEDService()
basic.showIcon(IconNames.Diamond)
