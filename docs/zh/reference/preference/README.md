# bitapp.preference

用户配置模块

## bitapp.preference.get

用户当前配置查询

- 类型：方法
- 参数: 
  - key | [string] 可选，需要查询的字段名，不填则为查询所有字段
    - currency 当前法币符号
    - currencyType 当前法币类型
    - currentLocale 当前语言
    - currentPage 插件的当前页面
    - identities 所有账户信息
    - selectedAddress 当前地址
    - tokens 代币列表
- 返回: Promise
  - success
    - result | [object] 查询结果
  - fail | 失败原因

- 示例

```js
bitapp.preference.get().then(console.log)
// 输出
>{
  currency:"¥",
  currentLocale:"cn",
  currencyType: 'cny',
  currentPage:"/",
  identities:{bch: {…}, eth: {…}},
  selectedAddress:{bch: "bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm", eth: "0x1688bc332f03a0db34faab4d863d882dc53957ab"},
  tokens:{bch: [], eth: []}
}
```

[试一试](http://developer.bitapp.net/playground?code=bitapp.preference.get)

## bitapp.preference.getCurrency

获取用户当前的货币种类

- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - currency | [string] 货币类型 ('cny', 'usd').
  - fail | 失败原因

[试一试](http://developer.bitapp.net/playground?code=bitapp.preference.getcurrency)

## bitapp.preference.getLocale

获取用户当前用户选择的语言

- 类型：方法
- 参数: 无
- 返回: Promise
  - success
    - locale | [string] 语言 ('cn').
  - fail | 失败原因

[试一试](http://developer.bitapp.net/playground?code=bitapp.preference.getlocale)

## bitapp.preference.getTokens

获取用户当前用户添加的Token

- 类型：方法
- 参数: 
  - coin | [string] 币种 选填 [完整代币列表](/zh/append/#完整代币列表)
  - network | [string] 选填 网络类型字符串[完整网络类型](/zh/append/#完整网络类型)
- 返回: Promise
  - success
    - tokens | [array] Token列表.
  - fail | 失败原因

[试一试](http://developer.bitapp.net/playground?code=bitapp.preference.gettokens)

## bitapp.preference.getDefaultAddress

获取用户当前的默认地址

- 类型：方法
- 参数: 
  - coin | [string] 币种，选填，如果不填写，返回所有代币的地址（ERC20地址同ETH地址） [完整代币列表](/zh/append/#完整代币列表)
- 返回: Promise
  - success
    - address | [string] 当前地址。
  - fail | 失败原因

[试一试](http://developer.bitapp.net/playground?code=bitapp.preference.getdefaultaddress)