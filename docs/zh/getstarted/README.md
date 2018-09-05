# 上手指南

## 安装

### Chrome 插件

bitapp 目前支持 Chrome 插件版本，如果你的web页面需要使用 bitapp 提供的API，可以安装[Chrome插件](http://google.com)。
安装成功之后，在chrome浏览器的右上角会出现小图标

![安装成功](./install-success.png)

如果在安装过程中遇到什么问题，可以直接到[github](https://github.com/bitapp)提issue给我们或者给 [support@bitapp.pro](mailto:support@bitapp.pro)

安装完成之后，在新tab中打开你所开发的网页，AppRoles对象会被自动挂载到window对象下

```js

var bitapp = window.bitapp;
bitapp.eth.accounts.getAccounts().then(accounts => { 
 // 用户账户
 console.log(accounts)
});

```

### FireFox 插件

bitapp FireFox 正在开发中，敬请期待。

### 更多平台版本

bitapp 计划推出更多的版本，未来会推出android，ios独立客户端版本并且提供统一的API调用体验，请广大开发者敬请期待。

## 介绍

bitapp 的宗旨

## 特性

- **多种开发语言**

  除了javascript，我们未来还将提供android，ios版本的sdk，对于服务端的开发者，我们将提供nodejs和python版本的sdk。

- **多公链统一API接口**

  我们为多条公链（eth, bch）提供了统一的API调用接口，旨在帮助开发者快速高效的完成多条公链的支持，未来我们会不断支持新的币种。

- **集成查询API**

  BITAPP sdk集成了常用的余额查询，交易记录查询等功能，开发者将无需再请求第三方服务获取，并且我们的服务将永久免费。
