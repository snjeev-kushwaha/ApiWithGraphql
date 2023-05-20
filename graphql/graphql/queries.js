const { GraphQLList, GraphQLID } = require('graphql')
const { UserType } = require('./types')
const User = require('../model/userModel')

const users = {
    type: new GraphQLList(UserType),
    description: "Retrives list of users",
    resolve(parent, args) {
        return User.find()
    }
}

const user = {
    type: UserType,
    description: "Retrives list of a Single user",
    args:{id: { type: GraphQLID }},
    resolve(parent, args) {
        return User.findById(args.id)
    }
}

module.exports = { users, user }