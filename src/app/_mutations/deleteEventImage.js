import { gql } from '@apollo/client';

export default gql`
mutation DeleteEventImage(
    $id: ID!,
    $images: [ImageInputType!]!,
    $url: String!
) {
  deleteEventImage (
    id: $id,
    images: $images,
    url: $url
) {
    message
  }
}
`;