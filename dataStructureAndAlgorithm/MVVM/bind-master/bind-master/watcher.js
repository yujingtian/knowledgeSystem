function Watcher(vm, prop, callback)
{
  this.vm = vm;
  this.prop = prop;
  this.callback = callback;
  this.value = this.get();
}

Watcher.prototype = {
  update:function(){
    const value = this.vm.$data[this.prop];
    const oldVal = this.value;
    if(value != oldVal)
    {
      this.value = value;
      this.callback(value)
    }
  },
  get:function(){
    Dep.target = this;
    const value = this.vm.$data[this.prop];
    Dep.target = null;
    return value;
  }
}
