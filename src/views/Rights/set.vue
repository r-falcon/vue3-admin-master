<template>
  <el-dialog
    v-model="setVisible"
    title="分配权限"
    width="570px"
    center
    :before-close="handleCancel"
  >
    <el-tree
      ref="treeRef"
      :data="rightList"
      :props="treeProps"
      show-checkbox
      node-key="id"
      default-expand-all
      :default-checked-keys="defKeys"
    />

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, reactive, defineEmits, toRefs, defineExpose, ref } from 'vue'
import { allRights, roleById, attributeRole } from './service'
import {ElMessage} from 'element-plus'

const props = defineProps({
  setVisible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['setSuccess', 'setCancel'])

const treeRef = ref()
const set = reactive({
  rightList: [],
  treeProps: {
    label: 'authName',
    children: 'children'
  },
  defKeys: [],
  roleId: []
})

const getRightList = async record => {
  try {
    const res = await allRights('tree')
    set.rightList = res.data
    set.roleId = record.id
    getLeafKeys(record, set.defKeys)
  } catch (err) {
    console.log(err);
  }
}

const getLeafKeys = (node, arr) => {
  if (!node.children) {
    return arr.push(node.id)
  }

  node.children.forEach(item => {
    getLeafKeys(item, arr)
  });
}

const handleConfirm = async () => {
  const keys = [
    ...treeRef.value.getCheckedKeys(),
    ...treeRef.value.getHalfCheckedKeys()
  ]
  const idStr = keys.join(',')
  console.log('set confirm', set.roleId, idStr);
  try {
    const res = await attributeRole(set.roleId, idStr)
    if (res.meta.status === 200) {
      ElMessage.success(res.meta.msg)
      set.defKeys = []
      emit('setSuccess')
    }
  } catch (err) {
    console.log(err);
  }

}

const handleCancel = () => {
  set.defKeys = []
  emit('setCancel')
}

// getRightList()
defineExpose({
  getRightList
})

const { rightList, treeProps, defKeys } = toRefs(set)
</script>