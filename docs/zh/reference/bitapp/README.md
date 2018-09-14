# bitapp

bitapp 对象是API访问入口，当成功安装了 [BitApp](https://www.bitapp.net/) 插件之后，在任何一个合法网页的 window 对象下面，我们都会写入 window 对象，访问非常简单

## bitapp.version
返回SDK 版本号
- 类型：属性
- 示例：

```js

var bitapp = window.bitapp
console.log(bitapp.version)

```

[试一试](http://developer.bitapp.net/playground?code=bitapp.version)