export interface Holding {
  amount: number;
  token: {
    fa2_address: string;
    token_id: number;
    name: string;
    description: string;
    thumbnail_uri: string;
    platform: string;
  };
}

export interface Collateral {
  name: string;
  description: string;
  platform: string;
  thumbnail_uri: string;
}
