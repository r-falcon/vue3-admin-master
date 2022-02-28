/**
 * 定义store有两种模式
 *  使用options API
 *  使用setup模式
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
// options API
// export const useCounterStore = defineStore('counter', {
//   state: () => {
//     return {
//       count: 0
//     }
//   },
//   // getters: {
//   //   count() {
//   //     return this.count
//   //   }
//   // },
//   actions: {
//     increment() {
//       this.count++
//     },
//     decrement() {
//       this.count--
//     }
//   }
// })

// setup
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('falcon')
  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, name, increment, decrement }
})
