const { GraphQLList, GraphQLID } = require('graphql')
const { UserType, PostType, CommentType } = require('./type')
const { User, Post, Comment } = require('../models')

const users = {
    type: new GraphQLList(UserType),
    description: "Retrives list of users",
    resolve(parent, args) {
        return User.find();
    }
}

const user = {
    type: UserType,
    description: "Retrives list of a Single user",
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return User.findById(args.id)
    }
}

const posts = {
    type: new GraphQLList(PostType),
    description: "Retrives list of posts",
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return Post.find()
    }
}

const post = {
    type: PostType,
    description: "Retrives list of a single post",
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return Post.findById(args.id)
    }
}

const comments = {
    type: new GraphQLList(CommentType),
    description: "Retrives list of comments",
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return Comment.find()
    }
}

const comment = {
    type: CommentType,
    description: "Retrives list of a single comment",
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return Comment.findById(args.id)
    }
}

module.exports = { users, user, posts, post, comments, comment }