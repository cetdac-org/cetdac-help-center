---
home: true
heroImage: /approles.png
actionText: 上手指南 →
actionLink: /zh/getstarted/
features:
- title: 多种开发语言
  details: 除了javascript，我们未来还将提供android，ios版本的sdk，对于服务端的开发者，我们将提供nodejs和python版本的sdk。
- title: 多公链统一API
  details: 我们为多条公链（eth, bch）提供了统一的API调用接口，旨在帮助开发者快速高效的完成多条公链的支持。
- title: 集成查询API
  details: BITAPP sdk集成了常用的余额查询，交易记录查询等功能，开发者将无需再请求第三方服务获取，并且我们的服务将永久免费。
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
