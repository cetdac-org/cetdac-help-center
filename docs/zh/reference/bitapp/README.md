# bitapp

bitapp 对象是API访问入口，当成功安装了 [approles](https://www.bitapp.pro/) 插件之后，在任何一个合法网页的 window 对象下面，我们都会写入 window 对象，访问非常简单

```js

var bitapp = window.bitapp
console.log(bitapp.version)

```