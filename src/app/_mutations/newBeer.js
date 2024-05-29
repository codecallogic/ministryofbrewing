import { gql } from '@apollo/client';

export default gql`
mutation newBeer(
    $name: String!,
    $abv: String!,
    $style: String!,
    $images: [ImageInputType!]!,
    $beerList: Boolean!,
    $taproomList: Boolean!,
    $token: String!
) {
  newBeer(
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