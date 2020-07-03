4.2手动实现前端轮子
1.手动实现call、apply、bind (thisPoint.html)
2.手动实现符合Promise/A+规范的Promise、手动实现async await  (promise.html async_await)
3.手写一个EventEmitter实现事件发布、订阅  （EventEmitter.html）
4.可以说出两种实现双向绑定的方案、可以手动实现  （MVVM） 
    1.Object.defineProperty()本身有一定的监控到数组下标变化的能力，但无法检测到新增或者删除，导致数组新增删除的元素不能实时响应。proxy可以实时响应到数组的所有变动
    2.Object.defineProperty()劫持的是对象的属性，所以需要对每个对象的所有属性进行遍历劫持。proxy是劫持整个对象，并且返回一个新对象
        vue data中的数据会被遍历劫持，初始化的时候，每个变量都会有一个创建一个dep依赖收集器来收集他的依赖，当他变量发生变化，就会触发这个收集器的发通知函数，通知依赖他的watcher(观察者)发生变化
    3.脏数据检查 文章：https://zhuanlan.zhihu.com/p/24990192  https://www.cnblogs.com/likeFlyingFish/p/6183630.html
    4.直接操作dom
5.手写JSON.stringify、JSON.parse  
  文章：https://cloud.tencent.com/developer/article/1475724
6.手写一个模版引擎，并能解释其中原理 (template.html) 
7.手写懒加载、下拉刷新、上拉加载、预加载等效果 