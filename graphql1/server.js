const express = require('express')
const port = 5000;
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')
const app = express()

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "Hello World !"
      }
    })
  })
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))


app.listen(port, (err) => {
  console.log(`server is started on port http://localhost:${port}`)
})


// const express = require('express')
// const port = 5000;
// const { graphqlHTTP } = require('express-graphql')
// const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull } = require('graphql')
// const app = express()

// const authors = {
//   1: { id: 1, name: 'John' },
//   2: { id: 2, name: 'Emily' },
//   3: { id: 3, name: 'Michael' }
// };

// const books = [
//   { id: 1, name: 'Book 1', authorId: 1 },
//   { id: 2, name: 'Book 2', authorId: 2 },
//   { id: 3, name: 'Book 3', authorId: 3 },
//   { id: 4, name: 'Book 4', authorId: 1 },
//   { id: 5, name: 'Book 5', authorId: 2 },
//   { id: 6, name: 'Book 6', authorId: 3 },
//   { id: 7, name: 'Book 7', authorId: 1 },
//   { id: 8, name: 'Book 8', authorId: 2 }
// ];

// const BookType = new GraphQLObjectType({
//   name: 'Book',
//   description: 'This represents a book  written by an author',
//   fields: () => ({
//     id: { type: GraphQLNonNull(GraphQLInt) },
//     name: { type: GraphQLNonNull(GraphQLString) },
//     authorId: { type: GraphQLNonNull(GraphQLInt) },
//     author: {
//       type: AuthorType,
//       resolve: (book) => {
//         return Object.values(authors).find(author => author.id === book.authorId)
//       }
//     }
//   })
// })

// const AuthorType = new GraphQLObjectType({
//   name: 'Author',
//   description: 'This represents an author of a book',
//   fields: () => ({
//     id: { type: GraphQLNonNull(GraphQLInt) },
//     name: { type: GraphQLNonNull(GraphQLString) },
//     books: {
//       type: new GraphQLList(BookType),
//       resolve: (author) => {
//         return books.filter(book => book.authorId === author.id)
//       }
//     }
//   })
// })

// const RootQueryType = new GraphQLObjectType({
//   name: 'Query',
//   description: 'Root Query',
//   fields: () => ({
//     book: {
//       type: BookType,
//       description: 'A Single book',
//       args: {
//         id: { type: GraphQLInt }
//       },
//       resolve: (parent, args) => books.find(book => book.id === args.id)
//     },
//     books: {
//       type: new GraphQLList(BookType),
//       description: 'List of All Books',
//       resolve: () => books
//     },
//     authors: {
//       type: new GraphQLList(AuthorType),
//       description: 'List of all Authors',
//       resolve: () => Object.values(authors)
//     },
//     author: {
//       type: AuthorType,
//       description: 'A Single Author',
//       args: {
//         id: { type: GraphQLInt }
//       },
//       resolve: (parent, args) => Object.values(authors).find(author => author.id === args.id)
//     }
//   })  
// })

// const schema = new GraphQLSchema({
//   query: RootQueryType
// })

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   graphiql: true
// }))


// app.listen(port, (err) => {
//   console.log(`server is started on port http://localhost:${port}`)
// })
