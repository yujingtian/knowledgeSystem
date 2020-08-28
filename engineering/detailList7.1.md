项目构建
1.理解npm、yarn依赖包管理的原理，两者的区别
  文章：https://www.jianshu.com/p/254794d5e741
  https://www.jianshu.com/p/3f406cf438be
2.可以使用npm运行自定义脚本
3.理解Babel、ESLint、webpack等工具在项目中承担的作用
4.ESLint规则检测原理，常用的ESLint配置
  文章：https://www.jianshu.com/p/e6ee3f64e2ce
5.Babel的核心原理，可以自己编写一个Babel插件
    babel是一个转译器，感觉相对于编译器compiler，叫转译器transpiler更准确
    ES6代码输入 ==》 babylon进行解析 ==》 得到AST
    ==》 plugin用babel-traverse对AST树进行遍历转译 ==》 得到新的AST树
    ==》 用babel-generator通过AST树生成ES5代码
6.可以配置一种前端代码兼容方案，如Polyfill
7.Webpack的编译原理、构建流程、热更新原理，chunk、bundle和module的区别和应用
  文章：https://www.cnblogs.com/chengxs/p/11022842.html
  原理：
    核心概念：
    Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
    Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
    Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
    Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
    Plugin：扩展插件，在 Webpack 构建流程中的特定时机会广播出对应的事件，插件可以监听这些事件的发生，在特定时机做对应的事情。

    构建流程：
    1.初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
    2.开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
    3.确定入口：根据配置中的 entry 找出所有的入口文件；
    4.编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
    5.完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；（parse 中调用 acorn AST 的 js 代码进行语法分析，收集 module 间的依赖关系，记录下来形成依赖树）
    6.输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
    7.输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。
  
  Compiler 和 Compilation 的区别在于：Compiler 代表了整个 Webpack 从启动到关闭的生命周期，而 Compilation 只是代表了一次新的编译。


    总结：webpack 的作用就是处理依赖，模块化，打包压缩文件，管理插件。
    webpack是一个打包模块化js的工具，可以通过loader转换文件，通过plugin扩展功能

  
  热更新原理
    文章：https://juejin.im/post/6844904008432222215
    http://www.xmhzd.com/study/article/view-1409.html
  （1）第一步，在 webpack 的 watch 模式下，文件系统中某一个文件发生修改，webpack 监听到文件变化，根据配置文件对模块重新编译打包，并将打包后的代码通过简单的 JavaScript 对象保存在内存中。

  （2）第二步是 webpack-dev-server 和 webpack 之间的接口交互，而在这一步，主要是 dev-server 的中间件 webpack-dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调用 webpack 暴露的 API对代码变化进行监控，并且告诉 webpack，将代码打包到内存中。

  （3）第三步是 webpack-dev-server 对文件变化的一个监控，这一步不同于第一步，并不是监控代码变化重新打包。当我们在配置文件中配置了devServer.watchContentBase 为 true 的时候，Server 会监听这些配置文件夹中静态文件的变化，变化后会通知浏览器端对应用进行 live reload。注意，这儿是浏览器刷新，和 HMR 是两个概念。

  （4）第四步也是 webpack-dev-server 代码的工作，该步骤主要是通过 sockjs（webpack-dev-server 的依赖）在浏览器端和服务端之间建立一个 websocket 长连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中 Server 监听静态文件变化的信息。浏览器端根据这些 socket 消息进行不同的操作。当然服务端传递的最主要信息还是新模块的 hash 值，后面的步骤根据这一 hash 值来进行模块热替换。

  （5）webpack-dev-server/client 端并不能够请求更新的代码，也不会执行热更模块操作，而把这些工作又交回给了 webpack，webpack/hot/dev-server 的工作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进行模块热更新。当然如果仅仅是刷新浏览器，也就没有后面那些步骤了。

  （6）HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上一步传递给他的新模块的 hash 值，它通过 JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回一个 json，查看是否有更新，以及下次热更新的Hash 标识，并进入热更新准备阶段，该模块再次通过 jsonp 请求，获取到最新的模块代码。立即执行webpackHotUpdate函数 =》 hotapply

  （7）而第 10 步是决定 HMR 成功与否的关键步骤，在该步骤中，HotModulePlugin 将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。

  （8）最后一步，当 HMR 失败后，回退到 live reload 操作，也就是进行浏览器刷新来获取最新打包代码。


  我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。
  module是webpack支持解析的模块；node中一个js文件就是一个模块
  chunk（代码块）包含多个module，存在于webpack处理过程中的阶段；
  bundle包含一个或多个chunk，为了优化有可能多个chunk被组合到一个bundle中，是源码经过webpack处理后的最终版本

8.可熟练配置已有的loaders和plugins解决问题，可以自己编写loaders和plugins