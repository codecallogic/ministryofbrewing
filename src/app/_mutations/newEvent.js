import { gql } from '@apollo/client';

export default gql`
mutation newEvent(
    $name: String!,
    $description: String!,
    $date: String!
) {
  newEvent(
    name: $name,
    description: $description,
    date: $date
) {
    message
  }
}
`;