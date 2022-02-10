<template>
  <el-dialog v-model="setVisible" title="分配权限" width="570px" center>
    <div>
      <p>当前用户：{{ formData.username }}</p>
      <p>当前角色：{{ formData.role_name }}</p>
      <p>
        分配角色:
        <el-select v-model="rid" placeholder="请选择">
          <el-option
            v-for="item in roleList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </p>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleSuccess">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { reactive, computed, toRefs} from 'vue'
import { setUser, roleData } from './service'

const props = defineProps({
  setVisible: {
    type: Boolean,
    default: false
  },
  formData: {
    type: Object,
    default: () => { }
  }
})

const emit = defineEmits(['setSuccess', 'setCancel'])

const uId = computed(() => props.formData.id)

let set = reactive({
  roleList: [],
  rid: ''
})

const getRoles = () => {
  set.roleList = []
  set.rid = ''
  if (set.roleList.length === 0) {
    roleData().then(res => {
      const roles = []
      res.data.forEach(item => {
        roles.push({
          value: item.id,
          label: `${item.roleName}(${item.roleDesc})`
        })
      });
      set.roleList = roles
    }).catch(err => console.log(err))
  }
}

const handleSuccess = async () => {
  set.rid = ''
  set.roleList = []
  console.log('success', uId.value, set.rid);
  try {
    const res = await setUser(uId.value, set.rid)
    if (res.meta.status === 200) {
      ElMessage.success(res.meta.msg)
    }
  } catch (err) {
    console.log(err);
  }
  emit('setSuccess')
}

const handleCancel = () => {
  set.rid = ''
  set.roleList = []
  emit('setCancel')
}

const { roleList, rid } = toRefs(set)

defineExpose({
  getRoles
})
</script>