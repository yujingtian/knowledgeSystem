2.2 CSS
1.CSS盒模型，在不同浏览器的差异  文章：https://www.jianshu.com/p/37ecc3239b6e
    w3c 盒子模型的范围包括 margin、border、padding、content，并且 content 部分不包含其他部分
    ie 盒子模型的范围也包括 margin、border、padding、content，和标准 w3c 盒子模型不同的是：ie 盒子模型的 content 部分包含了 border 和 pading

    顶部加了 doctype 声明。在所有浏览器中都显示“标准 w3c 盒子模型”。所以为了让网页能兼容各个浏览器，让我们用标准 w3c 盒子模型
2.CSS所有选择器及其优先级、使用场景，哪些可以继承，如何运用at规则
    文章：https://blog.csdn.net/qq_39579242/article/details/84239914
    1.id选择器（#myid）
    2.类选择器（.myclassname）
    3.标签选择器（div,h1,p）
    4.相邻选择器（h1+p）
    5.子选择器（ul < li）
    6.后代选择器（li a）
    7.通配符选择器（*）
    8.属性选择器（a[rel="external"]）
    9.伪类选择器（a:hover,li:nth-child）
    上面九种选择器中ID选择器的效率是最高，而伪类选择器的效率则是最低

    1.通配选择符的权值 0,0,0,0
    2.标签的权值为 0,0,0,1
    3.类的权值为 0,0,1,0
    4.属性选择的权值为0,0,1,0
    5.伪类选择的权值为 0,0,1,0
    6.伪对象选择的权值为 0,0,0,1
    7.ID的权值为 0,1,0,0
    8.important的权值为最高 1,0,0,0

    归纳为!important > 内联 > ID > 类 >  伪类 | 属性选择 > 标签 | 伪对象 > 通配符 > 继承
    使用的规则也很简单，就是 选择器的权值加到一起，大的优先；如果权值相同，后定义的优先 。

    可继承的属性(css继承特性主要是指文本方面的继承)：font-size, font-family, color font-style
                text-indent和text-align  letter-spacing、word-spacing、white-space、line-height
                列表元素可继承的： list-style、list-style-type、list-style-position、list-style-image
    在CSS中经常见到过字符@后面加一些关键字的用法，这种用法就称之为AT规则
        @charset 用于提示css文件使用的字符串编码方式,它如果被使用，必须出现在最前面
        @import  用于引入一个css文件，除@charset规则不会被引入外，可以引入一个文件的全部内容。
        @media  它能够对设备的类型进行一些判断,甚至IE7,IE8浏览器的hack , 响应式宽度啊
                @media \0screen\,screen\9 {
                /* IE7,IE8干嘛干嘛嘞... */ 
                }

                @media screen\9 {
                    /* IE7干嘛干嘛嘞... */ 
                }
                 @media screen  and (max-width:768px)
        @page  用于分页媒体访问网页时的表现设置 这个规则用在打印文档时候修改一些CSS属性
            修改margin,orphans,widow 
            size   指定页面盒模型所在的容器的大小和方向。
            bleed 为页面框盒指定一个限制区域，超过这个区域的页面内容将被裁剪。
            marks 向文档添加剪切标记和/或注册标记。
        @counter-style   产生一种数据，用于定义列表项的表现 
            @counter-style circled-alpha {
                system: fixed;
                symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
                suffix: " ";
            }
            .items {
                list-style: circled-alpha;
            }
            Ⓐ One
            Ⓑ Two
            Ⓒ Three
            Ⓓ Four
            Ⓔ FIve ...
        @key-frames  产生一种数据，用于定义动画关键帧。
        @fontface   fontface用于定义一种字体，iconfont技术就是利用这个特性来实现
        @support  support检查环境的特性
                @supports (display: grid) {
                    div {
                        display: grid;
                    }
                }
                @supports not (display: grid) {
                    div {
                        float: right;
                    }
                }
        @namespace  此规则应用到XML HTML(XHTML)上特别有用，因为这样的话XHTML元素可以作为选择器在CSS中使用。
                @namespace url(http://www.w3.org/1999/xhtml);
                @namespace svg url(http://www.w3.org/2000/svg);

                /* 匹配所有的XHTML <a> 元素, 因为 XHTML 是默认无前缀命名空间 */
                a {}

                /* 匹配所有的 SVG <a> 元素 */
                svg|a {}

                /* 匹配 XHTML 和 SVG <a> 元素 */
                *|a {}
        @viewport  用于设置视口的一些特性，不过兼容性目前不是很好，多数时候被html的meta代替
        @document  对匹配到的路由有用
            @document url("https://www.example.com/") {
                h1 {
                    color: green;
                }
            }
3.CSS伪类和伪元素有哪些，它们的区别和实际应用
    伪类和伪元素的根本区别在于：它们是否创造了新的元素(抽象)
    伪元素的操作对象是新生成的dom元素，而不是原来dom结构里就存在的；而伪类恰好相反，伪类的操作对象是原来的dom结构里就存在的元素。
    伪类用一个冒号表示
    伪元素则使用两个冒号表示,也可以使用一个冒号
4.HTML文档流的排版规则，CSS几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理
    文档流排版规则：如果我们写html不写css，那么排版规则就是默认从上至下(块级元素)块级元素独占一行，从左到右(内联元素 如span)排不下了才会换行
    CSS几种定位的规则
        static 一般的标签元素不加任何定位属性都属于静态定位，在页面的最底层属于标准流。
        relative 相对定位元素不可层叠，依据left、right、top、bottom等属性在正常文档流中偏移自身位置。同样可以用z-index分层设计
                 不会改变其他元素的布局，会在此元素本来位置留下空白
        absolute 使用left、right、top、bottom等属性相对于其最接近的一个最有定位设置的父级元素进行绝对定位
                 会改变其他元素的布局，不会在此元素本来位置留下空白
        fixed  固定定位与绝对定位类似，但它是相对于浏览器窗口定位，并且不会随着滚动条进行滚动。

    雪碧图原理：将很多小图标生成一个图片。减少了http请求的次数 通过background的位置来展示不同的图片
5.水平垂直居中的方案、可以实现6种以上并对比它们的优缺点 
    文章:https://www.cnblogs.com/mslalan/p/8109901.html
    1.若是块级元素, 该元素设置 margin:0 auto即可.  
    2.flex  兼容性的问题  
    3.div绝对定位水平垂直居中【margin 负间距】 
    4.div绝对定位水平垂直居中【transforms 变形】 transform: translate(-50%,-50%); /*自己的50% */   css3 IE8及以下不支持
    5.将父盒子设置为table-cell元素，可以使用text-align:center和vertical-align:middle实现水平、垂直居中 Internet Explorer(甚至 IE8 beta)中无效，许多    嵌套标签
    6 calc计算 
6.BFC实现原理，可以解决的问题，如何创建BFC (BFC.html)
    原理：
        Box 是 CSS 布局的对象和基本单位， 直观点来说，就是一个页面是由很多个 Box 组成的。不同类型的 Box， 会参与不同的 Formatting Context，因此Box内的元素会以不同的方式渲染
        Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)

    BFC 定义
　　    BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域
    BFC的作用:
        1.利用BFC避免margin重叠。
        2.自适应两栏布局
        3.清除浮动
    BFC的生成:
        1.根元素
        2.float的值不为none
        3.overflow的值不为visible
        4.display的值为inline-block、table-cell、table-caption
          display：table也认为可以生成BFC，其实这里的主要原因在于Table会默认生成一个匿名的table-cell，正是这个匿名的table-cell生成了BFC
        5.position的值为absolute或fixed
    总结:
    BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，因为BFC内部的元素和外部的元素绝对不会互相影响，因此，
    当BFC外部存在浮动时，它不应该影响BFC内部Box的布局，BFC会通过变窄，而不与浮动有重叠。 同样的，当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动的高度。 避免margin重叠也是这样的一个道理。 
7.可使用CSS函数复用代码，实现特殊效果  文章：https://www.w3cplus.com/css/css-functions.html
    calc() 计算函数
    attr() 
    counter()
    max()
    min()
    toggle() 老版本用cycle()
8、PostCSS、Sass、Less的异同，以及使用配置，至少掌握一种 文章：https://blog.csdn.net/JoeBlackzqq/article/details/98885880
    Sass、Less都是css预处理器
    变量符：Less是@，而Scss是$  Stylus样式中声明变量没有任何限定，你可以使用“$”符号开始
    输出设置：Less没有输出设置，Sass提供4中输出选项：nested, compact, compressed 和 expanded
    处理条件语句：Sass支持条件语句，可以使用if{}else{},for{}循环等等。 LESS的条件语句使用有些另类，他不是我们常见的关键词if和else if之类，而其实现方式              是利用关键词“when”
    编译Sass要安装Ruby
    PostCSS 是目前流行的一个对 CSS 进行处理的工具（平台）。PostCSS 依托其强大的插件体系为 CSS 处理增加了无穷的可能性。
            PostCSS 一般不单独使用，而是与已有的构建工具进行集成
            优点1.扩展性强 2.兼容性强 3.功能全面 4.有很多插件库供选择
            缺点1.配置繁琐 2.学习相对陡峭
9.CSS模块化方案、如何配置按需加载、如何防止CSS阻塞渲染
   css模块化：1.命名约定:
                BEM:三个组成部分的英文首字母，分别是块（Block）、元素（Element）和修饰符（Modifier）。这三个不同的组成部分称为 BEM 实体
                    1.EM 实体名称全部是小写字母或数字。名称中的不同单词用单个连字符（-）分隔
                    2.BEM 元素名称和块名称之间通过两个下划线（__）分隔
                    3.布尔修饰符和其所修饰的实体名称之间通过两个连字符（–）来分隔。不使用名值对修饰符
                OOCSS:结构和样式分开  容器和内容分开 增强css的复用性
                AMCSS: css属性选择器来模块化CSS
                SMACSS: 可扩展和模块化的css架构
            2.CSS in JS:styled-components
            3.使用JS 来管理样式模块:CSS Modules   CSS scoped
    防止CSS阻塞渲染:文章https://www.jianshu.com/p/2f358123038e  降低加载css的优先级
10.熟练使用CSS实现常见动画，如渐变、移动、旋转、缩放等等  transition   animation
11.CSS浏览器兼容性写法，了解不同API在不同浏览器下的兼容性情况
    -webkit- ，针对safari，chrome浏览器的内核CSS写法
    -moz-，针对firefox浏览器的内核CSS写法
    -ms-，针对ie内核的CSS写法
    -o-，针对Opera内核的CSS写法
    兼容性情况：
        https://cloud.tencent.com/developer/news/323781
        https://blog.csdn.net/Wz1135640/article/details/78192648
12.掌握一套完整的响应式布局方案
    1. 媒体查询  @media 判断屏幕
    2.百分比布局  bootstrap的栅格化
    3.rem布局
    文章：https://blog.csdn.net/sinat_17775997/article/details/89087348

   


