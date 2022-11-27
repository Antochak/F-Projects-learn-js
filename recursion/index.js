// function sumTo(n) { 
//     let sum = 0;
//     for ( let i = 1; i <= n; i++){
//         sum = sum + i;
//     }
//     return sum
// }
// console.log(sumTo(3))

// function sumTo(n){
//     if(n == 0){
//         return n
//     } else {
//         return n + sumTo(n - 1)
//     }
// }
// console.log(sumTo(100000))

// function sumTo(n){
// return n * (n + 1) / 2;
// }
// console.log(sumTo(1000000))

// function factorial(n){
//    return n != 1 ? n * factorial(n - 1) : 1
// }
// console.log(factorial(5))


// function fib(n) {
//     return n <= 1 ? n : fib(n - 2) + fib(n - 1)
// }
// console.log(fib(7))

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  }

function printList(list) {
    console.log(list.value)
    if (list.next){
        printList(list.next)
    }
}
printList(list)
