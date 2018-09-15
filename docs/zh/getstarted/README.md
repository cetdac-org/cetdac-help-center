# 上手指南

## 安装

### Chrome 插件

BitApp Chrome 插件现已上线，如果你的web页面需要使用 BitApp 提供的API，需要先安装[Chrome插件](http://www.bitapp.net)。
安装成功之后，在 Chrome 浏览器的右上角会出现小图标

![安装成功](./install-success.png)

如果在安装过程中遇到什么问题，可以直接到[github](https://github.com/bitapp)提issue给我们或者给 [alan@bitapp.pro](mailto:alan@bitapp.pro)

安装完成之后，在新tab中打开你所开发的网页，bitapp对象会被自动挂载到window对象下

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

### FireFox 插件

BitApp FireFox 正在开发中，敬请期待。

### 更多平台版本

BitApp 计划推出更多的版本，未来会推出android，ios独立客户端版本并且提供统一的API调用体验，敬请期待。

## 介绍

BitApp 旨在为开发者提供区块链基础设施服务，降低开发者开发区块链应用门槛。将陆续推出涵盖web、移动端并支持多公链的产品与相应SDK。帮助开发者构建成功的区块链产品，是我们的第一要务。

## 特性

- **多种开发语言**

  支持JavaScript, nodeJS, Python等多种开发语言, 提供Android, iOS原生SDK。

- **多公链统一API接口**

  为多条公链提供统一的API调用接口，支持ETH、BCH以及EOS，旨在帮助开发者快速高效的完成多条公链的支持。

- **集成查询API**

  集成常用的余额、交易以及区块等信息查询接口，开发者将无需再从第三方服务获取。查询接口永久免费。
