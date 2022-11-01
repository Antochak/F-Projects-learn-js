let table = document.createElement('table')
let div =document.querySelector('#calendar')
let cal = 1;
let num = 1;
  let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
  for (let day of days) {
    let head = document.createElement('th');
    head.innerHTML = day;
    console.log(head);
    table.append(head);
  }
  div.append(table);
for (i = 0; i < 5; i++) {
    let str = document.createElement('tr');
    table.append(str);
    for (j = 0; j < 7; j++){
        let stb = document.createElement('td');
        cal = cal + 1; 
        if (cal <= 5) {
            stb.textContent = "";
        } else { 
            stb.textContent = num; 
            num = num + 1;
        }
        table.append(stb);
    }
}

