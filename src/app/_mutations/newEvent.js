import { gql } from '@apollo/client';

export default gql`
mutation newEvent(
    $name: String!,
    $description: String!,
    $date: String!,
    $images: [ImageInputType!]!,
    $token: String!
) {
  newEvent(
    name: $name,
    description: $description,
    date: $date,
    images: $images,
    token: $token
) {
    message
  }
}
`;