<template>
  <el-dialog
    v-model="optionVisible"
    title="订单详情"
    width="50%"
    center
    :before-close="handleCancel"
  >
    <el-col span="24">订单编号：{{ detailInfo.order_number }}</el-col>
    <el-col span="24">订单价格：{{ detailInfo.order_price }}</el-col>
    <el-col span="24">是否付款：{{ detailInfo.pay_status === '0' ? '未付款' : '已付款' }}</el-col>
    <el-col span="24">创建时间：{{ parseTime(detailInfo.create_time) }}</el-col>
    <Table
      style="margin:20px auto;"
      v-if="detailInfo.goods.length > 0"
      :tableData="detailInfo.goods"
      :tableLabel="showLabel"
      :border="true"
      :showIndexColumn="true"
    ></Table>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {reactive, toRefs } from 'vue'
import { orderById } from './service'
import Table from '@/components/Table/Table.vue'

const props = defineProps({
  optionVisible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['optionSuccess', 'optionCancel'])

const show = reactive({
  detailInfo: {},
  showLabel: [
    {
      prop: 'goods_id',
      label: '商品ID'
    },
    {
      prop: 'goods_price',
      label: '商品单价'
    },
    {
      prop: 'goods_number',
      label: '商品数量'
    },
    {
      prop: 'goods_total_price',
      label: '商品总价'
    }
  ]
})

const handleConfirm = () => {
  emit('optionSuccess')
}

const handleCancel = () => {
  emit('optionCancel')
}

const getDetail = async orderId => {
  try {
    const res = await orderById(orderId)
    show.detailInfo = res.data
  } catch (err) {
    console.log(err);
  }
}

defineExpose({
  getDetail
})

const { detailInfo, showLabel } = toRefs(show)
</script>