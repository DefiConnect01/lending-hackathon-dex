

import BigNumber from 'bignumber.js'
import * as contractsTestnet from './contractsTestnet'
import * as contracts from './contracts'
import * as actions from './actions'
import * as queries from './graph-queries'


let isTestnet = import.meta.env.VITE_PUBLIC_CHAINID == 50002;
console.log({
  isTestnet
})

// URLS
let scan, cont;
if (isTestnet) {
  // scan = 'https://explorer.creatorchain.io/'
    scan = 'https://pharosscan.xyz/'
  cont = contractsTestnet
} else {
  scan = 'https://polygonscan.com/'
  cont = contracts
}

export const ETHERSCAN_URL = scan

export const CONTRACTS = cont
export const ACTIONS = actions
export const QUERIES = queries

export const NETWORK_TOKEN_NAME = CONTRACTS.FTM_NAME;

export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed(0)
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const RENAME_ASSETS = {
  "miMATIC": "MAI"
}

export const BLACK_LIST_TOKENS = [
  '0x104592a158490a9228070e0a8e5343b499e125d0'.toLowerCase(), // wrong FRAX
  '0x8d546026012bf75073d8a586f24a5d5ff75b9716'.toLowerCase(), // old SPHERE
  '0x17e9c5b37283ac5fbe527011cec257b832f03eb3'.toLowerCase(), // old SPHERE
]

export const BASE_ASSETS_WHITELIST = [
  {
    id: "0xDACb984BA1b33B555566819c8a00Dd3E2E723D36",
    address: "0xDACb984BA1b33B555566819c8a00Dd3E2E723D36",
    chainId: 50002,
    symbol: "DCC",
  },
  
  {
    id: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    chainId: 50002,
    symbol: "ETH",
  },
  {
    id: "0x3642A6A166D3cE24c7255E03b74F61A449B14927",
    address: "0x3642A6A166D3cE24c7255E03b74F61A449B14927",
    chainId: 50002,
    symbol: "USDT",
  }
  
];

export const ROUTE_ASSETS = [
  {
    name: "DeFi Connect Token",
    symbol: "DCC",
    address: "0xDACb984BA1b33B555566819c8a00Dd3E2E723D36",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
  },
  
  {
      name: "Ether",
      symbol: "ETH",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      logoURI: "https://i.ibb.co/rGJ8WyX/eth-logo.png"
  },
  {
      name: "USDT",
      symbol: "USDT",
      address: "0x3642A6A166D3cE24c7255E03b74F61A449B14927",
      decimals: 18,
      logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
  }
]

// hardcoded routes for taxable tokens
export const DIRECT_SWAP_ROUTES = {
  // SPHERE -> USD+
  ["0x62f594339830b90ae4c084ae7d223ffafd9658a7".toLowerCase()]: "0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f".toLowerCase(),
  // penDYST -> DYST
  ["0x5b0522391d0a5a37fd117fe4c43e8876fb4e91e6".toLowerCase()]: "0x39aB6574c289c3Ae4d88500eEc792AB5B947A5Eb".toLowerCase(),
}

export const MULTISWAP_INCLUDE = [
  // TETU
  // "0x255707B70BF90aa112006E1b07B9AeA6De021424".toLowerCase(),
]

export const ALLOWED_DUPLICATE_SYMBOLS = [
  "FXS",
]

export const DEFAULT_ASSET_FROM = "0xF8A37509C8a1ee397e8585A4C84B02358a2240A8"
export const DEFAULT_ASSET_TO = "0xDACb984BA1b33B555566819c8a00Dd3E2E723D36"

export const GAS_MULTIPLIER = 1.3
 



//////////////////////////////////
// MULTI_CHAIN SUPPORT SECTION  //
////////////////////////////////

// import BigNumber from 'bignumber.js'
// // import CONTRACTS_TESTNET from './contractsTestnet'
// // import CONTRACTS_MAINNET from './contracts'
// import * as CONTRACTS_TESTNET from './contractsTestnet'
// import * as actions from './actions'
// import * as queries from './graph-queries'


// // const CONTRACTS = cont
// export const ACTIONS = actions
// export const QUERIES = queries

// // Supported Chain IDs
// export const CHAIN_IDS = {
//   CREATOR_TESTNET: 66665,
//   U2U_TESTNET: 2484,
//   PHAROS_TESTNET: 50002,
//   POLYGON_MAINNET: 137,
//   ETHEREUM_MAINNET: 1,
//   BASE_SEPOLIA: 34940
// }

// // Get current chain ID from environment
// export const CURRENT_CHAIN_ID = parseInt(import.meta.env.VITE_PUBLIC_CHAINID || 66665)

// // Chain type detection
// export const TESTNET_CHAINS = [
//   CHAIN_IDS.CREATOR_TESTNET,
//   CHAIN_IDS.U2U_TESTNET,
//   CHAIN_IDS.PHAROS_TESTNET
// ]

// // const MAINNET_CHAINS = [
// //   CHAIN_IDS.POLYGON_MAINNET,
// //   CHAIN_IDS.ETHEREUM_MAINNET
// // ]

//  export const IS_TESTNET = TESTNET_CHAINS.includes(CURRENT_CHAIN_ID)

// // Explorer URLs mapping
// export const EXPLORER_URLS = {
//   [CHAIN_IDS.CREATOR_TESTNET]: 'https://explorer.creatorchain.io/',
//   [CHAIN_IDS.U2U_TESTNET]: 'https://testnet.u2uscan.xyz',
//   [CHAIN_IDS.PHAROS_TESTNET]: 'https://pharosscan.xyz/',
//   // [CHAIN_IDS.POLYGON_MAINNET]: 'https://polygonscan.com/',
//   // [CHAIN_IDS.ETHEREUM_MAINNET]: 'https://etherscan.io/'
// }

// // Network configuration resolver
// export const getNetworkConfig = () => {
//   let contracts, explorer
  
//   if (IS_TESTNET) {
//     contracts = CONTRACTS_TESTNET[CURRENT_CHAIN_ID]
//     explorer = EXPLORER_URLS[CURRENT_CHAIN_ID] || ''
//   } else {
//     // contracts = CONTRACTS_MAINNET[CURRENT_CHAIN_ID]
//     // explorer = EXPLORER_URLS[CURRENT_CHAIN_ID] || ''
//     console.log("you are not on Testnet")
//   }

//   if (!contracts) {
//     console.warn(`No configuration found for chain ID ${CURRENT_CHAIN_ID}`)
//     return {
//       contracts: {},
//       explorer: '',
//       supported: false
//     }
//   }

//   return {
//     contracts,
//     explorer,
//     supported: true
//   }
// }

// // Get network configuration
// export const { contracts: CONTRACTS, explorer: ETHERSCAN_URL, supported: CHAIN_SUPPORTED } = getNetworkConfig()

// // Common constants
//  export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed(0)
//  export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
// export const GAS_MULTIPLIER = 1.3

// // Network-specific constants
//  export const NETWORK_TOKEN_NAME = CONTRACTS?.FTM_NAME || 'ETH'
//  export const DEFAULT_ASSET_FROM = CONTRACTS?.DEFAULT_ASSET_FROM || ZERO_ADDRESS
// export const DEFAULT_ASSET_TO = CONTRACTS?.DEFAULT_ASSET_TO || ZERO_ADDRESS

// // Chain configuration exports
// // export { 
// //   CONTRACTS,
// //   ETHERSCAN_URL,
// //   CHAIN_SUPPORTED,
// //   CURRENT_CHAIN_ID,
// //   // ACTIONS,
// //   // QUERIES
// // }

// // Token configuration mappings
//  export const RENAME_ASSETS = {
//   "miMATIC": "MAI",
//   "WETH": "ETH"
// }

//  export const BLACK_LIST_TOKENS = [
//   '0x104592a158490a9228070e0a8e5343b499e125d0'.toLowerCase(),
//   '0x8d546026012bf75073d8a586f24a5d5ff75b9716'.toLowerCase(),
//   '0x17e9c5b37283ac5fbe527011cec257b832f03eb3'.toLowerCase()
// ]

// // Cross-chain configuration
//  export const CROSS_CHAIN_CONFIG = {
//   // enabledChains: [CHAIN_IDS.POLYGON_MAINNET, CHAIN_IDS.ETHEREUM_MAINNET],
//   bridgeAddress: CONTRACTS?.CROSSCHAIN_ADDRESS || ZERO_ADDRESS,
//   bridgeAbi: CONTRACTS?.CROSSCHAIN_ABI || []
// }

// // Swap configuration
//  export const SWAP_CONFIG = {
//   directSwapRoutes: {
//     '0x62f594339830b90ae4c084ae7d223ffafd9658a7': '0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f',
//     '0x5b0522391d0a5a37fd117fe4c43e8876fb4e91e6': '0x39aB6574c289c3Ae4d88500eEc792AB5B947A5Eb'
//   },
//   multiSwapInclude: [
//     '0x255707B70BF90aa112006E1b07B9AeA6De021424'
//   ],
//   allowedDuplicateSymbols: ['FXS']
// }

// // Asset lists (now chain-specific in contracts.js)
// export  const BASE_ASSETS = CONTRACTS?.BASE_ASSETS_WHITELIST || []
// export const ROUTE_ASSETS = CONTRACTS?.ROUTE_ASSETS || []

// // Validation utilities
//  export const validateChain = (chainId) => {
//   return [...TESTNET_CHAINS].includes(chainId)
// }

//  export const getNativeCurrency = () => ({
//   name: CONTRACTS?.FTM_NAME || 'Ether',
//   symbol: CONTRACTS?.FTM_SYMBOL || 'ETH',
//   decimals: CONTRACTS?.FTM_DECIMALS || 18
// })



// // export default {
// //   CHAIN_IDS,
// //   CURRENT_CHAIN_ID,
// //   IS_TESTNET,
// //   CONTRACTS,
// //   ETHERSCAN_URL,
// //   ACTIONS,
// //   QUERIES,
// //   MAX_UINT256,
// //   ZERO_ADDRESS,
// //   GAS_MULTIPLIER,
// //   NETWORK_TOKEN_NAME,
// //   RENAME_ASSETS,
// //   BLACK_LIST_TOKENS,
// //   CROSS_CHAIN_CONFIG,
// //   SWAP_CONFIG,
// //   BASE_ASSETS,
// //   ROUTE_ASSETS,
// //   validateChain,
// //   getNativeCurrency,
// //   DEFAULT_ASSET_FROM,
// //   DEFAULT_ASSET_TO

// // }