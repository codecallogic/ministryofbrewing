import { gql } from '@apollo/client';

export default gql`
mutation DeleteFoodTruckImage(
    $id: ID!,
    $images: [ImageInputType!]!,
    $url: String!,
    $token: String
) {
  deleteFoodTruckImage (
    id: $id,
    images: $images,
    url: $url,
    token: $token
) {
    message
  }
}
`;