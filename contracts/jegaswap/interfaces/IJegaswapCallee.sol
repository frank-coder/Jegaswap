//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IJegaswapCallee {
    function JegaswapCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}