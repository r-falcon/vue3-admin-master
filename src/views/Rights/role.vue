<template>
  <div class="app-container">
    <el-button style="float: right; margin: 0 10px 10px 0" type="primary" @click="handleAdd"
      >+ 新增</el-button
    >
    <el-table :data="roleList" :row-class-name="getRowClass" border>
      <el-table-column type="expand">
        <template #default="props">
          <el-row
            v-for="(item1, index1) in props.row.children"
            :key="item1.id"
            :class="['bdbottom', index1 === 0 ? 'bdtop' : '', 'vcenter']"
          >
            <el-col :span="5">
              <el-tag closable @close="deleteRolebyId(props.row.id,item1.id)">{{ item1.authName }}</el-tag>
              <el-icon>
                <CaretRight />
              </el-icon>
            </el-col>

            <el-col :span="19">
              <el-row
                v-for="(item2, index2) in item1.children"
                :key="item2.id"
                :class="[index2 === 0 ? '' : 'bdtop', 'vcenter']"
              >
                <el-col :span="6">
                  <el-tag type="success" closable @close="deleteRolebyId(props.row.id,item2.id)">{{ item2.authName }}</el-tag>
                  <el-icon>
                    <CaretRight />
                  </el-icon>
                </el-col>

                <el-col :span="18">
                  <el-tag type="warning" v-for="item3 in item2.children" :key="item3.id" closable @close="deleteRolebyId(props.row.id,item3.id)">
                    {{ item3.authName }}
                  </el-tag>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column align="center" type="index" />
      <el-table-column align="center" label="角色名称" prop="roleName" />
      <el-table-column align="center" label="角色描述" prop="roleDesc" />
      <el-table-column>
        <template #default="scope">
          <el-button :icon="Edit" circle type="primary" @click="handleEdit(scope.row)" />
          <el-popconfirm
            confirm-button-text="确认"
            cancel-button-text="取消"
            :icon="InfoFilled"
            title="确认要删除该项吗"
            @confirm="handleDelete(scope.row.id)"
          >
            <template #reference>
              <el-button :icon="Delete" circle type="danger" />
            </template>
          </el-popconfirm>
          <el-button :icon="Setting" circle type="info" @click="handleSet(scope.row)" />
        </template>
      </el-table-column>
    </el-table>

    <OptionDialog :isAdd='isAdd' :optionVisible='add_visible' :formData='form' @optionSuccess="handleOptionSuccess" @optionCancel="handleOptionCancel" />
    <SetDialog ref="setRef" :setVisible='set_visible' @setSuccess="handleSetSuccess" @setCancel="handleSetCancel" />
  </div>
</template>

<script setup>
import { reactive, toRefs,ref } from 'vue'
import { allRoles,deleteRole,delAppointRight } from './service'
import { CaretRight, Edit, Delete, Setting, InfoFilled } from '@element-plus/icons-vue'
import OptionDialog from './edit.vue'
import SetDialog from './set.vue'
import { ElMessage } from 'element-plus'

const setRef = ref()

let role = reactive({
  roleList: [],
  isAdd:false,
  add_visible:false,
  set_visible:false,
  form:{}
})

const getRoleList = async () => {
  try {
    const res = await allRoles()
    console.log(res);
    if (res.meta.status === 200) {
      role.roleList = res.data
    }
  } catch (err) {
    console.log(err);
  }
}

const getRowClass = ({ row, rowIndex }) => {
  if (row.children.length == 0) {
    return 'row-expand-cover'
  }
}

// 新增
const handleAdd = () => {
  role.isAdd = true 
  role.add_visible = true
}

// 修改
const handleEdit = record => {
  role.form = record
  role.isAdd = false 
  role.add_visible = true
}

const handleOptionSuccess = () => {
  role.add_visible = false
  role.form = {}
  getRoleList()
}

const handleOptionCancel = () => {
  role.add_visible = false
  role.form = {}
}

// 删除
const handleDelete = async id => {
  try{
    const res = await deleteRole(id)
    if(res.meta.status === 200){
      ElMessage.success('删除成功')
      getRoleList()
    }
  }catch(err){
    console.log(err);
  }
}

// 删除角色指定权限
const deleteRolebyId = async (roleId,rightId) => {
  console.log('click',roleId,rightId);
  try{
    const res = await delAppointRight(roleId,rightId)
    if(res.meta.status === 200){
      ElMessage.success(res.meta.msg)
      getRoleList()
    }
  }catch(err){
    console.log(err);
  }
}

// 分配
const handleSet = record => {
  setRef.value.getRightList(record)
  role.set_visible = true
}

const handleSetSuccess = () => {
  role.set_visible = false
  getRoleList()
}

const handleSetCancel = () => {
  role.set_visible = false
}

getRoleList()

const { roleList, expandKeys, isAdd, add_visible, set_visible ,form} = toRefs(role)
</script>

<style scoped>
.el-tag {
  margin: 7px;
}
.bdtop {
  border-top: 1px solid #eee;
}
.bdbottom {
  border-bottom: 1px solid #eee;
}
.vcenter {
  display: flex;
  align-items: center;
}
</style>

<style>
/* .row-expand-cover .el-table__expand-column .cell {
  display: none;
} */
/* css样式注意不要在scoped中修改；为了避免污染，最好利用deep穿透 */
.row-expand-cover .el-table__expand-column .el-icon {
  visibility: hidden;
}
</style>