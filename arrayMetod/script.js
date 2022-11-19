function camelize(str) {
   let splitted = str.split("-")
   let upArr = splitted.map(elem => {
    elem = elem[0].toUpperCase() + elem.slice(1);
    return elem;
   }).join("") 
   console.log(upArr)
}
console.log(camelize("list-style-image"))