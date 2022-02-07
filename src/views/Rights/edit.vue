<template>
  <el-dialog v-model="optionVisible" :title="isAdd ? '新增信息' : '修改信息'" width="570px" center :before-close="handleCancel">
    <el-form ref="formRef" :model="formData" :rules="rules">
      <el-form-item label="角色名称：" prop="roleName">
        <el-input v-model="form.roleName"></el-input>
      </el-form-item>

      <el-form-item label="角色描述：" prop="roleDesc">
        <el-input v-model="form.roleDesc"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { defineProps, computed, getCurrentInstance, defineEmits } from 'vue'
const { proxy } = getCurrentInstance()
const emit = defineEmits(['optionSuccess', 'optionCancel'])
import { addRole, editRole } from './service'

const props = defineProps({
  optionVisible: {
    type: Boolean,
    default: false
  },
  isAdd: {
    type: Boolean,
    default: false
  },
  formData: {
    type: Object,
    default: {}
  }
})

const uId = computed(() => props.formData.id)
const form = computed(() => props.formData)

const rules = reactive({
  roleName: [
    {
      required: true,
      message: '角色名称不能为空',
      trigger: 'blur',
    }
  ],
  roleDesc: [
    {
      required: true,
      message: '角色描述不能为空',
      trigger: 'blur',
    }
  ]
})

const handleConfirm = () => {
  proxy.$refs.formRef.validate(async valid => {
    if (valid) {
      if (props.isAdd) {
        try {
          const res = await addRole(form.value)
          if (res.meta.status === 201) {
            ElMessage.success(res.meta.msg)
            emit('optionSuccess')
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        try{
          const res = await editRole(uId.value,form.value)
          if(res.meta.status === 200){
            ElMessage.success(res.meta.msg)
            emit('optionSuccess')
          }
        }catch(err){
          console.log(err);
        }
      }
    }
  })
}

const handleCancel = () => {
  proxy.$refs.formRef.resetFields()
  emit('optionCancel')
}
</script>