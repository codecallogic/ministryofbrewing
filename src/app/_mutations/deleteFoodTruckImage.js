import { gql } from '@apollo/client';

export default gql`
mutation DeleteFoodTruckImage(
    $id: ID!,
    $images: [ImageInputType!]!,
    $url: String!
) {
  deleteFoodTruckImage (
    id: $id,
    images: $images,
    url: $url
) {
    message
  }
}
`;