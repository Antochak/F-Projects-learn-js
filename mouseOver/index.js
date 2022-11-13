let tip1 = document.createElement("div"); 
tip1.className = "tooltip";               
tip1.hidden = true;                      
document.body.append(tip1);
console.log(tip1)

let tip2 = document.createElement("div"); 
tip2.className = "tooltip";               
tip2.hidden = true;                      
document.body.append(tip2);
console.log(tip2)

let buttons = document.querySelectorAll('button')
document.addEventListener("mouseover", () => showMe())
document.addEventListener("mouseout", ()=> hideMe())

function showMe() {
    if (!btn.dataset.tooltip) return;
        for (let btn of buttons) {
        let targ = btn.target
        
            tip1.innerHTML = btn.dataset.tooltip
            tip1.hidden = false;
        }
    }

function hideMe() {
    tip1.hidden = true;  
}

