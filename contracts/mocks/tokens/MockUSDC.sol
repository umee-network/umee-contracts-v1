// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {ERC20} from '../../dependencies/openzeppelin/contracts/ERC20.sol';

/**
 * @title Mock USDC ERC20
 * @dev USDC ERC20
 */
contract MockUSDC is ERC20 {
  uint256 constant MAX_AMOUNT = 2 ^ (256 - 1);

  constructor() public ERC20('USDC', 'USDC') {
    _setupDecimals(18);
  }

  /**
   * @dev Function to mint tokens
   * @param value The amount of tokens to mint.
   * @return A boolean that indicates if the operation was successful.
   */
  function mint(uint256 value) public returns (bool) {
    _mint(_msgSender(), value);
    return true;
  }
}