<template>
  <div class="col-span-full ckeditor-holder" @keyup.delete="deleteImage">
    <label class="pb-1 block dark:text-white">{{title}}</label>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" tag-name="textarea" @change="$emit('update:modelValue',editorData)"/>
    <span class="text-sm text-red-600 dark:text-red-400" v-if="isRequired && (editorData === '')">وارد کردن {{title}} الزامی است</span>
  </div>
</template>


<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/fa';
import {ApiUrl} from "~/utilities/ApiUrls";
import axios from "axios";

let selectedImage = '';
export default {
  name: 'app',
  props:{
    isRequired:{
      type:Boolean,
      default:true,
    },
    title:{
      type:String,
      required:false,
    },
  },
  emits:['update:modelValue'],
  components:{
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
        language:'fa',
        ckfinder: {
          uploadUrl: `${ApiUrl}/api/content/upload-file`,
          options: {
            resourceType: 'Images',
          },
        }
      },
    };
  },
  updated() {
    this.$emit('update:modelValue',this.editorData);
  },
  methods:{
    setContent(content){
      this.editorData = content;
    },
    async deleteImage(){
      console.log(selectedImage)
      if(selectedImage) {
        const result = await axios.delete(`${ApiUrl}/api/content/delete-file?filename=${selectedImage}`, {method: 'DELETE'});
        console.log(result);
      }
    }
  },
  expose:['setContent']
}

document.addEventListener('click',function (e){
  const target = e.target.closest(".ckeditor-holder img");

  if(target == null){
    selectedImage = ''; return;
  }

  selectedImage = target?.src?.split('/').pop()

  console.log(selectedImage)
})
</script>

<style>
.ck-content{
  padding: 0 2em !important;
}
.ck-editor{
  color: black;
}
.ck-content ul,.ck-content ol{
  color: black;
  padding: 0 1.5rem !important;
}
.ck-content h1{
  @apply text-6xl;
}
.ck-content h2{
  @apply text-5xl;
}
.ck-content h3{
  @apply text-4xl;
}
.ck-content h4{
  @apply text-3xl;
}
</style>