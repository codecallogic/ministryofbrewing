import { gql } from '@apollo/client';

export default gql`
mutation deleteEvent(
    $id: ID!,
    $token: String!
) {
  deleteEvent(
    id: $id,
    token: $token
) {
    message
  }
}
`;