const jwt = require('jsonwebtoken')

const createToken = (user) => {
    return jwt.sign({ user }, "secretkeymustbe40+above", {
        expiresIn: "30d"
    })
}

module.exports = { createToken }