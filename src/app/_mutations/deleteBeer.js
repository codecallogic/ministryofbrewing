import { gql } from '@apollo/client';

export default gql`
mutation deleteBeer(
    $id: ID!
) {
  deleteBeer(
    id: $id
) {
    message
  }
}
`;