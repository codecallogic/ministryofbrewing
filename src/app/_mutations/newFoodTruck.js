import { gql } from '@apollo/client';

export default gql`
mutation newFoodTruck(
    $name: String!,
    $images: [ImageInputType!]!,
    $token: String!
) {
  newFoodTruck(
    name: $name,
    images: $images,
    token: $token
) {
    message
  }
}
`;