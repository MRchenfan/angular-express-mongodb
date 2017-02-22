

## branch 
- master: seed
- web: web test
- webapp: webapp test


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


## webapp 开发
注意需要将webapp文件夹整个放到public目录下才能保证脚本和样式文件的路径正确


## 开发日志

### 2017/2/22
web: 
1. sidebar
2. 部署到后端

bug：
1. 页面header部分抖动

### 2017/2/21
web:
1. 页面划分，路由规划
2. header, footer, sidebar
3. header部分需要给一个状态，传递一个参数，确定当前页面位置 => include时可以传递一个locals，所以可以穿入一个state

> 得到一个结论，先写页面，然后去写数据渲染

### 2017/2/20
webapp:
1. 登录注册界面,开发成一个组件
2. 如何在controller中实现页面跳转
$state.go(stateName)
3. 调通了登录逻辑

> 这个项目做什么呢？ 还是做个blog项目吧，比较简单些，而且我也有这个需求，个人独立博客





	