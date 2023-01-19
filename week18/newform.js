let form = document.querySelector(".myform"),
    inputsform = document.querySelectorAll(".input"),
    inputImail = document.querySelector(".email"),
    inputPhone = document.querySelector(".phone"),
    inputCheckbox = document.querySelector(".privacy_check");

function validEmail(email) {
    let re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    return re.test(String(email).toLowerCase());
}

function validtel(phone) {
    let reg = /^[0-9\s]+$/
    return reg.test(String(phone));
}

// делаем функцию отправки формы
form.onsubmit = function() {
    let emailVal = inputImail.value,
        phoneVal = inputPhone.value;
// тут пишу ф , где fotEach пробушается по всем элементам if значение импутов пустое, то окрашивает крассным
        inputsform.forEach(function(input) {
            if(input.value === "") {
                input.classList.add('error')
            } else {
                input.classList.remove("error");
            }

            if(!validEmail(emailVal)){
                inputImail.classList.add("error")//добавим красный к неверноему заполнению
                return false;
            } else {
                inputImail.classList.remove("error")// удалим если валидно
            }

            if (!inputCheckbox.checked) {
                inputCheckbox.classList.add("error")
                return false;
            }else {
                inputCheckbox.classList.remove("error")// удалим если валидно
                }

                
            if(!validtel(phoneVal)){
                inputPhone.classList.add("error")
                return false;
            } else {
                inputPhone.classList.remove("error")
            }

         }) 

    return false; // возвращаем false, чтобы форма не отправлялась.поменять на  add event
} 