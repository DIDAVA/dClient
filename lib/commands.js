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
    getMempoolInfo: [],
    getRawMempool: [{verbose: false}],
    getTxOutSetInfo: [],
    listBlocks: ['set', {verbose: false}],
    verifyChain: [{checklevel: 3}, {numblocks: 288}],
    
    // Control
    clearMemPool: [],
    getBlockchainParams: [{names: true}, {upgrades: true}],
    getInfo: [],
    getInitStatus: [],
    getRuntimeParams: [],
    help: [{command: ''}],
    pause: ['tasks'],
    resume: ['tasks'],
    setLastBlock: [{hash: ''}], // Hash or Height
    setRuntimeParam: ['param', 'value'],
    stop: [],

    // Feeds
    addToFeed: ['feed', 'entities', {globals: '', action: 'rescan', options: {}}],
    createFeed: ['feed', {parameters: ''}],
    dataRefToBinaryCache: ['identifier', 'dataref', {countBytes: 100}, {startByte: 0}],
    deleteFeed: ['feed', {force: false}],
    getDataRefData: ['dataref', {countBytes: 100}, {startByte: 0}],
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
    submitBlock: ['hexdata', {params: {}}], // JSON Parameters Object

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
    createKeyPairs: [{count: 1}],
    createMultiSig: ['nRequired', 'keys'],
    validateAddress: ['address'], // address|pubkey|privkey
    estimateFee: ['nBlocks'],
    estimatePriority: ['nBlocks'],
    signMessage: ['address', 'message'], // address|privkey
    verifyMessage: ['address', 'signature', 'message'],

    // Permissions
    grant: ['addresses', 'permissions', {nativeAmount: 0}, {startBlock: null}, {endBlock: null}, {comment: null}, {commentTo: null}],
    grantFrom: ['fromAddress', 'toAddresses', 'permissions', {nativeAmount: 0}, {startBlock: null}, {endBlock: null}, {comment: null}, {commentTo: null}],
    grantWidthData: ['addresses', 'permissions', 'data', {nativeAmount: 0}, {startBlock: null}, {endBlock: null}],
    grantWidthDataFrom: ['fromAddress', 'addresses', 'permissions', 'data', {nativeAmount: 0}, {startBlock: null}, {endBlock: null}],
    revoke: ['addresses', 'permissions', {nativeAmount: 0}, {comment: null}, {commentTo: null}],
    revokeFrom: ['fromAddress', 'toAddresses', 'permissions', {nativeAmount: 0}, {comment: null}, {commentTo: null}],
    listPermissions: [{permissions: '*'}, {addresses: '*'}, {verbose: false}],
    verifyPermission: ['address', 'permission'],

    // Unspent
    combineUnspent: [{'addresses': '*'}, {minconf: 1}, {maxcombines: 100}, {mininputs: 2}, {maxinputs: 100}, {maxtime: 15}],
    getTxOut: ['txid', 'vout', {includemempool: false}],
    listLockUnspent: [],
    listUnspent: [{minconf: 1}, {maxconf: 999999}, {addresses: []}],
    lockUnspent: ['unlock', 'outputs'],

    // Exchange
    appendRawExchange: ['hex', 'txid', 'vout', 'askAssets'],
    completeRawExchange: ['hex', 'txid', 'vout', 'askAssets', {metadata: null}],
    createRawExchange: ['txid', 'vout', 'askAssets'],
    decodeRawExchange: ['txHex', {verbose: false}],
    disableRawTransaction: ['txHex'],
    prepareLockUnspent: ['assetQuantities', {lock: true}],
    prepareLockUnspentFrom: ['fromAddress', 'assetQuantities', {lock: true}],

    // Raw Transactions
    appendRawChange: ['txHex', 'address', {fee: 0}],
    appendRawData: ['txHex', 'data'],
    appendRawTransaction: ['txHex', 'transactions', 'addresses', {data: []}, {action: ''}],
    createRawTransaction: ['inputs', 'amounts', {data: []}, {action: ''}],
    createRawSendFrom: ['fromAddress', 'amounts', {data: []}, {action: ''}],
    decodeRawTransaction: ['txHex'],
    decodeScript: ['scriptHex'],
    getRawTransaction: ['txid', {verbose: false}],
    sendRawTransaction: ['txHex', {allowHighFees: false}],
    signRawTransaction: ['txHex', {parent: []}, {privatekeys: []}, {sighashtype: 'all'}],

    // Assets
    getAssetBalances: [{account: '*'}, {minconf: 1}, {includeWatchOnly: false}, {includeLocked: false}],
    getAssetInfo: ['asset', {verbose: false}],
    getAssetTransaction: ['asset', 'txid', {verbose: false}],
    getTotalBalances: [{minconf: 1}, {includeWatchOnly: false}, {includeLocked: false}],
    issue: ['address', 'name', 'qty', {units: 1}, {nativeAmount: null}, {customFields: null}],
    issueFrom: ['fromAddress', 'toAddress', 'name', 'qty', {units: null}, {nativeAmount: null}, {customFields: null}],
    issueMore: ['address', 'asset', 'qty', {nativeAmount: null}, {customFields: null}],
    issueMoreFrom: ['fromAddress', 'toAddress', 'asset', 'qty', {nativeAmount: null}, {customFields: null}],
    listAssets: [{assets: '*'}, {verbose: false}, {count: 100}, {start: -1}],
    listAssetTransactions: ['asset', {verbose: false}, {count: null}, {start: null}, {localOrdering: null}],
    sendAsset: ['address', 'asset', 'qty', {nativeAmount: null}, {comment: null}, {commentTo: null}],
    sendAssetFrom: ['fromAddress', 'toAddress', 'asset', 'qty', {nativeAmount: null}, {comment: null}, {commentTo: null}],

    // Streams
    getStreamInfo: ['stream', {verbose: false}],
    getStreamItem: ['stream', 'txid', {verbose: false}],
    getStreamKeySummary: ['stream', 'key', 'mode'],
    getStreamPublisherSummary: ['stream', 'address', 'mode'],
    getTxOutData: ['txid', 'vout', {countBytes: 100}, {startByte: 0}],
    listStreamBlockItems: ['stream', 'blockSet', {verbose: false}, {count: null}, {start: null}],
    listStreamItems: ['stream', {verbose: false}, {count: null}, {start: null}, {localOrdering: null}],
    listStreamKeyItems: ['stream', 'key', {verbose: false}, {count: null}, {start: null}, {localOrdering: null}],
    listStreamKeys: ['stream', {keys: '*'}, {verbose: false}, {count: null}, {start: null}, {localOrdering: null}],
    listStreamPublisherItems: ['stream', 'address', {verbose: false}, {count: null}, {start: null}, {localOrdering: null}],
    listStreamPublishers: ['stream', {addresses: '*'}, {verbose: false}, {count: null}, {start: null}, {localOrdering: null}],
    listStreamQueryItems: ['stream', 'query', {verbose: false}],
    listStreams: [{streams: '*'}, {verbose: false}, {count: 100}, {start: -1}],
    listStreamTxItems: ['stream', 'txids', {verbose: false}],
    publish: ['stream', 'keys', 'data', 'options'],
    publishFrom: ['fromAddress', 'stream', 'keys', 'data', 'options'],
    publishMulti: ['stream', 'items', 'options'],
    publishMultiFrom: ['fromAddress', 'stream', 'items', 'options'],
    subscribe: ['streams', {rescan: null}, {params: null}], // streams|assets
    trimSubscribe: ['streams', 'params'],
    unsubscribe: ['streams', {purge: null}], // streams|assets

    // Off-Chain
    purgePublishedItems: ['txids'], // txids|txouts|blocks
    purgeStreamItems: ['streamID', 'txids'], // txids|txouts|blocks|query
    retrieveStreamItems: ['streamID', 'txids'], // txids|txouts|blocks|query

    // Smart Filters & Upgrades
    approveFrom: ['fromAddress', 'entity', {approve: false}],
    create: ['entity', 'name', 'open', {customFields: []}],
    createFrom: ['fromAddress', 'entity', 'name', 'open', {customFields: []}],
    getFilterCode: ['filter'],
    listStreamFilters: [{filter: '*'}, {verbose: false}],
    listTxFilters: [{filters: '*'}, {verbose: false}],
    listUpgrades: [{upgrades: '*'}],
    runStreamFilter: ['filter', {txid: ''}], // TXID or TXHEX
    runTxFilter: ['filter', {txid: ''}], // TXID or TXHEX
    testStreamFilter: ['restrictions', 'jscode', {txid: ''}], // TXID or TXHEX
    testTxFilter: ['restrictions', 'jscode', {txid: ''}], // TXID or TXHEX

    // Binary Cache
    appendBinaryCache: ['id', 'dataHex'],
    createBinaryCache: [],
    deleteBinaryCache: ['id'],
    txOutToBinaryCache: ['id', 'txid', 'vout', {countBytes: null}, {startByte: 0}],

    // Wallet v1
    getAccount: ['address'],
    getAccountAddress: ['account'],
    getAddressesByAccount: ['account'],
    getBalance: [{account: '*'}, {minconf: 1}, {includeWatchOnly: false}],
    getReceivedByAccount: ['account', {minconf: 1}],
    getReceivedByAddress: ['address', {minconf: 1}],
    getUnconfirmedBalance: [],
    listAccounts: [{minconf: 1}, {includeWatchOnly: false}],
    listReceivedByAccount: [{minconf: 1}, {includeEmpty: false}, {includeWatchOnly: false}],
    listReceivedByAddress: [{minconf: 1}, {includeEmpty: false}, {includeWatchOnly: false}],
    listTransactions: [{account: '*'}, {count: null}, {from: null}, {includeWatchOnly: false}],
    move: ['fromAccount', 'toAccount', 'amount', {minconf: null}, {comment: null}],
    resendWalletTransactions: [],
    sendFromAccount: ['fromAccount', 'toAddress', 'amount', {minconf: null}, {comment: null}, {commentTo: null}],
    sendMany: ['fromAccount', 'amounts', {minconf: null}, {comment: null}],
    setAccount: ['address', 'account'],

    // Wallet
    getWalletInfo: [],
    listWalletTransactions: [{count: null}, {skip: null}, {includeWatchOnly: false}, {verbose: false}],
    getWalletTransaction: ['txid', {includeWatchOnly: false}, {verbose: false}],
    getTransaction: ['txid', {includeWatchOnly: false}],
    getMultiBalances: [{addresses: '*'}, {assets: '*'}, {minconf: 1}, {includeLocked: false}, {includeWatchOnly: false}],
    getAddresses: [{verbose: false}],
    listAddresses: [{addresses: '*'}, {verbose: false}, {count: null}, {start: null}],
    listAddressGroupings: [],
    getAddressBalances: ['address', {minconf: 1}, {includeLocked: false}],
    listAddressTransactions: ['address', {count: null}, {skip: null}, {verbose: false}],
    getAddressTransaction: ['address', 'txid', {verbose: false}],
    keyPoolRefill: ['newSize'],
    listSinceBlock: [{blockHash: null}, {targetConfirmations: null}, {includeWatchOnly: false}],
    send: ['address', 'amount', {comment: null}, {commentTo: null}],
    sendFrom: ['fromAddress', 'toAddress', 'amount', {comment: null}, {commentTo: null}],
    sendWithData: ['address', 'amount', 'data'],
    sendWithDataFrom: ['fromAddress', 'toAddress', 'amount', 'data'],
    setTxFee: ['amount'],
    getRawChangeAddress: [],
    getNewAddress: [{account: ''}],
    dumpPrivKey: ['address'],
    importAddress: ['addresses', {label: null}, {rescan: false}],
    importPrivKey: ['privkeys', {label: null}, {rescan: false}],
    addMultiSigAddress: ['nRequired', 'keys', {account: ''}],
    dumpWallet: ['filename'],
    backupWallet: ['filename'],
    importWallet: ['filename', {rescan: false}],
    encryptWallet: ['passphrase'],
    walletLock: [],
    walletPassphrase: ['passphrase', 'timeout'],
    walletPassphraseChange: ['oldpassphrase', 'newpassphrase']  
}
