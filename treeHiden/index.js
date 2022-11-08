let tree = document.querySelector('#tree')
tree.addEventListener('click', function(event) {
    let li = event.target.closest('li');
    if (li.firstElementChild) {
        li.children[1].classList.toggle('toggle');
    }
})
