let timer;
function clockStart() {
    timer = setInterval(update, 1000);
}
function clockStop() {
    clearInterval(timer);
  }
let div = document.createElement('div');
    div.setAttribute('id', 'timerBlock')
    document.body.append(div);

let spanHours = document.createElement('span');
    spanHours.innerHTML = 'hh';
    timerBlock.append(spanHours);
    timerBlock.append(' : ');
    spanHours.style.color = 'red';
    spanHours.style.fontWeight = '700';
    spanHours.style.fontSize = '20px';


let spanMinutes = document.createElement('span');
    spanMinutes.innerHTML = 'mm';
    timerBlock.append(spanMinutes);
    timerBlock.append(' : ');
    spanMinutes.style.color = 'blue';
    spanMinutes.style.fontWeight = '700';
    spanMinutes.style.fontSize = '20px';

let spanSeconds = document.createElement('span');
    spanSeconds.innerHTML = 'ss';
    timerBlock.append(spanSeconds);
    spanSeconds.style.color = 'green';
    spanSeconds.style.fontWeight = '700';
    spanSeconds.style.fontSize = '20px';

function update (){
    let now = new Date()
    let hour = now.getHours();
    hour = (hour < 10) ? '0' + hour : hour;
    let min = now.getMinutes();
    min = (min < 10) ? '0' + min : min;
    let sec = now.getSeconds();
    sec = (sec < 10) ? '0' + sec : sec;
    spanHours.innerHTML = hour;
    spanMinutes.innerHTML = min;
    spanSeconds.innerHTML = sec;
    document.querySelectorAll('timerBlock').innerHTML = hour + min + sec;
}




