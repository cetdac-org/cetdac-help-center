# bitapp.wallet

钱包模块提供跨语言的通用钱包管理API

## bitapp.wallet.requestUnlock
- 类型：方法
- 参数: 
  - appName 申请用户解锁钱包的应用名称
- 返回: Promise
  - success
    - status | [string] 当解锁成功之后，返回'success'
  - fail

[试一试](http://localhost:3001/playground?code=bitapp.wallet.requestUnlock)

## bitapp.wallet.isUnlock

判断 bitapp 插件钱包是否处于解锁状态

- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - isUnlocked | [bool] 如果钱包处于解锁状态，则值为true，如果钱包为锁定状态，则值为false
  - fail