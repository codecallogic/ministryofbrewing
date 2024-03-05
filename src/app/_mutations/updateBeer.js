import { gql } from '@apollo/client';

export default gql`
mutation updateBeer(
    $id: ID!,
    $name: String!,
    $abv: String!,
    $style: String!,
    $images: [ImageInputType!]!
) {
  updateBeer(
    id: $id,
    name: $name,
    abv: $abv,
    style: $style,
    images: $images
) {
    message
  }
}
`;