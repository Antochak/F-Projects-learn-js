// function camelize(str) {
//    let splitted = str.split("-")
//    let upArr = splitted.map(elem => {
//     elem = elem[0].toUpperCase() + elem.slice(1);
//     return elem;
//    }).join("") 
//    console.log(upArr)
// }
// camelize("list-style-image")


// let arr = [5, 3, 8, 1, 9, 12, 0, 21];
// function filterRange(arr, a, b){
//     let arrCopy = [...arr]
//     return arrCopy.filter(item => (item >= a && item <=b))
//     }
// console.log(filterRange(arr, 2, 15))

// let arr = [5, 12, 8, 1, 9, 6, 17, 18, 6]
// function filterRangeInPlace(arr, a, b) {
//    for (let i = arr.length - 1; i >= 0; i--){
//     if (arr[i] < a || arr[i] > b){
//         arr.splice(i, 1)
//     }
//    } return arr
// }
// console.log(filterRangeInPlace(arr, 5, 10))

// let arr = ["HTML", "JavaScript", "CSS"];
// function sorted (arr) {
// let copy = [...arr]
// copy.sort()
// return copy
// }
// sorted(arr)

// let users = 
//    [{ name: "Вася", age: 25 },
//    { name: "Петя", age: 30 }, 
//    { name: "Маша", age: 28 }];
// let names = users.reduce((acc, user) => {
//    acc.push(user.name)
//       return acc
//    }, [])
// console.log(names)

// let users = 
// [{ name: "Вася", surname: "Пупкин", id: 1 },
//  { name: "Петя", surname: "Иванов", id: 2 },
//  { name: "Маша", surname: "Петрова", id: 3 }];
//  let ourUsers = users.map((user,id) => ({
//  fullName: `${user.name} ${user.surname}`,
//  id: user.id
//  }))
//  console.log(ourUsers)
//  console.log(users)


// let arr = 
// [{ name: "Тася", age: 25 },
//  { name: "Петя", age: 30 },
//  { name: "Маша", age: 28 },
//  { name: "Саша", age: 31 } ];.
//  function sortByAge(arr) {
//    arr.sort((a, b) => a.age - b.age)
//          console.log(arr[0].name)
//          console.log(arr[1].name)
//          console.log(arr[2].name)
//          console.log(arr[3].name) 
//  } 
// sortByAge(arr)


// let arr = [1, 2, 3];
// function shuffle(arr) {
//    return arr.sort(() => Math.random() - 0.5)
// }
// console.log(shuffle(arr))
// let arr = 
// [{ name: "Тася", age: 24 },
//  { name: "Петя", age: 14 },
//  { name: "Маша", age: 33 },
//  { name: "Саша", age: 11 } ];

//  function getAverageAge(arr) {
//    let average = arr.reduce((acc, user) => acc + user.age / arr.length, 0)
//    return average
//  }
//  console.log(getAverageAge(arr))

// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// function unique(strings) {
//    let uniqueStr = [];
//    strings.forEach((string) => uniqueStr[string] = true);
//    return uniqueStr;  
//    }
//    console.log(unique(strings));


         // Создайте объект с ключами из массива
// let users = [
//    {id: 'john', name: "John Smith", age: 20},
//    {id: 'ann', name: "Ann Smith", age: 24},
//    {id: 'pete', name: "Pete Peterson", age: 31},
//  ];
// let usersById = users.reduce((elems, user) => {
//   return {
//    ...elems,
//    [user.id]: user
//   }
// }, {})
//  console.log(usersById)
            //  второй вариант
// let usersById = users.reduce((elems, user) => { 
//    elems[user.id] = user
//    return elems
// }, {})

// console.log(usersById)