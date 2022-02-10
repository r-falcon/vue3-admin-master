<template>
  <div class="app-container">
    <Table
      :tableData="allOrders"
      :loading="loading"
      :tableLabel="orderLabel"
      :border="true"
      :showIndexColumn="true"
    >
      <template v-slot:isPay="slotData">
        <el-tag v-if="slotData.data.row.pay_status === '0'" type="danger">未付款</el-tag>
        <el-tag v-else type="success">已付款</el-tag>
      </template>

      <template v-slot:create="slotData">
        {{ parseTime(slotData.data.row.create_time) }}
      </template>

      <template v-slot:option="slotData">
        <el-button
          :icon="View"
          circle
          type="primary"
          @click="handleDetail(slotData.data.row.order_id)"
        />
      </template>
    </Table>

    <pagination
      v-show="total > 0"
      :total="total"
      v-model:page="queryParams.pagenum"
      v-model:limit="queryParams.pagesize"
      @pagination="initList"
    />
    <ShowOption
      ref="showRef"
      :optionVisible="showVisible"
      @optionSuccess="handleOptionSuccess"
      @optionCancel="handleOptionCancel"
    />
  </div>
</template>

<script setup>
import { reactive, toRefs,ref } from 'vue'
import Table from '@/components/Table/Table.vue'
import { orderList } from './service'
import { parseTime } from '@/utils/ruoyi'
import { View } from '@element-plus/icons-vue'
import ShowOption from './show.vue'

const showRef = ref()
const order = reactive({
  allOrders: [],
  queryParams: {
    query: '',
    pagenum: 1,
    pagesize: 5
  },
  total: 0,
  loading: false,
  orderLabel: [
    {
      prop: 'order_number',
      label: '订单编号'
    },
    {
      prop: 'order_price',
      label: '订单价格'
    },
    {
      prop: 'pay_status',
      label: '是否付款',
      slotName: 'isPay'
    },
    {
      prop: 'is_send',
      label: '是否发货',
    },
    {
      prop: 'create_time',
      label: '创建时间',
      slotName: 'create'
    },
    {
      label: '操作',
      slotName: 'option'
    },
  ],
  showVisible: false,
})

const initList = async () => {
  try {
    order.loading = true
    const res = await orderList(order.queryParams)
    console.log('list', res);
    order.loading = false
    order.allOrders = res.data.goods
    order.total = res.data.total
  } catch (err) {
    order.loading = false
    console.log(err);
  }
}

const handleDetail = recordId => {
  showRef.value.getDetail(recordId)
  order.showVisible = true
}

const handleOptionSuccess = () => {
  order.showVisible = false
}

const handleOptionCancel = () => {
  order.showVisible = false
}

initList(order.queryParams)

const { allOrders, total, queryParams, loading, orderLabel, showVisible} = toRefs(order)
</script>