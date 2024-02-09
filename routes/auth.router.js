const express = require('express');

const signUpHandle = require("../backend/controllers/signUpcontroller");

const logInHandle = require("../backend/controllers/logInController");

const signUpRouter= express.Router();
const logInRouter = express.Router();

signUpRouter.route("/signup").post(signUpHandle);
logInRouter.route("/login").post(logInHandle);

module.exports = {signUpRouter,logInRouter}
