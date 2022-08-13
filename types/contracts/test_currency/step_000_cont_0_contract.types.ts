
import { ContractAbstractionFromContractType, WalletContractAbstractionFromContractType } from '../../type-utils';
import { address, BigMap, bytes, contract, MMap, mutez, nat, unit } from '../../type-aliases';

type Storage = {
    administrator: address;
    last_token_id: nat;
    ledger: BigMap<{
        0: address;
        1: nat;
    }, nat>;
    metadata: BigMap<string, bytes>;
    operators: BigMap<{
        owner: address;
        operator: address;
        token_id: nat;
    }, unit>;
    supply: BigMap<nat, nat>;
    token_metadata: BigMap<nat, {
        token_id: nat;
        token_info: MMap<string, bytes>;
    }>;
};

type Methods = {
    balance_of: (
        requests: Array<{
            owner: address;
            token_id: nat;
        }>,
        callback: contract,
    ) => Promise<void>;
    mint: (param: Array<{
            to_: address;
            token: (
                { existing: nat }
                | { new: MMap<string, bytes> }
            );
            amount: nat;
        }>) => Promise<void>;
    set_administrator: (param: address) => Promise<void>;
    set_metadata: (param: BigMap<string, bytes>) => Promise<void>;
    transfer: (param: Array<{
            from_: address;
            txs: Array<{
                to_: address;
                token_id: nat;
                amount: nat;
            }>;
        }>) => Promise<void>;
    add_operator: (
        owner: address,
        operator: address,
        token_id: nat,
    ) => Promise<void>;
    remove_operator: (
        owner: address,
        operator: address,
        token_id: nat,
    ) => Promise<void>;
    withdraw_mutez: (
        amount: mutez,
        destination: address,
    ) => Promise<void>;
};

type MethodsObject = {
    balance_of: (params: {
        requests: Array<{
            owner: address;
            token_id: nat;
        }>,
        callback: contract,
    }) => Promise<void>;
    mint: (param: Array<{
            to_: address;
            token: (
                { existing: nat }
                | { new: MMap<string, bytes> }
            );
            amount: nat;
        }>) => Promise<void>;
    set_administrator: (param: address) => Promise<void>;
    set_metadata: (param: BigMap<string, bytes>) => Promise<void>;
    transfer: (param: Array<{
            from_: address;
            txs: Array<{
                to_: address;
                token_id: nat;
                amount: nat;
            }>;
        }>) => Promise<void>;
    add_operator: (params: {
        owner: address,
        operator: address,
        token_id: nat,
    }) => Promise<void>;
    remove_operator: (params: {
        owner: address,
        operator: address,
        token_id: nat,
    }) => Promise<void>;
    withdraw_mutez: (params: {
        amount: mutez,
        destination: address,
    }) => Promise<void>;
};

type contractTypes = { methods: Methods, methodsObject: MethodsObject, storage: Storage, code: { __type: 'ContractsTestCurrencyStep000Cont0ContractCode', protocol: string, code: object[] } };
export type ContractsTestCurrencyStep000Cont0ContractContractType = ContractAbstractionFromContractType<contractTypes>;
export type ContractsTestCurrencyStep000Cont0ContractWalletType = WalletContractAbstractionFromContractType<contractTypes>;
