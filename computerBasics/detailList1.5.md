1.5语法和API
1.理解ECMAScript和JavaScript的关系
  ECMAScript是JavaScript的参照, 而JavaScript是ECMAScript的一个实现
  JavaScript实现:
  1.ECMAScript：核心
  2.DOM：文档对象模型
  3.BOM：浏览器对象模型
2.熟练运用es5、es6提供的语法规范
  es6:
    1.let const
    2.箭头函数
    3.字符串模板
    4.解构
    5.模块化 export import
    6.参数默认值
    7.rest参数   function test(...arg) 参数不固定
    8.展开操作    ...
    9.class
    10.Map
    11.Promise
    12.Generators  function*声明 生成器 yield  
  es7:1.Array.prototype.includes()  判断数组中是否存在该值
      2.指数操作符 ** 
  es8:1.object.entries()
      2.Async Await
      3.Object.values()
      4.Object.getOwnPropertyDescriptors()  返回obj对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象。
3.熟练掌握JavaScript提供的全局对象（例如Date、Math）、全局函数（例如decodeURI、isNaN）、全局属性（例如Infinity、undefined） 文章：https://blog.csdn.net/nupt123456789/article/details/101928127
  对象：Date  JSON  Math  RegExp Error Boolean  Array  String  Number
  属性：Infinity NaN undefined
  函数：decodeURI() decodeURIComponent() encodeURI() encodeURIComponent() escape() unescape() eval()
        isFinite() isNaN()  Number() parseInt() parseFloat() 
4.熟练应用map、reduce、filter 等高阶函数解决问题
  map:map返回一个数组，接受两个参数，第一个是回调函数，第二个是执行回调函数时用的this值，
      map遍历数组的每个值来做一些改变，再返回整个数组
  filter:filter返回一个数组，接受的参数是一个回调函数，filter遍历数组的每一个值，
         当数组的值在你在filter里面的规则对应为true时，返回该数组上的值，否则不返回。
  reduce:接受两个参数，一个是回调函数，另一个是初始值                    