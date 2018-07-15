# AppRoles.wallet

钱包模块提供跨语言的通用钱包管理API

## isUnlock

判断 approles 插件钱包是否处于解锁状态

#### 类型
- 方法
#### 参数
- 无
#### 返回
- Promise
  - true : 钱包处于解锁状态
  - false : 钱包处于锁定状态

#### 用法
```js

var walletApi = window.AppRoles.wallet;
walletApi.isUnlock().then(isUnlock => {
  console.log(isUnlock)
  // true o r false
})

```

## requestUnlock

## lock