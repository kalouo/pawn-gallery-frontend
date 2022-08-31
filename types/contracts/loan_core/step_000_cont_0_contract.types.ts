
import { ContractAbstractionFromContractType, WalletContractAbstractionFromContractType } from '../../type-utils';
import { address, BigMap, int, nat, timestamp } from '../../type-aliases';

type Storage = {
    borrower_note_address: address;
    collateral_vault_address: address;
    currency_precision: BigMap<address, nat>;
    interest_fee: nat;
    lender_note_address: address;
    loan_id: nat;
    loans_by_id: BigMap<nat, {
        collateral_contract: address;
        collateral_token_id: nat;
        interest_amount: nat;
        loan_denomination_contract: address;
        loan_denomination_token_id: nat;
        loan_duration: int;
        loan_origination_timestamp: timestamp;
        loan_principal_amount: nat;
        time_adjustable_interest: boolean;
    }>;
    origination_controllers: BigMap<address, boolean>;
    owner: address;
    permitted_currencies: BigMap<address, boolean>;
    processing_fee: nat;
};

type Methods = {
    add_origination_controller: (param: address) => Promise<void>;
    claim: (param: nat) => Promise<void>;
    repay: (param: nat) => Promise<void>;
    set_collateral_vault: (param: address) => Promise<void>;
    set_interest_fee: (param: nat) => Promise<void>;
    set_loan_note_contracts: (
        borrower_note_address: address,
        lender_note_address: address,
    ) => Promise<void>;
    set_processing_fee: (param: nat) => Promise<void>;
    start_loan: (
        borrower: address,
        collateral_contract: address,
        collateral_token_id: nat,
        interest_amount: nat,
        lender: address,
        loan_denomination_contract: address,
        loan_denomination_token_id: nat,
        loan_duration: int,
        loan_principal_amount: nat,
        time_adjustable_interest: boolean,
    ) => Promise<void>;
    whitelist_currency: (
        currency: address,
        precision: nat,
    ) => Promise<void>;
};

type MethodsObject = {
    add_origination_controller: (param: address) => Promise<void>;
    claim: (param: nat) => Promise<void>;
    repay: (param: nat) => Promise<void>;
    set_collateral_vault: (param: address) => Promise<void>;
    set_interest_fee: (param: nat) => Promise<void>;
    set_loan_note_contracts: (params: {
        borrower_note_address: address,
        lender_note_address: address,
    }) => Promise<void>;
    set_processing_fee: (param: nat) => Promise<void>;
    start_loan: (params: {
        borrower: address,
        collateral_contract: address,
        collateral_token_id: nat,
        interest_amount: nat,
        lender: address,
        loan_denomination_contract: address,
        loan_denomination_token_id: nat,
        loan_duration: int,
        loan_principal_amount: nat,
        time_adjustable_interest: boolean,
    }) => Promise<void>;
    whitelist_currency: (params: {
        currency: address,
        precision: nat,
    }) => Promise<void>;
};

type contractTypes = { methods: Methods, methodsObject: MethodsObject, storage: Storage, code: { __type: 'ContractsLoanCoreStep000Cont0ContractCode', protocol: string, code: object[] } };
export type ContractsLoanCoreStep000Cont0ContractContractType = ContractAbstractionFromContractType<contractTypes>;
export type ContractsLoanCoreStep000Cont0ContractWalletType = WalletContractAbstractionFromContractType<contractTypes>;
