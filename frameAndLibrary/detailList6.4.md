6.4数据流管理
1.掌握React和Vue传统的跨组件通信方案，对比采用数据流管理框架的异同
2.熟练使用Redux管理数据流，并理解其实现原理，中间件实现原理
3.熟练使用Mobx管理数据流，并理解其实现原理，相比Redux有什么优势
4.熟练使用Vuex管理数据流，并理解其实现原理
5.以上数据流方案的异同和优缺点，不情况下的技术选型


6.vue-router

  因为是单页应用，所以路由需要我们自己创建，通过html5的API,history对象的pushState  replaceState 以及监听popstate事件，当我们点击浏览器的前进后退触发或者是手动调用history.go  history.back  history.forward触发这个监听事件，然后修改我们的历史记录

  并且将我们的$router $route变成了响应式对象
  并且在VueRouter自己定义的render函数中收集依赖，添加渲染Watcher

  创建路由映射表，路径映射表和name映射表
  每个映射表的入口instance就是对应组件的Vue实例，这样就可以在beforeRouteEnter钩子的next函数中引用到当前的实例
  每一个路由都有一个正则表达式，用来判断当前路径是否匹配上这个路由
  页面渲染的时候根据深度，将匹配中的路由数组，渲染到页面上  
  比如app.vue有一个router-view标签就会渲染匹配的路由数组中的第一个组件
  子组件中的router-view标签就会
  /hello这个路由 通过查映射表会匹配到  /, /hello这两个组件
                  /的组件 就会把app.vue的router-view标签替换了 深度是0
                 /hello的组件 就会把子组件的router-view标签替换了  深度是1
                 如果没有匹配到路由router-view标签被一个注释替代  长这样<---->