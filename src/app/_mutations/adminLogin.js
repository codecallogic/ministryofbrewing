import { gql } from '@apollo/client';

export default gql`
mutation adminLogin($email: String!, $password: String!) {
  adminLogin(email: $email, password: $password) {
    id,
    email,
    token
  }
}
`;