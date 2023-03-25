<template>
  <div>
    <Form @submit="Send" class="m-6 flex flex-col" v-if="authStore.isLogin">
      <base-input multiline name="comment" v-model="sendCommentData.text" label="نظر شما:" placeholder="نظر خود را بنویسید..."/>
      <base-button color="success" class="w-1/2 md:w-1/3 mr-auto mt-4">
        ارسال نظر
      </base-button>
    </Form>
    <div class="not-authenticated" v-else>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 7.75V13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.47998 18.15C3.50998 17.59 2.90997 16.55 2.90997 15.42V8.58003C2.90997 7.46003 3.50998 6.41999 4.47998 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 16.2V16.2999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <p>
        برای ثبت نظر باید <a href="" class="link">وارد حساب کاربری</a> شوید.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import {useAuthStore} from "~/stores/authStore";
import {EPostType} from "~/models/comment/commentDto";
import {SendCommentViewModel} from "~/models/comment/sendCommentViewModel";
import {SendComment} from "~/services/comment.service";
import {errorAlert, successAlert} from "~/services/alert.service";

const props = defineProps<{
  postType:EPostType,
  postId:number,
}>();

const emits = defineEmits(['commentSent']);

const parentId = ref(null);

const authStore = useAuthStore();
const sendCommentData:SendCommentViewModel = {
  parentId: null,
  postId: 0,
  postType: EPostType.Course,
  text: "",
}

const setParentId = (id:number)=>{
  sendCommentData.parentId = id;
  const form = document.getElementById('comments');
  form.scrollIntoView();
  const textInput = document.getElementById('comment');
  textInput.focus();
}

const Send = async ()=>{
  sendCommentData.postId = props.postId;
  sendCommentData.postType = props.postType;
  if(parentId.value != null) sendCommentData.parentId = parentId.value;
  const result = await SendComment(sendCommentData);
  if(result.isSuccess) {
    successAlert();
    sendCommentData.text = "";
    emits('commentSent');
  }
  else
    errorAlert();
}

defineExpose({
  setParentId
});
</script>
