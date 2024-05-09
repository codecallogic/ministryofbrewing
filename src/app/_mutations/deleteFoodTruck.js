import { gql } from '@apollo/client';

export default gql`
mutation deleteFoodTruck(
    $id: ID!
) {
  deleteFoodTruck(
    id: $id
) {
    message
  }
}
`;