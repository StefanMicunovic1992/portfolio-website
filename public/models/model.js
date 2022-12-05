const model = (function () {


    return {
        validationFormAndSendMail: (e,flag) => {
            e.preventDefault();

            const names = document.querySelector('#name');
            const surname = document.querySelector('#surname');
            const email = document.querySelector('#email');
            const phone = document.querySelector('#phone');
            const message = document.querySelector('#message');
            
            if (flag == true) {

                let formData = {
                    name: names.value,
                    surname: surname.value,
                    email: email.value,
                    phone: phone.value,
                    message: message.value
                }

                let xhr = new XMLHttpRequest();
                xhr.open('POST', '/');
                xhr.setRequestHeader('content-type', 'application/json');
                xhr.onload = function () {
                    console.log(xhr.responseText);
                }
                xhr.send(JSON.stringify(formData));

                    names.value = '';
                    surname.value = '';
                    email.value = '';
                    phone.value = '';
                    message.value = '';
                    alert('Email sent. Thank you for contacting me. I will answer you as soon as possible')
            } else {
                alert('You must fill in all the fields and fill them in correctly')
            }
        },
    }


})();

export default model;