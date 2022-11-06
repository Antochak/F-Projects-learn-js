// let elem = document.querySelector('#field')
// function showXY() {
//     let r = elem.getBoundingClientRect()
//     let one = [r.left, r.top];
//     let two = [r.right, r.bottom];
//     let three = [r.left + field.clientLeft, r.top + field.clientTop];
//     let four = [r.left + field.clientLeft + field.clientWidth,
//                 r.top + field.clientTop + field.clientHeight];
//     console.log(one)
//     console.log(two)
//     console.log(three)
//     console.log(four)
// }
// showXY()

hider.onclick = function invisible() {
document.querySelector('#text').style.display = 'none';
}