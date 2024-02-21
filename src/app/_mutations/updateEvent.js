import { gql } from '@apollo/client';

export default gql`
mutation updateEvent(
    $id: ID!,
    $name: String!,
    $description: String!,
    $date: String!
) {
  updateEvent(
    id: $id,
    name: $name,
    description: $description,
    date: $date
) {
    message
  }
}
`;