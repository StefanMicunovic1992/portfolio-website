const controler = function (model, view) {        

    let setupAll = function () {
        
        const names = document.querySelector('#name');
        const surname = document.querySelector('#surname');
        const email = document.querySelector('#email');
        const phone = document.querySelector('#phone');
        const message = document.querySelector('#message');

        const contactForm = document.querySelector('.contactForm');
        contactForm.addEventListener('submit', (e) => {
            
            let flag =  view.checkAllInput(names,surname,email,phone,message);

             model.validationFormAndSendMail(e,flag);
        });

        names.addEventListener('input', (e) => {
            view.checkName(e,names);
        });

        surname.addEventListener('input', (e) => {
            view.checkSurname(e,surname);
        });

        email.addEventListener('input', (e) => {
            view.checkEmail(e,email);
        });

        phone.addEventListener('input', (e) => {
            view.checkPhone(e,phone);
        });

        message.addEventListener('input', (e) => {
            view.checkMessage(e,message);
        });

        let linkedin = document.getElementById('linkedin').addEventListener('click',()=>{window.open('https://www.linkedin.com/in/stefan-micunovic-4081b0229/','_blank')})
        let github = document.getElementById('github').addEventListener('click',()=>{window.open('https://github.com/StefanMicunovic1992','_blank')})
        let facebook = document.getElementById('facebook').addEventListener('click',()=>{window.open('https://www.facebook.com/stefan.micunovic/','_blank')})
        let instagram = document.getElementById('instagram').addEventListener('click',()=>{window.open('https://www.instagram.com/stefanmicunovic1992/','_blank')})


        let calculatorBtn = document.getElementById('calculatorBtn').addEventListener('click',()=>{window.open('https://github.com/StefanMicunovic1992/calculator','_blank')})
        let toDoList = document.getElementById('toDoList').addEventListener('click',()=>{window.open('https://github.com/StefanMicunovic1992/To-do-list','_blank')})
        let webShop = document.getElementById('webShop').addEventListener('click',()=>{window.open('https://github.com/StefanMicunovic1992/MotoGP-Shop','_blank')})
        let dogsApi = document.getElementById('dogsApi').addEventListener('click',()=>{window.open('https://github.com/StefanMicunovic1992/Dogs-API','_blank')})

    }
    return {
        init: function () {
            setupAll();
        }
    }
};

export default controler;