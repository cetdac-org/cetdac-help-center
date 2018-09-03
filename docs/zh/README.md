---
home: true
heroImage: /approles.png
actionText: 上手指南 →
actionLink: /zh/getstarted/
features:
- title: 轻松支持
  details: 只需安装一个插件，功能丰富的API就可以轻松调用。
- title: 多种开发语言
  details: 除了ETH，我们还支持BCH，BTC，EOS，NAS，等公链，并提供统一的API调用接口，开发者只需专注于业务层面。
- title: 多公链统一API
  details: 团队来自CoinEx，我们有着丰富的数字货币安全经验，专业团队为您和用户的数字货币账户保驾护航。
- title: 集成查询API
  details: AppRoles首创支持获取用户社交网络信息，让您的DAPP如虎添翼，走上社交网络传播快车道。
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


