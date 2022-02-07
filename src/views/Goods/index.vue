<template>
  <div class="app-container">
    商品管理-商品列表
    <Basic />
  </div>
</template>

<script setup>
import {goodsList} from './service'
import Table from '@/components/Table/Table.vue'
import {reactive,toRefs} from 'vue'
import Basic from '@/components/PiniaBasic/Basic.vue'

const goods = reactive({
  goodsData:[],
  total:0,
  queryParams:{
    query: '',
    pagenum: 1,
    pagesize: 5
  }
})

// getList()
</script>