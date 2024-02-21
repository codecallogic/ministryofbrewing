import { gql } from '@apollo/client';

export default gql`
mutation newBeer(
    $name: String!,
    $avb: String!,
    $style: String!,
    $images: [ImageInputType!]!
) {
  newBeer(
    name: $name,
    avb: $avb,
    style: $style,
    images: $images
) {
    message
  }
}
`;