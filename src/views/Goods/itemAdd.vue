<template>
  <div class="app-container">
    <el-page-header :content="goodsId ? '修改商品' : '添加商品'" @back="goBack" />
    <el-steps :active="Number(activeTab)" align-center style="margin: 40px auto">
      <el-step v-for="item in stepOptions" :key="item.id" :title="item.title" :icon="item.icon" />
    </el-steps>

    <el-form ref="formRef" :model="form">
      <el-tabs v-model="activeTab" tab-position="left">
        <el-tab-pane v-for="item in stepOptions" :label="item.title" :key="item.id" :name="item.id">
          <div v-if="Number(item.id) === 1">
            <el-form-item
              label="商品名称"
              prop="goods_name"
              :rules="[{ required: true, message: '请输入商品名称', trigger: 'blur' }]"
            >
              <el-input v-model="form.goods_name" />
            </el-form-item>

            <el-form-item
              label="商品价格"
              prop="goods_price"
              :rules="[{ required: true, message: '请填写商品价格', trigger: 'blur' }]"
            >
              <el-input type="number" v-model="form.goods_price" />
            </el-form-item>

            <el-form-item
              label="商品重量"
              prop="goods_weight"
              :rules="[{ required: true, message: '请填写商品重量', trigger: 'blur' }]"
            >
              <el-input type="number" v-model="form.goods_weight" />
            </el-form-item>

            <el-form-item
              label="商品数量"
              prop="goods_number"
              :rules="[{ required: true, message: '请填写商品数量', trigger: 'blur' }]"
            >
              <el-input type="number" v-model="form.goods_number" />
            </el-form-item>

            <el-form-item
              label="商品分类"
              prop="goods_cat"
              :rules="[{ required: true, message: '请选择商品分类', trigger: 'change' }]"
            >
              <el-cascader
                v-model="form.goods_cat"
                :options="sortOptions"
                :props="sortProps"
                @change="handleSortChange"
              ></el-cascader>
            </el-form-item>

            <el-button @click="toNext(item.id)">下一步</el-button>
          </div>

          <div v-if="Number(item.id) === 2">
            <el-form-item v-for="item in manyTableData" :key="item.attr_id" :label="item.attr_name">
              <el-checkbox-group v-model="item.attr_vals">
                <el-checkbox
                  :label="item"
                  v-for="(item, index) in item.attr_vals"
                  :key="index"
                  border
                />
              </el-checkbox-group>
            </el-form-item>
            <el-button @click="toNext(item.id)">下一步</el-button>
          </div>

          <div v-if="Number(item.id) === 3">
            <el-form-item v-for="item in onlyTableData" :label="item.attr_name" :key="item.attr_id">
              <el-input v-model="item.attr_vals" />
            </el-form-item>
            <el-button @click="toNext(item.id)">下一步</el-button>
          </div>

          <div v-if="Number(item.id) === 4">
            <el-upload
              class="avatar-uploader"
              action="http://127.0.0.1:8888/api/private/v1/upload"
              list-type="picture"
              :headers="headerObj"
              :on-success="handleSuccess"
              :on-remove="handleRemove"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
            </el-upload>
            <el-button @click="toNext(item.id)">下一步</el-button>
          </div>
          <div v-if="Number(item.id) === 5">
            <el-form-item prop="goods_introduce">
              <Editor
                v-on:getWangEditorValue="getWangEditorValue"
                :contentHtml="form.goods_introduce"
              />
            </el-form-item>
            <el-button @click="toNext(item.id)">下一步</el-button>
          </div>
          <div v-if="Number(item.id) === 6">
            <p>填写完毕</p>
            <el-button @click="toNext(item.id)">下一步</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, toRefs, ref, computed } from 'vue'
import { Edit, Box, Document, PictureFilled, Notebook, CircleCheck } from '@element-plus/icons-vue'
import { goodsSort, sortParams, goodsAdd,goodsUpdate,goodsById } from './service'
import { getToken } from '@/utils/auth'
import Editor from '@/components/WangEditor/Editor.vue'
import { ElMessage } from 'element-plus'

const router = useRouter()
const formRef = ref()

const gadd = reactive({
  goodsId: router.currentRoute.value.query?.goodsId ?? null,
  activeTab: '1',
  stepOptions: [
    {
      id: '1',
      title: '基本信息',
      icon: 'Edit'
    },
    {
      id: '2',
      title: '商品参数',
      icon: 'Box'
    },
    {
      id: '3',
      title: '商品属性',
      icon: 'Document'
    },
    {
      id: '4',
      title: '商品图片',
      icon: 'PictureFilled'
    },
    {
      id: '5',
      title: '商品内容',
      icon: 'Notebook'
    },
    {
      id: '6',
      title: '操作完成',
      icon: 'CircleCheck'
    },
  ],
  form: {
    goods_cat: [],
    pics: [],
    attrs: []
  },
  sortOptions: [],
  sortProps: {
    expandTrigger: 'hover',
    label: 'cat_name',
    value: 'cat_id',
    children: 'children'
  },
  manyTableData: [],
  onlyTableData: [],
  headerObj: {
    Authorization: getToken()
  },
  imageUrl: ''
})

const goBack = () => {
  router.go(-1)
}

const handleSortChange = () => {
  if (gadd.form.goods_cat.length !== 3) {
    gadd.form.goods_cat = []
  }
}

const getCateId = computed(() => {
  if (gadd.form.goods_cat.length === 3) {
    return gadd.form.goods_cat[2]
  }
  return null
})

const toNext = id => {
  if (Number(id) === 1) {
    getManyParams()
  } else if (Number(id) === 2) {
    getOnlyParams()
  }

  formRef.value.validate((valid) => {
    if (valid) {
      if (Number(id) === 6) {
        gadd.form.goods_cat = gadd.form.goods_cat.join(',')
        gadd.manyTableData && gadd.manyTableData.forEach(item => {
          gadd.form.attrs.push({
            attr_id: item.attr_id,
            attr_value: item.attr_vals.join(',')
          })
        })
        gadd.onlyTableData.forEach(item => {
          gadd.form.attrs.push({
            attr_id: item.attr_id,
            attr_value: item.attr_vals
          })
        })

        if (gadd.goodsId) {
          goodsUpdate(gadd.goodsId,gadd.form).then(res => {
            ElMessage.success(res.meta.msg)
            router.go(-1)
          }).catch(err => console.log(err))
        } else {
          goodsAdd(gadd.form).then(res => {
            ElMessage.success(res.meta.msg)
            router.go(-1)
          }).catch(err => console.log(err))
        }
      } else {
        gadd.activeTab = (Number(id) + 1) + ''
      }
    } else {
      console.log('regret failed');
    }
  })
}

const getManyParams = async () => {
  try {
    const res = await sortParams(getCateId.value, { sel: 'many' })
    res.data && res.data.length > 0 && res.data.forEach(item => {
      item.attr_vals = item.attr_vals.length === 0 ? [] : item.attr_vals.split(" ")
    });
    gadd.manyTableData = res.data
  } catch (err) {
    console.log(err);
  }
}

const getOnlyParams = async () => {
  try {
    const res = await sortParams(getCateId.value, { sel: 'only' })
    gadd.onlyTableData = res.data
  } catch (err) {
    console.log(err);
  }
}

const getSortList = async () => {
  const res = await goodsSort({ type: 3 })
  gadd.sortOptions = res.data
}

const handleSuccess = response => {
  gadd.imageUrl = response.data.url
  const picInfo = { pic: response.data.tem_path }
  gadd.form.pics.push(picInfo)
}

const handleRemove = (file) => {
  const filePath = file.response.data.tem_path
  const i = gadd.form.pics.findIndex(x => x.pic === filePath)
  gadd.form.pics.splice(i, 1)
}

const getWangEditorValue = str => {
  gadd.form.goods_introduce = str
}

const getGoods = async () => {
  try {
    const res = await goodsById(gadd.goodsId)
    gadd.form = res.data
  } catch (err) {
    console.log(err);
  }
}

getSortList()
gadd.goodsId ? getGoods() : null

const { goodsId, activeTab, stepOptions, form, sortOptions, sortProps, manyTableData, onlyTableData, headerObj, imageUrl } = toRefs(gadd)
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>