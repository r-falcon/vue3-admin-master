<template>
  <div class="app-container">
    <Table
      :tableData="goodsData"
      :loading="loading"
      :tableLabel="goodsLabel"
      :border="true"
      :showIndexColumn="true"
    >
      <template v-slot:create="slotData">
        {{parseTime(slotData.data.row.add_time)}}
      </template>
    </Table>

    <pagination 
      v-show="total > 0"
      :total="total"
      v-model:page="queryParams.pagenum"
      v-model:limit="queryParams.pagesize"
      @pagination="initList"
    />
  </div>
</template>

<script setup>
import { goodsList } from './service'
import Table from '@/components/Table/Table.vue'
import { reactive, toRefs } from 'vue'
import { parseTime } from '@/utils/ruoyi'
// import Basic from '@/components/PiniaBasic/Basic.vue'

const goods = reactive({
  goodsData: [],
  total: 0,
  queryParams: {
    query: '',
    pagenum: 1,
    pagesize: 5
  },
  goodsLabel: [
    {
      prop: 'goods_name',
      label: '商品名称'
    },
    {
      prop: 'goods_price',
      label: '商品价格（元）'
    },
    {
      prop: 'goods_weight',
      label: '商品重量'
    },
    {
      prop: 'goods_number',
      label: '商品数量'
    },
    {
      prop: 'add_time',
      label: '创建时间',
      slotName: 'create'
    },
  ],
  loading: false
})

const initList = async params => {
  goods.loading = true
  try {
    const res = await goodsList(params)
    goods.loading = false
    goods.goodsData = res.data?.goods ?? []
    goods.total = res.data?.total ?? 0
    console.log(goods);
  } catch (err) {
    goods.loading = false
    console.log(err);
  }

}

initList(goods.queryParams)

const { goodsData, total, queryParams, goodsLabel, loading } = toRefs(goods)
</script>