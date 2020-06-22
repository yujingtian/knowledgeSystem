1.4 执行机制
1.为何try里面放return，finally还会执行，理解其内部机制
  Completion Record:用于描述异常、跳出等语句执行过程。表示一个语句执行完之后的结果，它有三个字段
            type:表示完成的类型，有 break、continue、return、throw、normal 几种类型
            value:表示语句的返回值，如果语句没有，则是 empty
            target:表示语句的目标，通常是一个 JavaScript 标签
  因JavaScript依靠着语句的Completion Record类型，在语句的复杂嵌套结构中，实现各种控制
  普通语句：从前到后顺次执行（这里先忽略 var 和函数声明的预处理机制），没有任何分支或者重复执行逻辑，会得到 [[type]]          为 normal 的 Completion Record，JavaScript 引擎遇到这样的 Completion Record，会继续执行下一条语句
  语句块：语句块内部的语句的 Completion Record 的 [[type]] 如果不为 normal，会打断语句块后续的语句执行。
  控制型语句：1.对其内部造成影响：如 if、switch、while/for、try
             2.对外部造成影响：如 break、continue、return、throw
             这两类语句的配合，会产生控制代码执行顺序和执行逻辑的效果
             先把try中将要return的值先存到一个本地变量中，因为规范规定了，当try和finally里都有return时，会忽略try的return，而使用finally的return


             try就属于控制型语句，并且属于对内部有影响的语句
             finally属于控制型语句，并且属于对内部有影响的语句
             return也属于控制型语句，但是他属于对外部有影响的语句
             因为finally中的内容必须保证执行，所以try/catch执行完毕，即使得到的结果是非normal型的完成记录，也必须要执行finally
  带标签的语句：任何 JavaScript 语句是可以加标签的，在语句前加冒号即可
               类似于注释，基本没有任何用处。唯一有作用的时候是：与完成记录类型中的 target 相配合，用于跳出多层循环
2.JavaScript如何实现异步编程，可以详细描述EventLoop机制
  1.回调函数
  2.setTimeout
  3.setInterval
  4.promise
  5.发布者订阅者模式
  6.事件监听
  7.generator  状态机  可以记住函数状态的函数 声明方式是function* （generator.html）
  8.async await

  EventLoop机制：JavaScript事件队列每16ms循环一次，先执行同步队列，再执行宏任务(第一次是执行script里的内容)，后执行微任务
  同步代码执行完成之后么，会检查EventQueue事件队列中，有没有没有执行的异步任务，有两个队列，一个是宏队列一个是微队列，将对应的异步
  函数加入对应的队列中去，在一次一次的循环，直到都被执行完了位置
  当某个宏任务执行完后,会查看是否有微任务队列。如果有，先执行微任务队列中的所有任务，
  如果没有，会读取宏任务队列中排在最前的任务，执行宏任务的过程中，遇到微任务，依次加入微任务队列。
  栈空后，再次读取微任务队列里的任务，依次类推



3.宏任务和微任务分别有哪些
  宏任务：I/O setTimeout  setInterval requestAnimationFrame	  setTmmediate（node）  整体代码script
  微任务：Promise  mutationObersve  process.nextTick(node)

4.可以快速分析一个复杂的异步嵌套逻辑，并掌握分析方法(async.html)
5.Node与浏览器EventLoop的差异 文章：https://blog.csdn.net/Fundebug/article/details/86487117

  Node.js 的运行机制
    1.V8 引擎解析 JavaScript 脚本
    2.解析后的代码，调用 Node API
    3.libuv 库负责 Node API 的执行。它将不同的任务分配给不同的线程，形成一个 Event Loop（事件循环），以异步的方式将任务的执行结果返回给 V8 引擎
    4.V8 引擎再将结果返回给用户
     node 中的事件循环的顺序(6个阶段):
      外部输入数据–>
      1.轮询阶段(poll)–>获取新的 I/O 事件, 适当的条件下 node 将阻塞在这里
      2.检查阶段(check)–>执行 setImmediate() 的回调
      3.关闭事件回调阶段(close callback)–> 执行 socket 的 close 事件回调
      4.定时器检测阶段(timer)–>这个阶段执行 timer（setTimeout、setInterval）的回调
      5.I/O 事件回调阶段(I/O callbacks)–>处理一些上一轮循环中的少数未执行的 I/O 回调
      6.闲置阶段(idle, prepare)–>仅 node 内部使用
      轮询阶段（按照该顺序反复运行）

      timer阶段：在 Node 中定时器指定的时间也不是准确时间，只能是尽快执行
      poll阶段：1.回到 timer 阶段执行回调   2.执行 I/O 回调

      process.nextTick
      这个函数其实是独立于 Event Loop 之外的，它有一个自己的队列，当每个阶段完成后，
      如果存在 nextTick 队列，就会清空队列中的所有回调函数，并且优先于其他 microtask 执行

      差异：浏览器环境下，microtask 的任务队列是每个 macrotask 执行完之后执行。而在 Node.js 中，
      microtask 会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行 microtask微队列的任务

6.如何在保证页面运行流畅的情况下处理海量数据
  createDocumentFragment：创建出来的是虚拟的节点对象，可以减少Dom渲染的次数，
                          插入的不是DocumentFragment自身，而是它的所有子孙节点
  分页  懒加载
