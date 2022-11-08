let arr = document.querySelectorAll('.pane');
console.log(arr)
function addButton(){
    for ( elem of arr) {
    let buttonDel = document.createElement('button');
    buttonDel.innerHTML = '[x]';
    buttonDel.classList.add('remove-button');
    elem.append(buttonDel)
    }
}

addButton()
let buttons = document.querySelectorAll('button.remove-button');
    for (let button of buttons){
      button.addEventListener('click',(event) =>
    event.currentTarget.parentElement.style.display = 'none')
}




