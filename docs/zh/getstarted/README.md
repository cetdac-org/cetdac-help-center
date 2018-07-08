# 上手指南

## 安装

### Chrome 插件

AppRoles 目前支持 Chrome 插件版本，如果你的web页面需要使用AppRoles提供的API，可以安装[Chrome插件](http://google.com)。
安装成功之后，在chrome浏览器的右上角会出现小图标

![安装成功](./install-success.png)

如果在安装过程中遇到什么问题，可以直接到[github](https://github.com)提issue给我们或者给 [support@approles.com](mailto:support@approles.com)

安装完成之后，在新tab中打开你所开发的网页，AppRoles对象会被自动挂载到window对象下

```js

var AppRoles = window.AppRoles;
AppRoles.eth.accounts.getAccounts().then( accounts => { 
 // 用户账户
 console.log(accounts)
});

```

### FireFox 插件

AppRoles FireFox 正在开发中，敬请期待。

### 更多平台版本

AppRoles 计划推出更多的版本，未来会推出android，ios独立客户端版本并且提供统一的API调用体验，请广大开发者敬请期待。

## 介绍

## 特性

## 基本配置