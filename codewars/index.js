            // Поиск среднего арифметического в массиве
            // function findAverage(array) {
            //     let sum = 0;
            //     if (!array.length) {
            //           return 0;
            //         } 
            //     for (let i = 0; i < array.length; i++){
            //       sum = sum + array[i]
            //       }
            //     return sum / array.length;
            //   }
            //  console.log(findAverage([1,10, 1]))

// Расчет индекса массы.тела
// function bmi(weight, height) {
//     let bmi = weight / (height * height)
//     if (bmi <= 18.5) {
//       return "Underweight";
//   } else if (bmi < 25) {
//       return "Normal";
//   } else if (bmi <= 30) {
//       return "Overweight";
//   } else if (bmi > 30) {
//       return "Obese";
//     } else 
//     return "";
//   }
//   console.log(bmi(80, 1.82)) 

      //  кратное уведичение элементов массива
        // let array = [2,2,2,2,2,2]
        // console.log(array)
        // function maps(x){
        //     let double = [];
        //     for(let element of array){
        //         double.push(element = element * x)
        //     };
        //     console.log(double)
        //     return double;
        //   }
        //   maps(3)

// функция , определяющая век, по введенному году
// function century(year) {
//     return Math.floor((year - 1)/100 + 1);
// }
// console.log(century(2000))


        // зеркальное отображение слова
        // function solution(str) {
        //     console.log(str)
        //     let arr = Array.from(str);
        //     let clone = []
        //        for (let j = arr.length - 1; j >= 0; j--){
        //         clone.push(arr[j])
        //        }
        //        clone = clone.join('')
        //        console.log(clone)
        //     }
                //или так
        // function solution(str){
        //     return str.split("").reverse().join("");
        //   }
                //или так
        // function solution(str){
        //     let tmp = '';
        //     for (let i = str.length - 1; i >= 0; i--)
        //     tmp = tmp + str[i];
        //     console.log(tmp)
        //     return tmp;
        //   }
        //   solution('hello')


// function doubleInteger(i) {
//         console.log(i)
//         return i * 2;
//         }
//         doubleInteger(2)

        // function greet(name){
        //  alert(`Hello, ${name} how are you doing today?`)
        // }  
        // greet('Anton')


//         повтоять слово N раз
// function repeatStr (n, s) {
//         let tmp = "";
//         for (let i = 0; i < n; i ++) {
//                 tmp = tmp + s
//         } 
//         return tmp;
//         }
//         console.log(repeatStr(5, 'Hello'))
// function repeatStr (n, s) {
//                 return s.repeat(n);
//               }


//         function litres(time) {
//                 let lit = 0.5;
//                 return Math.floor(lit * time);
//         } 
//       console.log(litres(12.3))


// function boolToWord( bool ){
//        return bool ? "Yes" : "No"
//       }
//       console.log(boolToWord(false))


        // function areYouPlayingBanjo(name) {
        //        name = name.startsWith('R') || name.startsWith('r') ? name + " plays banjo" : name + " does not play banjo"
               
        //         return name;
        // }
        // console.log(areYouPlayingBanjo('Anton'))

      
//       создание числового массива из принимаемого числа
//         function digitize(n) {
//                 n =  String(n).split("").reverse('').map(number => parseInt(number))
//                 return n;
//                }
//                console.log(digitize(123456789))


                // x = ['2', 5, '5', 123, '35']
                // function sumMix(x){
                //         let sum = 0;
                //         for(let element of x){
                //          sum = sum + +element
                //         };
                //         console.log(sum)
                //         return sum;
                //       }
                //       sumMix(x)



// function descendingOrder(n){
//         n = String(n).split('');
//         console.log(n)
//         if(n === 0) {
//                 return 0;
//         }
//         console.log(n)
//         for (let i = 0; i < n.length; i++) {
//                 for( let j = i; j >= 0; j--){
//                         if (n[j] < n[j + 1]){
//                                let tmp = n[j];
//                                 n[j] = n[j + 1];
//                                 n[j + 1] = tmp;  
//                         } else {
//                          break;
//                         }   
//                 }
//         }  console.log(n)
//         return +n.join('')
       
// }  console.log(descendingOrder(605240))

                //      фильтр по длине имени
                // function friend(friends){
                // return friends.filter(item => item.length == 4 )
                // }
                //  console.log(friend(["Ryan", "Kieran", "Mark"]))
               
//       поиск среднего арифметического массива и сравнение его с передаваемым параметром         
// function betterThanAverage(classPoints, yourPoints) {
//     let Average = classPoints.reduce((acc, point) => {
//        acc = acc + point/classPoints.length
//        return acc;
//     }, 0)
//     if (yourPoints > Average) {
//         return true
//     } else {
//         return false
//     }
// }

// function betterThanAverage(classPoints, yourPoints) {
//     let Average = classPoints.reduce((acc, point) => acc = acc + point/classPoints.length, 0);
//     return yourPoints > Average
// }


// извлевлечение корня из передаваемого значения,  и возведение (результата + 1)
// в степень 2, если результат первой операции я является целое число
// function findNextSquare(sq) {
//     let nextSq = Math.sqrt(sq) + 1;
//    if (Math.sqrt(sq) % 1 == 0) {
//         nextSq = nextSq * nextSq
//    } else {
//     return -1
//    } return nextSq
// } console.log(findNextSquare(121))


// 
// function countPositivesSumNegatives(input) {
//     let resultArr = []
//        if (!input.length) return resultArr
//     let max = Math.max(...input);  
//         resultArr.push(max) 
//     let SumOfNegative = input.reduce((acc, el) => {
//        if (el < 0) {
//         acc = acc + el;
//        } 
//        return acc
//     }, 0)
//     resultArr.push(SumOfNegative) 
//         return resultArr
//     console.log(resultArr) 
// }
// countPositivesSumNegatives([1, 2, 843, 10, 0, -2, -134, -14, -15])

// function countPositivesSumNegatives(input) {
//     let resultArr = []
//     if (!input.length) return resultArr
//     let max = Math.max(...input);  
//         resultArr.push(max)
//     let SumOfNegative = input.reduce((acc, el) =>  el < 0 ?  acc = acc + el : acc, 0)
//     resultArr.push(SumOfNegative) 
//     console.log(resultArr)
//     return resultArr
// }
// console.log(countPositivesSumNegatives([1, 12, 0, -21, -15]))


// Sum Numbers
// function sum(numbers) {
//         let summa = numbers.reduce((acc, el, arr) => !arr && !arr.length ? 0 : acc + el, 0);
//         return summa;
//     };
// console.log(sum([1, 5.2, 4, 0, -1]))

//перевод в отрицательное
// function makeNegative(num) {
//        let tmp = Math.abs(num)
//        return -tmp
//       // return num < 0 ? num : -num;
//         }
//       console.log(makeNegative(7))

// поиск самого короткого слова в массиве
// function findShort(s){
//     let arr = s.split(" ").sort((a, b) => a.length - b.length);
//     return arr[0].length
//     }
//       console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

// function reverseWords(str) {
// let arr = str.split(" ")
// let reversArr = [];
//     arr.forEach((elem) => {
//         let reversElem = elem.split("").reverse().join("");
//         reversArr.push(reversElem)
//     });
//     let stringed = reversArr.join(" ").toString()
//     return stringed
// }
//     console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
// Короткая запись
// function reverseWords(str) {
// return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))


               // расширяемый калькулятор
// function Calculator(){
//    this.operations = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//     }
//     this.calculate = (str) => {
//         let value = str.split(" ")
//         let a = +value[0]
//         let b = +value[2]
//         let operation = value[1]
//         if(!this.operations[operation] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }
//         return this.operations[operation](a, b);
//     }
//     this.addMethod = (op, func) => {
//        this.operations[op] = func;
//     }
// }
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("8 / 2");
// alert( result ); 


//  ЗАменить Т на U в строке
// function DNAtoRNA(dna) {
//     return dna.split("").map(item => item.replace("T", "U")).join("")
// }
//   console.log(DNAtoRNA('UTTT'))

// //                найти два наименьших числа и сложить их
// function sumTwoSmallestNumbers(numbers) {  
//       let arr = numbers.sort((a, b) => a - b)
//      return arr[0] + arr[1]  
// }
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))

// function hero(bullets, dragons){
//    return (bullets/dragons >= 2) 
//     }
//     console.log(hero(3, 2))

let countSheep = function (num){

    let str = "";
    for (let i = 1; i <= num; i++){
         str = str + `${i} sheep...`
    }
    return str
}
    console.log(countSheep(0))  