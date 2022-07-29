import { gql } from 'graphql-request';
import useSWR from 'swr';
import { requestor } from '.';

export const queryToken = (args: Record<string, unknown>) => {
  return constructQuery(TOKEN_QUERY, args)();
};

export const queryUserAssets = (args: Record<string, unknown>) => {
  return constructQuery(ALL_USER_ASSETS_QUERY, args)();
};

const constructQuery = (query: string, args: Record<string, unknown>) => {
  return () => useSWR([query, args], requestor);
};

const ALL_USER_ASSETS_QUERY = gql`
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

const TOKEN_QUERY = gql`
  query Token($tokenAddress: String!, $tokenId: String!) {
    tokens(where: { fa2_address: { _eq: $tokenAddress }, token_id: { _eq: $tokenId } }) {
      name
      description
      platform
      thumbnail_uri
    }
  }
`;
