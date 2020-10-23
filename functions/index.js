  
const functions = require('firebase-functions');
// const express = require("express");
const cors = require("cors");
const corsOptions = {
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 

} ;
const nodemailer = require("nodemailer");

// - App config
// const app = express();


// app.use(cors({ origin: true }));
// app.use(express.json());

const corsMiddleware = cors(corsOptions);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: 'OAuth2',
          user: "jonathanheroku0914@gmail.com",
          clientId: '365866205542-rhh36buv2afbbcob77hb6v235au3thmj.apps.googleusercontent.com',
        clientSecret: 'TbaTEfKxOpvqvNumFBOiE2pu',
        refreshToken: '1//04_9UxbKLyDvTCgYIARAAGAQSNwF-L9IrqJe5t08RRSfCB4fCiTYtm-C_AWrflH_RYqZcws6_7pIUY7DzHPa-0Ce5ICLAUABFZw0'
        },
      });
  

exports.sendMail = functions.https.onRequest((req,res) => {
    corsMiddleware(req,res, () => {
  const htmlEmail = `
  <h3>Contact Details</h3>
  <ul>
      <li> Name: ${req.body.name}</li>

   </ul>
   <h4>Email: ${req.body.email}</h4>
   <h3>Message</h3>
   <p style={{{ color:"red"}}}>Message: ${req.body.message}</p>
  `;


  let mailOptions = {
    from: "portfolio",
    to: "jonathanheroku0914@gmail.com",
    replyTo: "test@testaccount.com",
    subject: "New message",
    test: "req.body.message",
    html: htmlEmail,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log("ERROR", err);
    }

    return res.status(200).send('message sent');

    // console.log("message sent: %s", info.message);
    // console.log("message URL: %s", nodemailer.getTestMessageUrl(info));
  })

})


})


