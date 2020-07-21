// All the commands and arguments are camelcased

const startDefault = args => { return args.count * -1; }

module.exports = {
    // Blockchain
    getBestBlockHash: [],
    getBlock: ['hash', {verbose: 1}], // Hash or Height
    getBlockchainInfo: [],
    getBlockCount: [],
    getBlockHash: ['height'],
    getChainTips: [],
    getDifficulty: [],
    getLastBlockInfo: [{skip: 0}],
    getMemPoolInfo: [],
    getRawMemPool: [{verbose: false}],
    getTxOutSetInfo: [],
    listBlocks: ['range', {verbose: false}],
    verifyChain: [{checkLevel: 3}, {numBlocks: 288}],
    
    // Control
    clearMemPool: [],
    getBlockchainParams: [{displayNames: true}, {withUpgrades: true}],
    getInfo: [],
    getInitStatus: [],
    getRuntimeParams: [],
    help: [{command: null}],
    pause: ['tasks'],
    resume: ['tasks'],
    setLastBlock: [{hash: ''}], // Hash or Height
    setRuntimeParam: ['param', 'value'],
    stop: [],

    // Feeds
    addToFeed: ['feed', 'entities', {globals: '', action: 'rescan', options: {}}],
    createFeed: ['feed', {parameters: ''}],
    dataRefToBinaryCache: ['identifier', 'dataRef', {countBytes: 100}, {startByte: 0}],
    deleteFeed: ['feed', {force: false}],
    getDataRefData: ['dataRef', {countBytes: 100}, {startByte: 0}],
    listFeeds: [{feeds: '*'}, {verbose: false}],
    pauseFeed: ['feed', {buffer: true}],
    purgeFeed: ['feed', 'file'], // 'file|days|*'
    resumeFeed: ['feed', {buffer: 1}],
    updateFeed: ['feed', 'entities', {globals: ''}, {action: 'none', options: {}}],

    // Generating
    getGenerate: [],
    getHashesPerSec: [],
    setGenerate: ['generate', {genProcLimit: 1}],

    // Mining
    getBlockTemplate: [{jsonRequestObject: {}}],
    getMiningInfo: [],
    getNetworkHashPS: [{blocks: 120}, {height: -1}],
    prioritiseTransaction: ['txid', 'delta', 'fee'],
    submitBlock: ['hexData', {params: {}}], // JSON Parameters Object

    // Network
    addNode: ['node', 'command'], // add|remove|onetry
    getAddedNodeInfo: ['dns', {node: ''}],
    getChunkQueueInfo: [],
    getChunkQueueTotals: [],
    getConnectionCount: [],
    getNetTotals: [],
    getNetworkInfo: [],
    getPeerInfo: [],
    ping: [],

    // Utililty
    createKeyPairs: [{'count': 1}],
    createMultiSig: ['nRequired', 'keys'],
    validateAddress: ['address'], // address|pubkey|privkey
    estimateFee: ['nBlocks'],
    estimatePriority: ['nBlocks'],
    signMessage: ['address', 'message'], // address|privkey
    verifyMessage: ['address', 'signature', 'message'],

    // Permissions
    grant: ['addresses', 'permissions', {nativeAmount: 0}, {startBlock: null}, {endBlock: null}, {comment: ''}, {commentTo: ''}],
    grantFrom: ['from', 'to', 'permissions', {nativeAmount: 0}, {startBlock: null}, {endBlock: null}, {comment: ''}, {commentTo: ''}],
    grantWidthData: ['addresses', 'permissions', 'data', {nativeAmount: 0}, {startBlock: null}, {endBlock: null}],
    grantWidthDataFrom: ['from', 'addresses', 'permissions', 'data', {nativeAmount: 0}, {startBlock: null}, {endBlock: null}],
    revoke: ['addresses', 'permissions', {nativeAmount: 0}, {comment: ''}, {commentTo: ''}],
    revokeFrom: ['from', 'to', 'permissions', {nativeAmount: 0}, {comment: ''}, {commentTo: ''}],
    listPermissions: [{permissions: '*'}, {addresses: '*'}, {verbose: false}],
    verifyPermission: ['address', 'permission'],

    // Unspent
    combineUnspent: [{addresses: '*'}, {minConf: 1}, {maxCombines: 100}, {minInputs: 2}, {maxInputs: 100}, {maxTime: 15}],
    getTxOut: ['txid', 'vout', {includeMemPool: false}],
    listLockUnspent: [],
    listUnspent: [{minConf: 1}, {maxConf: 999999}, {addresses: []}],
    lockUnspent: ['unlock', 'outputs'],

    // Exchange
    appendRawExchange: ['hex', 'txid', 'vout', 'askAssets'],
    completeRawExchange: ['hex', 'txid', 'vout', 'askAssets', {metadata: null}],
    createRawExchange: ['txid', 'vout', 'askAssets'],
    decodeRawExchange: ['txHex', {verbose: false}],
    disableRawTransaction: ['txHex'],
    prepareLockUnspent: ['assetQuantities', {lock: true}],
    prepareLockUnspentFrom: ['from', 'assetQuantities', {lock: true}],

    // Raw Transactions
    appendRawChange: ['txHex', 'address', {fee: 0}],
    appendRawData: ['txHex', 'data'], // data|object
    appendRawTransaction: ['txHex', 'inputs', 'amounts', {data: []}, {action: ''}],
    createRawTransaction: ['inputs', 'amounts', {data: []}, {action: ''}],
    createRawSendFrom: ['from', 'amounts', {data: []}, {action: ''}],
    decodeRawTransaction: ['txHex'],
    decodeScript: ['scriptHex'],
    getRawTransaction: ['txid', {verbose: false}],
    sendRawTransaction: ['txHex'],
    signRawTransaction: ['txHex', {parent: []}, {privateKeys: []}, {sigHashType: 'ALL'}],

    // Assets
    getAssetBalances: [{account: '*'}, {minConf: 1}, {includeWatchOnly: false}, {includeLocked: false}],
    getAssetInfo: ['asset', {verbose: false}],
    getAssetTransaction: ['asset', 'txid', {verbose: false}],
    getTotalBalances: [{minConf: 1}, {includeWatchOnly: false}, {includeLocked: false}],
    issue: ['address', 'name', 'qty', {units: 1}, {nativeAmount: 0}, {customFields: {}}],
    issueFrom: ['from', 'to', 'name', 'qty', {units: 1}, {nativeAmount: 0}, {customFields: {}}],
    issueMore: ['address', 'asset', 'qty', {nativeAmount: 0}, {customFields: {}}],
    issueMoreFrom: ['from', 'to', 'asset', 'qty', {nativeAmount: 0}, {customFields: {}}],
    listAssets: [{assets: '*'}, {verbose: false}, {count: 100}, {start: startDefault}],
    listAssetTransactions: ['asset', {verbose: false}, {count: 10}, {start: startDefault}, {localOrdering: false}],
    sendAsset: ['to', 'asset', 'qty', {nativeAmount: 0}, {comment: ''}, {commentTo: ''}],
    sendAssetFrom: ['from', 'to', 'asset', 'qty', {nativeAmount: 0}, {comment: ''}, {commentTo: ''}],

    // Streams
    getStreamInfo: ['stream', {verbose: false}],
    getStreamItem: ['stream', 'txid', {verbose: false}],
    getStreamKeySummary: ['stream', 'key', 'mode'],
    getStreamPublisherSummary: ['stream', 'address', 'mode'],
    getTxOutData: ['txid', 'vout', {countBytes: 100}, {startByte: 0}],
    listStreamBlockItems: ['stream', 'blockSet', {verbose: false}, {count: 'MAX'}, {start: startDefault}],
    listStreamItems: ['stream', {verbose: false}, {count: 100}, {start: startDefault}, {localOrdering: false}],
    listStreamKeyItems: ['stream', 'key', {verbose: false}, {count: 10}, {start: startDefault}, {localOrdering: false}],
    listStreamKeys: ['stream', {keys: '*'}, {verbose: false}, {count: 100}, {start: startDefault}, {localOrdering: false}],
    listStreamPublisherItems: ['stream', 'address', {verbose: false}, {count: 10}, {start: startDefault}, {localOrdering: false}],
    listStreamPublishers: ['stream', {addresses: '*'}, {verbose: false}, {count: 100}, {start: startDefault}, {localOrdering: false}],
    listStreamQueryItems: ['stream', 'query', {verbose: false}],
    listStreams: [{streams: '*'}, {verbose: false}, {count: 100}, {start: startDefault}],
    listStreamTxItems: ['stream', 'txids', {verbose: false}],
    publish: ['stream', 'keys', 'data', 'options'],
    publishFrom: ['from', 'stream', 'keys', 'data', 'options'],
    publishMulti: ['stream', 'items', 'options'],
    publishMultiFrom: ['from', 'stream', 'items', 'options'],
    subscribe: ['streams', {rescan: true}, {params: ''}], // streams|assets
    trimSubscribe: ['streams', 'params'],
    unsubscribe: ['streams', {purge: false}], // streams|assets

    // Off-Chain
    purgePublishedItems: ['txids'], // txids|txouts|blocks
    purgeStreamItems: ['stream', 'txids'], // txids|txouts|blocks|query
    retrieveStreamItems: ['stream', 'txids'], // txids|txouts|blocks|query

    // Smart Filters & Upgrades
    approveFrom: ['from', 'entity', {approve: false}],
    create: ['entity', 'name', 'open', {customFields: []}],
    createFrom: ['from', 'entity', 'name', 'open', {customFields: []}],
    getFilterCode: ['filter'],
    listStreamFilters: [{filter: '*'}, {verbose: false}],
    listTxFilters: [{filters: '*'}, {verbose: false}],
    listUpgrades: [{upgrades: '*'}],
    runStreamFilter: ['filter', {tx: ''}], // TXID or TXHEX
    runTxFilter: ['filter', {tx: ''}], // TXID or TXHEX
    testStreamFilter: ['restrictions', 'jscode', {tx: ''}], // TXID or TXHEX
    testTxFilter: ['restrictions', 'jscode', {tx: ''}], // TXID or TXHEX

    // Binary Cache
    appendBinaryCache: ['id', 'dataHex'],
    createBinaryCache: [],
    deleteBinaryCache: ['id'],
    txOutToBinaryCache: ['id', 'txid', 'vout', {countBytes: 1000}, {startByte: 0}],

    // Wallet v1
    getAccount: ['address'],
    getAccountAddress: ['account'],
    getAddressesByAccount: ['account'],
    getAddresses: [{verbose: false}],
    getBalance: [{account: '*'}, {minConf: 1}, {includeWatchOnly: false}],
    getReceivedByAccount: ['account', {minConf: 1}],
    getReceivedByAddress: ['address', {minConf: 1}],
    getUnconfirmedBalance: [],
    listAccounts: [{minConf: 1}, {includeWatchOnly: false}],
    listAddressGroupings: [],
    listReceivedByAccount: [{minConf: 1}, {includeEmpty: false}, {includeWatchOnly: false}],
    listReceivedByAddress: [{minConf: 1}, {includeEmpty: false}, {includeWatchOnly: false}],
    listTransactions: [{account: '*'}, {count: null}, {from: null}, {includeWatchOnly: false}],
    move: ['from', 'to', 'amount', {minConf: null}, {comment: null}],
    resendWalletTransactions: [],
    sendFromAccount: ['from', 'to', 'amount', {minConf: null}, {comment: null}, {commentTo: null}],
    sendMany: ['from', 'amounts', {minConf: null}, {comment: null}],
    setAccount: ['address', 'account'],

    // Wallet
    getWalletInfo: [],
    listWalletTransactions: [{count: 10}, {skip: 0}, {includeWatchOnly: false}, {verbose: false}],
    getWalletTransaction: ['txid', {includeWatchOnly: false}, {verbose: false}],
    getTransaction: ['txid', {includeWatchOnly: false}],
    getMultiBalances: [{addresses: '*'}, {assets: '*'}, {minConf: 1}, {includeLocked: false}, {includeWatchOnly: false}],
    listAddresses: [{addresses: '*'}, {verbose: false}, {count: 100}, {start: startDefault}],
    getAddressBalances: ['address', {minConf: 1}, {includeLocked: false}],
    listAddressTransactions: ['address', {count: 10}, {skip: 0}, {verbose: false}],
    getAddressTransaction: ['address', 'txid', {verbose: false}],
    keyPoolRefill: ['newSize'],
    listSinceBlock: [{blockHash: null}, {targetConfirmations: 1}, {includeWatchOnly: false}],
    send: ['address', 'amount', {comment: ''}, {commentTo: ''}],
    sendFrom: ['from', 'to', 'amount', {comment: ''}, {commentTo: ''}],
    sendWithData: ['address', 'amount', 'data'],
    sendWithDataFrom: ['from', 'to', 'amount', 'data'],
    setTxFee: ['amount'],
    getRawChangeAddress: [],
    getNewAddress: [{account: ''}],
    dumpPrivKey: ['address'],
    importAddress: ['addresses', {label: ''}, {rescan: false}],
    importPrivKey: ['privKeys', {label: ''}, {rescan: false}],
    addMultiSigAddress: ['nRequired', 'keys', {account: ''}],
    dumpWallet: ['filename'],
    backupWallet: ['filename'],
    importWallet: ['filename', {rescan: false}],
    encryptWallet: ['passphrase'],
    walletLock: [],
    walletPassphrase: ['passphrase', 'timeout'],
    walletPassphraseChange: ['oldPassphrase', 'newPassphrase']  
}
