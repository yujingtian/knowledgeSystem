3.2网络协议
1.理解什么是协议，了解TCP/IP网络协议族的构成，每层协议在应用程序中发挥的作用
    文章：https://blog.csdn.net/fang_a_kai/article/details/80884869
    协议就是双方或者多方达成的共识，是一种行为规范和约定
    就像http协议，就是一个用在计算机世界的协议，他用计算机能够理解的语言制定了计算机的交流和规范，以及相关的各种控制和错误处理方式
    一个协议定义了在两个或多个通信实体之间交换的报文格式和次序，以及报文发送（或接收报文或其他事件）所采取的行动
    网络协议通俗地讲就是网络上两台计算机之间通信所要遵守的共同标准

    TCP/IP 协议常被视为简化的七层OSI模型，总共有四层
    网络接口层-------这是TCP/IP软件的最低层，负责接收IP数据包并通过网络发送之，或者从网络上接收物理帧，抽出IP数据报，交给IP层。(帧，网络接口协议)
    网络层---------是TCP/IP协议族中非常关键的一层，主要定义了IP地址格式，从而能够使得不同应用类型的数据在Internet上通畅地传输，IP协议就是一个网络层协议。（IP数据包）
    传输层--------这一层的的功能主要是提供应用程序间的通信，TCP/IP协议族在这一层的协议有TCP和UDP。（UDP）
    应用层-------ICP/IP协议族在这一层面有着很多协议来支持不同的应用，许多大家所熟悉的基于Internet的应用的实现就离不开这些协议。如我们进行万维网（WWW）访问用到了HTTP协议、文件传输用FTP协议、电子邮件发送用SMTP、域名的解析用DNS协议、远程登录用Telnet协议等等，都是属于TCP/IP应用层的；就用户而言，看到的是由一个个软件所构筑的大多为图形化的操作界面，而实际后台运行的便是上述协议。（FTP、SMTP、telnet、DNS、tftp）

    OSI网络分层
    物理层
    数据链路层
    网络层
    传输层
    会话层
    表示层
    应用层
    

2.三次握手和四次挥手详细原理，为什么要使用这种机制
    文章：https://www.cnblogs.com/shihaochangeworld/p/5770294.html    
3.有哪些协议是可靠，TCP有哪些手段保证可靠交付
    1、将数据截断为合理的长度。
    2、超时重发
    3、对于收到的请求，给出确认响应 
    4、校验出包有错，丢弃报文段，不给出响应，TCP发送数据端，超时时会重发数据
    5、对失序数据进行重新排序，然后才交给应用层
    6、对于重复数据，能够丢弃重复数据
    7、TCP还能提供流量控制。
    文章：https://blog.csdn.net/qq_33878858/article/details/90200032
    https://www.jianshu.com/p/4fbb48c4285d
4.DNS的作用、DNS解析的详细过程，DNS优化原理
    DNS服务的作用
      将域名解析为IP 地址  客户端向DNS服务器（DNS服务器有自己的IP地址）发送域名查询请求  DNS服务器告知客户机Web服务器的IP 地址
    DNS解析的详细过程: 文章：https://blog.csdn.net/john1337/article/details/82991472  https://www.jianshu.com/p/401f34691dcc
    1.检查浏览器缓存中是否缓存过该域名对应的IP地址
    2.查找本机系统是否缓存过IP
    3.向本地域名解析服务系统发起域名解析的请求
    4.向根域名解析服务器发起域名解析请求
    5.根域名服务器返回gTLD（通用顶级域名）域名解析服务器地址
    6.向gTLD（通用顶级域名）服务器发起解析请求
    7.gTLD服务器接收请求并返回Name Server服务器
    8.Name Server服务器返回IP地址给本地服务器
    9.本地域名服务器缓存解析结果
    10.返回解析结果给用户

    顶级域名TLD(Top Level Domain)已有265个，分为三大类
    1.国家顶级域名nTLD
    2.通用顶级域名gTLD
    3.基础结构域名

    优化：
    第一, 现代浏览器已经支持且默认打开了DNS Prefetch的功能. 当然也可以通过浏览器的配置来管理该功能:
    第二, 可以通过用meta信息来告知浏览器, 我这页面要做DNS预取: <meta http-equiv="x-dns-prefetch-control" content="on" />
    第三,可以使用link标签来强制对DNS做预取: <link rel="dns-prefetch" href="http://www.alibaba.com/" />

5.CDN的作用和原理
   文章：https://blog.csdn.net/weixin_45967826/article/details/103860460
        https://blog.csdn.net/mtldswz312/article/details/101205549
        https://www.jianshu.com/p/14dede92b02f
   cdn的作用：CDN的全称是Content Delivery Network，即内容分发网络。是通过在现有的Internet中增加一层新的网络架构，           将网站的内容发布到最接近用户的网络“边缘”，使用户可以就近取得所需的内容，提高用户访问网站的响应速度。
            1.提高用户访问的速度。
            2、减轻源站服务器的压力。
            3、提升网站的稳定性和安全性。  
   CDN的原理：CDN的实现需要依赖多种网络技术的支持，其中主要的负载均衡技术、动态内容分发与复制技术、缓存技术 
        1.用户向浏览器输入www.web.com这个域名，浏览器第一次发现本地没有dns缓存，则向网站的DNS服务器请求；
        2.网站的DNS域名解析器设置了CNAME（别名记录），指向www.web.51cdn.com,请求指向了CDN网络中的智能DNS负载均衡系统；
        3.智能DNS负载均衡系统解析域名，把对用户响应速度最快的IP节点返回给用户；
        4.用户向该IP节点（CDN服务器）发出请求；
        5.由于是第一次访问，CDN服务器会向原web站点请求，并缓存内容；
        6.请求结果发给用户。
        原理：当用户访问加入CDN服务的网站时，域名解析请求将最终交给全局负载均衡DNS进行处理，全局负载均衡DNS通过一组预先定义好的策略，将当时最接近用户的节点地址提供给用户，使用户能够得到快速的服务。
6.HTTP请求报文和响应报文的具体组成，能理解常见请求头的含义，有几种请求方式，区别是什么
   文章：https://blog.csdn.net/a_fool_program_ape/article/details/81748544
    http请求报文:请求行（request line）、请求头部（header）、空行和请求数据4个部分组成
        1.请求行：请求方式，请求的URL http版本
            请求方式：
            get
            post
            head
            put
            delete
            connect
            option
            trace
        2.请求头部：请求头部由键/值对组成，每行一对键和值用英文冒号“:”分隔。请求头部通知服务器有关于客户端请求的信  息
            Content-Type：我们的请求参数的格式
            User-Agent：产生请求的客户端类型。
            Accept：客户端可识别的内容类型列表。
            Host:请求的主机名
            Accept-Encoding： 客户端使用的编码环境和编码方式
            Accept-Language： 客户端语言环境
            Authorization：授权信息，一般用于存放授权之后的信息
            Connection：表示是否需要持久连接
            Content-Length：表示请求数据正文的长度
            Cookie：这个与服务器端做交互的，存储保持会话的重要信息 Referer：表示该次请求的来源，一般用于做防盗链
        3.换行符：最后一个请求头之后是一个空行，发送回车符和换行符，通知服务器以下不再有请求头
        4.请求数据：就是我们请求参数
    http响应报文：状态行、响应头、空格、响应数据
        1.状态行：供一个状态码来说明所请求的资源情况
            1xx：指示信息--表示请求已接收，继续处理
            2xx：成功--表示请求已被成功接收、理解、接受
            3xx：重定向--要完成请求必须进行更进一步的操作
            4xx：客户端错误--请求有语法错误或请求无法实现
            5xx：服务器端错误--服务器未能实现合法的请求
            
7.HTTP所有状态码的具体含义，看到异常状态码能快速定位问题
    常见状态代码、状态描述的说明如下。

    •• 200 OK：客户端请求成功。

    •• 301 Moved Permanently：客户端啊，你要请求的资源已经永久的搬家了，我把他的新地址放到了Location头部域中了；

    ••302 Moved Temporarily：客户端啊，你要请求的资源临时有事去别的地方了，我把他的位置放到了Location头部域中了，你可以先去那里找他，不过他应该是会回到他自己的家的；

    ••304 Not Modified：客户端啊，你要请求的资源自从上次你请求之后，就再也没有改动过，我想你是应该早就有这个资源了，所以在响应报文的数据部分我也没有再放这个资源。

    •• 400 Bad Request：客户端请求有语法错误，不能被服务器所理解。

    •• 401 Unauthorized：请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用。

    •• 403 Forbidden：服务器端顺利收到了客户端的请求，但是因为某些理由，服务器端拒绝为他提供服务

    •• 404 Not Found：请求资源不存在，八成是资源地址写错了；举个例子：输入了错误的URL。

    •• 500 Internal Server Error：服务器发生不可预期的错误。

    •• 502 Bad Gateway：客户端你好，我是请求报文的代理服务器，持有资源的那个服务器在给我发送资源时出问题了；

    •• 503 Server Unavailable：服务器当前不能处理客户端的请求，一段时间后可能恢复正常
8.HTTP1.1、HTTP2.0带来的改变
    文章：https://www.sohu.com/a/161201715_714863
    http1.1相对于1.0  文章：https://www.cnblogs.com/duanxz/p/5230793.html
    1.支持长链接
    2.支持虚拟主机（一个服务器现在可以放置多个网站，充分利用了服务器资源）
    3.HTTP1.1则引入了更多的缓存控制
    
    http2.0和http1.1  文章：https://developer.51cto.com/art/201910/604255.htm
    1.新的二进制格式：HTTP1.x的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健                  壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑HTTP2.0的协议解析决定采用                    二进制格式，实现方便且健壮
    2.多路复用
    3.header压缩：且每次都要重复发送，HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header                 fields表，既避免了重复header的传输，又减小了需要传输的大小
    4.服务端推送: 允许服务端在客户端需要数据之前就主动将数据发送到客户端缓存，从而提高性能,一起发送到客户端
9.HTTPS的加密原理，如何开启HTTPS，如何劫持HTTPS请求
    1.客户端发送https通信，将自己支持的加密算法发送给服务器
    2.服务器选出一套自己支持的加密规则，以及将证书和公钥一起传给客户端
    3.客户端校验证书的合法性，如果合法那么就会生成随机数（对称加密的密钥）并用服务器的公钥进行加密
    4.服务再用自己的私钥进行解密，获取到对称密钥，之后通信就会通过这个密钥进行加密通讯

    开启https:
	1.申请ssl证书:所以首先要找个正规的CA机构申请合适的SSL证书
        2.部署ssl证书:当SSL证书颁发下来之后，用户要自行正确安装到服务器端
	3.更换网站中的http路径
    https劫持：文章：https://blog.csdn.net/hj7jay/article/details/80221060
10.理解WebSocket协议的底层原理、与HTTP的区别
    和http协议一样，websocket协议也需要通过已经建立的tcp连接来传输数据，具体实现上是通过http协议建立通道，
    然后在此基础上用真正的WebSocket协议进行通信，所以WebSocket协议和http协议是有一定的交叉关系的
    文章：https://zhuanlan.zhihu.com/p/32845970
	  https://blog.csdn.net/jing_80/article/details/82111423
    请求头：
	1. Connection和Upgrade字段告诉服务器，客户端发起的是WebSocket协议请求

	2. Sec-WebSocket-Extensions表示客户端想要表达的协议级的扩展

	3. Sec-WebSocket-Key是一个Base64编码值，由浏览器随机生成

	4. Sec-WebSocket-Version表明客户端所使用的协议版本
    响应头：
	1. Connection和Upgrade字段与请求头中的作用相同

	2. Sec-WebSocket-Accept表明服务器接受了客户端的请求，得到Sec-WebSocket-Accept后，将本地的Sec-WebSocket-Key进行同样的编码，然后比对

	Status Code:101 Switching Protocols

	并且http请求完成后响应的状态码为101，表示切换了协议，说明WebSocket协议通过http协议来建立运输层的TCP连接，
	之后便与http协议无关了