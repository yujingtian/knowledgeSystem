1.javascript 规定了几种语言类型
    基本类型：undefind Null Boolean String Number Symbol BigInt
    引用类型：Object([], function, {}, Date ...)
2.javascript 对象的底层数据结构是什么
    javacript基本数据类型都是直接按值存储在栈中的（undefind null 不是NEW出来的boolean number string）他们每一个的数据占用的空间都是确定的，由系统自动分配和释放，内存能够及时回收，更加容易管理内存空间
    javascript引用类型被存储于堆（如对象，数组，函数等， 通过拷贝或者new出来的）,其实是引用类型的数据的地址指针存储于栈中，想要访问引用类型的数据，先从栈中拿到地址指针，然后通过地址指针在堆找到所需要的数据
3.手动实现一个简单的Symbol(symbol.html)
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


