4.1 javascript的编码能力
1.多种方式实现数组去重、扁平化、对比优缺点(repeat.html flat.html)
  去重文章：https://blog.csdn.net/weixin_33735676/article/details/91423990
  扁平化：https://www.cnblogs.com/wind-lanyan/p/9044130.html
2.多种方式实现深拷贝、对比优缺点 
  对象深拷贝
  1.递归
  2.JSON.parse  JSON.stringfy 无法拷贝函数
  3.Object.assign 二级属性为浅拷贝  

  数组深拷贝
  1.for循环实现数组的深拷贝
  2.concat 数组中元素一维以上是值的引用
  3.slice 数组中元素一维以上是值的引用
  4.ES6扩展运算符实现数组的深拷贝 也只有一维的深拷贝
3.手写函数柯里化工具函数、并理解其应用场景和优势
  是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术
  一个JS预处理的思想，降低通用性，提高适用性
4.手写防抖和节流工具函数、并理解其内部原理和应用场景
  文章：https://blog.csdn.net/qq_29557739/article/details/96430431
      https://blog.csdn.net/hyeeee/article/details/96432062
  防抖：指在时间n内，函数被触发多次，但是只执行一次，执行最新的触发。也就是在时间n内，碰到新的触发，就清除之前的，重新计时
  节流：当持续触发某个事件时，会有规律的每隔时间n就执行一次函数。
5.实现一个sleep函数
  文章：https://www.jianshu.com/p/01184f1a2f7e
