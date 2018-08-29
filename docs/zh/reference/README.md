# BITAPP

BITAPP 对象是我们丰富的API访问入口

## BITAPP.eth

ETH币种的接口API

### BITAPP.eth.accounts
账户模块
#### BITAPP.eth.accounts.getAccounts
- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - accounts | [array] 当前用户eth账户下的所有账户
    - isUnlocked | [bool] 钱包是否处于解锁状态，如果钱包处于锁定状态，则获取不到账户数据
  - fail | 失败原因

[试一试](http://localhost:3001/playground?code=bitapp.eth.accounts.getaccounts)

### BITAPP.eth.net
### BITAPP.eth.accounts

## BITAPP.bch

BCH币种的接口API

### BITAPP.bch.accounts
账户模块
#### BITAPP.bch.accounts.getAccounts
- 类型：方法
- 参数: 无
- 返回: Promise
  - success | accounts:[array] 当前用户bch账户下的所有账户
  - fail | 失败原因

[试一试](http://localhost:3001/playground?code=bitapp.bch.accounts.getaccounts)

## BITAPP.wallet

## BITAPP.userContext

## BITAPP.preferences

## BITAPP.version

SDK 版本号