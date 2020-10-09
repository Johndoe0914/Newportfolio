const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

// - App config
const app = express();


app.use(cors({ origin: true }));
app.use(express.json());

app.post("/form", async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
    const email = await nodemailer.createTestAccount((err, account) => {
      const htmlEmail = `
          <h3>Contact Details</h3>
          <ul>
              <li> Name: ${req.body.name}</li>
  
           </ul>
           <h4>Email: ${req.body.email}</h4>
           <h3>Message</h3>
           <p style={{{ color:"red"}}}>Message: ${req.body.message}</p>
          `;
  
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "jonathanheroku0914@gmail.com",
          pass: "091499.j",
        },
      });
  
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
  
        return res.json(info);
  
        // console.log("message sent: %s", info.message);
        // console.log("message URL: %s", nodemailer.getTestMessageUrl(info));
      }).catch((err) => console.log(err));

      console.log(err)
    })
  });


exports.api = functions.https.onRequest(app)