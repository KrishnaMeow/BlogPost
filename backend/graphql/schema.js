const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Post {
    id: ID!
    title: String!
    content: String!
  }

  input PostInput {
    title: String!
    content: String!
  }

  type Query {
    posts: [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    addPost(postInput: PostInput): Post
  }
`);
