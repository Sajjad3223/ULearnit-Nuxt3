<template>
  <div class="course-comments" id="comments">
    <div class="title">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 8H17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 13H13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h4>نظرات کاربران:</h4>
      <div>
        <span v-if="comments">{{ comments.length }}</span>
        <span v-else>0</span>
        <span class="mr-2">نظر</span>
      </div>
    </div>
    <div class="alert alert-warning">
      لطفا سوالات خود را راجع به این آموزش در این بخش پرسش و پاسخ مطرح کنید به سوالات در قسمت نظرات  پاسخ داده نخواهد شد و آن نظر حذف میشود.
    </div>
    <send-comment ref="sendComment" :post-type="postType" :post-id="postId" @commentSent="loadData"/>
    <section class="bg-white dark:bg-gray-900 ">
      <div class="w-full mx-auto px-4" v-if="comments && comments.length > 0">
        <comment v-for="c in comments" :key="c" :comment="c" @setParentId="setParentId" @reacted="loadData"/>
      </div>
      <u-alert color="primary" v-else>نظری ثبت نشده است، شما اولین نفر باشید!</u-alert>
    </section>
  </div>
</template>

<script setup lang="ts">
import SendComment from "~/components/comments/send-comment.vue";
import Comment from "~/components/comments/comment.vue";
import {CommentFilterData, EPostType} from "~/models/comment/commentDto";
import {CommentFilterParams} from "~/models/comment/commentFilterParams";
import {GetComments} from "~/services/comment.service";
import {Ref} from "vue";

const props = defineProps<{
  postType:EPostType,
  postId:number,
}>();

const getCommentsData:CommentFilterParams = {
  postId: 0,
  postType: EPostType.Course,
  commentStatus: null,
  startDate: null,
  endDate: null,
  userRequested: null,
}

const comments = ref<CommentFilterData[]>();
const sendComment = ref();

onMounted(async ()=>{
  getCommentsData.postId = props.postId;
  getCommentsData.postType = props.postType;
  await loadData();
})

const loadData = async ()=>{
  const result = await GetComments(getCommentsData);
  if(result.isSuccess) {
    comments.value = result.data.data;
  }
}

const setParentId = (id:number)=>{
  sendComment.value.setParentId(id);
}

</script>