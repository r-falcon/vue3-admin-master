<template>
  <div class="app-container">
    pinia 的应用样例:
     <!-- <div>
      <p>count is:{{counter.count}}</p>
      <button @click="counter.increment">count++</button>
      <button @click="counter.decrement">count--</button>
    </div> -->
    <div>
      <p>count is:{{count}}; name is:{{name}}</p>
      <button @click="increment">count++</button>
      <button @click="decrement">count--</button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import {useCounterStore} from '../../store/counter'

const counter = useCounterStore()
// 1.直接改变count的值
// counter.count = 20
// 2.通过action修改count的值，也属于直接改变
// 3.$patch修改部分属性，可以传入一个对象，或者返回相应对象的函数
// counter.$patch({
//   count:30,
//   name:'alice'
// })
// counter.$patch((state) => {
//   state.count = 40 
//   state.name = 'lily'
// })
// 4.$state重新书写state值
counter.$state = {
  count:50,
  // name:'jerry'
}


// 使用storeToRefs解构state变为响应式，直接解构actions中的方法使用
const {count,name} = storeToRefs(counter)
const {increment,decrement} = counter
</script>