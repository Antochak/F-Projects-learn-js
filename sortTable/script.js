let grid = document.querySelector('#grid')
grid.addEventListener("click", (event) => {
    let elem = event.target;
    if (!elem.closest("th")) {
        return;
    } else if
      (elem.dataset.type == "number") {
        sortAge();
    } else if
      (elem.dataset.type == "string") {
        sortName();
    } 
})
let coll = document.querySelectorAll('tr')
function sortAge(){
    coll = document.querySelectorAll('tr');
    for (let i = 1; i < coll.length - 1; i++) {
        for (let j = i; j >= 1; j--) {
           // console.log(+coll[j].firstElementChild.textContent, +coll[j + 1].firstElementChild.textContent)
            if (+coll[j].firstElementChild.textContent > +coll[j + 1].firstElementChild.textContent) {
               // console.log(coll[i])
              //  console.log(coll[j])
                coll[j].before(coll[j + 1])
                coll = document.querySelectorAll('tr');
            } else {
                break;
            } 
        }
    }
} 
function sortName() {
    for (let i = 1; i < coll.length - 1; i++) {
        for (let j = i; j >= 1; j--) {
           // console.log(coll[j].lastElementChild.textContent, coll[j + 1].lastElementChild.textContent)
            if (coll[j].lastElementChild.textContent > coll[j + 1].lastElementChild.textContent) {
                //console.log(coll[i] )
               // console.log(coll[j] )
                coll[j].before(coll[j + 1])
                coll = document.querySelectorAll('tr');
            } else {
                break;
            } 
        }
    }
}