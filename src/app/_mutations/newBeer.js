import { gql } from '@apollo/client';

export default gql`
mutation newBeer(
    $name: String!,
    $abv: String!,
    $style: String!,
    $images: [ImageInputType!]!
) {
  newBeer(
    name: $name,
    abv: $abv,
    style: $style,
    images: $images
) {
    message
  }
}
`;