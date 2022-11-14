// let calculator = {
//     sum() {
//         console.log(this.a + this.b)
//         return (this.a + this.b)
         
//     },
//     mul() {
//         console.log(this.a * this.b)
//         return (this.a * this.b)
//     },
//     read() {
//     this.a = +prompt('Введите A');
//     this.b = +prompt('Введите B');
//     }
//   };

//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// function Calculator() {

//     this.sum = function(){
//         console.log(this.a + this.b)
//         return (this.a + this.b)
//     }
//     this.mul  = function(){
//         console.log(this.a * this.b)
//         return (this.a  this.b)
//     }
//     this.read = function(){
//         this.a = +prompt('Введите A');
//         this.b = +prompt('Введите B');
//     }
// }
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );