import { gql } from '@apollo/client';

export default gql`
query allFoodTrucks($id: ID!, $token: String!) {
  allFoodTrucks(id: $id, token: $token){
    name,
    images {
      url
    }
  }
}`