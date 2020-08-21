6.3多端开发
1.单页面应用（SPA）的原理和优缺点，掌握一种快速开发SPA的方案
优点：
    内容的改变不需要重新加载整个页面，基于这一点spa对服务器压力较小
    前后端分离
缺点：
    不利于seo
    导航不可用，如果一定要导航需要自行实现前进、后退
    初次加载时耗时多
    页面复杂度提高很多
2.理解Viewport、em、rem的原理和用法，分辨率、px、ppi、dpi、dp的区别和实际应用
    文章：https://www.runoob.com/w3cnote/viewport-deep-understanding.html
    https://www.cnblogs.com/zaoa/p/8630393.html
    viewport 
        width 控制视口的宽度，可以指定数字；或设置device-width来指定
        height	控制视口的高度，这个属性不太重要，很少使用
        initial-scale	控制页面最初加载时的在在idealviewport下缩放等级，通常设为1，可以是小数
        maximum-scale	允许用户的最大缩放值，为一个数字，可以带小数
        minimum-scale	允许用户的最小缩放值，为一个数字，可以带小数
        user-scalable	是否允许用户进行缩放，值为”no”或”yes”, no 代表不允许，yes代表允许
    em 相对于其父级元素去计算
    rem 相对于html节点字体大小

    ppi: pixel per inch，每英寸像素数
    dpi: dot per inch，每英寸多少点
        当用于描述显示器设备时ppi与dpi是同一个概念
    px(css px): 虚拟像素，可以理解为“直觉”像素，CSS和JS使用的抽象单位，浏览器内的一切长度都是以CSS像素为单位的，CSS像素的单位是px。
                CSS像素甚至在默认状态下就相当于多个物理像素的尺寸
    px:一个个像素点
    dp: 设备像素（物理像素），顾名思义，显示屏是由一个个物理像素点组成的，通过控制每个像素点的颜色，使屏幕显示出不同的图像,单位pt
    pt:pt在css单位中属于真正的绝对单位，1pt = 1/72(inch),inch及英寸
    dpr: 设备像素/CSS像素  像素比
    dip（设备独立像素）：CSS像素 =设备独立像素 = 逻辑像素

3.移动端页面适配解决方案、不同机型适配方案
4.掌握一种JavaScript移动客户端开发技术，如React Native：可以搭建React Native开发环境，熟练进行开发，可理解React Native的运作原理，不同端适配
5.掌握一种JavaScript PC客户端开发技术，如Electron：可搭建Electron开发环境，熟练进行开发，可理解Electron的运作原理
6.掌握一种小程序开发框架或原生小程序开发
7.理解多端框架的内部实现原理，至少了解一个多端框架的使用