import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      email
      username
      token
    }
  }
`;

export const REGISTER_USER = gql`
  mutation Mutation($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      email
      username
      token
    }
  }
`;



// export const SAVE_TASK = gql`
//   mutation saveTask($input: SavedTaskInput) {
//     saveTask(input: $input) {
//       _id
//       username
//       email
//       savedTasks {
//         activity
//         type
//         participants
//         price
//         link
//         key
//         accessibility
//       }
//     }
//   }
// `;

// export const REMOVE_TASK = gql`
//   mutation removeTask($key: String!) {
//     removeTask(key: $key) {
//       _id
//       username
//       email
//       savedTasks {
//         activity
//         type
//         participants
//         price
//         link
//         key
//         accessibility
//       }
//     }
//   }
// `;
