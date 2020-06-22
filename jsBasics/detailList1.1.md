1.1 变量和类型
1.javascript 规定了几种语言类型
    基本类型：undefind Null Boolean String Number Symbol BigInt
    引用类型：Object([], function, {}, Date ...)
2.javascript 对象的底层数据结构是什么
    javacript基本数据类型都是直接按值存储在栈中的（undefind null 不是NEW出来的boolean number string）他们每一个的数据占用的空间都是确定的，由系统自动分配和释放，内存能够及时回收，更加容易管理内存空间
    javascript引用类型被存储于堆（如对象，数组，函数等， 通过拷贝或者new出来的）,其实是引用类型的数据的地址指针存储于栈中，想要访问引用类型的数据，先从栈中拿到地址指针，然后通过地址指针在堆找到所需要的数据
3.手动实现一个简单的Symbol(symbol.html)
    Symbol是由ES6规范引入的一项新特性，它的功能类似于一种标识唯一性的ID
    每个Symbol实例都是唯一的。因此，当你比较两个Symbol实例的时候，将总会返回false
    Symbol类型的key是不能通过Object.keys()或者for...in来枚举的
    把不需要对外操作的属性用Symbol来定义
4.JavaScript中的变量在内存中的具体存储形式
    栈内存：存储基本数据类型， 按值访问， 存储空间确定，由系统自动分配内存空间，空间小运行效率搞， 先进后出，后进先出
    堆内存：存储引用数据类型， 按引用访问， 存储大小不定，可动态调整， 由代码指定分配，空间大运行相对较低， 无序存储，可根据引用直接获取
5.基本类型对应的内置对象，以及他们之间的装箱拆箱操作（upPickAndPick.html）
    内置对象：Object是所有对象的父对象，数据封装类对象:Object Array Boolean Number和String 其他对象：Function Arguments Math Date RegExp
    Error。特殊的基本包装类型（String, Number, Boolean）
    装箱：把基本数据类型转化为对应的引用数据类型的操作，装箱分为隐式装箱和显示装箱
        隐式装箱：创建String类型的一个实例，在实例上调用指定的方法，销毁这个实例，这个对象是临时的，只存在与调用方法的瞬间，执行方法后会被立刻          销毁
                例子：let a = 'sun' let b = a.indexOf('s')
                    let a = new String('sun') let b = a.indexOf('s')  a = null
        显示装箱:通过内置对象可以对Boolean Object String等可以对基本类型显示装箱
                let a = new String('sun')
    拆箱：就是将引用类型的转化为基本类型的数据，通常通过引用类型的valueof()和toString（）方法实现
        例子：  let name = new String('sun')
	            let age = new Number(24)
                age.valueOf()
                age.toString()
        拆箱过程内部调用ToPrimitive,该操作接受两个参数，第一个是要转变的对象，第二个是PreferredType（非必须） 是对象被期待转成什么类型的
        默认先valueOf 看看否有基本类型的返回值，然后再看toString方法，如果 toString 方法也没有返回值，产生 TypeError 错误。
        PreferredType 影响 valueOf 与 toString 的调用顺序
6.理解值类型和引用类型
    值类型：Number、Stirng、Boolean、Null、Underfined
            栈（stack），占内存空间固定，使用后被销毁
            值的拷贝,创建一个新对象，保存与复制的是值本身，两份数据在内存中是完全独立的
            值是不可变的，函数作用域，在函数内部修改时生效，函数销毁时失效
            比较方式：值的比较
    引用类型：Object、Function、Array、Date、RegExp 
            堆（heap），占内存空间不固定，使用后不一定被销毁，只有一个对象没有任何引用时，系统的垃圾回收机制才会回收销毁，
            引用的拷贝，创建一个新引用，保存与复制的是指向对象的一个指针，变量中的存储的地址赋值一份单独存储,两个变量中修改其中一个对象，另外一个引用来访问的时候，也会访问到修改后的值。
            使用 new() 方法构造出的对象是引用型，
            值是可变的，函数中被修改时修改的是运行时数据区中的值，即使函数被销毁，变量的值依旧被改变
            比较方式：引用的比较
7.null和undefined的区别
            历史原因：1.null像在Java里一样，被当成一个对象，设计者认为"无"的值最好不是对象
                     2.JavaScript的最初版本没有包括错误处理机制，发生数据类型不匹配时，往往是自动转换类型或者默默地失败，如果null自动转为0，很不容易发现错误
            null是一个表示"无"的对象，转为数值时为0,用法：
            1.作为函数的参数，表示该函数的参数不是对象
            2.作为对象原型链的终点
            undefined是一个表示"无"的原始值，转为数值时为NaN，用法：
            1.变量被声明了，但没有赋值时，就等于undefined
            2.调用函数时，应该提供的参数没有提供，该参数等于undefined
            3.对象没有赋值的属性，该属性的值为undefined
            4.函数没有返回值时，默认返回undefined
            例子
            Number(null) //0
            Number(undefined) //NaN
8.至少可以说出三种判断JavaScript数据类型的方式，以及他们的优缺点，如何准确的判断数组类型
            1.typeOf  可以对基本类型做出准确的判断  注意：typeof null 会返回Object （只能检测出基本类型）
            2.instanceof 判断对象和构造函数在原型链是否有关系，有则真，否则假（不能检测出基本类型，且不能跨iframe）
            3.Object.prototype.toString 可以说不管是什么类型，它都可以立即判断出（检测出所有的类型，IE6下，undefined和null均为Object）
                例子：
                   var str = 'hello';
                   Object.prototype.toString.call(str);//[object String]
            4.constructor：查看对象对应的构造函数 constructor 在其对应对象的原型下面，是自动生成的。（基本能检测所有的类型，除了null和undefined，constructor易被修改，也不能跨iframe）
                例子：
                var str = 'hello';
                alert(str.constructor == String);//true
                var str = null';
                alert(str.constructor == null); //报错
9.可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用
            隐式转换场景
                js中的双等于==
                布尔值会转换为数字，false转换为0，true转换为1
                当两个值都是对象时，比较的是两个引用值在内存中是否是同一个对象
                例子：
                [] == [] //false
                [] == {} //false
                {} == {} //false
                [] == ![]
                最后一个是因为右边空数组会转化为true，取反变为false，false变为0；左边空数组变为空字符串再变为0，0==0就为true
            如何避免：
                用全等符号===来判断是否相等，es6中可以用Object.is()来判断  Object.is(true,1) //false
            巧用：
                const str = 变量 + "  " //将变量转换成字符串
                const number = true + 1  //转成了数值类型的数据
10.出现小数精度丢失的原因，JavaScript可以存储的最大数字、最大安全数字，JavaScript处理大数字的方法、避免精度丢失的方法
            js的Number类型遵循的是IEEE754标准，使用64位固定长度来表示
            IEEE754标准由三个区域组成：
                1.sign bit (符号位) 一位  
                2.exponent bias (指数偏移值) 十一位
                3.fraction (分数值) 五十二位
            value = sign * exponent * fraction   如果某些小数的fraction有无限循环的现象，就像0.1
            1001...(中间有 11 个 1001)...1010 (请注意最后四位，是 1010 而不是 1001，因为四舍五入有进位,准确的说是0舍1进，这个进位就是造成 0.1 + 0.2 不等于 0.3 的原因)

            JavaScript可以存储的最大数字：2的53次方 之后精度会有问题
            JavaScript可以存储的最大安全数字： 2的53次方
            避免精度丢失的方法：
            1.四则运算精度问题解决方案  将小数放到整数位做计算，再缩小倍数，或者转成字符串，进行手动移位
            2.toFixed (0.1 + 0.2).toFixed(1) // "0.3"

    


