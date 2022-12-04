let formWrapper = document.querySelector("#prompt-form-container")
formWrapper.style.display = "none";
let showFormButton = document.querySelector('#formButton')
let formView = document.querySelector('#prompt-form')
let formMessage = document.querySelector('#prompt-message')
let cancelButton = formView.elements.cancel
let inputForm = formView.elements.text

showFormButton.addEventListener('click', () => showPrompt('Введите что-нибудь умное, например "член"', sendForm))

function sendForm(value) { 
    alert("Вы ввели что-то очень умное: " + value)
}

function showPrompt(html, callback) {
    formWrapper.style.display = "block";
    document.body.style.overflowY = 'hidden';
    formMessage.innerHTML = html;
    inputForm.focus();
    if(inputForm.value == " ") {

        
    }
    formView.addEventListener('submit', () => {
        callback(inputForm.value)
    })
}

cancelButton.addEventListener('click', closePrompt) 
function closePrompt() {
    formWrapper.style.display = "none";
    alert('Вы ввели NULL')
}
