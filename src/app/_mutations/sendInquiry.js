import { gql } from '@apollo/client';

export default gql`
mutation sendInquiry(
    $name: String!,
    $email: String!,
    $date: String!,
    $guests: String!,
    $description: String!
) {
  sendInquiry(
    name: $name,
    email: $email,
    date: $date,
    guests: $guests,
    description: $description
) {
    message
  }
}
`;