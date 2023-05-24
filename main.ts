input.onGesture(Gesture.LogoUp, function () {
    let text__list: number[] = []
    index = randint(0, text__list.length - 1)
    basic.showString("" + (text__list[index]))
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
let index = 0
let text_list = ["puppy", "clock", "night"]
game.startCountdown(30000)
