<template>
  <el-dialog v-model="setVisible" title="分配权限" width="570px" center>
    <div> 分配权限； </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, reactive, defineEmits, toRefs } from 'vue'
import { allRights, roleById, attributeRole } from './service'

const props = defineProps({
  setVisible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['setSuccess', 'setCancel'])

const set = reactive({
  rightList: [],
  rids: ''
})

const getRightList = async () => {
  try {
    const res = await allRights('tree')
    console.log('result', res);
  } catch (err) {
    console.log(err);
  }
}

const handleConfirm = () => {
  set.rid = ''
  set.roleList = []
}

const handleCancel = () => {
  set.rid = ''
  set.roleList = []
}

getRightList()
</script>