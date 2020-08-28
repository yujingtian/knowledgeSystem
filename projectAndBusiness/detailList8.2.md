性能优化
1.了解前端性能衡量指标、性能监控要点，掌握一种前端性能监控方案
    文章：https://zhuanlan.zhihu.com/p/82981365
    window.performance.timing 查看各种时间

    白屏时间： domInteractive - fetchStart   dom解析完 - http开始抓取请求时间
    首屏时间：domContentLoadedEventEnd - fetchStart  dom加载完成网页资源加载完成 - http开始抓取请求时间

    Google的Lighthouse
    阿里的webpagetest

2.了解常见的Web、App性能优化方案
    文章：https://www.jianshu.com/p/e4e960e96105  https://juejin.im/post/6844903987666255885
    网络层面：
    1.减少 HTTP请求数：合理使用缓存，资源合并比如雪碧图，压缩资源，使用base64图片，懒加载资源
    2.缓存机制（强缓存）（协商缓存）
    3.避免重复的资源请求
    4.使用cdn加速
    5.减小cookie的大小
    6.减少iframe的数量
    7.避免404资源

    html结构
    1.将外部脚本置底
    2.异步执行 inline脚本 script标签的defer async
    3.将 CSS放在 HEAD中
    4.@import 避免使用@import的原因很简单，因为它相当于将css放在网页内容底部

    代码层面
    1.精简Javascript和CSS 精简就是将Javascript或CSS中的空格和注释全去掉
    2.减少dom操作 可以使用 createElementFragment 虚拟节点 将几个操作合并成一个
    3.减少回流重绘 尽量不要使用table，每次改变都会触发回流重绘
    4.避免CSS表达式  滚动屏幕或者移动鼠标的时候也在计算
    


3.SEO排名规则、SEO优化方案、前后端分离的SEO
    https://juejin.im/post/6844903824428105735
    1.合理的title、description、keywords
    2.语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页
    3.非装饰性图片必须加alt
    4.友情链接，好的友情链接可以快速的提高你的网站权重
    5.外链，高质量的外链，会给你的网站提高源源不断的权重提升
    6.重要内容HTML代码放在最前：搜索引擎抓取HTML顺序是从上到下，保证重要内容一定会被抓取
    7.少用iframe：搜索引擎不会抓取iframe中的内容
    8.提高网站速度：网站速度是搜索引擎排序的一个重要指标
    9.网站结构布局优化：尽量简单、开门见山，提倡扁平化结构

4.SSR实现方案、优缺点、及其性能优化
    nuxt
    基于 Vue.js 
    自动代码分层 
    服务端渲染 
    强大的路由功能，支持异步数据 
    静态文件服务 
    ES6/ES7 语法支持 
    打包和压缩 JS 和 CSS 
    HTML头部标签管理 
    本地开发支持热加载 
    集成ESLint 
    支持各种样式预处理器： SASS、LESS、 Stylus等

    缺点： 目录结构不可变
          还得继续选择express或者koa等，来配置线上环境（还需要node服务器）

5.Webpack的性能优化方案
   优化开发体验： 
        1.开启热更新
        2.缩小文件范围：可以通过缩小文件范围来减少 webpack 不必要的文件扫描，加快每次打包的速度
        优化 resolve.modules 配置  直接指明这个路径 在这个目录下寻找第三⽅模块
        优化 resolve.alias 配置

        3.优化文件监听的性能 wepack --watch模式的时候不去监听第三方模块的文件夹。这样， webpack 消耗的内存和 CPU 都将会大大减少。
        4.还可以将Babel编译过的文件缓存起来，在下次需要编译更改过的代码文件就可以，这样可以大大减少打包的时间
        5.第三方库只需要编译一次，将更改不频繁的代码进行单独编译 做缓存

   优化输出质量
        1.抽离、压缩CSS
        2.压缩 HTML
        3.代码分割 Code Splitting  
            代码体积大，不利于下载
            没有合理利用浏览器下载资源（ chrome中，默认最大同时可以有6个 HTTP 请求）
            将自定义的模块 第三方库 webpack运行时文件分离。分离webpack运行文件runtime，因为无论我们是否修改了项目文件，每次build项目时的runtime文件的hash值总是会发生变化的，需要单独打出来。
        4.第三方库的按需引入

6.Canvas性能优化方案


7.React、Vue等框架使用性能优化方案
    Vue优化方案
    异步组件，路由懒加载
    循环添加key  更新时候新的状态值和旧的状态值对比，有利于diff
    服务端渲染 预渲染
    组件细分，将一个页面分成多个组件，这样渲染的时候就只更新变化的组件
    keep-alive 组件的缓存 加快渲染
    第三方库的按需加载
    v-if 和 v-show选择调用

