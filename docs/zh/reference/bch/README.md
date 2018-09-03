# bitapp.bch

BCH币种的接口API

## bitapp.bch.accounts.get
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - accounts | [array] 当前用户bch账户下的所有账户
  - fail
    - WalletLockError 当前钱包处于锁定状态

[试一试](http://localhost:3001/playground?code=bitapp.bch.accounts.get)

## bitapp.bch.getBalance
- 类型：方法
- 参数: address
- 返回: Promise
  - success
    - balance | [number] 查询地址余额，单位是[satoshi](https://en.bitcoin.it/wiki/Satoshi_(unit)), 1bch = 1e8 satoshi
  - fail | 失败原因

[试一试](http://localhost:3001/playground?code=bitapp.eth.getbalance)

## bitapp.bch.net.getId
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - networkid | [string] 网络环境数字编号(MAINNET = 1, TESTNET = 2)
  - fail | 失败原因

[试一试](http://localhost:3001/playground?code=bitapp.bch.net.getid)

## bitapp.bch.transactions.getTransaction
- 类型：方法
- 参数: txHash
- 返回: Promise
  - success
    - txObject | [object] 交易结构体
  - fail | 失败原因

- 示例

```js
bitapp.bch.transactions.getTransaction('2949978d23c296d0487f2160cdd86f53dffcc3bdb6b5fb39781b5d2c6ab65acf').then(console.log)
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

[试一试](http://localhost:3001/playground?code=bitapp.bch.transactions.gettransaction)

## bitapp.bch.getUnspent
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - utxo | [array] utxo数组
  - fail | 失败原因
- 示例

```js

bitapp.bch.transactions.getUnspent('bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm').then(console.log)
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

## bitapp.bch.getFee

获取交易手续费

- 类型：方法
- 参数: type | [string] (取值 'default', 'fast', 'slow')
- 返回: Promise
  - success
    - fee | [number] 获取交易手续费，单位是[satoshi](https://en.bitcoin.it/wiki/Satoshi_(unit)), 1bch = 1e8 satoshi
  - fail | 失败原因

[试一试](http://localhost:3001/playground?code=bitapp.bch.getfee)

## bitapp.bch.transactions.getTransactionCount
- 类型：方法
- 参数: address
- 返回: Promise
  - success
    - transactionCount | [number] 从当前地址发出的交易数
  - fail | 失败原因

[试一试](http://localhost:3001/playground?code=bitapp.bch.transactions.gettransactioncount)

## bitapp.bch.getBlockNumber
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - blockNumber | [number] 当前最新的区块数
  - fail | 失败原因