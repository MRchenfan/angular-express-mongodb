这是一个网页项目，不是单页应用

## 网页本地开发
 使用browser-sync来代理express启动服务和自动刷新
 nodemon 代理express，可以自动重启服务器

### dev
```
/src
	// => ./public
	css
	img
	js
	// => /src/css
	scss
	// => ./views
	views // 写模版，并使用自动化工具实时编译到src目录下
```
使用ejs，上手快，当然可以很方便的切换到其他模板引擎下

todo： 额外扩展，比如使用es6, typescript, coffeescript...

### build
代码压缩和移动


	