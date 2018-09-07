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
bitapp.eth.accounts.getAccounts().then( accounts => { 
 // 用户账户
 console.log(accounts)
});

```
