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

// let countSheep = function (num){
//     let str = "";
//     for (let i = 1; i <= num; i++){
//          str = str + `${i} sheep...`
//     }
//     return str
// }
//     console.log(countSheep(0))  


// посчитать сумму элементов массива, за исключением самого минимального 
// и самого максимального
// function sumArray(array) {
//     let sum = 0;
//     if (array == null || array.length <= 2){
//         return 0
//     }
//     let arr = array.sort((a, b) => a - b)
//     console.log(arr)
//     for (let i = 1; i < arr.length - 1; i++){
//          sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(sumArray([6, 3, 1, 8, 10]))

// удалить пробелы из строки
// function noSpace(x){
//     return x.split(" ").join("")
//   }
//   console.log(noSpace("8aaaaa dddd r     "))


// массив длины N из элементов, кратных X
// function countBy(x, n) {
//     let z = [];
//     for (let i = 0; i < n; i++){
//         z.push(x)
//         x = x + z[0]
//     } 
//     return z;
//   }
//   console.log(countBy(1,10))


// если оба параметра чет - false, если чет и нечет - true
// function lovefunc(flower1, flower2){
//  return ((flower1 % 2 == 1 && flower2 % 2 == 0) ||
//  (flower1 % 2 == 0 && flower2 % 2 == 1)) ? true : false
// }
// console.log(lovefunc(0, 1))


// проверка числа на полный квадрат
// let isSquare = function(n){
//     let result = Math.sqrt(n);
//     return (result % 1 === 0);
//       }
// console.log(isSquare(5))


// let summation = function (num) {
//     let sum = 0;
//     for(let i = 0; i <= num; i++){
//         sum = sum + i;
//     }
//     return sum
// }
// console.log(summation(8))

// function isIsogram(str){
//     let tmp = str.toLowerCase().split("").sort() 
//     console.log(tmp)
//     for(let i = 0; i < tmp.length; i++){
//         if (tmp[i] == tmp[i + 1]){
//             return false
//         } 
//     }    return true
// }
// console.log(isIsogram("moose"))

// let array = ["a", "b", "c", "d"];
// let number=function(array){
//     return array.map((item, index) => `${index + 1}: ${item}`);
// }
//  console.log(number(array))

// найти индекс n, где сумма целых чисел слева от n равна сумме целых чисел справа от n. 
// function findEvenIndex(arr){
//         let getArrSum = array => array.reduce((acc, currValue) => acc + currValue, 0);
//         return arr.findIndex((val, currentIndex, ar) => {
//                 let arrLeft = ar.slice(0, currentIndex);
//                 let arrRight = ar.slice(currentIndex + 1, arr.length );
//                return getArrSum(arrLeft) === getArrSum(arrRight)
//         });
// }
// console.log(findEvenIndex([1,2,3,4,3,2,1]))
//         //или так
// function findEvenIndex(arr)
// {
//   return arr.findIndex((e,i,a)=> a.slice(0,i).reduce((p,c)=>p+c,0)==a.slice(i+1).reduce((p,c)=>p+c,0));
// }


// отсортировать нечетные элементы массива, оставив четные на своем месте
// function sortArray(array) {
//     for(let i = 0; i < array.length - 1; i++){
//       for(let j = i; j < array.length; j++){
//         if((array[i] != 0) && (array[i] % 2 != 0) &&
//           (array[j] != 0) && (array[j] % 2 != 0)){
//             if(array[i] > array[j]){
//                 let temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//         }
//     }
//     } 
//     return array;
// }
//   console.log(sortArray([5, 3, 2, 8, 1, 4]))
//  function sortArray(array) {
//     let odds = array.filter(x => x % 2).sort((a, b) => a - b);   
//     return array.map(x => x % 2 ? odds.shift() : x);
// }


// function tribonacci(signature,n){
//     let trib = signature;
//     for (i = 3; i < n; i++) {
//       trib.push((trib[i-1] + trib[i-2] + trib[i-3]));
//     }
//     return trib.slice(0, n);
//   }
// console.log(tribonacci( [1,1,1], 7))

// найти уникальный элемент масисва
// function findUniq(arr) {
//       for(let i = 0; i < arr.length; i++){
//         if(arr[i] != arr[i + 1]){
//             let unic = arr[i + 1]
//             return unic
//         } 
//     }
// }
// function findUniq(arr) {
//     return arr.find((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
// }
// console.log(findUniq([ 3, 10, 3, 3, 3 ]))

    

// function findUniq(arr) {
//     let newArr = arr.map(a => { 
//         return [...new Set(a.toLowerCase())].sort().join('') 
//     });
//     for (let i = 0; i < newArr.length; i++) {
//       if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]))
//        return arr[i]
//     }
//   }
//   console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]))


        // "camelCasing"  =>  "camel Casing"
// function solution(string) {
//     let arr = string.split('').map(item => {
//         if(item.toUpperCase() == item){
//             return " " + item
//         }
//             return item
//      }) 
//     return arr.join("")
// }
// console.log(solution('camelCasing'))

// разложить число и взвести в степень каждое разложенное, вывести результат деления на
// количество разложенных символов
// function digPow(n, p){
//         // convert the number into string
//         let str = String(n);
//         let add = 0;
//         // convert string into array using split()
//         str.split('').forEach(num=>{
//           add += Math.pow(Number(num) , p);
//           p++;
//         });
    
//         return (add % n) ? -1 : add/n;
//       }
//         console.log(digPow(46288, 3))

// function arrayDiff(a, b) {
//   return result = a.filter(el => !b.includes(el));
// }
// console.log(arrayDiff([1,2,2,2,3],[1,2]))

//square every digit of a number
// function squareDigits(num){
//         let myFunc = num => Number(num);
//         let intArr = Array.from(String(num), myFunc).map((elem) => Math.pow(elem, 2)).join("");
//         console.log(intArr)
//         return Number(intArr)
//       }
//     squareDigits(2345)



// function bouncingBall(h,  bounce,  window) {
//     if (h !=0 && bounce > 0 && bounce < 1 && h > window){
//         n = 1
//         bounceDown = h * bounce
//         while (bounceDown > window) {
//             bounceDown = bounce * bounceDown
//             n = n + 2;
//         } 
//     return n
//     } 
//     else return -1
// }
//console.log(bouncingBall(30.0, 0.66, 1.5))




// function calculateYears(principal, interest, tax, desired) {
//   let years = 0;
//   while (principal < desired) {
//     principal = principal + principal * interest * (1 - tax);
//     years++;
//   }
//   return years;
// }



// function queueTime(customers, n) {
//     // creates an array of length n representing the kassa
//     // Each kassa is given a value of 0 to represent initial waitTime before the queue begins.
//     const kassa = new Array(n).fill(0);
//     // goes through the queue of customer waitTimes
//     for (let waitTime of customers) {
//         // finds the kassa with the least wait time on it, adds the next customer's time to it
//         const lowestWaitKassa = kassa.indexOf(Math.min(...kassa));
//         kassa[lowestWaitKassa] += waitTime;
//     }
//     // end result is that the waitTimes (load) on the kassa are distributed optimally. 
//     // The waitTime of the kassa with the heaviest load represents the total time taken
//     return Math.max(...kassa);
//     }
// console.log(queueTime([10,2,9,3], 2)); 


function findNumber(compare) {
    let searchedNumber = 5;
        let actual = findNumber((a) => a > searchedNumber ? 1 : a < searchedNumber ? -1 : 0);
        return actual
    }
    console.log(findNumber(0));