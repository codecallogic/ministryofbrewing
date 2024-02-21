import { gql } from '@apollo/client';

export default gql`
mutation updateBeer(
    $id: ID!,
    $name: String!,
    $avb: String!,
    $style: String!,
    $images: [ImageInputType!]!
) {
  updateBeer(
    id: $id,
    name: $name,
    avb: $avb,
    style: $style,
    images: $images
) {
    message
  }
}
`;