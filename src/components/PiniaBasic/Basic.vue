<template>
  <div>
     <!-- Affix固钉，可设置参数 -->
    <div>
      <el-affix :offset="240">
        <el-button type='primary'>Offset top 120px</el-button>
      </el-affix>
    </div>

    <h2>count component:</h2>
    <p>count is: {{ count }}</p>
    <p>doubleCount is: {{ doubleCount() }}</p>
    <button @click="increment">add count</button>

    <!-- vue3中新添加的组件源 -->
    <!-- space间距，可设置参数 -->
    <div>
      <el-space :size="size" :spacer="spacer">
        <div v-for="i in 2" :key="i">
          <el-button>button {{ i }}</el-button>
        </div>
      </el-space>
    </div>

    <!-- 骨架屏，可设置参数 -->
    <div>
      <el-skeleton />
    </div>

    <!-- empty空状态，可设置参数 -->
    <div>
      <el-empty description="空状态描述，暂无数据"></el-empty>
    </div>

    <!-- 使用虚拟滚动 -->
  </div>
</template>

<script setup>
/**
 * pinia 在setup模式下的调用机制是先install在调用，use...()为install,用storeToRefs包裹来保证解构后的state仍具有响应性
 */

import { storeToRefs } from 'pinia'
import { useCountStore } from '@/store/demo'
import { ref, h } from 'vue'
import { ElDivider } from 'element-plus'

const size = ref(10)
const spacer = h(ElDivider, { direction: 'vertical' })

const { count } = storeToRefs(useCountStore())
const { increment, doubleCount } = useCountStore()
</script>