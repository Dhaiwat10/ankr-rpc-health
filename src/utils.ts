export interface Rpc {
  url: string;
  label: string;
}

export const rpcs: Rpc[] = [
  {
    label: 'ETH Mainnet',
    url: 'https://rpc.ankr.com/eth',
  },
  {
    label: 'ETH Ropsten',
    url: 'https://rpc.ankr.com/eth_ropsten',
  },
  {
    label: 'ETH Rinkeby',
    url: 'https://rpc.ankr.com/eth_rinkeby',
  },
  {
    label: 'ETH Goerli',
    url: 'https://rpc.ankr.com/eth_goerli',
  },
  {
    label: 'Polygon Mainnet',
    url: 'https://rpc.ankr.com/polygon',
  },
  {
    label: 'Polygon Mumbai',
    url: 'https://rpc.ankr.com/polygon_mumbai',
  },
  {
    label: 'Optimism',
    url: 'https://rpc.ankr.com/optimism',
  },
  {
    label: 'Arbitrum',
    url: 'https://rpc.ankr.com/arbitrum',
  },
];
