import { gql } from '@apollo/client';

export default gql`
mutation newFoodTruck(
    $name: String!,
    $images: [ImageInputType!]!
) {
  newFoodTruck(
    name: $name,
    images: $images
) {
    message
  }
}
`;