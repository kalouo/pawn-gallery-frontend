import request from 'graphql-request';

export const requestor = (query: string, variables: Record<string, unknown>) => {
  return request('https://api.teztok.com/v1/graphql', query, variables);
};
