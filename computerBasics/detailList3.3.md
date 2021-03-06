3.3 设计模式
1.熟练使用前端常用的设计模式编写代码，如单例模式、装饰器模式、代理模式等 （designModel）
文章：https://www.cnblogs.com/imwtr/p/9451129.html
2.发布订阅模式和观察者模式的异同以及实际应用（Observer.html）
  文章：https://www.cnblogs.com/cc-freiheit/p/11356073.html 
  https://www.cnblogs.com/yongwunaci/p/12021194.html
  https://segmentfault.com/a/1190000019260857
  观察者模式与发布订阅模式都是定义了一个一对多的依赖关系，当有关状态发生变更时则执行相应的更新
  发布订阅模式更灵活，是进阶版的观察者模式，指定对应分发
    1.观察者模式维护单一事件对应多个依赖该事件的对象关系；
    2.发布订阅维护多个事件（主题）及依赖各事件（主题）的对象之间的关系；
    3.观察者模式是目标对象直接触发通知（全部通知），观察对象被迫接收通知。发布订阅模式多了个中间层（事件中心），
      由其去管理通知广播（只通知订阅对应事件的对象）
    4.观察者模式对象间依赖关系较强，发布订阅模式中对象之间实现真正的解耦。
3.可以说出几种设计模式在开发中的实际应用，理解框架源码中对设计模式的应用
  vue 订阅发布模式