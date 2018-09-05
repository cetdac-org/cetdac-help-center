# bitapp.preferences

用户配置模块

## bitapp.preferences.get

用户钱包当前配置查询

- 类型：方法
- 参数: 
  - key | [string] 可选，需要查询的字段名，不填则为查询所有字段
    - currency 当前法币类型
    - currentLocale 当前语言
    - currentPage 当前页面
    - identities 所有账户信息
    - selectedAddress 当前地址
    - tokens 代币列表
- 返回: Promise
  - success
    - result | [object] 查询结果
  - fail | 失败原因

- 示例

```js
bitapp.preferences.get().then(console.log)
// 输出
>{
  currency:"¥",
  currentLocale:"cn",
  currentPage:"/",
  identities:{bch: {…}, eth: {…}},
  selectedAddress:{bch: "bchtest:qpwtjeu34nnu89yhk8hc853t0zt5fqwvc5x9spupsm", eth: "0x1688bc332f03a0db34faab4d863d882dc53957ab"},
  tokens:{bch: [], eth: []}
}
```

[试一试](http://localhost:3001/playground?code=bitapp.preferences.get)