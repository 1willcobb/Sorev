import { gql } from "@apollo/client";

export const GET_USER = gql`
  query {
    me {
      _id
      username
      firstName
      lastName
      email
      profilePic
    }
  }
`;

