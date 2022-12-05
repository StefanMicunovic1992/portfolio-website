const view = (function () {


    let changeStyleOfElement = (flag, pTag, valueOfInput) => {
        if (flag === true) {
            pTag.classList.remove('feedbackForValidation');
            pTag.classList.remove('inCorrect');
            pTag.classList.add('correct');
            pTag.innerText = 'Correct';
        } else {
            pTag.classList.remove('feedbackForValidation');
            pTag.classList.remove('correct');
            pTag.classList.add('inCorrect');
            if(valueOfInput.name == 'name' || valueOfInput.name == 'surname'){
                pTag.innerText = 'Incorrect: the first letter must be uppercase';
            }else if(valueOfInput.name == 'message'){
                pTag.innerText = 'Incorrect: message must be at least 40 characters long';

            }else{
                pTag.innerText = 'Incorrect';
            }
        }

        if (valueOfInput.value == '') {
            pTag.classList.add('feedbackForValidation');
            pTag.classList.remove('correct');
            pTag.classList.remove('inCorrect');
        }
    }


    return {
        checkAllInput: (names,surname,email,phone,message) => {
            let regExpForName = new RegExp(/^[A-Z][a-z]{1,15}$/g);
            let regExpForSurname = new RegExp(/^[A-Z][a-z]{1,15}(\s?)(([A-Z]?)([a-z]){1,15})?$/g);
            let regExpForEmail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g);
            let regExpForPhone = new RegExp(/^[0-9]{3}\s[0-9]{3}\s[0-9]{3,4}$/);
            
            let checkname = regExpForName.test(names.value);
            let checksurname = regExpForSurname.test(surname.value);
            let checkmail = regExpForEmail.test(email.value);
            let checkphone = regExpForPhone.test(phone.value);

            if(checkname == true && checksurname == true && checkmail == true && checkphone == true && (message.value).length>40){
                let namesPTag = document.getElementById('pForNameValidatio')
                namesPTag.classList.remove('correct')
                namesPTag.classList.add('feedbackForValidation')

                let surnamePTag = document.getElementById('pForSurnameValidatio')
                surnamePTag.classList.remove('correct')
                surnamePTag.classList.add('feedbackForValidation')

                let emailPTag = document.getElementById('pForEmailValidatio')
                emailPTag.classList.remove('correct')
                emailPTag.classList.add('feedbackForValidation')

                let phonesPTag = document.getElementById('pForPhoneValidatio')
                phonesPTag.classList.remove('correct')
                phonesPTag.classList.add('feedbackForValidation')

                let messagePTag = document.getElementById('pForMessageValidatio')
                messagePTag.classList.remove('correct')
                messagePTag.classList.add('feedbackForValidation')

                return true;
            }



        },
        checkName: (e, names) => {
            e.target.value = e.target.value.replace(/[^\a-zA-Z]/g, '')
            let regExpForName = new RegExp(/^[A-Z][a-z]{1,15}$/g);
            let flag = false;
            let pForNameValidatio = document.querySelector('#pForNameValidatio')
            if (regExpForName.test(names.value) === false) {
                flag = false;
            } else {
                flag = true;
            }

            changeStyleOfElement(flag, pForNameValidatio, names);
        },

        checkSurname: (e, surname) => {
            e.target.value = e.target.value.replace(/[^\a-zA-Z\s]/g, '')
            let pForSurnameValidatio = document.querySelector('#pForSurnameValidatio');
            let regExpForSurname = new RegExp(/^[A-Z][a-z]{1,15}(\s?)(([A-Z]?)([a-z]){1,15})?$/g);
            let flag = false;
            if (regExpForSurname.test(surname.value) === false) {
                flag = false;
            } else {
                flag = true;
            }

            changeStyleOfElement(flag, pForSurnameValidatio, surname);
        },

        checkEmail: (e, email) => {
            
            let pForEmailValidatio = document.querySelector('#pForEmailValidatio');
            let regExpForEmail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g);
            let flag = false;
            if (regExpForEmail.test(email.value) === false) {
                flag = false;
            } else {
                flag = true;
            }

            changeStyleOfElement(flag, pForEmailValidatio, email);
        },

        checkPhone: (e, phone) => {
            e.target.value = e.target.value.replace(/[^\d0-9]/g, '').replace(/(.{3})/, '$1 ').replace(/(.{7})/, '$1 ').trim();

            let pForEmailValidatio = document.querySelector('#pForPhoneValidatio');
            let regExpForPhone = new RegExp(/^[0-9]{3}\s[0-9]{3}\s[0-9]{3,4}$/);
            let flag = false;
            if (regExpForPhone.test(phone.value) === false) {
                flag = false;
            } else {
                flag = true;
            }

            changeStyleOfElement(flag, pForEmailValidatio, phone);

        },

        checkMessage: (e,message) =>{
            let pForMessageValidatio = document.querySelector('#pForMessageValidatio');
            let flag = false;
            if((message.value).length <40){
                flag = false;
            }else{
                flag = true;
            }

            changeStyleOfElement(flag, pForMessageValidatio, message);
        }

    }
})();

export default view;