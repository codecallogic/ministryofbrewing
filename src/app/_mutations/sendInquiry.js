import { gql } from '@apollo/client';

export default gql`
mutation sendInquiry(
    $name: String!,
    $email: String!,
    $phone: String!,
    $guests: String!,
    $description: String!
) {
  sendInquiry(
    name: $name,
    email: $email,
    phone: $phone,
    guests: $guests,
    description: $description
) {
    message
  }
}
`;