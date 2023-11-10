import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation addUser(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation Mutation(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $profilePic: String!
  ) {
    updateUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      profilePic: $profilePic
    ) {
      username
      firstName
      lastName
      email
      profilePic
    }
  }
`;
