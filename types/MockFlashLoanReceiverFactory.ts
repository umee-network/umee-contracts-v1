/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockFlashLoanReceiver } from "./MockFlashLoanReceiver";

export class MockFlashLoanReceiverFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    provider: string,
    overrides?: Overrides
  ): Promise<MockFlashLoanReceiver> {
    return super.deploy(
      provider,
      overrides || {}
    ) as Promise<MockFlashLoanReceiver>;
  }
  getDeployTransaction(
    provider: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(provider, overrides || {});
  }
  attach(address: string): MockFlashLoanReceiver {
    return super.attach(address) as MockFlashLoanReceiver;
  }
  connect(signer: Signer): MockFlashLoanReceiverFactory {
    return super.connect(signer) as MockFlashLoanReceiverFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockFlashLoanReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockFlashLoanReceiver;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_premiums",
        type: "uint256[]",
      },
    ],
    name: "ExecutedWithFail",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_premiums",
        type: "uint256[]",
      },
    ],
    name: "ExecutedWithSuccess",
    type: "event",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LENDING_POOL",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "amountToApprove",
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
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "premiums",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "executeOperation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToApprove",
        type: "uint256",
      },
    ],
    name: "setAmountToApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "fail",
        type: "bool",
      },
    ],
    name: "setFailExecutionTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
    ],
    name: "setSimulateEOA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "simulateEOA",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610a8c380380610a8c8339818101604052602081101561003357600080fd5b50516001600160601b0319606082901b1660805260408051630261bf8b60e01b8152905182916001600160a01b03831691630261bf8b91600480820192602092909190829003018186803b15801561008a57600080fd5b505afa15801561009e573d6000803e3d6000fd5b505050506040513d60208110156100b457600080fd5b5051606081811b6001600160601b03191660a052608051901c92506001600160a01b031690506109906100fc6000398061070852806108b952508061038952506109906000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063b4dcfc771161005b578063b4dcfc7714610329578063bb271c4d14610331578063bf443f851461034b578063e9a6a25b1461036857610088565b80630542975c1461008d578063388f70f1146100b15780634444f331146100d2578063920f5c84146100ee575b600080fd5b610095610387565b604080516001600160a01b039092168252519081900360200190f35b6100d0600480360360208110156100c757600080fd5b503515156103ab565b005b6100da6103c9565b604080519115158252519081900360200190f35b6100da600480360360a081101561010457600080fd5b810190602081018135600160201b81111561011e57600080fd5b82018360208201111561013057600080fd5b803590602001918460208302840111600160201b8311171561015157600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156101a057600080fd5b8201836020820111156101b257600080fd5b803590602001918460208302840111600160201b831117156101d357600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561022257600080fd5b82018360208201111561023457600080fd5b803590602001918460208302840111600160201b8311171561025557600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092956001600160a01b03853516959094909350604081019250602001359050600160201b8111156102b557600080fd5b8201836020820111156102c757600080fd5b803590602001918460018302840111600160201b831117156102e857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506103d2945050505050565b6100956108b7565b6103396108db565b60408051918252519081900360200190f35b6100d06004803603602081101561036157600080fd5b50356108e1565b6100d06004803603602081101561037e57600080fd5b503515156108e6565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008054911515600160a01b0260ff60a01b19909216919091179055565b60025460ff1690565b60008054600160a01b900460ff16156104f3577f9972b212e52913783072b960dd41527ae8b6e609d017b64039758dda0ce4127886868660405180806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015610451578181015183820152602001610439565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015610490578181015183820152602001610478565b50505050905001848103825285818151815260200191508051906020019060200280838360005b838110156104cf5781810151838201526020016104b7565b50505050905001965050505050505060405180910390a15060025460ff16156108ae565b60005b86518110156107a857600087828151811061050d57fe5b6020026020010151905087828151811061052357fe5b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561057757600080fd5b505afa15801561058b573d6000803e3d6000fd5b505050506040513d60208110156105a157600080fd5b505187518890849081106105b157fe5b6020026020010151111561060c576040805162461bcd60e51b815260206004820181905260248201527f496e76616c69642062616c616e636520666f722074686520636f6e7472616374604482015290519081900360640190fd5b6000600154600014156106575761065287848151811061062857fe5b602002602001015189858151811061063c57fe5b60200260200101516108f990919063ffffffff16565b61065b565b6001545b9050816001600160a01b031663a0712d6888858151811061067857fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b1580156106b657600080fd5b505af11580156106ca573d6000803e3d6000fd5b505050506040513d60208110156106e057600080fd5b505088518990849081106106f057fe5b60200260200101516001600160a01b031663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561076e57600080fd5b505af1158015610782573d6000803e3d6000fd5b505050506040513d602081101561079857600080fd5b5050600190920191506104f69050565b507fbd6b6bfac59612765a81cc4fdee74ab4859671fa14a562056f9eea438735a78a86868660405180806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156108155781810151838201526020016107fd565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561085457818101518382015260200161083c565b50505050905001848103825285818151815260200191508051906020019060200280838360005b8381101561089357818101518382015260200161087b565b50505050905001965050505050505060405180910390a15060015b95945050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60015490565b600155565b6002805460ff1916911515919091179055565b600082820183811015610953576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fea26469706673582212209cae7e62de6bc44b44a3900237e039ef9bf61e8d53a2c5c242b6260535fbeda364736f6c634300060c0033";
