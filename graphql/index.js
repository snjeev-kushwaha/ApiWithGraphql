const express = require('express')
require('dotenv').config()
const connectDb = require('./config/db')
const { graphqlHTTP } = require('express-graphql')
const app = express()

connectDb()

const schema = require('./graphql/schema')

app.get('/', (req, res)=>{
    res.json({message: 'get all users'})
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(process.env.PORT, (err) => {
    console.log(`server is started on port http://localhost:${process.env.PORT}`)
})
