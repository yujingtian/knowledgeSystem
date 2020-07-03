function defineReactive(data, key, value)
{
  observer(value);
  var dep = new Dep();
  Object.defineProperty(data,key,{
    get:function(){
      console.log("获取值")
      if (Dep.target)
      {
        dep.addSub(Dep.target)
      }
      return value
    },
    set:function(newVal){
      console.log("设置值")
      if(value !== newVal)
      {
        value = newVal;
        dep.notify();    //通知订阅器
        console.log(key,dep)
      }
    }
  })
}
function observer(data){
    if(!data || typeof data !== "object")
    {
      return;
    }
    Object.keys(data).forEach(key => {
      defineReactive(data,key,data[key])
    });
}

function Dep(){
  this.subs = []
}

Dep.prototype.addSub = function (sub){
  this.subs.push(sub)
}

Dep.prototype.notify = function(){
  console.log("属性发生变化，watcher执行更新函数")
  this.subs.forEach(function (sub){
    sub.update();
  })
}

Dep.target = null;