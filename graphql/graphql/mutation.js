const { GraphQLString, GraphQLID } = require('graphql')
const { UserType } = require('./types')
const User = require('../model/userModel')

const registerUser = {
    type: GraphQLString,
    args: {
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent, args) {
        const { name, address, email, password } = args
        const user = new User({ name, address, email, password })

        await user.save()
        return JSON.stringify({
            success: true,
            message: "User register successfully"
        })
    }
}

const updateUser = {
    type: UserType,
    description: "update user",
    args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent, args) {
        const userUpdated = await User.findByIdAndUpdate(
            { _id: args.id },
            { name: args.name, address: args.address, email: args.email, password: args.password },
        )
        if (!userUpdated) {
            throw new Error("No user find by id")
        }
        return userUpdated;
    }
}

const deleteUser = {
    type: UserType,
    description: "delete user",
    args: { id: { type: GraphQLID } },
    async resolve(parent, args) {
        const userDeleted = await User.findByIdAndDelete({
            _id: args.id
        })
        if (!userDeleted) {
            throw new Error("No user deleted")
        }
        return userDeleted
    }
}

module.exports = { registerUser, updateUser, deleteUser }