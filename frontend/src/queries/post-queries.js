import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query {
    posts {
      id
      title
      content
    }
  }
`;

export const ADD_POST = gql`
  mutation AddPost($postInput: PostInput!) {
    addPost(postInput: $postInput) {
      id
      title
      content
    }
  }
`;

export const GET_POST_ID = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      content
    }
  }
`;
