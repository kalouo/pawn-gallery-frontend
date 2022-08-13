import { InMemorySigner } from '@taquito/signer';
import { ContractMethod, ContractProvider, TezosToolkit } from '@taquito/taquito';
import { assert } from 'console';

import { LoanCore, LoanNote, CollateralVault } from 'contract-types';

const PKEY = 'edsk3AiSAERPfe6yqS7Q4YAxBQ5L1NLUao2H9sP34x7u1tEkXB5bwX';
const LOAN_CORE_ADDR = 'KT1TAhGYwDELAnojqZKKdMjdxz17Nq4EBHcW';
const LOAN_NOTE_ADDR = 'KT1HjJeGHnQQyokL9Nr7ZouCt495w7hyY6SD';
const COLLATERAL_VAULT_ADDR = 'KT1Ua72KEs9seksDkPrkrYWrtm8uN74hFKzu';

(async () => {
  const signer = await InMemorySigner.fromSecretKey(PKEY);
  const Tezos = new TezosToolkit('http://localhost:20000');
  Tezos.setProvider({ signer: signer });

  const loanNote = await Tezos.contract.at<LoanNote>(LOAN_NOTE_ADDR);
  const loanCore = await Tezos.contract.at<LoanCore>(LOAN_CORE_ADDR);
  const collateralVault = await Tezos.contract.at<CollateralVault>(COLLATERAL_VAULT_ADDR);

  let operations: {
    method: (...args: any) => ContractMethod<ContractProvider>;
    args: (string | number)[];
  }[] = [{ method: loanCore.methods.set_collateral_vault, args: [collateralVault.address] }];

  try {
    for (const operation of operations) {
      const tx = await operation.method(...operation.args).send();
      await tx.confirmation(1);
    }
  } catch (e) {
    console.error(e);
  }

  let storage = await loanCore.storage();
  assert(storage.collateral_vault_address === collateralVault.address);

  /* Set collateral vault owner */
  /* Set collateral vault in loanCore */
  /* Whitelist currencies */
  /* Mint fungibles */
  /* Whitelist non-fungibles */
  /* Set lender and borrower note addresses */
  /* Set lender and borrower note admin as loanCore */
  /* Set interest fee and processing fee */
})();
