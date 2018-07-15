# AppRoles

AppRoles 对象是API访问入口，当成功安装了 [approles](https://approles.com/downloads) 插件之后，在任何一个合法网页的 window 对象下面，我们都会写入 AppRoles 对象，访问非常简单

```js

var AppRoles = window.AppRoles
console.log(AppRoles.version)

```