const express = require('express')
const userRoute = express();

const { UserType } = require('../controllers/userController')

userRoute.get('/user', UserType)

module.exports = { userRoute }
