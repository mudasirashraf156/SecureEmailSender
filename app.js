const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mudasirparra786m@gmail.com',
    pass: 'parra@786',
  },
});

const mailOptions = {
  from: 'mudasirparra786m@gmail.com',
  to: 'mudasirashraf156@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

