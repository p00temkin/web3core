export const networks = {
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: [
	    "https://polygon-rpc.com/",
	    "https://matic-mainnet.chainstacklabs.com/",
	    "https://rpc-mainnet.matic.quiknode.pro/",
	    "https://matic-mainnet-full-rpc.bwarelabs.com/",
	    "https://rpc.polycat.finance/",
	    "https://rpc-mainnet.maticvigil.com/"
    ],
    blockExplorerUrls: [
	    "https://polygonscan.com/",
	    "https://explorer.matic.network/"
    ]
  },
  mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Test Network",
    nativeCurrency: {
      name: "Polygon Test Token",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: [
      "https://rpc-mumbai.maticvigil.com"
    ],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
  },
  ropsten: {
    chainId: `0x${Number(3).toString(16)}`,
    chainName: "Ropsten Test Network",
    nativeCurrency: {
      name: "Ropsten Test Token",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: [
      "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    ],
    blockExplorerUrls: ["https://ropsten.etherscan.io"]
  },
  rinkeby: {
    chainId: `0x${Number(4).toString(16)}`,
    chainName: "Rinkeby Test Network",
    nativeCurrency: {
      name: "Rinkeby Test Token",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: [
      "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    ],
    blockExplorerUrls: ["https://rinkeby.etherscan.io"]
  },
  goerli: {
    chainId: `0x${Number(5).toString(16)}`,
    chainName: "Goerli Test Network",
    nativeCurrency: {
      name: "Goerli Test Token",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: [
      "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    ],
    blockExplorerUrls: ["https://goerli.etherscan.io"]
  },
  kovan: {
    chainId: `0x${Number(42).toString(16)}`,
    chainName: "Kovan Test Network",
    nativeCurrency: {
      name: "Kovan Test Token",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: [
      "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    ],
    blockExplorerUrls: ["https://kovan.etherscan.io"]
  },
  eth: {
    chainId: `0x${Number(1).toString(16)}`,
    chainName: "Ethereum Network",
    nativeCurrency: {
      name: "Ethereum Native Token",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: [
      "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    ],
    blockExplorerUrls: ["https://etherscan.io"]
  },
  avax: {
    chainId: `0x${Number(43114).toString(16)}`,
    chainName: "Avalanche Network",
    nativeCurrency: {
      name: "Avalanche Native Token",
      symbol: "AVAX",
      decimals: 18
    },
    rpcUrls: [
      "https://api.avax.network/ext/bc/C/rpc"
    ],
    blockExplorerUrls: ["https://snowtrace.io/"]
  },
  boba: {
    chainId: `0x${Number(288).toString(16)}`,
    chainName: "Boba Network",
    nativeCurrency: {
      name: "Boba Token",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: [
      "https://mainnet.boba.network/",
      "https://lighting-replica.boba.network/"
    ],
    blockExplorerUrls: ["https://blockexplorer.boba.network/"]
  },
  bobarinkeby: {
    chainId: `0x${Number(28).toString(16)}`,
    chainName: "Boba Rinkeby Test Network",
    nativeCurrency: {
      name: "Boba Rinkeby Test Token",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: [
      "https://rinkeby.boba.network/"
    ],
    blockExplorerUrls: ["https://blockexplorer.rinkeby.boba.network/"]
  },
  bitkub: {
    chainId: `0x${Number(96).toString(16)}`,
    chainName: "Bitkub Network",
    nativeCurrency: {
      name: "Bitkub Native Token",
      symbol: "KUB",
      decimals: 18
    },
    rpcUrls: [
      "https://rpc.bitkubchain.io"
    ],
    blockExplorerUrls: ["https://bkcscan.com"]
  },
  moonbeam: {
    chainId: `0x${Number(1284).toString(16)}`,
    chainName: "Moonbeam Network",
    nativeCurrency: {
      name: "Moonbeam Native Token",
      symbol: "GLMR",
      decimals: 18
    },
    rpcUrls: [
      "https://rpc.api.moonbeam.network"
    ],
    blockExplorerUrls: ["https://moonscan.io"]
  },
  fantom: {
    chainId: `0x${Number(250).toString(16)}`,
    chainName: "Fantom Network",
    nativeCurrency: {
      name: "Fantom Token",
      symbol: "FTM",
      decimals: 18
    },
    rpcUrls: [
      "https://rpc.ftm.tools"
    ],
    blockExplorerUrls: ["https://ftmscan.com"]
  },
  harmony: {
    chainId: `0x${Number(1666600000).toString(16)}`,
    chainName: "Harmony Mainnet Shard 0",
    nativeCurrency: {
      name: "Harmony Native Token",
      symbol: "ONE",
      decimals: 18
    },
    rpcUrls: [
      "https://api.harmony.one"
    ],
    blockExplorerUrls: ["https://api.harmony.one"]
  },
  arbitrum: {
    chainId: `0x${Number(200).toString(16)}`,
    chainName: "Arbitrum",
    nativeCurrency: {
      name: "Arbitrum Native Token",
      symbol: "XDAI",
      decimals: 18
    },
    rpcUrls: [
      "https://arbitrum.xdaichain.com/"
    ],
    blockExplorerUrls: ["https://blockscout.com/xdai/arbitrum"]
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18
    },
    rpcUrls: [
      "https://bsc-dataseed.binance.org",
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io/",
      "https://bsc-dataseed2.defibit.io/",
      "https://bsc-dataseed3.defibit.io/",
      "https://bsc-dataseed4.defibit.io/",
      "https://bsc-dataseed1.ninicoin.io/",
      "https://bsc-dataseed2.ninicoin.io/",
      "https://bsc-dataseed3.ninicoin.io/",
      "https://bsc-dataseed4.ninicoin.io/",
      "wss://bsc-ws-node.nariox.org"
    ],
    blockExplorerUrls: ["https://bscscan.com"]
  },
  ganache: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "Ganache Test Chain",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: [
      "http://192.168.0.1:7545"
    ],
    blockExplorerUrls: ["https://blockexplorer.x"]
  },
  ganachelocal: {
    chainId: `0x${Number(1337).toString(16)}`,
    chainName: "Ganache Local Test Chain",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: [
      "http://127.0.0.1:8545"
    ],
    blockExplorerUrls: ["https://blockexplorer.x"]
  },
  etho: {
    chainId: `0x${Number(1313114).toString(16)}`,
    chainName: "ETHO Chain",
    nativeCurrency: {
      name: "ETHO",
      symbol: "ETHO",
      decimals: 18
    },
    rpcUrls: [
      "https://rpc.ether1.org"
    ],
    blockExplorerUrls: ["https://explorer.ethoprotocol.com"]
  },
  ntt: {
    chainId: `0x${Number(2018).toString(16)}`,
    chainName: "NTT Enterprise Chain",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: [
      "https://rpc.metemcyber.ntt.com"
    ],
    blockExplorerUrls: ["https://blockexplorer.x"]
  },
  celo: {
    chainId: `0x${Number(42220).toString(16)}`,
    chainName: "Celo Mainnet",
    nativeCurrency: {
      name: "CELO",
      symbol: "CELO",
      decimals: 18
    },
    rpcUrls: [
      "https://forno.celo.org"
    ],
    blockExplorerUrls: ["https://explorer.celo.org"]
  },
  unknown: {
    chainId: `0x${Number(99999999).toString(16)}`,
    chainName: "Unknown Chain",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: [
      "https://127.0.0.1:9999"
    ],
    blockExplorerUrls: ["https://blockexplorer.x"]
  },

};

export function resolveNetworkFromId(chainId) {
   switch (chainId) {
      case 1:
         return networks.eth;
      case 3:
         return networks.ropsten;
      case 137:
         return networks.polygon;
      case 42:
         return networks.kovan;
      case 56:
         return networks.bsc;
      case 96:
         return networks.bitkub;
      case 250:
         return networks.fantom;
      case 288:
         return networks.boba;
      case 1284:
         return networks.moonbeam;
      case 1337:
         return networks.ganachelocal;
      case 2018:
         return networks.ntt;
      case 31337:
         return networks.ganache;
      case 42220:
         return networks.celo;
      case 43114:
         return networks.avax;
      case 80001:
         return networks.mumbai;
      case 1313114:
         return networks.etho;
      default:
	 return networks.unknown;
   }
};

