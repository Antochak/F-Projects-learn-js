// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"];

// function unique(arr) {
//     let set = new Set(arr)

//   for(let uniq of set){
//     console.log(uniq)
//   }
//   }
//   unique(values)

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
    let word;
    let result = {}
    let resultArr = []
    for(let i = 0; i < arr.length; i++) {
        word = arr[i].toLowerCase().split('').sort().join('')
        result[word] = arr[i]
    }
    console.log(result)
    for (let key in result) 
        resultArr.push(result[key]);
        console.log(resultArr)
     return resultArr;
}

console.log(aclean(arr))
