import { InMemorySigner } from '@taquito/signer';
import { ContractMethod, ContractProvider, TezosToolkit } from '@taquito/taquito';
import { assert } from 'console';

import { LoanCore, BorrowerNote, LenderNote, CollateralVault } from 'contract-types';

const PKEY = 'edsk3AiSAERPfe6yqS7Q4YAxBQ5L1NLUao2H9sP34x7u1tEkXB5bwX';
const PRECISION = Math.pow(10, 18);

const loadOriginations = () => {
  try {
    const deployments = require('./contracts/build/chinstrap_deployments.json');
    return deployments['chinstrap']['networks']['development'];
  } catch (e) {
    console.error('Chinstrap deployments file not found.');
  }
};

(async () => {
  const signer = await InMemorySigner.fromSecretKey(PKEY);
  const Tezos = new TezosToolkit('http://localhost:20000');
  Tezos.setProvider({ signer: signer });

  const { loan_core, collateral_vault, lender_note, borrower_note, test_currency } =
    loadOriginations();

  const loanCore = await Tezos.contract.at<LoanCore>(loan_core.address);
  const collateralVault = await Tezos.contract.at<CollateralVault>(collateral_vault.address);
  const lenderNote = await Tezos.contract.at<LenderNote>(lender_note.address);
  const borrowerNote = await Tezos.contract.at<BorrowerNote>(borrower_note.address);

  const { set_collateral_vault, set_loan_note_contracts, whitelist_currency } = loanCore.methods;

  let operations: {
    method: (...args: any) => ContractMethod<ContractProvider>;
    args: any[];
    msg: string;
  }[] = [
    {
      method: set_collateral_vault,
      args: [collateralVault.address],
      msg: 'Setting collateral vault ...',
    },
    {
      method: whitelist_currency,
      args: [test_currency.address, PRECISION],
      msg: 'Adding currency to the whitelist ...',
    },
    {
      method: set_loan_note_contracts,
      args: [borrower_note.address, lender_note.address],
      msg: 'Setting loan note contracts ...',
    },
    {
      method: collateralVault.methods.set_owner,
      args: [loanCore.address],
      msg: 'Setting collateral vault owner ...',
    },
    {
      method: lenderNote.methods.set_administrator,
      args: [loanCore.address],
      msg: 'Setting lender note admin ...',
    },
    {
      method: borrowerNote.methods.set_administrator,
      args: [loanCore.address],
      msg: 'Setting borrower note admin ...',
    },
  ];

  try {
    for (const operation of operations) {
      console.log('------', operation.msg);
      const tx = await operation.method(...operation.args).send();
      await tx.confirmation(1);
    }
  } catch (e) {
    console.error(e);
  }

  let loanCoreStorage = await loanCore.storage();
  let collateralVaultStorage = await collateralVault.storage();
  let borrowerNoteStorage = await borrowerNote.storage();
  let lenderNoteStorage = await lenderNote.storage();

  assert(loanCoreStorage.collateral_vault_address === collateralVault.address);
  assert(loanCoreStorage.lender_note_address === lenderNote.address);
  assert(loanCoreStorage.borrower_note_address === borrowerNote.address);
  assert(collateralVaultStorage.owner === loanCore.address);
  assert(borrowerNoteStorage.administrator === loanCore.address);
  assert(lenderNoteStorage.administrator === loanCore.address);

  assert(await loanCoreStorage.permitted_currencies.get(test_currency.address));
  assert((await loanCoreStorage.currency_precision.get(test_currency.address)).eq(PRECISION));
})();
