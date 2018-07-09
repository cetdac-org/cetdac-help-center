---
home: true
heroImage: /approles.png
actionText: 上手指南 →
actionLink: /zh/getstarted/
features:
- title: 轻松支持
  details: 只需安装一个插件，功能丰富的API随意调用。
- title: 多币种，多公链统一API
  details: 除了ETH，我们还支持BCH，BTC，NAS，EOS，等公链，并提供统一的API调用接口，开发者只需专注于业务层面。
- title: 极致安全
  details: 团队来自CoinEx，我们有着丰富的数字货币安全经验，专业团队为您和用户的数字货币账户保驾护航。
- title: 社交网络
  details: AppRoles首创支持获取用户社交网络信息，让您的DAPP如虎添翼，走上社交网络传播快车道。
footer: Copyright © AppRoles Team
---

# 快速上手

```js

var AppRoles = window.AppRoles;
AppRoles.eth.accounts.getAccounts().then( accounts => { 
 // 用户账户
 console.log(accounts)
});

```


