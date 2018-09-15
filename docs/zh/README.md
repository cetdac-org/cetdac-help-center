---
home: true
heroImage: /approles.png
actionText: 上手指南 →
actionLink: /zh/getstarted/
features:
- title: 多种开发语言
  details: 支持JavaScript, nodeJS, Python等多种开发语言, 提供Android, iOS原生SDK。
- title: 多公链统一API
  details: 为多条公链提供统一的API调用接口，支持ETH、BCH以及EOS，旨在帮助开发者快速高效的完成多条公链的支持。
- title: 集成查询API
  details: 集成常用的余额、交易以及区块等信息查询接口，开发者将无需再从第三方服务获取。查询接口永久免费。
footer: Copyright © BITAPP Team
---

# 快速上手

```js

var bitapp = window.bitapp;

if (bitapp) {
  bitapp.preference.getDefaultAddress().then(addresses => {
    if(addresses.eth && addresses.bch) {
      //查询用户默认ETH账户余额
      bitapp.eth.getBalance(addresses.eth).then(balance=>{
        console.log('My BitApp wallet eth address: ' + addresses.eth)
        console.log('balance: ' + balance)
      }).catch(e=>{
        console.error(e)
      })

      //查询用户默认BCH账户余额
      bitapp.bch.getBalance(addresses.bch).then(balance=>{
        console.log('My BitApp wallet bch address: ' + addresses.bch)
        console.log('balance: ' + balance)
      }).catch(e=>{
        console.error(e)
      })
    } else {
      console.error('BitApp account not created')
    }

    //发起一笔ETH交易请求
    bitapp.wallet.requestPay('BitApp', 'eth', bitapp.eth.util.toWei('1', 'ether'), bitapp.eth.util.toWei('3', 'gwei'), '0x1e5776c667e1EB857726D96e63e524f9f3479Df2', '', 'BitApp转账示例')
  })
}

```
