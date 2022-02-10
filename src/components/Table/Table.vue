<template>
  <div class="common-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>

    <el-table
      :data="tableData"
      :loading="loading"
      stripe
      :border="border"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        width="55"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        width="60"
        align="center"
      ></el-table-column>

      <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :width="item.width"
        show-overflow-tooltip
        align="center"
      >
        <template #default="scope">
          <slot v-if="item.slotName" :name="item.slotName" :data="scope" />
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
/**
 * el-table 的二次封装
 */
defineProps({
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  tableData: {
    type: Array,
    required: true
  },
  tableLabel: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['selectionChange'])
const handleSelectionChange = value => {
  emit('selectionChange', value)
}
</script>
