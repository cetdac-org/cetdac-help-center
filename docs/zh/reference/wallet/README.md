# AppRoles.wallet

钱包模块提供跨语言的通用钱包管理API

## isUnlock()

判断 approles 插件钱包是否处于解锁状态

#### 类型
- 异步方法
#### 参数
- 无
#### 返回
- result [boolean]
  - true : 钱包处于解锁状态
  - false : 钱包处于锁定状态

#### 用法
```js

var walletApi = window.AppRoles.wallet;
walletApi.isUnlock().then(isUnlock => {
  console.log(isUnlock)
  // true o r false
}).catch(e=>{
  console.error(e)
})

```

## requestUnlock(appName)

请求用户解锁 appRoles，该方法调用成功之后会 appRoles 会弹窗请求用户输入密码解锁

#### 类型
- 异步方法
#### 参数
- appName [string] 你应用的名称
#### 返回
- result [string] 
  - "success" : 钱包处于解锁状态

#### 用法
```js

var walletApi = window.AppRoles.wallet;
walletApi.requestUnlock('your app name').then(result => {
  console.log(result)
  // true o r false
}).catch(e=>{
  console.error(e)
})

```

## lock()

主动锁定 approles 插件钱包

#### 类型
- 异步方法
#### 参数
- 无
#### 返回
- result [boolean]
  - "success" : 钱包锁定成功

#### 用法
```js

var walletApi = window.AppRoles.wallet;
walletApi.lock().then(result => {
  console.log(result)
  // true o r false
}).catch(e=>{
  console.error(e)
})

```