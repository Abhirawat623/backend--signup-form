const CryptoJS = require("crypto-js");

const User = require("../models/user.model");

const signUphandle = async (req, res) => {
  try {
    //for new user
    const newUser = new User({
      username: req.body.username,
      number: req.body.number,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_CODE
      ).toString(),
    });
    //for saved user
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: "ERROR CREATING USER" });
  }
};

module.exports = signUphandle;