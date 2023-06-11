const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const { users, user, posts, post, comments, comment } = require('./queries')

const { registerUser, login, addPost } = require('./mutations')

//Define QueryType
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "Queries",
    fields: { users, user, posts, post }
})

//Define MutationType
const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Queries",
    fields: { registerUser, login, addPost }
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})