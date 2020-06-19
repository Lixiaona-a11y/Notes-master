// 测试用例
/**
 * 再次手写时，注意返回实例，便于链式调用该特性
 */

class EventEmitter {
  constructor () {
    this.events = {}
  }

  $on(type,handle){
    this.events[type]=this.events[type]||[];
    if(this.events[type].indexOf(handle)===-1){
      this.events[type].push(handle);
    }
    return this;
  }

  $emit(type,...msg){
    let listeners=this.events[type];
    listeners&&listeners.forEach(l=>l.apply(this,msg));
    return this;
  }

  $once(type,handle){
    const wrapper=()=>{
      handle.call(this);
      this.removeListener(type);
    }
    this.$on(type,wrapper);
  }

  removeListener(type,handle){
    let listeners=this.events[type];
    this.events[type]=listeners?listeners.filter(l=>l!=handle):listeners;
    return this;
  }

  removeAllListeners(type){
    this.events[type]&& delete this.events[type];
    return this;
  }

}



function sayHello(hello){
  console.log(hello);
}

function sayHi(hi){
  console.log('hi');
}

const myEmit = new EventEmitter();

console.log('1------>',myEmit.events);

myEmit.$on('my-click',sayHello)
myEmit.$on('my-click',sayHi)

console.log('2------>',myEmit.events);

myEmit.$emit('my-click','hello wrold');
myEmit.$once('my-once',function () {
  console.log('once');
});

console.log('3------>',myEmit.events);
// 因此在注册事件时，尽量使用函数名称进行注册，便于销毁时进行匹对
myEmit.removeListener('my-click',sayHello);

console.log('4------>',myEmit.events);

myEmit.removeAllListeners('my-click');

console.log('5------>',myEmit.events);
