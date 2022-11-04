// let arr = ["John", "Pete", "Ann", "Ford", "Bill", "Jason"];

// function sorting(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j >= 0; j--) {
//             if (arr[j] > arr[j + 1]) {
//                 let tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
//             } else {
//                 break;
//             }
//         }
//     }
// }
// sorting(arr);
// console.log(arr)

// let coll = document.querySelectorAll('tr');
// console.log(coll)


//     for (let i = 1; i < coll.length - 1; i++) {
//         for (let j = i; j >= 1; j--) {
//             console.log(coll[j].firstElementChild.textContent, coll[j + 1].firstElementChild.textContent)
//             if (coll[j].firstElementChild.textContent > coll[j + 1].firstElementChild.textContent) {
//                 console.log(coll[i] )
//                 console.log(coll[j] )
//                 coll[j].before(coll[j + 1])
//                 coll = document.querySelectorAll('tr');
//             } else {
//                 break;
//             } 
//         }

//     }
                              
let arr = ["Anton", "Sergey", "Oleg", "Dima", "Vitya", "Lexa"];
let tmp;
for (i = 0; i < arr.length; i++) {
    for (j = i; j >=0; j--) {
        if (arr[j - 1] > arr[j]) {
            tmp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = tmp;
        } else {
            break;
        }
    } 
}
console.log(arr)
