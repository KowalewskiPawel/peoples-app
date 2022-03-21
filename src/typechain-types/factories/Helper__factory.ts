/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Helper, HelperInterface } from "../Helper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IFollowNFT",
        name: "nft",
        type: "address",
      },
      {
        internalType: "address",
        name: "first",
        type: "address",
      },
      {
        internalType: "address",
        name: "second",
        type: "address",
      },
    ],
    name: "batchDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101b7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806342cbb15c1461003b578063ef2fbbc31461004e575b600080fd5b4360405190815260200160405180910390f35b61006161005c366004610136565b610063565b005b6040516317066a5760e21b81526001600160a01b038381166004830152841690635c19a95c90602401600060405180830381600087803b1580156100a657600080fd5b505af11580156100ba573d6000803e3d6000fd5b50506040516317066a5760e21b81526001600160a01b03848116600483015286169250635c19a95c9150602401600060405180830381600087803b15801561010157600080fd5b505af1158015610115573d6000803e3d6000fd5b50505050505050565b6001600160a01b038116811461013357600080fd5b50565b60008060006060848603121561014b57600080fd5b83356101568161011e565b925060208401356101668161011e565b915060408401356101768161011e565b80915050925092509256fea26469706673582212202a0e6784e967aea373a4a97f4743dc88b7601791f548bc0e3b8097f738dd6faf64736f6c634300080a0033";

type HelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Helper__factory extends ContractFactory {
  constructor(...args: HelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Helper> {
    return super.deploy(overrides || {}) as Promise<Helper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Helper {
    return super.attach(address) as Helper;
  }
  connect(signer: Signer): Helper__factory {
    return super.connect(signer) as Helper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelperInterface {
    return new utils.Interface(_abi) as HelperInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Helper {
    return new Contract(address, _abi, signerOrProvider) as Helper;
  }
}
