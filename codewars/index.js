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


                function sumMix(x){
                  
                }