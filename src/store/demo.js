/**
 * 定义store有两种模式
 *  使用options API
 *  使用setup模式
 */
// options API
// import { defineStore } from 'pinia'
// export const useCountStore = defineStore('countStore', {
//   state: () => {
//     return {
//       count: 1
//     }
//   },

//   actions: {
//     increment() {
//       this.count++
//     }
//   },

//   getters: {
//     doubleCount(state) {
//       return state.count * 2
//     }
//   }
// })

// setup模式
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCountStore = defineStore('countStore', () => {
  const count = ref(1)
  // function increment() {
  //   count.value++
  // }
  const increment = () => {
    count.value++
  }

  // function doubleCount() {
  //   return count.value * 2
  // }
  const doubleCount = () => count.value * 2

  return { count, increment, doubleCount }
})
