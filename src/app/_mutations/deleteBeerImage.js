import { gql } from '@apollo/client';

export default gql`
mutation DeleteBeerImage(
    $id: ID!,
    $images: [ImageInputType!]!,
    $url: String!,
    $token: String!
) {
  deleteBeerImage (
    id: $id,
    images: $images,
    url: $url,
    token: $token
) {
    message
  }
}
`;