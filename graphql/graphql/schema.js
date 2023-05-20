const { GraphQLObjectType, GraphQLSchema } = require('graphql')

const { users, user } = require('./queries')

const { registerUser, updateUser, deleteUser } = require('./mutation')

// Define QueryType
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "Queries",
    fields: { users, user }
})

// Define Mutation Type
const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Mutations",
    fields: { registerUser, updateUser, deleteUser }
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})