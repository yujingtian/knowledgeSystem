5.3 Node
1.理解Node在应用程序中的作用，可以使用Node搭建前端运行环境、使用Node操作文件、操作数据库等等
2.掌握一种Node开发框架，如Express，Express和Koa的区别
    文章：https://blog.csdn.net/mo_247/article/details/102836214
    koa2
        基于node的一个web开发框架，利用co作为底层运行框架，利用Generator的特性，实现“无回调”的异步处理；
        ES7;
        更小、更富有表现力、更健壮的基石；
        利用async函数、Koa丢弃回调函数，增强错误处理；
        很小的体积，因为没有捆绑任何中间件；
        类似堆栈的方式组织和执行；
        低级中间件层中提供高级“语法糖”，提高了互操性、稳健性；
    Express
        Node的基础框架，基础Connect中间件，自身封装了路由、视图处理等功能；
        线性逻辑，路由和中间件完美融合，清晰明了；
        弊端是callback回调方式，不可组合、异常不可捕获；
        ES5;
        connect的执行流程：
        connect的中间件模型是线性的，即一个一个往下执行；
    
    Handler的处理
        Express普通回调函数，在同一线程上完成当前进程的所有Http请求；
        Koa利用Generator Function作为响应器，co作为底层运行框架，利用Generator特性，实现“协程响应”；
    
    路由
        Express的路由是自身集成的；
        Koa的需要引入中间件Koa-router；

    异步流程
        Express采用callback来处理异步(ES5)；
        Koa1采用generator(ES6)；
        Koa2采用async/await(ES7)；
    
    错误处理
        Express使用callback捕获异常，深层次的异常捕获不了；
        Koa使用try catch，很好的解决异常捕获；

    koa2的中间件：
        通过async await实现的，中间件执行的顺序是“洋葱圈”模型。
        中间件之间通过next函数联系，当一个中间件调用next()后，会将控制权交给下一个中间件，直到下一个中间件不再执行next()后，会沿路返回，将控制权交给前一个中间件。
    Express中间件：
        一个接一个顺序执行，response响应写在最后一个中间件中。
        特点：
        app.use用来注册中间件；
        遇到http请求，根据path和method判断触发哪些中间件；
        实现next机制，即上一个中间件会通过next触发下一个中间件；

    生命周期:
    Express的生命周期不确定：
 	    express内部执行异步函数，不能确定什么时候执行完；
    Koa的确定：
        koa是基于await/async，在执行下一步操作的时候，必须等待前端await执行完；
3.熟练使用Node提供的API如Path、Http、Child Process等并理解其实现原理
4.Node的底层运行原理、和浏览器的异同
    文章：https://blog.csdn.net/flying_rat_/article/details/81673558
    a、V8引擎解析JavaScript脚本
    b、解析后的代码，调用Node API
    c、libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎
    d、V8引擎再将结果返回给用户
    本质上，nodejs是借助于谷歌V8引擎来运行javascript代码。使用了C++的libuv库来处理网络，访问文件系统等操作
    Nodejs是一个平台，构建在chrome的V8上（js语言解释器），采用事件驱动、非阻塞模型

    和浏览器环境的区别： 文章：https://www.cnblogs.com/webARM/p/5004595.html
5.Node事件驱动、非阻塞机制的实现原理
    文章:https://blog.csdn.net/caseywei/article/details/87891992
    遇到有需要回调的地方，就将此处加入到事件队列中，然后主线程继续往下走，直到运行结束以后，才去执行事件队列中的回调
    node是一个单线程多进程的。node进程创建一个循环，每个循环就是一个周期，在循环中会从事件队列里查看是否有事件需要处理，如果有就去除事件并执行相关的函数。对于阻塞事件的处理在幕后使用线程池来确保工作的运行，而不占用主循环流程

