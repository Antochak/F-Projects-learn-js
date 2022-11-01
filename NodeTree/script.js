let list = document.querySelectorAll('li');
for (let li of list) {
    console.log(li);
    let counter = li.querySelectorAll('li').length;
    console.log(counter);
    if (counter <= 0) continue;
    li.firstChild.textContent = li.firstChild.textContent + '[' + counter + ']';
}