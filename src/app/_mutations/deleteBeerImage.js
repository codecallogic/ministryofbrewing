import { gql } from '@apollo/client';

export default gql`
mutation DeleteBeerImage(
    $id: ID!,
    $images: [ImageInputType!]!,
    $url: String!
) {
  deleteBeerImage (
    id: $id,
    images: $images,
    url: $url
) {
    message
  }
}
`;