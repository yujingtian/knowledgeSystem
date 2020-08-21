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
   1、依赖管理：方便引用第三方模块、让模块更容易复用，避免全局注入导致的冲突、避免重复加载或者加载不需要的模块。会一层一层的读取依赖的模块，添加不同的入口；同时，不会重复打包依赖的模块。

   2、合并代码：把各个分散的模块集中打包成大文件，减少HTTP的请求链接数，配合UglifyJS（压缩代码）可以减少、优化代码的体积。

   3、各路插件：统一处理引入的插件，babel编译ES6文件，TypeScript,eslint 可以检查编译期的错误。

    一句话总结：webpack 的作用就是处理依赖，模块化，打包压缩文件，管理插件。

8.可熟练配置已有的loaders和plugins解决问题，可以自己编写loaders和plugins