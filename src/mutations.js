import { gql } from '@apollo/client';

export const REGISTER_TENANT = gql`
  mutation RegisterTenant(
    $name: String!
    $email: String!
    $password: String!
    $phone: String
  ) {
    registerTenant(
      name: $name
      email: $email
      password: $password
      phone: $phone
    ) {
      token
      tenant {
        id
        name
      }
    }
  }
`;

export const ADD_LOCATION = gql`
  mutation AddLocation(
    $tenantId: ID!
    $name: String!
    $address: String!
    $city: String!
    $photos: [String!]!
  ) {
    addLocation(
      tenantId: $tenantId
      name: $name
      address: $address
      city: $city
      photos: $photos
    ) {
      id
      name
      city
    }
  }
`;