<template>
  <el-dialog v-model="optionVisible" :title="isAdd ? '新增信息' : '修改信息'" width="570px" center>
    <el-form ref="formRef" :model="form" :rules="rules">
      <el-form-item label="用户：" prop="username">
        <el-input :disabled="!isAdd" v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item label="密码：" prop="password" v-if="isAdd">
        <el-input v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item label="邮箱：" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>

      <el-form-item label="手机：" prop="mobile">
        <el-input v-model="form.mobile"></el-input>
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
import { reactive,computed } from 'vue'
import { addUser,editUser } from './service'
const { proxy } = getCurrentInstance();

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
    default: () => {}
  }
})

const uId = computed(() => props.formData.id)
const form = computed(() => props.formData)

const rules = reactive({
  username: [
    {
      required: true,
      message: '请输入用户',
      trigger: 'blur',
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    }
  ],
  email: [
    {
      required: true,
      message: '请输入邮箱',
      trigger: 'blur',
    }
  ],
  mobile: [
    {
      required: true,
      message: '请输入手机',
      trigger: 'blur',
    }
  ]
})

const emit = defineEmits(['optionSuccess', 'optionCancel'])

const handleConfirm = () => {
  proxy.$refs.formRef.validate(async valid => {
    if (valid) {
      console.log(form);
      if (props.isAdd) {
        const res = await addUser(form.value)
        if (res.meta.status === 201) {
          ElMessage.success(res.meta.msg)
          emit('optionSuccess')
        }
      }else{
        const res = await editUser(uId.value,form.value)
        if(res.meta.status === 200){
          ElMessage.success(res.meta.msg)
          emit('optionSuccess')
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