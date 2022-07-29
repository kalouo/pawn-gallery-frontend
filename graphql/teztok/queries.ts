import { gql } from 'graphql-request';

export const ALL_USER_ASSETS_QUERY = gql`
  query Holdings($address: String!) {
    holdings(
      where: {
        amount: { _gt: "0" }
        token: { platform: { _eq: "FXHASH" } }
        holder_address: { _eq: $address }
      }
    ) {
      amount
      first_received_at
      token {
        fa2_address
        token_id
        name
        description
        thumbnail_uri
        platform
      }
    }
  }
`;
