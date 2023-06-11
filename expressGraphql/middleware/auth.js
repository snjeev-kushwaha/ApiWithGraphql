const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1] || ""

    try {
        const verified = await jwt.verify(token, 'secretkeymustbe40+above')
        req.verifiedUser = verified.user
        console.log("verification success", verified)
        next()
    }
    catch (err) {
        console.log("verification failed", err)
        next()
    }
}

module.exports = { authenticate }