### 为什么选择Vite?

### Vite简介

Vite是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：

* 一个开发服务器，基于原生ES模块，提供了丰富的内建功能，如速度惊人的模块热更新(HMR)
* 一套构建指令，使用Rollup打包代码，并且是预配置的，可输出用于生产环境的高度优化过的静态资源

浏览器支持

* 默认的构建目标浏览器是能 [在 script 标签上支持原生 ESM](https://caniuse.com/es6-module) 和 [原生 ESM 动态导入](https://caniuse.com/es6-module-dynamic-import)。传统浏览器可以通过官方插件 [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) 支持 —— 查看 [构建生产版本](https://cn.vitejs.dev/guide/build.html) 章节获取更多细节

### 搭建Vite项目

兼容注意：Vite需要Nodejs 版本 >= 14.6.0。有些模板版本需要依赖更高Node版本才能正常运行，当你的包管理器发出警告时，请注意升级你的Node版本。

### 搭建一个Vite项目

> 使用npm
>
> ```
> npm create vite@latest
> ```
>
> 使用yarn
>
> ```
> yarn create vite
> ```
>
> 使用pnpm
>
> ```
> pnpm create vite
> ```

index.html与项目根目录

> ##### 在一个Vite项目中，index.html在项目的最外层而不是在public文件夹内。这是有意而为之的：在开发期间Vite是一个服务器，而index.html是该Vite项目的入口文件。

> Vite以当前工作目录为根目录启动开发服务器，也可以使用vite serve some/sub/dir来指定一个替代的根目录。

命令行界面

> * dev:  启动开发服务器，别名 `vite dev、 vite server`
> * build: 为生产环境构建产物
> * preview: 本地预览生产构建产物

可以指定额外的命令行选项，比如--port或--https。运行npx vite --help可以获得完整的命令选项列表

### 功能

对非常基础的使用来说，使用 Vite 开发和使用一个静态文件服务器并没有太大区别。然而，Vite 还通过原生 ESM 导入提供了许多主要用于打包场景的增强功能。

NPM依赖解析和预构建：

原生ES导入不支持下面这样的裸模块导入：

```
import { someMethod } from 'my-dep'
```

上面的代码会在浏览器中抛出一个错误。Vite 将会检测到所有被加载的源文件中的此类裸模块导入，并执行以下操作:

1. 预构建
2. 重写导入合法的URL

依赖是强缓存的：Vite通过HTTP头来缓存请求得到的依赖


### **插件使用**

[https://cn.vitejs.dev/plugins/](插件地址)

### 依赖预构建

npm 依赖会被预构建到node_modules/.vite下面，可以使用--force重新预构建


### 静态资源管理

将资源引入为URL

显式URL引入

将资源引入为字符串

导入脚本作为Worker

public目录


### 构建生产版本

浏览器兼容

公共基础路径

自定义构建

产物分块策略

文件变化时重新构建

多页面应用模式

库模式

### 部署静态站点
