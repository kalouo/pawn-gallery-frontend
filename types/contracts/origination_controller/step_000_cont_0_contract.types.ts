
import { ContractAbstractionFromContractType, WalletContractAbstractionFromContractType } from '../../type-utils';
import { address, BigMap, int, nat } from '../../type-aliases';

type Storage = {
    loan_manager: address;
    owner: address;
    request_id: nat;
    requests_by_id: BigMap<nat, {
        collateral_contract: address;
        collateral_token_id: nat;
        creator: address;
        interest_amount: nat;
        loan_denomination_contract: address;
        loan_denomination_token_id: nat;
        loan_duration: int;
        loan_principal_amount: nat;
        time_adjustable_interest: boolean;
    }>;
};

type Methods = {
    cancel_request: (param: nat) => Promise<void>;
    create_request: (
        collateral_contract: address,
        collateral_token_id: nat,
        interest_amount: nat,
        loan_denomination_contract: address,
        loan_denomination_token_id: nat,
        loan_duration: int,
        loan_principal_amount: nat,
        time_adjustable_interest: boolean,
    ) => Promise<void>;
    originate_loan: (param: nat) => Promise<void>;
    set_loan_manager: (param: address) => Promise<void>;
    set_owner: (param: address) => Promise<void>;
};

type MethodsObject = {
    cancel_request: (param: nat) => Promise<void>;
    create_request: (params: {
        collateral_contract: address,
        collateral_token_id: nat,
        interest_amount: nat,
        loan_denomination_contract: address,
        loan_denomination_token_id: nat,
        loan_duration: int,
        loan_principal_amount: nat,
        time_adjustable_interest: boolean,
    }) => Promise<void>;
    originate_loan: (param: nat) => Promise<void>;
    set_loan_manager: (param: address) => Promise<void>;
    set_owner: (param: address) => Promise<void>;
};

type contractTypes = { methods: Methods, methodsObject: MethodsObject, storage: Storage, code: { __type: 'ContractsOriginationControllerStep000Cont0ContractCode', protocol: string, code: object[] } };
export type ContractsOriginationControllerStep000Cont0ContractContractType = ContractAbstractionFromContractType<contractTypes>;
export type ContractsOriginationControllerStep000Cont0ContractWalletType = WalletContractAbstractionFromContractType<contractTypes>;
