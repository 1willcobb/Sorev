const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    videos: [Video]
  }

  type S3Payload {
    signedRequest: String!,
    url: String!,
  }

  type Video {
    _id: ID
    videoAuthor: String
    createdAt: String
    key: String!
    url: String!
  }

  # type Auth {
  #   token: ID!
  #   user: User
  # }

  type Query {
    users: [User]
    getVideo(key: String!): Video
  }
`;

module.exports = typeDefs;
