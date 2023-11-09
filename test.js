const car = {
    onReady: function (morningCallback, eveningCallback) {
        if (new Date().getHours() < 6) morningCallback()
        else eveningCallback()
    }
}

// function sayGoodMorning() {
//     console.log('Good morning')
// }

// function sayGoodNight() {
//     console.log('Good night')
// }

// car.onReady(sayGoodMorning, sayGoodNight)

car.onReady(function () {
    console.log('Good morning')
}, function () {
    console.log('Good evening')
})