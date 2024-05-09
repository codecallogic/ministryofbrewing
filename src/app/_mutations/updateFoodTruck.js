import { gql } from '@apollo/client';

export default gql`
mutation updateFoodTruck(
    $id: ID!,
    $name: String!,
    $images: [ImageInputType!]!,
    $oldImages: [ImageInputType!]!
) {
  updateFoodTruck(
    id: $id,
    name: $name,
    images: $images,
    oldImages: $oldImages
) {
    message
  }
}
`;