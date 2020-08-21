3.1 编译原理
1.理解代码到底是什么，计算机如何将代码转换为可以运行的目标程序
  代码：代码就是程序员用开发工具所支持的语言写出来的源文件，是一组由字符、符号或信号码元以离散形式表示信息的明确的规则体系。代码设计的原则包括唯一确定性、      标准化和通用性、可扩充性与稳定性、便于识别与记忆、力求短小与格式统一以及容易修改等。 源代码是代码的分支，某种意义上来说，源代码相当于代码。现代程       序语言中，源代码可以书籍或磁带形式出现，但最为常用格式是文本文件，这种典型格式的目的是为了编译出计算机程序。计算机源代码最终目的是将人类可读文本        翻译成为计算机可执行的二进制指令，这种过程叫编译，它由通过编译器完成
   文章：https://blog.csdn.net/qq_39755395/article/details/78293733
2.正则表达式的匹配原理和性能优化
    文章：https://www.php.cn/js-tutorial-377987.html    https://tool.oschina.net/uploads/apidocs/jquery/regexp.html
    优化：文章：https://blog.csdn.net/chengweng2602/article/details/100837948
    1.使用正确的边界匹配器（^、$、\b、\B等）
    2.使用具体的元字符、字符类（\d、\w、\s等）
    3.使用正确的量词（+、*、?、{n,m}）
    4.使用非捕获组（非捕获性分组通过将子表达式放在"?:"符号后）、原子组（普通的字符）
    5.注意量词的嵌套 


    (?:pattern) 
    非获取匹配，匹配pattern但不获取匹配结果，不进行存储供以后使用。这在使用或字符“(|)”来组合一个模式的各个部分是很有用。例如“industr(?:y|ies)”就是一个比“industry|industries”更简略的表达式。
    (?=pattern)
    非获取匹配，正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如，“Windows(?=95|98|NT|2000)”能匹配“Windows2000”中的“Windows”，但不能匹配“Windows3.1”中的“Windows”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。
    (?!pattern)
    非获取匹配，正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如“Windows(?!95|98|NT|2000)”能匹配“Windows3.1”中的“Windows”，但不能匹配“Windows2000”中的“Windows”。
    (?<=pattern)
    非获取匹配，反向肯定预查，与正向肯定预查类似，只是方向相反。例如，“(?<=95|98|NT|2000)Windows”能匹配“2000Windows”中的“Windows”，但不能匹配“3.1Windows”中的“Windows”。
    (?<!pattern)
    非获取匹配，反向否定预查，与正向否定预查类似，只是方向相反。例如“(?<!95|98|NT|2000)Windows”能匹配“3.1Windows”中的“Windows”，但不能匹配“2000Windows”中的“Windows”。这个地方不正确，有问题 
    
3.如何将JavaScript代码解析成抽象语法树(AST)
  概念：抽象语法树（Abstract Syntax Tree）也称为AST语法树，指的是源代码语法所对应的树状结构。也就是说，一种编程语言的源代码，通过构建语法树的形式将源代       码中的语句映射到树中的每一个节点上
  文章:https://www.cnblogs.com/fundebug/p/how-does-javascript-compile.html
  在解析过程中有两个阶段:词法分析和语法分析，词法分析阶段把字符串形式的代码转换为令牌（tokens）流，令牌类似于AST中节点；而语法分析阶段则会把一个令牌流转换成 AST的形式，同时这个阶段会把令牌中的信息转换成AST的表述结构。
4.base64的编码原理
  文章：https://blog.csdn.net/wo541075754/article/details/81734770
5.几种进制的相互转换计算方法，在JavaScript中如何表示和转换
    parseInt(10, 10).toString(16)   10进制->16进制
    parseInt(10, 16).toString(10)  16进制->10进制
    parseInt(10, 2).toString(10)  2进制->10进制    
    就是通过parseInt和toString完成进制转换