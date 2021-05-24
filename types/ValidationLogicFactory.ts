/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ValidationLogic } from "./ValidationLogic";

export class ValidationLogicFactory extends ContractFactory {
  constructor(
    linkLibraryAddresses: ValidationLogicLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      ValidationLogicFactory.linkBytecode(linkLibraryAddresses),
      signer
    );
  }

  static linkBytecode(
    linkLibraryAddresses: ValidationLogicLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$52a8a86ab43135662ff256bbc95497e8e3\\$__", "g"),
      linkLibraryAddresses["__$52a8a86ab43135662ff256bbc95497e8e3$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(overrides?: Overrides): Promise<ValidationLogic> {
    return super.deploy(overrides || {}) as Promise<ValidationLogic>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ValidationLogic {
    return super.attach(address) as ValidationLogic;
  }
  connect(signer: Signer): ValidationLogicFactory {
    return super.connect(signer) as ValidationLogicFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ValidationLogic {
    return new Contract(address, _abi, signerOrProvider) as ValidationLogic;
  }
}

const _abi = [
  {
    inputs: [],
    name: "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD",
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
    inputs: [],
    name: "REBALANCE_UP_USAGE_RATIO_THRESHOLD",
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
  "0x612055610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061009d5760003560e01c8063721a92f911610070578063721a92f9146100fb578063a8695b1d1461010e578063abfcc86a14610121578063d09db04a14610129578063fa0c21491461013c5761009d565b80630eca322b146100a2578063548cad09146100b75780635494eb8a146100ca5780635fa297e5146100e8575b600080fd5b6100b56100b0366004611e2b565b61014f565b005b6100b56100c5366004611d86565b610217565b6100d261050d565b6040516100df9190611fe3565b60405180910390f35b6100b56100f6366004611d1c565b61051d565b6100b5610109366004611bea565b6106c2565b6100b561011c366004611ded565b610b8a565b6100d2610e23565b6100b5610137366004611c8e565b610e29565b6100b561014a366004611e4c565b610fc7565b60008061015b8461110d565b50506040805180820190915260018152603160f81b60208201529193509150836101a15760405162461bcd60e51b81526004016101989190611f18565b60405180910390fd5b506040805180820190915260018152601960f91b6020820152826101d85760405162461bcd60e51b81526004016101989190611f18565b506040805180820190915260018152603360f81b602082015281156102105760405162461bcd60e51b81526004016101989190611f18565b5050505050565b60006102228661110d565b505050905080604051806040016040528060018152602001601960f91b815250906102605760405162461bcd60e51b81526004016101989190611f18565b506000610356610351856001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102a257600080fd5b505afa1580156102b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102da9190611ea7565b876001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561031357600080fd5b505afa158015610327573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034b9190611ea7565b90611145565b611173565b905060006103d9876001600160a01b03166370a08231866040518263ffffffff1660e01b81526004016103899190611ebf565b60206040518083038186803b1580156103a157600080fd5b505afa1580156103b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103519190611ea7565b9050600082156103fc576103f76103f08385611145565b84906111c3565b6103ff565b60005b60028a015460078b0154604080516380031e3760e01b815290519394506fffffffffffffffffffffffffffffffff909216926000926001600160a01b03909216916380031e37916004808301926020929190829003018186803b15801561046557600080fd5b505afa158015610479573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049d9190611ea7565b90506b0311d253316c79d37600000083101580156104c657506104c281610fa061126e565b8211155b60405180604001604052806002815260200161191960f11b815250906104ff5760405162461bcd60e51b81526004016101989190611f18565b505050505050505050505050565b6b0311d253316c79d37600000081565b6004808901546040516370a0823160e01b81526000926001600160a01b03909216916370a082319161055191339101611ebf565b60206040518083038186803b15801561056957600080fd5b505afa15801561057d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a19190611ea7565b90506000811160405180604001604052806002815260200161313960f01b815250906105e05760405162461bcd60e51b81526004016101989190611f18565b50868061067d5750604051633985c10960e21b815273__$52a8a86ab43135662ff256bbc95497e8e3$__9063e61704249061062d908b90339086908c908c908c908c908c90600401611ed3565b60206040518083038186803b15801561064557600080fd5b505af4158015610659573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067d9190611d00565b60405180604001604052806002815260200161032360f41b815250906106b65760405162461bcd60e51b81526004016101989190611f18565b50505050505050505050565b6106ca611aee565b6106d38c61110d565b151561014085015215156101208401521515610100830152151560e082018190526040805180820190915260018152601960f91b60208201529061072a5760405162461bcd60e51b81526004016101989190611f18565b5080610100015115604051806040016040528060018152602001603360f81b8152509061076a5760405162461bcd60e51b81526004016101989190611f18565b506040805180820190915260018152603160f81b60208201528a6107a15760405162461bcd60e51b81526004016101989190611f18565b50806101200151604051806040016040528060018152602001603760f81b815250906107e05760405162461bcd60e51b81526004016101989190611f18565b5087600214806107f05750876001145b604051806040016040528060018152602001600760fb1b815250906108285760405162461bcd60e51b81526004016101989190611f18565b50604080516020810190915285548152610848908c9088908787876112e0565b60c08601526020808601919091529084526080840191909152606083018290526040805180820190915260018152603960f81b91810191909152906108a05760405162461bcd60e51b81526004016101989190611f18565b50670de0b6b3a76400008160c001511160405180604001604052806002815260200161031360f41b815250906108e95760405162461bcd60e51b81526004016101989190611f18565b50805160808201516109069190610900908c611145565b906117a7565b6040808301829052606083015181518083019092526002825261313160f01b60208301529091111561094b5760405162461bcd60e51b81526004016101989190611f18565b506001881415610b7b5780610140015160405180604001604052806002815260200161189960f11b815250906109945760405162461bcd60e51b81526004016101989190611f18565b5060078c01546040805160208101909152865481526109bc91600160a01b900460ff16611835565b15806109ce57506109cc8c61188d565b155b80610a5857506004808d01546040516370a0823160e01b81526001600160a01b03909116916370a0823191610a05918f9101611ebf565b60206040518083038186803b158015610a1d57600080fd5b505afa158015610a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a559190611ea7565b8a115b60405180604001604052806002815260200161313360f01b81525090610a915760405162461bcd60e51b81526004016101989190611f18565b508c6001600160a01b03166370a082318d60040160009054906101000a90046001600160a01b03166040518263ffffffff1660e01b8152600401610ad59190611ebf565b60206040518083038186803b158015610aed57600080fd5b505afa158015610b01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b259190611ea7565b60a08201819052600090610b39908961126e565b9050808b1115604051806040016040528060028152602001610c4d60f21b81525090610b785760405162461bcd60e51b81526004016101989190611f18565b50505b50505050505050505050505050565b60008080610b978861110d565b9350509250925082604051806040016040528060018152602001601960f91b81525090610bd75760405162461bcd60e51b81526004016101989190611f18565b506040805180820190915260018152603360f81b60208201528215610c0f5760405162461bcd60e51b81526004016101989190611f18565b506001846002811115610c1e57fe5b1415610c6157604080518082019091526002815261313760f01b602082015286610c5b5760405162461bcd60e51b81526004016101989190611f18565b50610e19565b6002846002811115610c6f57fe5b1415610dea57604080518082019091526002815261062760f31b602082015285610cac5760405162461bcd60e51b81526004016101989190611f18565b50604080518082019091526002815261189960f11b602082015281610ce45760405162461bcd60e51b81526004016101989190611f18565b506007880154604080516020810190915288548152610d0c91600160a01b900460ff16611835565b1580610d1e5750610d1c8861188d565b155b80610db157506004808901546040516370a0823160e01b81526001600160a01b03909116916370a0823191610d5591339101611ebf565b60206040518083038186803b158015610d6d57600080fd5b505afa158015610d81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da59190611ea7565b610daf8787611145565b115b60405180604001604052806002815260200161313360f01b81525090610c5b5760405162461bcd60e51b81526004016101989190611f18565b60408051808201825260018152600760fb1b6020820152905162461bcd60e51b81526101989190600401611f18565b5050505050505050565b610fa081565b6040805180820190915260018152603160f81b602082015287610e5f5760405162461bcd60e51b81526004016101989190611f18565b506040805180820190915260018152603560f81b602082015286881115610e995760405162461bcd60e51b81526004016101989190611f18565b506001600160a01b0388166000908152602086905260408120610ebb9061110d565b505050905080604051806040016040528060018152602001601960f91b81525090610ef95760405162461bcd60e51b81526004016101989190611f18565b50604051633985c10960e21b815273__$52a8a86ab43135662ff256bbc95497e8e3$__9063e617042490610f3f908c9033908d908c908c908c908c908c90600401611ed3565b60206040518083038186803b158015610f5757600080fd5b505af4158015610f6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8f9190611d00565b604051806040016040528060018152602001601b60f91b815250906106b65760405162461bcd60e51b81526004016101989190611f18565b6000610fd287611895565b905080604051806040016040528060018152602001601960f91b8152509061100d5760405162461bcd60e51b81526004016101989190611f18565b506040805180820190915260018152603160f81b6020820152866110445760405162461bcd60e51b81526004016101989190611f18565b506000831180156110605750600185600281111561105e57fe5b145b8061108157506000821180156110815750600285600281111561107f57fe5b145b60405180604001604052806002815260200161313560f01b815250906110ba5760405162461bcd60e51b81526004016101989190611f18565b50600019861415806110d45750336001600160a01b038516145b60405180604001604052806002815260200161189b60f11b81525090610e195760405162461bcd60e51b81526004016101989190611f18565b54600160381b811615159167020000000000000082161515916704000000000000008116151591670800000000000000909116151590565b60008282018381101561116a5760405162461bcd60e51b815260040161019890611f6b565b90505b92915050565b6000633b9aca0082810290839082041460405180604001604052806002815260200161068760f31b815250906111bc5760405162461bcd60e51b81526004016101989190611f18565b5092915050565b604080518082019091526002815261035360f41b6020820152600090826111fd5760405162461bcd60e51b81526004016101989190611f18565b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce800000082190485111561124b5760405162461bcd60e51b81526004016101989190611f18565b5082816b033b2e3c9fd0803ce80000008602018161126557fe5b04949350505050565b600082158061127b575081155b156112885750600061116d565b81611388198161129457fe5b0483111560405180604001604052806002815260200161068760f31b815250906112d15760405162461bcd60e51b81526004016101989190611f18565b50506127109102611388010490565b60008060008060006112f0611b50565b6112f98a6118a1565b15611317576000806000806000199550955095509550955050611799565b600060e08201525b878160e0015110156116f85760e081015161133b908b906118a6565b611344576116e8565b60e0810151600090815260208a81526040808320546001600160a01b03166101e085018190528352908d9052902061137b816118f7565b506080860181905260c08601929092525060a0840191909152600a0a60208301526101e082015160405163b3596f0760e01b81526001600160a01b038a169163b3596f07916113cd9190600401611ebf565b60206040518083038186803b1580156113e557600080fd5b505afa1580156113f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061141d9190611ea7565b825260c08201511580159061143d575060e082015161143d908c90611835565b15611561578060040160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b81526004016114859190611ebf565b60206040518083038186803b15801561149d57600080fd5b505afa1580156114b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d59190611ea7565b60408301819052602083015183516000926114fa92916114f491611922565b9061195c565b61012084015190915061150d9082611145565b61012084015260a083015161153390611527908390611922565b61016085015190611145565b61016084015260c08301516115599061154d908390611922565b61018085015190611145565b610180840152505b60e0820151611571908c9061199e565b156116e6578060050160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b81526004016115b99190611ebf565b60206040518083038186803b1580156115d157600080fd5b505afa1580156115e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116099190611ea7565b8260600181815250506116b38160060160009054906101000a90046001600160a01b03166001600160a01b03166370a082318f6040518263ffffffff1660e01b81526004016116589190611ebf565b60206040518083038186803b15801561167057600080fd5b505afa158015611684573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a89190611ea7565b606084015190611145565b60608301819052602083015183516116df926116d392916114f491611922565b61014084015190611145565b6101408301525b505b60e081018051600101905261131f565b60008161012001511161170c576000611721565b6101208101516101608201516117219161195c565b61016082015261012081015161173857600061174d565b61012081015161018082015161174d9161195c565b610180820181905261012082015161014083015161176a926119ef565b610100820181905261012082015161014083015161016084015161018090940151919850965091945090925090505b965096509650965096915050565b604080518082019091526002815261035360f41b6020820152600090826117e15760405162461bcd60e51b81526004016101989190611f18565b5060408051808201909152600280825261068760f31b60208301528304906127108219048511156118255760405162461bcd60e51b81526004016101989190611f18565b5082816127108602018161126557fe5b60006080821060405180604001604052806002815260200161373760f01b815250906118745760405162461bcd60e51b81526004016101989190611f18565b5050815160016002830281019190911c16151592915050565b5461ffff1690565b54600160381b16151590565b511590565b60006080821060405180604001604052806002815260200161373760f01b815250906118e55760405162461bcd60e51b81526004016101989190611f18565b50509051600360029092021c16151590565b5461ffff80821692601083901c821692602081901c831692603082901c60ff169260409290921c1690565b6000826119315750600061116d565b8282028284828161193e57fe5b041461116a5760405162461bcd60e51b815260040161019890611fa2565b600061116a83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611a1d565b60006080821060405180604001604052806002815260200161373760f01b815250906119dd5760405162461bcd60e51b81526004016101989190611f18565b50509051600160029092021c16151590565b6000826119ff5750600019611a16565b611a1383611a0d868561126e565b90611a54565b90505b9392505050565b60008183611a3e5760405162461bcd60e51b81526004016101989190611f18565b506000838581611a4a57fe5b0495945050505050565b604080518082019091526002815261035360f41b602082015260009082611a8e5760405162461bcd60e51b81526004016101989190611f18565b5060408051808201909152600280825261068760f31b6020830152830490670de0b6b3a7640000821904851115611ad85760405162461bcd60e51b81526004016101989190611f18565b508281670de0b6b3a76400008602018161126557fe5b604051806101600160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000151581526020016000151581525090565b604051806102400160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160006001600160a01b031681526020016000151581526020016000151581525090565b6000806000806000806000806000806000806101808d8f031215611c0c578788fd5b8c35611c1781611fec565b9b5060208d01359a5060408d0135611c2e81611fec565b995060608d0135985060808d0135975060a08d0135965060c08d0135955060e08d013594506101008d013593506101208d013592506101408d013591506101608d0135611c7a81611fec565b809150509295989b509295989b509295989b565b600080600080600080600080610100898b031215611caa578384fd5b8835611cb581611fec565b97506020890135965060408901359550606089013594506080890135935060a0890135925060c0890135915060e0890135611cef81611fec565b809150509295985092959890939650565b600060208284031215611d11578081fd5b815161116a81612004565b600080600080600080600080610100898b031215611d38578384fd5b883597506020890135611d4a81611fec565b96506040890135611d5a81612004565b9550606089013594506080890135935060a0890135925060c0890135915060e0890135611cef81611fec565b600080600080600060a08688031215611d9d578081fd5b853594506020860135611daf81611fec565b93506040860135611dbf81611fec565b92506060860135611dcf81611fec565b91506080860135611ddf81611fec565b809150509295509295909350565b600080600080600060a08688031215611e04578081fd5b853594506020860135935060408601359250606086013591506080860135611ddf81612012565b60008060408385031215611e3d578182fd5b50508035926020909101359150565b60008060008060008060c08789031215611e64578384fd5b86359550602087013594506040870135611e7d81612012565b93506060870135611e8d81611fec565b9598949750929560808101359460a0909101359350915050565b600060208284031215611eb8578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b0398891681529688166020880152604087019590955260608601939093529054608085015260a084015260c083015290911660e08201526101000190565b6000602080835283518082850152825b81811015611f4457858101830151858201604001528201611f28565b81811115611f555783604083870101525b50601f01601f1916929092016040019392505050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b90815260200190565b6001600160a01b038116811461200157600080fd5b50565b801515811461200157600080fd5b6003811061200157600080fdfea2646970667358221220c68354959a441e754f2640662c1153069b1ea45a624ce497d2886e773f6f336a64736f6c634300060c0033";

export interface ValidationLogicLibraryAddresses {
  ["__$52a8a86ab43135662ff256bbc95497e8e3$__"]: string;
}
