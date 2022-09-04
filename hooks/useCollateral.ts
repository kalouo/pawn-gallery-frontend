import Teztok from 'graphql/teztok';

export const useCollateral = (collateralContractAddress: string, collateralTokenId: string) => {
  return Teztok.getCollateral(collateralContractAddress, collateralTokenId);
};
