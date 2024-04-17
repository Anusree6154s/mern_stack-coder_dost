require("dotenv").config();
const { User } = require("../model/User.js");
const nodemailer = require("nodemailer");
const zlib = require('zlib');

// imports related to passport crypto authentication
const crypto = require("crypto");
const { santizeUser } = require("../services/common.js");

//imports related to jwt authentication
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

exports.createUser = async (req, res) => {
  try {
    var salt = crypto.randomBytes(16);
    crypto.pbkdf2(
      req.body.password,
      salt,
      310000,
      32,
      "sha256",
      async function (err, hashedPassword) {
        const user = new User({ ...req.body, password: hashedPassword, salt });
        const data = await user.save();

        req.login(santizeUser(data), (err) => {
          if (err) {
            res.status(400).json(err);
          } else {
            const token = jwt.sign(santizeUser(data), secretKey);
            res
              .cookie("jwt", token, {
                expires: new Date(Date.now() + 3600000),
                httpOnly: true,
              })
              .json(santizeUser(data));
          }
        });
      }
    );
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: error, message: "Email must be unique." });
    } else {
      res.status(400).json(error);
    }
  }
};

exports.loginUser = async (req, res) => {
  try {
    res
      .cookie("jwt", req.user.token, {
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
      })
      .status(201)
      .json(req.user.info);

  } catch (error) {
    res.status(400).json(error);
  }
};

exports.logoutUser = async (req, res) => {
  const token = jwt.sign({ id: null }, secretKey)
  res
    .cookie("jwt", token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    })
    .status(201)
    .json({ id: null })


};

exports.checkAuth = async (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.sendStatus(401);
  }
};

exports.sendOTP = async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email })
    if (user.length === 0) {
      res.send({ message: "email dont exist" })
    } else {
      const data = await sendEmail({ email: req.body.email, OTP: req.body.OTP, id: user[0].id })
      res.send(data)
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
};

function sendEmail({ email, OTP, id }) {
  return new Promise((resolve, reject) => {

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDERS_EMAIL2,
        pass: process.env.SENDERS_GMAIL_APP_PASSWORD2, //specifically made using App Passwors od gmail
      },
    });


    const mail_configs = {
      from: process.env.SECRET_KEY,
      to: email,
      subject: "Ebazar PASSWORD RECOVERY",
      html: `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - OTP Email Template</title>
  

</head>
<body>
<!-- partial:index.partial.html -->
<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Ebazar</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Ebazar. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
    <p style="font-size:0.9em;">Regards,<br />Ebazar</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Ebazar Inc</p>
      <p>India</p>
    </div>
  </div>
</div>
<!-- partial -->
  
</body>
</html>`,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        return reject({ message: `An error has occured` });
      }
      return resolve({ id });
    });
  });
}

exports.resetPassword = async (req, res) => {
  const { id } = req.params;
  try {
    var salt = crypto.randomBytes(16);
    crypto.pbkdf2(
      req.body.password,
      salt,
      310000,
      32,
      "sha256",
      async function (err, hashedPassword) {
        const data = await User.findByIdAndUpdate(id, { password: hashedPassword, salt }, { new: true });
        if (data) {
          res.send({ message: "Password has been reset" })
        } else {
          res.send({ err })
        }
      }
    );
  } catch (error) {
    res.status(400).json(error);
  }
};
