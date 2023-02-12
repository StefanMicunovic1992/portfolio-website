const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');


const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json())

app.get('/', (req,res) => {
    res.send('hello')
})

app.post("/", (req,res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'stefanmicunovic1992@gmail.com',
            pass: 'StefanMicunovic715865Ss,.'
        }
    });

    const mailOption = {
        from: req.body.email,
        to: 'stefanmicunovic1992@gmail.com',
        subject: `Message from ${req.body.email}: -  ${req.body.name}  ${req.body.surname} -  ${req.body.phone}`,
        text: req.body.message
    }

    transporter.sendMail(mailOption, (error,info) => {
        if(error){
            console.log(error)
            res.send('error')
        }else{
            console.log(info)
            res.send('success')
        }
    })
})


app.listen(port, ()=> {console.log('server working')});