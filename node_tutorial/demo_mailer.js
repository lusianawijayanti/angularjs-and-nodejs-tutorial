var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lusianawijayanti95@gmail.com',
    pass: 'I love you1'
  }
});

var mailOptions = {
  from: 'lusianawijayanti95@gmail.com',
  to: 'lusianawijayanti@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

//multiple email
// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// }

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

//html email
// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   html: '<h1>Welcome</h1><p>That was easy!</p>'
// }