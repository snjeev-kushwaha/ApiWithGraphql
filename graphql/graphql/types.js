const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql')
const User = require('../model/userModel')

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'This represents a User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
    }),
});

module.exports = { UserType }