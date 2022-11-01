//  let n = 10;
// metka:
// for (i = 2; i <= n; i++) { 
//     for (l = 2; l < i; l++) {   
//         if (i % l == 0) continue metka;
//     } alert(i);
// }

        // if (browser == 'edge') {
        //     alert ("you've got the Edge.")
        // } else if  (browser == 'chrome' || browser == 'firefox' || browser == 'opera') {
        //     alert ("ok, we support these browser too");
        // } else {
        // ("We hope that this page looks ok!"); 
        // }

// const number = +prompt('Введите число между 0 и 3', '');
// switch(number) {
// case 0:
//     alert("ввел 0");
//     break;
// case 1:
//     alert("ввел 1");
//     break;
// case 2: 
// alert("ввел 2");
// break;
// }

        // function pow(x, n) {
        //     result = x ** n;
        //     return result; 
        // }
        // let  x = +prompt("Введите значение x: ");
        // let  n = +prompt("Введите значение n: ");
        //     if (n < 0) {
        //         alert (`Введенное значение ${n} не является натуральным числом`);
        //     } else { 
        //         alert(pow(x, n));
        //     }

// let user = {}
//         user.name = "John";
//         user.surname = "Smith";
//         user.name = "Pete";
// delete user.name;

        // let obj = {
        //         name: "John"
        // };
        // function isEmpty(obj) {
        //         for (let key in obj) {
        //                 return false;
        //         } 
        //         return true;
        // }      
        // alert(isEmpty(obj));



// let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//         }
// let summa = 0;
// for (let key in salaries) {
//         summa = salaries[key] + summa;
// }
// alert(summa);



        // let menu = {
        //         width: 200,
        //         height: 300,
        //         title: "My menu"
        // };
        // function multiplyNumeric(menu) {
        //         for (let key in menu) {
        //                 if (typeof menu[key] == "number") {
        //                         menu[key] = menu[key] * 2;
        //                 }
        //                 alert(menu[key])
        //         }
        // }
        // multiplyNumeric(menu) 
        
// let fruits = ["Яблоки", "Груша", "Апельсин"];
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// alert( fruits.length );


        // let arr = ["Джаз", "Блюз"]
        // arr.push("Рок-н-ролл");
        // arr[(arr.length-1)/2] = "Классика";
        // alert(arr.shift());
        // alert(arr);
        // arr.unshift("Реп", "Регги");
        // alert(arr);


        
//    function sumInput() {
//         let arr = [];
//         let num = prompt("Введите элемент массива");
//         while (num != null && num != "" && Number.isInteger(+num))
//         arr.push(+num);
//         console.log(num);
       
//         let sum = 0;
//         for (let key of arr) {
//                 sum = key + sum;
//         }
//         console.log(sum);
//         return sum;
//    }
//    alert(sumInput())

//    function sumInput() {
//         let arr = [];
//         let num ;
//         do {
//         num = prompt("Введите элемент массива",0);
//         console.log(num);
//         arr.push(+num);
//               } while (num != null && num != "" && Number.isInteger(+num) == true)
//         let sum = 0;
//         for (let key of arr) {
//                 sum = key + sum;
//         }
//         console.log(sum);
//         return sum;
//    }
//    alert(sumInput());



// function red(table) {
// let i = 0;
// for (let row of table.rows) {
//    row.cells[i].style.backgroundColor = 'red';
//    i = i + 1;
// 	}
// }
// red(document.body.firstElementChild);  !true == false



// let per = document.querySelector("[data-widget-name]");
// alert(elem.getAttribute('data-widget-name'));

let elements = document.querySelectorAll("li > a");
console.log(elements)
for (let element of elements) {
        // var attributeValue = element.getAttribute("href");
       // if (attributeValue == "://" || attributeValue !== "http://internal.com."')
       if ((!element.matches("a[href^='http://internal.com']")) && (element.matches("a[href*='://']"))) {
        element.style.color = 'orange';   
        }
}