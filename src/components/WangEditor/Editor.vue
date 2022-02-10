<template>
  <div ref="editor"></div>
</template>

<script setup>
import WangEditor from 'wangEditor'
import { onMounted, onBeforeUnmount} from 'vue'

const editor = ref()
let instance = ''

const props = defineProps({
  contentHtml: String
})

const emit = defineEmits(['getWangEditorValue'])

onMounted(() => {
  // 实例对象
  instance = new WangEditor(editor.value)

  Object.assign(instance.config,{
    onchange(){
      emit('getWangEditorValue',instance.txt.html())
    },
    linkImgCallback(src){
      console.log(src);
    },
    onlineVideoCallback(video){
      console.log(video);
    }
  })

  instance.create()
})

onBeforeUnmount(() => {
  instance.destroy()
  instance = null
});
</script>