<template>
  <div class="app-container">
    {{goodsId ? '修改商品' : '添加商品'}}
  </div>
</template>

<script setup>
import {reactive,toRefs} from 'vue'

const router = useRouter()

const gadd = reactive({
  goodsId:router.currentRoute.value.query?.goodsId ?? null 
})

const {goodsId} = toRefs(gadd)
</script>