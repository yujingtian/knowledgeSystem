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
    一些CSS Hack由于浏览器存在交叉认识，所以需要通过层层覆盖的方式来实现对不同浏览器进行Hack的
3.元信息类标签(head、title、meta)的使用目的和配置方法
   
