import { gql } from '@apollo/client';

export default gql`
mutation updateBeer(
    $id: ID!,
    $name: String!,
    $abv: String!,
    $style: String!,
    $images: [ImageInputType!]!,
    $beerList: Boolean!,
    $taproomList: Boolean!,
    $token: String!
) {
  updateBeer(
    id: $id,
    name: $name,
    abv: $abv,
    style: $style,
    images: $images,
    beerList: $beerList,
    taproomList: $taproomList,
    token: $token
) {
    message
  }
}
`;