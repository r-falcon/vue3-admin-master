<template>
  <div class="app-container">
    <el-alert
      title="注意：只允许为第三级分类设置相关参数"
      type="warning"
      show-icon
      :closable="false"
      center
    />

    <div style="margin: 20px auto">
      <span>选择商品分类：</span>
      <el-cascader
        v-model="selectedKeys"
        :options="paramOptions"
        :props="paramProps"
        @change="handleSelectedChange"
      />
    </div>

    <el-tabs v-model="activeName" @tab-click="handleTabClick">
      <el-tab-pane label="静态参数" name="1">
        <Table
          :tableData="manyTableData"
          :loading="loading"
          :tableLabel="paramLabel"
          :border="true"
          :showIndexColumn="true"
        />
      </el-tab-pane>
      <el-tab-pane label="动态属性" name="2">
        <Table
          :tableData="onlyTableData"
          :loading="loading"
          :tableLabel="paramLabel"
          :border="true"
          :showIndexColumn="true"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { goodsSort, sortParams } from './service'
import { reactive, toRefs, computed } from 'vue'
import Table from '@/components/Table/Table.vue'

const param = reactive({
  paramOptions: [],
  paramProps: {
    expandTrigger: 'hover',
    label: 'cat_name',
    value: 'cat_id',
    children: 'children'
  },
  selectedKeys: [],
  loading: false,
  manyTableData: [],
  onlyTableData: [],
  paramLabel: [
    {
      prop: 'attr_name',
      label: '参数名称'
    },
    {
      prop: 'attr_vals',
      label: '参数内容'
    }
  ],
  activeName: '1'
})

const getParams = async () => {
  const res = await goodsSort({ type: 3 })
  param.paramOptions = res.data
}

const cateId = computed(() => {
  if (param.selectedKeys.length === 3) {
    return param.selectedKeys[2]
  }
  return null
})

const getParamsData = () => {
  if (param.selectedKeys.length !== 3) {
    param.selectedKeys = []
    param.manyTableData = []
    param.onlyTableData = []
    return
  }
  param.loading = true

  console.log(param.activeName);
  if (param.activeName === '1') {
    sortParams(cateId.value, { sel: 'many' }).then(res => {
      param.loading = false
      // res.data && res.data.forEach(item => {
      //   item.attr_vals = item.attr_vals ? item.attr_vals.split(" ") : []
      // });
      param.manyTableData = res.data
    }).catch(err => {
      param.loading = false
      console.log(err)
    })
  } else {
    sortParams(cateId.value, { sel: 'only' }).then(res => {
      param.loading = false
      param.onlyTableData = res.data
    }).catch(err => {
      param.loading = false
      console.log(err)
    })
  }
}

const handleSelectedChange = () => {
  getParamsData()
}

const handleTabClick = (tab, event) => {
  const tabKey = event.target.getAttribute('id')
  if (tabKey === 'tab-1') {
    param.activeName = '1'
    getParamsData()
  } else {
    param.activeName = '2'
    getParamsData()
  }
}

getParams()

const { paramOptions, paramProps, selectedKeys, activeName, loading, paramLabel,manyTableData,onlyTableData } = toRefs(param)
</script>