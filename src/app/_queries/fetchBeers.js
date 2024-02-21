import { gql } from '@apollo/client';

export default gql`
query allBeers($id: ID!, $token: String!) {
  allBeers(id: $id, token: $token){
    id,
    name,
    avb,
    style,
    images {
      url
    }
  }
}`