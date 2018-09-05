# bitapp.eth

ETH币种的接口API

## bitapp.eth.account.get
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - accounts | [array] 当前用户eth账户下的所有账户
    - isUnlocked | [bool] 钱包是否处于解锁状态，如果钱包处于锁定状态，则获取不到账户数据
  - WalletLockError 当前钱包处于锁定状态

[试一试](http://localhost:3001/playground?code=bitapp.eth.accounts.get)


<!-- ## bitapp.eth.accounts.create
- 类型：方法
- 参数: 
  - entropy | [可选] (optional): 增加熵的随机字符串。如果给定它，至少应该是32个字符。如果没有一个字符串给定，将使用randomhex生成一个随机字符串。
- 返回: Promise
  - success
    - accounts | [array] 当前用户eth账户下的所有账户
    - isUnlocked | [bool] 钱包是否处于解锁状态，如果钱包处于锁定状态，则获取不到账户数据
  - fail | 失败原因

[试一试](http://localhost:3001/playground?code=bitapp.eth.accounts.create) -->

## bitapp.eth.getBalance
- 类型：方法
- 参数: address
- 返回: Promise
  - success
    - balance | [number] 查询地址余额，单位是[wei](http://eth-converter.com/),1eth = 1e18 wei
  - fail | 失败原因

[试一试](http://localhost:3001/playground?code=bitapp.eth.getbalance)

## bitapp.eth.net.getId
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - networkid | [string] 网络环境数字编号(MAINNET = 1, ROPSTEN = 3, RINKEYBY = 4, KOVAN = 42)
  - fail | 失败原因

[试一试](http://localhost:3001/playground?code=bitapp.eth.net.getid)

## bitapp.eth.transaction.getTransaction
- 类型：方法
- 参数: txHash
- 返回: Promise
  - success
    - txObject | [object] 交易结构体
  - fail | 失败原因

- 示例

```js
bitapp.eth.transaction.getTransaction('0x7ffbd75c4c0c4700f7b2d2bf3551a408aa271e32509757546f292d53d2532e72').then(console.log)
// 输出
>{
  "blockHash":"0x5696a39b8e3a64cd1ee8af7d855e88b12939d0d9e085295dade9b1fcbfe6b832",
  "blockNumber":6239367,
  "from":"0xA090b409F862be10e5C86dd7D6DaD0C039e1077F",
  "gas":21000,
  "gasPrice":"2875000000",
  "hash":"0x7ffbd75c4c0c4700f7b2d2bf3551a408aa271e32509757546f292d53d2532e72",
  "input":"0x",
  "nonce":1,
  "r":"0xa4bcbca9b5635ee9510e1fc0254c991668e442b463daca1974e80ea3c69a5bf6",
  "s":"0x4a1dd2d5a5a73094ed1ed9facccabb063675c6bd1ebe201f3fa19df732d26474",
  "to":"0x689C56AEf474Df92D44A1B70850f808488F9769C",
  "transactionIndex":45,
  "v":"0x25",
  "value":"449835741000000000"
  }
```

- 了解更多 [https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransaction](https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransaction)

[试一试](http://localhost:3001/playground?code=bitapp.eth.transactions.gettransaction)

## bitapp.eth.transaction.getTransactionReceipt
- 类型：方法
- 参数: txHash
- 返回: Promise
  - success
    - tx Receipt Object | [object] 交易状态结构体
  - fail | 失败原因

- 示例

```js
bitapp.eth.transaction.getTransactionReceipt('0x7ffbd75c4c0c4700f7b2d2bf3551a408aa271e32509757546f292d53d2532e72').then(console.log)
// 输出
>{
  "blockHash":"0x5696a39b8e3a64cd1ee8af7d855e88b12939d0d9e085295dade9b1fcbfe6b832",
  "blockNumber":6239367,
  "contractAddress":null,
  "cumulativeGasUsed":7989933,
  "from":"0xa090b409f862be10e5c86dd7d6dad0c039e1077f",
  "gasUsed":21000,
  "logs":[],"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "status":true,
  "to":"0x689c56aef474df92d44a1b70850f808488f9769c",
  "transactionHash":"0x7ffbd75c4c0c4700f7b2d2bf3551a408aa271e32509757546f292d53d2532e72",
  "transactionIndex":45
  }
```
- 了解更多 [https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactionreceipt](https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactionreceipt)

[试一试](http://localhost:3001/playground?code=bitapp.eth.transactions.gettransactionreceipt)

## bitapp.eth.transaction.getTransactionCount
- 类型：方法
- 参数: address
- 返回: Promise
  - success
    - transactionCount | [number] 从当前地址发出的交易数
  - fail | 失败原因

- 了解更多 [https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactioncount](https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactioncount)

[试一试](http://localhost:3001/playground?code=bitapp.eth.transactions.gettransactioncount)

## bitapp.eth.currency.getCurrency
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - currency | [string] 用户当前选择的法币类型('cny', 'usd')
  - fail | 失败原因

[试一试](http://localhost:3001/playground?code=bitapp.eth.currency.getcurrency)

## bitapp.eth.currency.getRate
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - rate | [number] 当前汇率
  - fail | 失败原因

[试一试](http://localhost:3001/playground?code=bitapp.eth.currency.getrate)


## bitapp.eth.gasPrice
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - gasPrice | [number] 获取最新gas price, 单位是[wei](http://eth-converter.com/)。[了解更多](https://ethgasstation.info/)
  - fail | 失败原因

[试一试](http://localhost:3001/playground?code=bitapp.eth.gasprice)

## bitapp.eth.getBlockNumber
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - blockNumber | [number] 当前最新的区块数
  - fail | 失败原因

[试一试](http://localhost:3001/playground?code=bitapp.eth.getblocknumber)

## bitapp.eth.getRawInstance
- bitapp对eth的web3方法进行了二次封装，为了给用户带来更好的调用体验，以及更统一的接口输出，但我们对于高级用户，也可以直接暴露web3的原生对象，开发者拿到原生对象之后就可以使用原生的web3方法，bitapp使用的是web3的1.0.0-beta.34版本
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - 原始web3对象
  - fail | 失败原因