const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const loginHandle = async (req, res) => {
  try {
    //for login using mobile number
    const user = await User.findOne({
      number: req.body.number,
    });
    !user && res.status(401).json({ message: "Invalid Mobile Number" });
    //for password in login form
    //decoding user encypted password
    const decodedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_CODE
    ).toString(CryptoJS.enc.Utf8);
    console.log(decodedPassword);
    //if passowrd entered is not as the user password

    decodedPassword !== req.body.password &&
      res.json(401).json({ message: "Incorrecty Password" });

    const { password, ...rest } = user._doc;
    const accessToken = jwt.sign(
      {
        username: user.username,
      },
      process.env.ACCESS_TOKEN
    );
    res.status(200).json({ ...rest, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = loginHandle;
