<template>
  <div>
    <span>{{title}}</span>
    <div class="flex items-center space-x-2 space-x-reverse mt-2 " v-show="isUploading">
      <svg class="animate-spin -mr-1 mr-3 h-5 w-5 text-indigo-500 dark:text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span class="animate-pulse"> در حال آپلود ...</span>
    </div>
    <div ref="fileDropArea" class="file-drop-area" v-show="!isUploading">
      <span class="fake-btn">انتخاب فایل</span>
      <span ref="fileName" class="file-msg">یا بکشید و اینجا رها کنید</span>
      <input @input="Upload" class="file-input" type="file"
             :accept="getAcceptFormat"
             @dragenter="fileDropArea.classList.add('is-active')"
             @focus="fileDropArea.classList.add('is-active')"
             @click="fileDropArea.classList.add('is-active')"
             @dragleave="fileDropArea.classList.remove('is-active')"
             @blur="fileDropArea.classList.remove('is-active')"
             @drop="fileDropArea.classList.remove('is-active')">
    </div>
<!--    <master-upload-progress :value="uploadPercentage">{{ uploadPercentage }}</master-upload-progress>-->
  </div>
</template>

<script setup lang="ts">
import {ApiUrl} from "~/utilities/ApiUrls";
import axios from "axios";
import {useAuthStore} from "~/stores/authStore";
import Swal from 'sweetalert2';
import {errorAlert, successAlert} from "~/services/alert.service";
const authStore = useAuthStore();

const props = defineProps<{
  uploadUrl:{
    type:string,
    required:true,
  },
  title:{
    type:string,
    required:true,
  },
  modelValue:{
    type:string,
    default:'',
  },
  acceptFormat: 'video' | 'image' | 'compressed'
}>()

const emits = defineEmits(['update:modelValue','setIsUploading'])

const fileDropArea = ref();
const fileName = ref();
const isUploading = ref(false);

const getAcceptFormat = computed(()=>{
  if(props.acceptFormat === 'video')
    return '.mp4';
  if(props.acceptFormat === 'image')
    return '.jpg,.jpeg';
  if(props.acceptFormat === 'compressed')
    return '.rar';
})

const uploadPercentage = ref(0);
const Upload = async (e:any)=>{
  if(e.target.files.length === 0) return;
  const file = e.target.files[0];
  fileName.value.innerText = file.name;
  const url = `${ApiUrl}/api${props.uploadUrl}`;
  const form = new FormData()
  form.append('file', file)
  await Swal.fire({
    title:'آیا از آپلود فایل انتخاب شده اطمینان دارید؟',
    icon:'question',
    text:file.name,
    showConfirmButton:true,
    confirmButtonText:'بله',
    showCancelButton:true,
    cancelButtonText:'انصراف',
  }).then(async (result)=>{
    if(result.isConfirmed) {
        isUploading.value = true;
        emits('setIsUploading',isUploading.value);
        await axios.post(url,form,{
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${authStore?.loginResult?.token}`,
          },
          onUploadProgress: function( progressEvent:any ) {
            uploadPercentage.value = Number( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ) );
          }.bind(this)
        }).then(function(response){
          isUploading.value = false;
          emits('setIsUploading',isUploading.value);
          emits('update:modelValue',response.data.data);
          successAlert('فایل با موفقیت آپلود شد!');
        })
        .catch(function(){
          isUploading.value = false;
          emits('setIsUploading',isUploading.value);
          errorAlert('در آپلود فایل مشکلی پیش آمده است');
        });
      }
      else{
        fileName.value.innerText = "یا بکشید و اینجا رها کنید";
      }
  });
}
</script>

<style scoped>

.file-drop-area {
  margin-top: 4px;
  position: relative;
  display: flex;
  align-items: center;
  direction: rtl;
  width: 100%;
  padding: 8px;
  border: 1px dashed rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  transition: 0.2s;
}
.file-drop-area.is-active {
  background-color: rgba(255, 255, 255, 0.05);
}

.fake-btn {
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  padding: 8px 15px;
  margin-left: 10px;
  font-size: 12px;
  text-transform: uppercase;
}

.file-msg {
  font-size: small;
  font-weight: 300;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-input {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;
}
.file-input:focus {
  outline: none;
}

</style>