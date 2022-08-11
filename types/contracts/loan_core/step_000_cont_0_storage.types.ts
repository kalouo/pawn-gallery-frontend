import {
  ContractAbstractionFromContractType,
  WalletContractAbstractionFromContractType,
} from './type-utils';
import {} from './type-aliases';

type Storage = {};

type Methods = {};

type MethodsObject = {};

type contractTypes = {
  methods: Methods;
  methodsObject: MethodsObject;
  storage: Storage;
  code: { __type: 'ContractsLoanCoreStep000Cont0StorageCode'; protocol: string; code: object[] };
};
export type ContractsLoanCoreStep000Cont0StorageContractType =
  ContractAbstractionFromContractType<contractTypes>;
export type ContractsLoanCoreStep000Cont0StorageWalletType =
  WalletContractAbstractionFromContractType<contractTypes>;
