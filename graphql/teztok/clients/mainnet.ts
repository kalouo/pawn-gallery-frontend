import request, { gql } from 'graphql-request';
import useSWR from 'swr';

import { Client } from './abstract';

const requestor = (query: string, variables: Record<string, unknown>) => {
  return request('https://api.teztok.com/v1/graphql', query, variables);
};

export class Teztok implements Client {
  public async getHoldings(args: { address: string }) {
    const { data, error } = this.constructQuery(ALL_USER_ASSETS_QUERY, { address: args.address })();
    return { data: data?.holdings, isLoading: !error && !data, isError: error };
  }

  public getCollateral(collateralContractAddress: string, collateralTokenId: string) {
    const { data, error } = this.constructQuery(TOKEN_QUERY, {
      tokenAddress: collateralContractAddress,
      tokenId: collateralTokenId,
    })();
    return { data: data?.tokens[0], isLoading: !error && !data, isError: error };
  }

  private constructQuery(query: string, args: Record<string, unknown>) {
    return () => useSWR([query, args], requestor);
  }
}

/* GraphQL queries */

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
