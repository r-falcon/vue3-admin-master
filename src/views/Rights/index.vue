<template>
  <div class="app-container">
    <div style="margin:10px auto;">
      <el-input placeholder="请输入搜索关键字" style="width:300px;">
        <template #append>
          <el-button :icon="Search"></el-button>
        </template>
      </el-input>
    </div>

    <Table
      :tableData="rightsList"
      :loading="loading"
      :tableLabel="rightLabel"
      :border="true"
      :showIndexColumn="true"
    >
      <template v-slot:grade="slotData">
        <el-tag v-if="slotData.data.row.level === '0'">一级</el-tag>
        <el-tag v-else-if="slotData.data.row.level === '1'" type="success">二级</el-tag>
        <el-tag v-else type="warning">三级</el-tag>
      </template>
    </Table>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import { allRights } from './service'
import Table from '@/components/Table/Table.vue'
import { Search } from '@element-plus/icons-vue'

const right = reactive({
  loading: false,
  rightsList: [],
  rightLabel: [
    {
      prop: 'authName',
      label: '权限名称'
    },
    {
      prop: 'path',
      label: '路径',
    },
    {
      prop: 'level',
      label: '等级',
      slotName: 'grade'
    }
  ]
})

const getRightsList = async type => {
  try {
    right.loading = true
    const res = await allRights(type)
    right.loading = false
    if (res.meta.status === 200) {
      right.rightsList = res.data
    }
  } catch (err) {
    right.loading = false
    console.log(err);
  }
}

getRightsList('list')

const { loading, rightsList, rightLabel } = toRefs(right)
</script>