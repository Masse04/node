var nodemailer = require('nodemailer') ;
let transporter = nodemailer.createTransport({
    service : 'hotmail' ,
    auth : {
        user : 'user@hotmail.fr' ,
        pass : 'password' 
    }
})
let mailOptions = {
    from : 'user@hotmail.fr' ,
    to : 'another@hotmail.fr' ,
    subject : 'project' ,
    text : 'I start my project '
}
transporter.sendMail(mailOptions, (error,info) => {
    if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
})