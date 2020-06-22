2.1 HTML
1.从规范的角度理解HTML，从分类和语义的角度使用标签
    HTML5新增的语义化标签
    <article>、<section>、<nav>、<aside>、<header>、<footer>、<time>、<mark>、<address>等等
    优点：
    1.为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构
    2.比<div>标签有更加丰富的含义，方便开发与维护
    3.方便搜索引擎能识别页面结构，有利于SEO
    4.方便其他设备解析（如移动设备、盲人阅读器等）
    5.有利于合作，遵守W3C标准

    块级元素:
        1.block元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父元素宽度。
        2.在不设置高度的情况下，块级元素的高度是它本身内容的高度
        3.block元素可以设置width,height属性。块级元素即使设置了宽度,仍然是独占一行
        4.block元素可以设置margin和padding属性
    内联函数：
        1.inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。
        2.inline元素设置width,height属性无效。
        3.inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；但竖直方向的   padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。
    内块函数：
        简单来说就是将对象呈现为inline对象，但是对象的内容作为block对象呈现。之后的内联对象会被排列在同一行内。比如我们可以给一个link（a元素）inline-block属性值，使其既具有block的宽度高度特性又具有inline的同行特性。
        1.两个inline-block元素中间有空白间隔
        2.左边inline-block元素和右边inline-block元素中的文字始终处于底端对齐的状态 
            解决：给两个元素各加上，overflow: hidden和vertical-align：middle
2.常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式 
    文章：https://blog.csdn.net/ferrysoul/article/details/106087052（默认样式、自带属性）
    为什么会存在浏览器兼容问题？
    首先要了解兼容，我们先得了解一下为什么会存在浏览器兼容问题。在各大浏览器厂商的发展过程中，它们对web的标准各有不同的实现，标准不同存在差异所以产生兼容性的问题。

    处理兼容问题  属性级Hack、选择器Hack 以及IE条件Hack（只能IE）
    hack 不同的浏览器可以识别属性
    * ie7
    _ ie6
    \9 ie8
    一些CSS Hack由于浏览器存在交叉认识，所以需要通过层层覆盖的方式来实现对不同浏览器进行Hack的
3.元信息类标签(head、title、meta)的使用目的和配置方法  文章：https://segmentfault.com/a/1190000019128577
    base:base标签指定了一个url地址作为基准，那么当前文档中的所有超链接都遵循这一规则，在a中设置访问目标的相对地址，浏览器会自动解析出一个完整的链接地址，若      a的href为空，浏览器也会根据base所给的url进行访问
    link:用于引入外部的文档，常用到引用css样式或icon图标  
         属性：
            charset 属性规定被链接文档的字符编码方式。
            href 属性规定被链接文档的位置（URL）
            reflang 属性规定被链接文档中文本的语言
            media 属性规定被链接文档将显示在什么设备上
            rel 属性规定当前文档与被链接文档之间的关系  （stylesheet 外部样式表   icon 网站图标  canonical 指明网址的规范版本）
    title：浏览器会以特殊的方式来使用标题，当把文档加入链接列表或收藏夹时，文档标题将成为该链接的默认名称
    meta:元素可提供有关页面的元信息，比如针对搜索引擎和更新频度的描述和关键词     
        属性：
            name属性主要用于描述网页，与之对应的属性值为content,content中的内容主要是便于搜索引擎机器人查找信息和分类信息用的  
                属性值： 1.keywords  
                        2.description 网站内容描述 
                        3.robots 机器人向导 robots用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引 content的参数有all,none,index,noindex,follow,  nofollow。默认是all
                        4.author 作者 标注网页的作者
                        5.rendere 渲染模式  
                        6.viewport(视图模式)  对手机端而言很重要
                            <meta name="viewport"  content="
                            width=device-width,  //viewport的高度
                            initial-scle=1.0,  //初始的缩放比例
                            maximum-scale=1.0,  //允许用户缩放到的最小比例
                            minimum-scale=1.0, //允许用户缩放到的最大比例
                            user-scalable=no" //用户是否可以手动缩放
                            />
            http-equiv属性 相当于http的文件头作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为content，content中                的内容其实就是各个参数的变量值
                属性值：X-UA-Compatible 浏览模式   例子：<meta http-equiv="X-UA-Compatible" content="IE=5" />   IE=6 IE=7 ...
                       Expires 期限  可以用于设定网页的到期时间，一旦网页过期，必须到服务器上重新传输
                       Pragma cache模式  禁止浏览器从本地计算机的缓存中访问页面内容
                       Refresh 刷新  自动刷新并指向新页面  <meta http-equiv="Refresh" content="2;URL=http://www.jb51.net"> 其中的2是指停留2秒钟后自         动刷新到URL网址
                       Set-Cookie cookie设定 如果网页过期，那么存盘的cookie将被删除
                       Window-target 显示窗口的设定 强制页面在当前窗口以独立页面显示  用来防止别人在框架里调用自己的页面
                       content-Type 显示字符集的设定  设定页面使用的字符集
                       content-Language 显示语言的设定
4.HTML5离线缓存原理   文章：https://blog.csdn.net/dj0379/article/details/53350309
    通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本 需要服务器添加配置，允许请求这个后缀的文件，告诉浏览器那些需要缓存
    HTML5引入了应用程序缓存，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问。 应用程序缓存为应用带来三个优势
    1.离线浏览 – 用户可在应用离线时使用它们
    2.速度 – 已缓存资源加载得更快
    3.减少服务器负载 – 浏览器将只从服务器下载更新过或更改过的资源。

    manifest 文件可分为三个部分
        CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存
        NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
        FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）

    对于浏览器来说,manifest的加载是要晚于其他资源的. 这就导致check manifest的过程是滞后的.发现manifest改变.所有浏览器的实现都是紧随这做静默更新资源.以保证下次pv,应用到更新.
5.可以使用Canvas API、SVG等绘制高性能的动画 
    SVG 矢量图  
    1.不失真，放大缩小图像都很清晰
    2.学习成本低，也是一种 DOM 结构
    3.使用方便，设计软件可以直接导出

    Canvas 像素图
    1.内存占用恒定，就是像素点个数
    2.可控性高，像素级控制
    3.性能高，可以自己控制绘制过程，还能使用 WebGL
