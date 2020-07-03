5.1 浏览器API
1.浏览器提供的符合W3C标准的DOM操作API、浏览器差异、兼容性
    文章：https://www.jianshu.com/p/ac5eca146a8d
    https://blog.csdn.net/qq_34573534/article/details/99763537
    https://segmentfault.com/a/1190000013387194
    差异：
    1.获取网页中那个元素触发了事件：在IE里使用srcElement ；在FireFox里使用target
    2.使用Dom获取和更改网页标签元素内文本：在IE里使用innerText ；在FireFox里使用textContent
    3.动态为网页或元素绑定事件：在IE中绑定事件的方法是attachEvent ；在FireFox中绑定事件的方法是addEventListener 
    4.对于checkbox、 input type="file"等元素，在Firefox中只要元素的内容一发生变化就触发onchang事件，而在IE中需等到元素失去焦点才触发 onchang事件
2.浏览器提供的浏览器对象模型 (BOM)提供的所有全局API、浏览器差异、兼容性
    文章：https://cloud.tencent.com/developer/article/1526013
    navigator:window中封装浏览器属性和配置信息的对象 
    screen：保存显示屏信息的对象
    history：保存窗口的历史记录栈
    location：指代当前窗口正在访问的url地址对象 

    差异：
    卷去内容的高度：主流window.screenLeft   主流window.screenX
    window.getComputedStyle() 获取所有css值，IE8之前不支持   第一个是要查询的元素，第二个是可选的，他表示获取（第一个参数）元素的伪元素的样式值。
    window.getSelection()该方法可以获取到当前选取的文本内容
3.大量DOM操作、海量数据的性能优化(合并操作、Diff、requestAnimationFrame等)
4.浏览器海量数据存储、操作性能优化
5.DOM事件流的具体实现机制、不同浏览器的差异、事件代理
6.前端发起网络请求的几种方式及其底层实现、可以手写原生ajax、fetch、可以熟练使用第三方库
7.浏览器的同源策略，如何避免同源策略，几种方式的异同点以及如何选型
8.浏览器提供的几种存储机制、优缺点、开发中正确的选择
9.浏览器跨标签通信