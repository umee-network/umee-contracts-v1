# Umee Contracts v1

This repository contains the smart contracts source code and markets configuration for Umee Protocol V2. The repository uses Docker Compose and Hardhat as development enviroment for compilation, testing and deployment tasks.

## What is Umee?

Umee is a decentralized non-custodial liquidity markets protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralized (perpetually) or undercollateralized (one-block liquidity) fashion.

## Documentation

The documentation of Umee V2 is in the following [Umee V2 documentation](https://docs.umee.com/developers/v/2.0/) link. At the documentation you can learn more about the protocol, see the contract interfaces, integration guides and audits.

For getting the latest contracts addresses, please check the [Deployed contracts](https://docs.umee.com/developers/v/2.0/deployed-contracts/deployed-contracts) page at the documentation to stay up to date.

A more detailed and technical description of the protocol can be found in this repository, [here](./umee-v2-whitepaper.pdf)

## Audits

- MixBytes (16/09/2020 - 03/12/2020): [report](./audits/Mixbytes-umee-v2-03-12-2020.pdf)
- PeckShield (29/09/2020 - 03/12/2020) : [report](./audits/Peckshield-umee-v2-03-12-2020-EN.pdf) (Also available in Chinese in the same folder)
- CertiK (28/09/2020 - 02/12/2020): [report](./audits/Certik-umee-v2-03-12-2020.pdf)
- Consensys Diligence (09/09/2020 - 09/10/2020): [report](https://consensys.net/diligence/audits/2020/09/umee-protocol-v2/)
- Certora, formal verification (02/08/2020 - 29/10/2020): [report](./audits/Certora-FV-umee-v2-03-12-2020.pdf)
- SigmaPrime (January 2021): [report](./audits/SigmaPrime-umee-v2-01-2021.pdf)

## Connect with the community

You can join at the [Discord](http://umee.com/discord) channel or at the [Governance Forum](https://governance.umee.com/) for asking questions about the protocol or talk about Umee with other peers.

## Getting Started

You can install `@umee/protocol-v2` as an NPM package in your Hardhat, Buidler or Truffle project to import the contracts and interfaces:

`npm install @umee/protocol-v2`

Import at Solidity files:

```
import {ILendingPool} from "@umee/protocol-v2/contracts/interfaces/ILendingPool.sol";

contract Misc {

  function deposit(address pool, address token, address user, uint256 amount) public {
    ILendingPool(pool).deposit(token, amount, user, 0);
    {...}
  }
}
```

The JSON artifacts with the ABI and Bytecode are also included into the bundled NPM package at `artifacts/` directory.

Import JSON file via Node JS `require`:

```
const LendingPoolV2Artifact = require('@umee/protocol-v2/artifacts/contracts/protocol/lendingpool/LendingPool.sol/LendingPool.json');

// Log the ABI into console
console.log(LendingPoolV2Artifact.abi)
```

## Setup

The repository uses Docker Compose to manage sensitive keys and load the configuration. Prior any action like test or deploy, you must run `docker-compose up` to start the `contracts-env` container, and then connect to the container console via `docker-compose exec contracts-env bash`.

Follow the next steps to setup the repository:

- Install `docker` and `docker-compose`
- Create an enviroment file named `.env` and fill the next enviroment variables

```
# Mnemonic, only first address will be used
MNEMONIC=""

# Add Alchemy or Infura provider keys, alchemy takes preference at the config level
ALCHEMY_KEY=""
INFURA_KEY=""


# Optional Etherscan key, for automatize the verification of the contracts at Etherscan
ETHERSCAN_KEY=""

# Optional, if you plan to use Tenderly scripts
TENDERLY_PROJECT=""
TENDERLY_USERNAME=""

```

## Markets configuration

The configurations related with the Umee Markets are located at `markets` directory. You can follow the `IUmeeConfiguration` interface to create new Markets configuration or extend the current Umee configuration.

Each market should have his own Market configuration file, and their own set of deployment tasks, using the Umee market config and tasks as a reference.

## Test

You can run the full test suite with the following commands:

```
# In one terminal
docker-compose up

# Open another tab or terminal
docker-compose exec contracts-env bash

# A new Bash terminal is prompted, connected to the container
npm run test
```

## Deployments

For deploying Umee Protocol V2, you can use the available scripts located at `package.json`. For a complete list, run `npm run` to see all the tasks.

### Kovan deployment

```
# In one terminal
docker-compose up

# Open another tab or terminal
docker-compose exec contracts-env bash

# A new Bash terminal is prompted, connected to the container
npm run umee:kovan:full:migration
```

### Mainnet fork deployment

You can deploy Umee Protocol v2 in a forked Mainnet chain using Hardhat built-in fork feature:

```
docker-compose run contracts-env npm run umee:fork:main
```

### Deploy Umee into a Mainnet Fork via console

You can deploy Umee into the Hardhat console in fork mode, to interact with the protocol inside the fork or for testing purposes.

Run the console in Mainnet fork mode:

```
docker-compose run contracts-env npm run console:fork
```

At the Hardhat console, interact with the Umee protocol in Mainnet fork mode:

```
// Deploy the Umee protocol in fork mode
await run('umee:mainnet')

// Or your custom Hardhat task
await run('your-custom-task');

// After you initialize the HRE via 'set-DRE' task, you can import any TS/JS file
run('set-DRE');

// Import contract getters to retrieve an Ethers.js Contract instance
const contractGetters = require('./helpers/contracts-getters'); // Import a TS/JS file

// Lending pool instance
const lendingPool = await contractGetters.getLendingPool("LendingPool address from 'umee:mainnet' task");

// You can impersonate any Ethereum address
await network.provider.request({ method: "hardhat_impersonateAccount",  params: ["0xb1adceddb2941033a090dd166a462fe1c2029484"]});

const signer = await ethers.provider.getSigner("0xb1adceddb2941033a090dd166a462fe1c2029484")

// ERC20 token DAI Mainnet instance
const DAI = await contractGetters.getIErc20Detailed("0x6B175474E89094C44Da98b954EedeAC495271d0F");

// Approve 100 DAI to LendingPool address
await DAI.connect(signer).approve(lendingPool.address, ethers.utils.parseUnits('100'));

// Deposit 100 DAI
await lendingPool.connect(signer).deposit(DAI.address, ethers.utils.parseUnits('100'), await signer.getAddress(), '0');

```

## Interact with Umee in Mainnet via console

You can interact with Umee at Mainnet network using the Hardhat console, in the scenario where the frontend is down or you want to interact directly. You can check the deployed addresses at https://docs.umee.com/developers/deployed-contracts.

Run the Hardhat console pointing to the Mainnet network:

```
docker-compose run contracts-env npx hardhat --network main console
```

At the Hardhat console, you can interact with the protocol:

```
// Load the HRE into helpers to access signers
run("set-DRE")

// Import getters to instance any Umee contract
const contractGetters = require('./helpers/contracts-getters');

// Load the first signer
const signer = await contractGetters.getFirstSigner();

// Lending pool instance
const lendingPool = await contractGetters.getLendingPool("0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9");

// ERC20 token DAI Mainnet instance
const DAI = await contractGetters.getIErc20Detailed("0x6B175474E89094C44Da98b954EedeAC495271d0F");

// Approve 100 DAI to LendingPool address
await DAI.connect(signer).approve(lendingPool.address, ethers.utils.parseUnits('100'));

// Deposit 100 DAI
await lendingPool.connect(signer).deposit(DAI.address, ethers.utils.parseUnits('100'), await signer.getAddress(), '0');
```

## Kovan Contract Addresses 

```
GATEWAY 0x4Df052094BD67D161FAB496cC753f99c42AffDb8

Finished migrations
Contracts deployed at kovan
---------------------------------
N# Contracts: 30
LendingPoolAddressesProvider: 0x50486d03c8C76BF4570CAe04d0c3534F662fc0b3
ReserveLogic: 0xB2d63144150A0a5CeBAF56F16Aa7ceD82b8CEE5E
GenericLogic: 0xB708D38D3B1b77C3F172c6Ad1F22CAd76c69Bb32
ValidationLogic: 0x9E96F6cDC660A9B40FCa2CAA70396C9067f7fc29
LendingPoolImpl: 0x7EcCb395fbD1E897bE22cF89e045cCB23b26fD97
LendingPool: 0x34d8619386aEE1d96F68846a801a5e835f130422
LendingPoolConfiguratorImpl: 0x290b641999A75331555F6Fa8E246CF4411B92934
LendingPoolConfigurator: 0x10C044A28EF0Cb10b142B969961429F9c4aEe2dA
StableAndVariableTokensHelper: 0xE41e3C20f61b4f6D17a2E512107F0a78B2f5aEbd
UTokensAndRatesHelper: 0xB266D1F2a0C9641BB38cFe749Da53C7428b83e21
UmeeOracle: 0xfFaE7588bE42A757cF75e75836136d3b3f168F2b
LendingRateOracle: 0xdCAF6d52C08A391F09F786677c43612602d6FE6f
UmeeProtocolDataProvider: 0x5ac44e8baed9796fb7bf4c52E431c5e03C8249CF
WETHGateway: 0x4Df052094BD67D161FAB496cC753f99c42AffDb8
StableDebtToken: 0xF596364b76e1B70A7Ca6B878f9d454DC1b4A91db
VariableDebtToken: 0x20A012693cF92AE091471d06Dc7FeCA84cdC3ea0
UToken: 0xBd806CE812C4b3c72BE87f3784110B46bE7534f2
uTokenImpl: 0xBd806CE812C4b3c72BE87f3784110B46bE7534f2
DelegationAwareUToken: 0x9C48b6bCbb4eA2E6AA491Ddace5CC513507eED76
delegationAwareUTokenImpl: 0x9C48b6bCbb4eA2E6AA491Ddace5CC513507eED76
DefaultReserveInterestRateStrategy: 0xD0A71Fe7e9A5c03269aEefe3e560C2aCd172B879
rateStrategyUMEE: 0x06D213dB8a2ad73eA05Da1141B81E77C9f220E92
rateStrategyVolatileOne: 0xD44e7DA745015B1982eD8988cA749ea1167440fC
rateStrategyStableOne: 0x849684FA146Ee3dE86174DE22f48C39fC2aA7e93
rateStrategyStableTwo: 0x40797C1D674AD29992Eb4AcC310610DA93150Ba7
rateStrategyVolatileTwo: 0xEf7a35D45bCE94a208c70b1686Fd788F8F9D6DBb
rateStrategyVolatileThree: 0x8204A772D7484602c2d4B756af94Ce5eCdCE444d
rateStrategyStableThree: 0x78Ae96686E05796C70f5AD4F39ab42f8e4F36817
rateStrategyWETH: 0xD0A71Fe7e9A5c03269aEefe3e560C2aCd172B879
WalletBalanceProvider: 0x2B629BF227d5f989d80ECe76388DA6Eb7ffBD657
```