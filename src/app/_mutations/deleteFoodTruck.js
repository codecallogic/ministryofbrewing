import { gql } from '@apollo/client';

export default gql`
mutation deleteFoodTruck(
    $id: ID!,
    $token: String!
) {
  deleteFoodTruck(
    id: $id,
    token: $token
) {
    message
  }
}
`;