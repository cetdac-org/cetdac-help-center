# bitapp.bch

BCH币种的接口API

## bitapp.bch

### bitapp.bch.getBalance
- 类型：方法
- 参数: address | [string] 选填，不填则为默认账户
- 返回: Promise
  - success
    - balance | [number] 查询地址余额，单位是[satoshi](https://en.bitcoin.it/wiki/Satoshi_(unit)), 1bch = 1e8 satoshi
  - fail | 失败原因

[试一试](http://localhost:3002/playground?code=bitapp.eth.getbalance)

### bitapp.bch.getFee

获取交易手续费

- 类型：方法
- 参数: type | [string] (取值 'default', 'fast', 'slow')
- 返回: Promise
  - success
    - fee | [number] 获取交易手续费，单位是[satoshi](https://en.bitcoin.it/wiki/Satoshi_(unit)), 1bch = 1e8 satoshi
  - fail | 失败原因

[试一试](http://localhost:3002/playground?code=bitapp.bch.getfee)


### bitapp.bch.getBlockNumber
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - blockNumber | [number] 当前最新的区块数
  - fail | 失败原因

[试一试](http://localhost:3002/playground?code=bitapp.bch.getblocknumber)

### bitapp.bch.verifyMessage
- 类型：方法
- 参数: 
  - address | [string] 地址
  - message | [string] 原始消息
  - signature | [string] 签名
- 返回:
    - result | [bool] 签名是否正确

[试一试](http://localhost:3002/playground?code=bitapp.bch.verifymessage)

## bitapp.bch.account

账户模块

### bitapp.bch.account.get
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - accounts | [array] 当前用户bch账户下的所有账户
  - fail
    - WalletLockError 当前钱包处于锁定状态

[试一试](http://localhost:3002/playground?code=bitapp.bch.account.get)

## bitapp.bch.net

网络模块

## bitapp.bch.net.getId
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - networkid | [string] 网络环境数字编号(1 = MAINNET, 2 = TESTNET)[完整网络类型](/zh/append/#完整网络类型)
  - fail | 失败原因

[试一试](http://localhost:3002/playground?code=bitapp.bch.net.getid)

## bitapp.bch.net.getProvider
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - network | [string] 网络环境(MAINNET = 1, TESTNET = 2)[完整网络类型](/zh/append/#完整网络类型)
  - fail | 失败原因

[试一试](http://localhost:3002/playground?code=bitapp.bch.net.getid)

## bitapp.bch.transaction

### bitapp.bch.transaction.getUnspent
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - utxo | [array] utxo数组
  - fail | 失败原因
- 示例

```js

bitapp.bch.transaction.getUnspent('bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm').then(console.log)
// 输出
> {
  list: [{
    onfirmations: 1532, //int 确认数
    tx_hash: "1d71d2155d7ece7168006283e26300a29cdf83977a2ee6c67132fd5be58ba712", //string 交易hash
    tx_output_n: 0, //int 未花费在交易输出中的纵向排序
    tx_output_n2: 0, //int 未花费在交易输出中的横向排序
    value: 260000000 //int 未花费金额
  }],
  page: 1,
  pagesize: 50,
  total_count: 1
}

```

[试一试](http://localhost:3002/playground?code=bitapp.bch.transaction.getunspent)

### bitapp.bch.transaction.getTransaction
- 类型：方法
- 参数: txHash
- 返回: Promise
  - success
    - txObject | [object] 交易结构体
  - fail | 失败原因

- 示例

```js
bitapp.bch.transaction.getTransaction('2949978d23c296d0487f2160cdd86f53dffcc3bdb6b5fb39781b5d2c6ab65acf', 'testnet').then(console.log)
// 输出
>{
  block_hash:"00000000000001d8204582e18e7073d355208abfb9328dcd07938b63b320f0a8", //区块哈希
  block_height:1255162, //区块高度
  block_time:1535969357, //出块时间
  confirmations:15, //确认数
  created_at:1535968942, //交易发生时间
  fee:113340, //交易手续费
  hash:"2949978d23c296d0487f2160cdd86f53dffcc3bdb6b5fb39781b5d2c6ab65acf" // 交易hash
  inputs:[{...}, {...}], //交易输入
  inputs_count:10, //交易输入数量
  inputs_value:100001000005 //总输入金额
  is_coinbase:false, //是不是 coin_base （挖矿奖励的交易）
  is_double_spend:false, //是否双花
  is_sw_tx:false,
  lock_time:1255161,
  outputs:[{…}, {…}], //输出
  outputs_count:2, //输出数量
  outputs_value:100000886665, //输出金额
  sigops:8,
  size:96557, //交易大小
  version:2, //交易版本号
  vsize:96557,
  weight:386228,
  witness_hash:"2949978d23c296d0487f2160cdd86f53dffcc3bdb6b5fb39781b5d2c6ab65acf"
  }
```

[试一试](http://localhost:3002/playground?code=bitapp.bch.transaction.gettransaction)

<!-- ### bitapp.bch.transaction.getTransactionCount
- 类型：方法
- 参数: address
- 返回: Promise
  - success
    - transactionCount | [number] 从当前地址发出的交易数
  - fail | 失败原因

[试一试](http://localhost:3002/playground?code=bitapp.bch.transactions.gettransactioncount) -->

## bitapp.bch.address

地址模块

### bitapp.bch.address.detectAddress
- 类型：方法
- 参数: 
  - address | [string] 地址
- 返回:
    - format | [string] 地址格式（'legacy', 'cashaddr', 'bitpay'）
    - network | [string] 网络类型（'livenet', 'testnet'）
    - type | [string] 地址类型（'p2pkh', 'p2sh'）[了解详情](https://bitcoin.stackexchange.com/questions/64733/what-is-p2pk-p2pkh-p2sh-p2wpkh-eli5)

```js

bitapp.bch.address.detectAddress('bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm')
>
//输出
{
  format: "cashaddr"，
  network: "testnet"，
  type: "p2pkh"
}
```

### bitapp.bch.address.toLegacyAddress
- 类型：方法
- 参数: 
  - address | [string] 地址
- 返回:
    - legacyAddress | [string] legacy地址格式

```js

bitapp.bch.address.toLegacyAddress('bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm')
>
//输出
"moyEZqXkfpqYAwtE69f6WrPyqg4DjGmArQ"
```

### bitapp.bch.address.toCashAddress
- 类型：方法
- 参数: 
  - address | [string] 地址
- 返回:
    - cashAddress | [string] cash地址格式

[试一试](http://localhost:3002/playground?code=bitapp.bch.address.tocashaddress)

### bitapp.bch.address.toBitpayAddress
- 类型：方法
- 参数: 
  - address | [string] 地址
- 返回:
    - bitpayAddress | [string] bitpay地址格式(比特派专用地址)

[试一试](http://localhost:3002/playground?code=bitapp.bch.address.tobitpayaddress)

### bitapp.bch.address.isLegacyAddress
- 类型：方法
- 参数: 
  - address | [string] 地址
- 返回:
    - isLegacyAddress | [bool]

```js

bitapp.bch.address.isLegacyAddress('bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm')
>
//输出
false
```

[试一试](http://localhost:3002/playground?code=bitapp.bch.address.islegacyaddress)

### bitapp.bch.address.isCashAddress
- 类型：方法
- 参数: 
  - address | [string] 地址
- 返回:
    - isCashAddress | [bool]

[试一试](http://localhost:3002/playground?code=bitapp.bch.address.iscashaddress)

### bitapp.bch.address.isBitpayAddress
- 类型：方法
- 参数: 
  - address | [string] 地址
- 返回:
    - isBitpayAddress | [bool]

[试一试](http://localhost:3002/playground?code=bitapp.bch.address.isbitpayaddress)

### bitapp.bch.address.isMainnetAddress
- 类型：方法
- 参数: 
  - address | [string] 地址
- 返回:
    - isMainnetAddress | [bool]

[试一试](http://localhost:3002/playground?code=bitapp.bch.address.ismainnetaddress)

### bitapp.bch.address.isTestnetAddress
- 类型：方法
- 参数: 
  - address | [string] 地址
- 返回:
    - isTestnetAddress | [bool]

[试一试](http://localhost:3002/playground?code=bitapp.bch.address.istestnetaddress)

### bitapp.bch.address.isP2PKHAddress

[什么是P2PKH](https://bitcoin.stackexchange.com/questions/64733/what-is-p2pk-p2pkh-p2sh-p2wpkh-eli5)

- 类型：方法
- 参数: 
  - address | [string] 地址
- 返回:
    - isP2PKHAddress | [bool]

[试一试](http://localhost:3002/playground?code=bitapp.bch.address.isp2pkhaddress)

### bitapp.bch.address.isP2SHAddress

[什么是P2SH](https://bitcoin.stackexchange.com/questions/64733/what-is-p2pk-p2pkh-p2sh-p2wpkh-eli5)

- 类型：方法
- 参数: 
  - address | [string] 地址
- 返回:
    - isP2SHAddress | [bool]

[试一试](http://localhost:3002/playground?code=bitapp.bch.address.isp2shaddress)

## bitapp.bch.currency

汇率模块

### bitapp.bch.currency.getCurrency
- 类型：方法
- 参数: 无
- 返回:
  - success
    - currency | [string] 用户当前选择的法币类型('cny', 'usd')
  - fail | 失败原因

[试一试](http://localhost:3002/playground?code=bitapp.bch.currency.getcurrency)

### bitapp.bch.currency.getRate
- 类型：方法
- 参数: 无
- 返回:
  - success
    - rate | [number] 当前汇率
  - fail | 失败原因

[试一试](http://localhost:3002/playground?code=bitapp.bch.currency.getrate)

## bitapp.bch.util

工具模块

### bitapp.bch.util.bchToSatoshi

- 类型：方法
- 参数: 
  - val | [number or string] 以bch为单位的数值
- 返回:
    - satoshi | [number] 返回以satoshi为单位的数值

[试一试](http://localhost:3002/playground?code=bitapp.bch.util.bchtosatoshi)

### bitapp.bch.util.satoshiToBch

- 类型：方法
- 参数: 
  - val | [number or string] 以satoshi为单位的数值
- 返回:
    - bch | [number] 返回以bch为单位的数值

[试一试](http://localhost:3002/playground?code=bitapp.bch.util.satoshitobch)