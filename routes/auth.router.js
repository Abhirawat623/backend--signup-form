const express = require('express');

const signUpHandle = require("../controllers/signUpcontroller");

const logInHandle = require("../controllers/logInController");

const signUpRouter= express.Router();
const logInRouter = express.Router();

signUpRouter.route("/register").post(signUpHandle);
logInRouter.route("/login").post(logInHandle);

module.exports = {signUpRouter,logInRouter}
