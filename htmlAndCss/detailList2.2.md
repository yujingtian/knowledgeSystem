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
6.BFC实现原理，可以解决的问题，如何创建BFC