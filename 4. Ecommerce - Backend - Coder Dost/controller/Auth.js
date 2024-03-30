require("dotenv").config();
const { User } = require("../model/User.js");

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
      .json(req.user);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.checkAuth = async (req, res) => {
  if(req.user) {
    res.json(req.user);
  } else {
    res.sendStatus(401);
  }
};