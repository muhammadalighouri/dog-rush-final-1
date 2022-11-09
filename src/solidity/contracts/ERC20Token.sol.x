// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract TestToken is ERC20 {
    function decimals() public view virtual override returns (uint8) {
        return 6;
    }

    constructor() ERC20('Test Token', 'TEST') {
        _mint(
            0x429E3B6aef2476343D8f662d2F5A9Bd7F20B5Fed,
            2000000000 * 10**decimals()
        );
    }
}
