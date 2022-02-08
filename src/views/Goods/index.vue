<template>
  <div class="app-container">
    <Table
      :tableData="goodsData"
      :loading="loading"
      :tableLabel="goodsLabel"
      :border="true"
      :showIndexColumn="true"
    >
      <template #headerHandler>
        <div style="margin:10px auto;">
          <el-input v-model="searchValue" placeholder="请输入搜索关键字" style="width:300px;">
            <template #append>
              <el-button :icon='Search' @click="handleSearch">
              </el-button>
            </template>
          </el-input>

          <el-button type='primary' style="float:right;" @click="handleAdd">+ 添加</el-button>
        </div>
      </template>

      <template v-slot:create="slotData">
        {{parseTime(slotData.data.row.add_time)}}
      </template>

      <template v-slot:option="slotData">
        <el-button :icon="Edit" circle type="primary" @click="handleEdit(slotData.data.row)" />
        <el-popconfirm
          confirm-button-text="确认"
          cancel-button-text="取消"
          :icon="InfoFilled"
          title="确定要删除该项吗"
          @confirm="handleDelete(slotData.data.row.goods_id)"
        >
          <template #reference>
            <el-button :icon='Delete' circle type='danger' />
          </template>
        </el-popconfirm>
      </template>
    </Table>

    <pagination 
      v-show="total > 0"
      :total="total"
      v-model:page="queryParams.pagenum"
      v-model:limit="queryParams.pagesize"
      @pagination="initList"
    />

    <!-- 新特性体验 -->
    <!-- <Basic /> -->
  </div>
</template>

<script setup>
import { goodsList,goodsDelete } from './service'
import Table from '@/components/Table/Table.vue'
import { reactive, toRefs } from 'vue'
import { parseTime } from '@/utils/ruoyi'
import {Search,Edit,Delete,Setting,InfoFilled} from '@element-plus/icons-vue'
import {ElMessage} from 'element-plus'
// import Basic from '@/components/PiniaBasic/Basic.vue'

const router = useRouter()
const goods = reactive({
  searchValue:'',
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
    {
      label:'操作',
      slotName:'option',
      width:'220'
    }
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
  } catch (err) {
    goods.loading = false
    console.log(err);
  }
}

// search功能
const handleSearch = () => {
  goods.queryParams.query = goods.searchValue
  initList(goods.queryParams)
}

// 新增、修改
const handleAdd = () => {
  router.push('gadd')
}

const handleEdit = record => {
  router.push({path:'gadd',query:{goodsId:record.goods_id}})
}

// 删除
const handleDelete = async goodsId => {
  try{
    const res = await goodsDelete(goodsId)
    if(res.meta.status === 200){
      ElMessage.success(res.meta.msg)
      initList(goods.queryParams)
    }
  }catch(err){
    console.log(err);
  }
}

initList(goods.queryParams)

const { searchValue,goodsData, total, queryParams, goodsLabel, loading } = toRefs(goods)
</script>