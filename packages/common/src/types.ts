import {RelayStorage} from "./storage";
import {RelayEVMClient} from "./evm";


export interface CliBaseConfig {
  dataPath: string
  config: string
  enablePair: string[]
}

export interface RelayBaseConfig {
  dataPath: string
  sourceChain: ChainInfoFlag
  targetChain: ChainInfoFlag
  sourceSigner: string
  targetSigner: string
  signcribeSigner: string
}

export interface RelayBaseLifecycle extends RelayBaseConfig {
  storage: RelayStorage,
  sourceName: string,
  targetName: string,
  sourceClient: RelayEVMClient,
  targetClient: RelayEVMClient,
}

export interface ChainInfoFlag {
  name: string
  endpoint: string
  indexer: ChainInfoIndexerFlag
  contract: ChainInfoFlagContract
}

export interface ChainInfoIndexerFlag {
  ormp: string
  signcribe: string
}

export interface ChainInfoFlagContract {
  signcribe: string
  multisig: string
  relayer: string
  ormp: string
  oracle: string
}

