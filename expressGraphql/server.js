const express = require('express')
require('dotenv').config()
const { connectDb } = require('./config/connection')
const { graphqlHTTP } = require('express-graphql')
const app = express()

const PORT = 5000;

app.use(express.json())
connectDb()

const schema = require('./controllers/schema')
const { createToken } = require('./utils/validateToken')
const { authenticate } = require('./middleware/auth')

app.get('/', (req, res) => {
    res.status(200).json({ message: "Get All Data" })
})

app.get('/auth', (req, res) => {
    res.json(
        createToken({
            username: "chotu",
            email: "chotu@gmail.com",
            displayName: "chotu singh"
        })
    )
})

app.use(authenticate)

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(PORT, (err) => {
    console.log(`server is started on port http://localhost:${PORT}`)
})