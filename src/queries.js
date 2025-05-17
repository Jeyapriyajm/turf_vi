import { gql } from "@apollo/client";

export const GET_BOOKNATIC_TENANT = gql`
  query GetBookneticTenant($id: ID) {
    bookneticTenant(id: $id) {
      id
      full_name
      email
      domain
      plan_id
      expires_in
      custom_fields {
        form_input_id
        label
        type
        input_value
        input_file_name
        file_url
      }
    }
  }
`;

export const GET_BOOKNATIC_LOCATIONS = gql`
  query GetBookneticLocations(
    $tenant_id: ID
    $city: String
    $country: String
    $category: String
  ) {
    bookneticLocations(
      tenant_id: $tenant_id
      city: $city
      country: $country
      category: $category
    ) {
      id
      name
      address
      city
      country
      image
      category
      services {
        id
        name
        price
        duration
        category
      }
    }
  }
`;

export const GET_BOOKNATIC_LOCATION = gql`
  query GetBookneticLocation($id: ID!, $tenant_id: ID) {
    bookneticLocation(id: $id, tenant_id: $tenant_id) {
      id
      name
      address
      city
      country
      image
      category
      services {
        id
        name
        price
        duration
        category
      }
    }
  }
`;