6.1TypeScript
1.理解泛型、接口等面向对象的相关概念，TypeScript对面向对象理念的实现
    typeScript 用class 模块化来实现面向对象的理念
2.理解使用TypeScript的好处，掌握TypeScript基础语法
    TypeScript的设计目的应该是解决JavaScript的“痛点”：弱类型和没有命名空间，导致很难模块化，不适合开发大型程序。
    TypeScript设计了一套类型机制来保证编译时的强类型判断
    利用TypeScript的关键词module，可以达到类似于命名空间的效果，而export可以控制是否被外部访问
    可读性 开发者更多的信息,是最有价值的文档
    编译器会立即给出反馈，很多错误都可以在编译阶段捕获，而不是在运行时
3.TypeScript的规则检测原理
    文章：https://blog.csdn.net/liuhua_2323/article/details/103643963
    类型推断
    类型断言
    类型兼容
    类型保护
4.可以在React、Vue等框架中使用TypeScript进行开发