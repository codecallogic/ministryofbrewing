import { gql } from '@apollo/client';

export default gql`
query allEvents($id: ID!, $token: String!) {
  allEvents(id: $id, token: $token){
    id,
    name,
    description,
    date,
    images {
      url
    }
  }
}`