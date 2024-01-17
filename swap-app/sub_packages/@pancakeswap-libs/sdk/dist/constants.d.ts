import JSBI from 'jsbi';

export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1116,
    BSCTESTNET = 97,
    // BSCNET = 56
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0xb2E1226674193154ef779d9DE587135B364CF7C6";
export declare const INIT_CODE_HASH = "0x1bf3f174b04471cfba5b18000e1c1f9fbd082e6b69808c964bd0bb3bfffc04e0";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
