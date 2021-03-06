1.2原型和原型链
1.理解原型设计模式以及JavaScript中的原型规则（prototype.html）
  原型对象：我们创建的每一个函数（JavaScript中函数也是一个对象）都有一个原型属性 prototype，原型属性实质上是一个指           针，它指向一个对象，这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法（通俗的说：就是这个特定           类型的所有实例都可以共享原型对象包含的属性和方法）。
  每个函数都会有一个原型属性（prototype），它是一个指针，指向原型对象；默认情况下，原型对象包含一个constructor（构造函数）属性（原型最初只包含constructor属性），这个属性包含一个指向prototype属性的指针,通过这个构造函数就可以继续为原型对象添加其他的属性和方法。

  原型对象中的值不能被对象实例重写
  在原型模式中读取属性值时，首先会去实例上查找有没有相同名称的属性，有的话就不会再去原型对象上查找；如果实例上没有，就会去原型对象上搜索。
  也就是说当我们给实例上添加了一个属性，这个属性就会阻止我们去原型上访问这个同名属性，但是不会修改那个属性

  原型的动态性：还是可以通过prototype.属性名进行修改原型上的属性
  现有原型与任何之前存在的对象实例之间的联系会被切断，先实例化了对象，之后在原型上添加的属性方法，先实例化的对象是无法被访问到
  优缺点：好处是原型对象上的所有属性和方法可以被很多实例共享，缺点是当原型中包含引用类型的值的属性时，一个实例对象对这个引用类型的的属性做了修改，在其他实例对象中也可以体现
  文章：https://www.cnblogs.com/yy95/p/5751136.html

2.instanceof的底层实现原理，手动实现一个instanceof(instanceof.html)
    typeof js在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息
           000：对象
           010：浮点数
           100： 字符串
           110：布尔值
           1： 整数
           因为null的头三位是0，所以typeof(null) 返回的是Object
    instanceof 主要的实现原理就是只要右边变量的prototype在左边变量的原型链上即可，因此，instanceof在查找的过程中会遍历左边变量的原型链，直到找到右边变量的prototype，如果查找失败，则会返回false，告诉我们左边变量并非右边变量的实例
    每个 JavaScript 对象均有一个隐式的 proto 原型属性，而显式的原型属性是 prototype
    对象实例默认是没有prototype属性的，会返回undefined

3.实现继承的几种方式以及他们的优缺点（extends.html）
    1.原型链继承:
      优点：可继承构造函数的属性，父类构造函数的属性，父类原型的属性。
      缺点：无法向父类构造函数传参；且所有实例共享父类实例的属性，若父类共有属性为引用类型，一个子类实例更改父类构造函数共有属性时会导致继承的       共有属性发生变化。
    2.构造函数继承
      优点：可解决原型链继承的缺点,可以向父类传参
      缺点：无法继承原型链上的属性方法
    3.组合继承
      优点：可继承父类原型上的属性，且可传参；每个新实例引入的构造函数是私有的
      缺点：会执行两次父类的构造函数，消耗较大内存，子类的构造函数会被代替成原型上的那个父类构造函数
    4.原型式继承
      缺点：共享引用类型
    5.寄生式继承
      优点：可添加新的属性和方法
    6.寄生组合式继承

4.至少说出一种开源项目(如Node)中应用原型继承的案例   jquery
5.可以描述new一个对象的详细过程，手动实现一个new操作符  (new.html)
  1.首先创建一个空对象
  2.链接到原型 （将所创建对象的__proto__,指向构造函数的prototype属性）
  3.绑定this  (构造函数中的属性this,指向新对象的this,并执行，用call,apply改变this指向)
  4.返回新的对象

6.理解es6 class构造以及继承的底层实现原理（class.html） 文章：https://blog.csdn.net/qq_34149805/article/details/86105123
  1.ES6类的底层还是通过构造函数去创建的
  2.Object.defineProperty方法去给新建的函数添加各种属性，如果是公有方法就在该构造函数的prototype上添加，如果是静态方法就直接在构造函数上加
  3.调用_classCallCheck方法判断当前函数调用前是否有new关键字,将构造函数的prototype指向这个空对象的__prpto__，并将this指向这个空对象。如上，_classCallCheck中：this instanceof Parent，返回true,es5中构造函数是可以直接执行的，而在转码过的构造函数中有_classCallCheck（this, 本身的函数名），阻止你直接运行构造函数，检测你有没有加new

  babel用于添加属性的函数:
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


  class继承  本质就是寄生组合继承
  1.用一个闭包保存父类引用，在闭包内部做子类构造逻辑
  2.调用_inherits函数继承父类的proptype
    1.校验父构造函数,是不是一个函数和null
    2.典型的寄生继承：用父类构造函数的proptype创建一个空对象，并将这个对象指向子类构造函数的proptype，将子类原型对象的constructor指向子类构造函数本身
    3.将父构造函数指向子构造函数的_proto_ （Object.setPrototypeOf   Child.__proto__ = Parent）
  3.var _super = _createSuper(Child); 返回一个函数 用于之后继承父类属性方法
    function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result; 
        if (hasNativeReflectConstruct) { 
            console.log(_getPrototypeOf(this))
            var NewTarget = _getPrototypeOf(this).constructor;  
            result = Reflect.construct(Super, arguments, NewTarget); 
            //相当于
            // result = Object.create(NewTarget)
            // Super.apply(NewTarget, arguments)
        } else { 
            result = Super.apply(this, arguments); 
        } 
        return _possibleConstructorReturn(this, result); 
    }; 
  4.new检查
  5._super.call(子类对象)  执行父类构造函数，this指向子类，继承父类的属性
  可见，es6实际上是为我们提供了一个“组合寄生继承”的简单写法





  