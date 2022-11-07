field.style.position = 'relative';
ball.style.position = 'absolute';
let ballRadius = ball.offsetWidth / 2;

function coordinate() {
field.addEventListener('click', (e) => {
    let fieldRect = field.getBoundingClientRect();
    let newX = e.clientX - field.clientLeft - fieldRect.x - ballRadius;
    let newY = e.clientY - field.clientTop - fieldRect.y - ballRadius;

    if (newX < 0) {
        ball.style.left = "0px";
    } else if (newX + ball.offsetWidth > field.clientWidth) {
        ball.style.left = field.clientWidth - ball.offsetWidth + "px";
    } else { 
        ball.style.left = newX + "px";
    }
        if (newY < 0) {
            ball.style.top = "0px";
        } else if (newY + ball.offsetHeight > field.clientHeight) {
            ball.style.top = field.clientHeight - ball.offsetHeight + "px";
        } else {
            ball.style.top = newY + "px";
        }
    })
  
}