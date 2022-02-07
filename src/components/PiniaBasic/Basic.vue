<template>
  <div>
    <h2>count component:</h2>
    <p>count is: {{count}}</p>
    <p>doubleCount is: {{doubleCount()}}</p>
    <button @click="increment">add count</button>
  </div>
</template>

<script setup>
/**
 * pinia 在setup模式下的调用机制是先install在调用，use...()为install,用storeToRefs包裹来保证解构后的state仍具有响应性
 */

import {storeToRefs} from 'pinia'
import {useCountStore} from '@/store/demo'

const {count} = storeToRefs(useCountStore())
const {increment,doubleCount} = useCountStore()
</script>