# bitapp.wallet

钱包模块提供跨语言的通用钱包管理API

## bitapp.wallet.requestUnlock

请求解锁

- 类型：方法
- 参数: 
  - appName 申请用户解锁钱包的应用名称
- 返回: Promise
  - success
    - status | [string] 当解锁成功之后，返回'success'
  - fail

[试一试](http://localhost:3001/playground?code=bitapp.wallet.requestunlock)

## bitapp.wallet.isUnlock

判断 bitapp 插件钱包是否处于解锁状态

- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - isUnlocked | [bool] 如果钱包处于解锁状态，则值为true，如果钱包为锁定状态，则值为false
  - fail

[试一试](http://localhost:3001/playground?code=bitapp.wallet.isunlock)

## bitapp.wallet.requestPay

请求 bitapp 发起转账请求

- 类型：方法
- 参数: 
  - appName | [string] 发起申请的平台
  - symbol | [string] 币种 ('eth', 'bch', '其他代币')。[完整代币列表](占位符)
  - amount | [string] 转账数量 (eth: 单位[wei](http://eth-converter.com/)。[了解更多](https://ethgasstation.info/)) 或者交易手续费 (bch: 单位[satoshi](https://en.bitcoin.it/wiki/Satoshi_(unit)), 1bch = 1e8 satoshi)
  - to | [string] 转账地址
  - gasPriceOrFee | [string] gasPrice (eth: 单位[wei](http://eth-converter.com/)。[了解更多](https://ethgasstation.info/)) 或者交易手续费 fee(bch: 单位[satoshi](https://en.bitcoin.it/wiki/Satoshi_(unit)), 1bch = 1e8 satoshi) 
  - data | [string] 自定义数据
  - desc | [string] 申请描述
- 返回: Promise
  - success
    - result | [object]
      - data | [object] 如果用户取消，则没有 data
        - txid | [string] 交易id
      - action | [string] 用户行为（'AUTH_PAY'：用户授权支付，'CANCEL_PAY': 用户取消支付）
  - fail
- 示例

```js
bitapp.wallet.requestPay('Demo','bch', (1e8).toString(),'bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm','1000','fuck','购买以太猫').then(console.log)
// 输出，用户取消
>{
  action: "CANCEL_PAY"
}
```

[试一试](http://localhost:3001/playground?code=bitapp.wallet.requestpay)

## bitapp.wallet.requestSign

请求 bitapp 发起签名请求

- 类型：方法
- 参数: 
  - appName | [string] 发起申请的平台
  - symbol | [string] 币种 ('eth', 'bch', '其他代币')。[完整代币列表](占位符)
  - dataToSign | [string] 需要签名的数据
- 返回: Promise
  - success
    - result | [object]
      - data | [object] 如果用户取消，则没有 data
        - signature | [string] 签名数据
      - action | [string] 用户行为（'AUTH_SIGN'：用户授权签名，'CANCEL_SIGN': 用户取消签名）
  - fail
- 示例

```js
bitapp.wallet.requestSign('Demo','bch','注册账户').then(console.log)
// 输出，用户取消
>{
  action: "CANCEL_SIGN"
}
```

[试一试](http://localhost:3001/playground?code=bitapp.wallet.requestsign)