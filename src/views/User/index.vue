<template>
  <div class="app-container">
    <Table
      :tableData="userData"
      :loading="loading"
      :tableLabel="userLabel"
      :border="true"
      :showIndexColumn="true"
    >
      <template #headerHandler>
        <div>
          <el-button style="float: right" :icon="Refresh" @click="handleRefresh"></el-button>
          <el-button style="float: right; margin: 0 10px 10px 0" type="primary" @click="handleAdd"
            >+ 新增</el-button
          >
        </div>
      </template>

      <template v-slot:status="slotData">
        <el-switch
          v-model="slotData.data.row.mg_state"
          @change="handleSwitchChange(slotData.data.row)"
        />
      </template>

      <template v-slot:option="slotData">
        <el-button :icon="Edit" circle type="primary" @click="handleEdit(slotData.data.row)" />
        <el-popconfirm
          confirm-button-text="确认"
          cancel-button-text="取消"
          :icon="InfoFilled"
          title="确认要删除该项吗"
          @confirm="handleDelete(slotData.data.row.id)"
        >
          <template #reference>
            <el-button :icon="Delete" circle type="danger" />
          </template>
        </el-popconfirm>
        <el-button :icon="Setting" circle type="info" @click="handleSet(slotData.data.row)" />
      </template>
    </Table>
    <pagination
      v-show="total > 0"
      :total="total"
      v-model:page="queryParams.pagenum"
      v-model:limit="queryParams.pagesize"
      @pagination="initList"
    />

    <OptionDialog
      :isAdd="is_add"
      :optionVisible="is_add ? add_visible : edit_visible"
      :formData="form"
      @optionSuccess="handleOptionSuccess"
      @optionCancel="handleOptionCancel"
    />
    <SetDialog
      ref='setRole'
      :setVisible="set_visible"
      :formData="setForm"
      @setSuccess="handleSetSuccess"
      @setCancel="handleSetCancel"
    />
  </div>
</template>

<script setup>
import Table from '@/components/Table/Table.vue'
import OptionDialog from './edit.vue'
import SetDialog from './set.vue';
import { Refresh, Edit, Delete, Setting, InfoFilled } from '@element-plus/icons-vue'
import { reactive, toRefs,ref,onMounted } from 'vue'
import { getUsers, UpdateState, deleteUser } from './service'
import { ElMessage } from 'element-plus'


const setRole = ref(null)
const user = reactive({
  userData: [],
  total: 0,
  queryParams: {
    query: '',
    pagenum: 1,
    pagesize: 5
  },
  userLabel: [
    {
      prop: 'username',
      label: '用户名'
    },
    {
      prop: 'email',
      label: '邮箱'
    },
    {
      prop: 'mobile',
      label: '电话'
    },
    {
      prop: 'role_name',
      label: '角色'
    },
    {
      prop: 'mg_state',
      label: '启用状态',
      slotName: 'status'
    },
    {
      label: '操作',
      slotName: 'option',
      width: '220'
    }
  ],
  is_add: false,
  add_visible: false,
  edit_visible: false,
  set_visible: false,
  loading: false,
  form: {},
  setForm: {}
})

const initList = async params => {
  user.loading = true
  try {
    user.loading = false
    const res = await getUsers(params)
    user.userData = res.data?.users ?? []
    user.total = res.data?.total ?? 0
  } catch (err) {
    user.loading = false
    console.log(err);
  }
}
initList(user.queryParams)

// switch开关变化
const handleSwitchChange = async record => {
  try {
    const res = await UpdateState(record.id, record.mg_state)
    if (res.meta.status === 200) {
      ElMessage.success('状态修改成功')
    }
  } catch (err) {
    console.log(err);
  }
}

// 新增
const handleAdd = () => {
  user.is_add = true
  user.add_visible = true
}

// 修改
const handleEdit = record => {
  user.form = record
  user.is_add = false
  user.edit_visible = true
}

const handleOptionSuccess = () => {
  user.is_add ? user.add_visible = false : user.edit_visible = false
  user.form = {}
  initList(user.queryParams)
}

const handleOptionCancel = () => {
  user.is_add ? user.add_visible = false : user.edit_visible = false
  user.form = {}
}

// 删除
const handleDelete = async id => {
  try {
    const res = await deleteUser(id)
    if (res.meta.status === 200) {
      ElMessage.success(res.meta.msg)
    }
  } catch (err) {
    console.log(err);
  }
}

// 设置
const handleSet = record => {
  user.setForm = record
  setRole.value.getRoles()
  user.set_visible = true
}

const handleSetSuccess = () => {
  user.set_visible = false
  user.setForm = {}
  initList(user.queryParams)
}

const handleSetCancel = () => {
  user.set_visible = false
  user.form = {}
}

// 刷新
const handleRefresh = () => {
  location.reload()
}

const { userData, total, queryParams, userLabel, is_add, add_visible, edit_visible, set_visible, loading, form, setForm } = toRefs(user)
</script>
