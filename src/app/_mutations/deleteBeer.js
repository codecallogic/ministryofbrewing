import { gql } from '@apollo/client';

export default gql`
mutation deleteBeer(
    $id: ID!,
    $token: String!
) {
  deleteBeer(
    id: $id,
    token: $token
) {
    message
  }
}
`;