const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey('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');

app.use(cors());

//welcome page
app.get('/', (req,res) => {
    res.send('Welcome to the send email server');
});

//email page

app.get('/send-email', (req,res) => {
    
    //Get Variables from query string in the search bar
    const {firstName, lastName, email, message } = req.query; 

    //Sendgrid Data Requirements
    const msg = {
        to: email, 
        from: email,
        subject: 'Budget Accounting',
        text: `This is a message from ${firstName}.${lastName}, the message is ${message}`,
    }

    //Send Email
    sgMail.send(msg)
    .then((msg) => console.log(message));

    res.write('Thank you for your email')
});


app.listen(4000, () => console.log("server running on 4000"));