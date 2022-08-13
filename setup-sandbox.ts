import { InMemorySigner } from '@taquito/signer';
import { ContractMethod, ContractProvider, TezosToolkit } from '@taquito/taquito';
import { assert } from 'console';
import { BigNumber } from 'bignumber.js';

import { LoanCore, LoanNote, CollateralVault, FA2Fungible } from 'contract-types';
import { address } from 'types/type-aliases';

const PKEY = 'edsk3AiSAERPfe6yqS7Q4YAxBQ5L1NLUao2H9sP34x7u1tEkXB5bwX';

const LOAN_CORE_ADDR = 'KT1UY1Dsv3M3XjeAJzhy4LU1afk2WudT7BUb';
const COLLATERAL_VAULT_ADDR = 'KT1L3Htvug31QZ9KKqosxejzgWDsWm4gBQMt';
const TEST_CURRENCY_ADDR = 'KT1UZTcu6erpnPt3bSmF5eDhy4MTuX1xDDX5' as address;
const PRECISION = Math.pow(10, 18);
// const TEST_NFT_ADDR = 'KT1Poh9nicJJCKFKeWn62uWxso63EZSRvVYU';
// const BORROWER_NOTE_ADDR = 'KT1HjJeGHnQQyokL9Nr7ZouCt495w7hyY6SD';

(async () => {
  const signer = await InMemorySigner.fromSecretKey(PKEY);
  const Tezos = new TezosToolkit('http://localhost:20000');
  Tezos.setProvider({ signer: signer });

  // const borrowerNote = await Tezos.contract.at<LoanNote>(LOAN_NOTE_ADDR);
  const loanCore = await Tezos.contract.at<LoanCore>(LOAN_CORE_ADDR);
  const collateralVault = await Tezos.contract.at<CollateralVault>(COLLATERAL_VAULT_ADDR);
  const testCurrency = await Tezos.contract.at<FA2Fungible>(TEST_CURRENCY_ADDR);

  let operations: {
    method: (...args: any) => ContractMethod<ContractProvider>;
    args: any[];
  }[] = [
    { method: loanCore.methods.set_collateral_vault, args: [collateralVault.address] },
    { method: loanCore.methods.whitelist_currency, args: [TEST_CURRENCY_ADDR, PRECISION] },
    // { method: loanCore.methods.set_loan_note_contracts, args: [] },

    { method: collateralVault.methods.set_owner, args: [loanCore.address] },
  ];

  try {
    // for (const operation of operations) {
    //   const tx = await operation.method(...operation.args).send();
    //   await tx.confirmation(1);
    // }
  } catch (e) {
    console.error(e);
  }

  let loanCoreStorage = await loanCore.storage();
  let collateralVaultStorage = await collateralVault.storage();

  // console.log(loanCoreStorage);
  assert(loanCoreStorage.collateral_vault_address === collateralVault.address);
  assert(await loanCoreStorage.permitted_currencies.get(TEST_CURRENCY_ADDR));
  assert((await loanCoreStorage.currency_precision.get(TEST_CURRENCY_ADDR)).eq(PRECISION));

  assert(collateralVaultStorage.owner === loanCore.address);

  /* Mint fungibles */
  /* Mint non-fungibles */
  /* Set lender and borrower note addresses */
  /* Set lender and borrower note admin as loanCore */
})();
