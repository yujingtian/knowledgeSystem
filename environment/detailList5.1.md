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
    卷去内容的高度：主流window.screenLeft   IE window.screenX
    window.getComputedStyle() 获取所有css值，IE8之前不支持   第一个是要查询的元素，第二个是可选的，他表示获取（第一个参数）元素的伪元素的样式值。
    window.getSelection()该方法可以获取到当前选取的文本内容
3.大量DOM操作、海量数据的性能优化(合并操作、Diff、requestAnimationFrame等)
    1.innerHTML
    2.createDocumentFragment
    3.requestAnimationFrame
    4.Diff
    5.分页
    6.懒加载
4.浏览器海量数据存储、操作性能优化
    indexedDB
    操作性能优化：Worker 开启新的线程
5.DOM事件流的具体实现机制、不同浏览器的差异、事件代理
    事件冒泡：事件开始时由最具体的元素(文档中嵌套层次最深的那个节点)接收，然后逐级向上传播到较为不具体的节点(文档)
        note: 几乎现代所有的浏览器都支持事件冒泡，不过有一些细微的差别
             IE5.5 和 IE5.5 - 版本的事件冒泡会跳过html元素（body 直接到 document）
             IE9、Firefox、Chrome、Safari则一直冒泡到window对象。
    事件捕获：不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。事件捕获的用意在于在事件到达预定目标之前就捕获它
    虽然事件捕获是Netscape唯一支持的事件流模型，但IE9、Firefox、Chrome、Safari目前也都支持这种事件模型，但是从window对象开始捕获，由于老版本的浏览器并不支持，所以我们应该尽量使用事件冒泡，有特殊需求的时候再考虑事件捕获
    addEventListener()方法中的第三个参数设置为true时，即为事件捕获阶段
    DOM2级事件流：
        为了能够兼容上述两种事件模型，又提出了一个DOM2级事件模型，它规定了事件流包含三个阶段
        事件捕获阶段：为事件捕获提供机会
        处于目标阶段：事件的目标接收到事件（但并不会做出响应）
        事件冒泡阶段：事件响应阶段
    事件代理：事件冒泡和目标元素，把事件处理器添加到父元素，等待子元素事件冒泡，并且父元素能够通过target（IE为srcElement）判断是哪个子元素，从而做相应处理
    1.好处减少了代码量，将多个事件减少到了一个，提高了性能
    2.新添加的元素也会被绑定

6.前端发起网络请求的几种方式及其底层实现、可以手写原生ajax、fetch、可以熟练使用第三方库
    1、 link标签的href属性
    2、 script标签的src属性
    3、 img标签的src属性
    4、 ajax发送请求
    5、 表单提交发送请求
    6、 a标签的href发送请求
    7、 iframe的src属性发送请求
7.浏览器的同源策略，如何避免同源策略，几种方式的异同点以及如何选型
    同协议 同端口 同域名 
    同源策略是浏览器的一个安全功能，不同源的客户端脚本在没有明确授权的情况下，不能读写对方资源
    限制：
    1.跨域资源的引入是可以的。但是js不能读写加载的内容
    2.页面中的链接，重定向以及表单提交是不会受到同源策略限制的

    跨域：
    cors:简单请求：Access-Control-Allow-Origin:*
         非简单请求CORS_ORIGIN_ALLOW_ALL = True 所有都允许，或者设置白名单
    websocket
    nginx:代理服务器
    jsonp:基本思想是，网页通过添加一个<script>元素，向服务器请求JSON数据，这种做法不受同源政策限制；服务器收到请求后，将数据放在一个指定名字的回调函数里传回
8.浏览器提供的几种存储机制、优缺点、开发中正确的选择
    文章：https://blog.csdn.net/weixin_34062469/article/details/88863479
    cookie
    sessionStorage
    localStorage
9.浏览器跨标签通信
    1.在一个标签页里面使用 localStorage.setItem(key,value)添加（修改、删除）内容； 
    在另一个标签页里面监听 storage 事件。 
    即可得到 localstorge 存储的值，实现不同标签页之间的通信。
    2.cookie+setInterval() 
    将要传递的信息存储在cookie中，每隔一定时间读取cookie信息，即可随时获取要传递的信息
    3.websocket
    4.postMessage
