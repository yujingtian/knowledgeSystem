function Mvue(options, prop) {
  this.$options = options;
  this.$data = options.data;
  this.$prop = prop;
  this.$el = document.querySelector(options.el);
  
  Object.keys(this.$data).forEach(key=>{
    this.proxyData(key);
  })

  this.init()
}

Mvue.prototype.init = function () {
  observer(this.$data)
  new Compile(this)
}

Mvue.prototype.proxyData = function(key){
  Object.defineProperty(this,key,{
    get:function(){
      console.log("获取代理")
      return this.$data[key]
    },
    set:function(value){
      console.log("获取代理")
      this.$data[key] = value;
    }
  })
}