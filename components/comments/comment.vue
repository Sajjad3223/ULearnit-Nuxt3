<template>
  <article :class="['p-6 mb-6 text-base bg-white rounded-lg border-2 dark:border-gray-800 dark:bg-gray-900',{'mr-6 lg:mr-12':isChild}]">
    <footer class="relative flex justify-between items-center mb-2">
      <div class="flex items-center">
        <p class="inline-flex items-center ml-3 text-sm text-gray-900 dark:text-white">
          <base-img
            class="ml-2 w-6 h-6 rounded-full"
            :src="`/ulearnit/user/avatars/${comment.sender.avatar}`"
            :alt="comment.sender.fullName" />{{ comment.sender.fullName }}
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          <time pubdate datetime="2022-02-08"
                title="دوشنبه 16 ام بهمن">{{ new Date(comment.creationDate).toLocaleDateString('fa-IR') }}</time>
        </p>
      </div>
      <button @click.prevent="toggleOptions"
              class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button">
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
          </path>
        </svg>
        <span class="sr-only">Comment settings</span>
      </button>
      <!-- Dropdown menu -->
      <div v-if="options"
           class="absolute left-0 top-12 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" >
          <li>
            <a href="#"
               class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ویرایش</a>
          </li>
          <li>
            <a href="#"
               class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">حذف</a>
          </li>
        </ul>
      </div>
    </footer>
    <u-alert color="warning" v-if="comment.commentStatus === ECommentStatus.Pending">
      نظر شما ثبت شده و پس از تایید ادمین نمایش داده میشود.
    </u-alert>
    <p class="text-gray-500 dark:text-gray-200">{{comment.text}}</p>
    <div class="flex items-center mt-4 space-x-4 space-x-reverse" v-if="!isChild">
      <button type="button" @click.prevent="emits('setParentId',comment.id)"
              class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 dark:hover:text-gray-300">
        <svg aria-hidden="true" class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        پاسخ
      </button>
    </div>
    <div class="flex items-center mt-4 space-x-4 space-x-reverse">
      <div class="inline-flex space-x-2 space-x-reverse">
        <button class="opacity-75 hover:opacity-100 transition-opacity" @click.prevent="deleteReaction" v-if="comment.userReaction && comment.userReaction === 'Like' ">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M8.39062 18.4907V8.33071C8.39062 7.93071 8.51062 7.54071 8.73062 7.21071L11.4606 3.15071C11.8906 2.50071 12.9606 2.04071 13.8706 2.38071C14.8506 2.71071 15.5006 3.81071 15.2906 4.79071L14.7706 8.06071C14.7306 8.36071 14.8106 8.63071 14.9806 8.84071C15.1506 9.03071 15.4006 9.15071 15.6706 9.15071H19.7806C20.5706 9.15071 21.2506 9.47071 21.6506 10.0307C22.0306 10.5707 22.1006 11.2707 21.8506 11.9807L19.3906 19.4707C19.0806 20.7107 17.7306 21.7207 16.3906 21.7207H12.4906C11.8206 21.7207 10.8806 21.4907 10.4506 21.0607L9.17062 20.0707C8.68062 19.7007 8.39062 19.1107 8.39062 18.4907Z" fill="currentColor"/>
            <path d="M5.21 6.37891H4.18C2.63 6.37891 2 6.97891 2 8.45891V18.5189C2 19.9989 2.63 20.5989 4.18 20.5989H5.21C6.76 20.5989 7.39 19.9989 7.39 18.5189V8.45891C7.39 6.97891 6.76 6.37891 5.21 6.37891Z" fill="currentColor"/>
          </svg>
        </button>
        <button class="opacity-75 hover:opacity-100 transition-opacity" @click.prevent="reactToComment(EReactionType.Like)" v-else>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.34997 19.58 9.34997H15.58C14.98 9.34997 14.48 8.84997 14.58 8.14997L15.08 4.94997C15.28 4.04997 14.68 3.04997 13.78 2.74997C12.98 2.44997 11.98 2.84997 11.58 3.44997L7.47998 9.54997" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/>
            <path d="M2.38 18.35V8.55002C2.38 7.15002 2.98 6.65002 4.38 6.65002H5.38C6.78 6.65002 7.38 7.15002 7.38 8.55002V18.35C7.38 19.75 6.78 20.25 5.38 20.25H4.38C2.98 20.25 2.38 19.75 2.38 18.35Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <span>{{comment.likesCount}}</span>
      </div>
      <div class="inline-flex space-x-2 space-x-reverse">
        <button class="opacity-75 hover:opacity-100 transition-opacity" @click.prevent="deleteReaction" v-if="comment.userReaction && comment.userReaction === 'Dislike'">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M15.609 5.49953V15.6595C15.609 16.0595 15.489 16.4495 15.269 16.7795L12.539 20.8395C12.109 21.4895 11.039 21.9495 10.129 21.6095C9.14904 21.2795 8.49904 20.1795 8.70904 19.1995L9.22904 15.9295C9.26904 15.6295 9.18904 15.3595 9.01904 15.1495C8.84904 14.9595 8.59904 14.8395 8.32904 14.8395H4.21904C3.42904 14.8395 2.74904 14.5195 2.34904 13.9595C1.96904 13.4195 1.89904 12.7195 2.14904 12.0095L4.60904 4.51953C4.91904 3.27953 6.26904 2.26953 7.60904 2.26953H11.509C12.179 2.26953 13.119 2.49953 13.549 2.92953L14.829 3.91953C15.319 4.29953 15.609 4.87953 15.609 5.49953Z" fill="currentColor"/>
            <path d="M18.7894 17.6084H19.8194C21.3694 17.6084 21.9994 17.0084 21.9994 15.5284V5.47844C21.9994 3.99844 21.3694 3.39844 19.8194 3.39844H18.7894C17.2394 3.39844 16.6094 3.99844 16.6094 5.47844V15.5384C16.6094 17.0084 17.2394 17.6084 18.7894 17.6084Z" fill="currentColor"/>
          </svg>
        </button>
        <button class="opacity-75 hover:opacity-100 transition-opacity" @click.prevent="reactToComment(EReactionType.Dislike)" v-else>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M16.52 5.65002L13.42 3.25002C13.02 2.85002 12.12 2.65002 11.52 2.65002H7.71998C6.51998 2.65002 5.21998 3.55002 4.91998 4.75002L2.51998 12.05C2.01998 13.45 2.91998 14.65 4.41998 14.65H8.41998C9.01998 14.65 9.51998 15.15 9.41998 15.85L8.91998 19.05C8.71998 19.95 9.31998 20.95 10.22 21.25C11.02 21.55 12.02 21.15 12.42 20.55L16.52 14.45" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/>
            <path d="M21.62 5.65V15.45C21.62 16.85 21.02 17.35 19.62 17.35H18.62C17.22 17.35 16.62 16.85 16.62 15.45V5.65C16.62 4.25 17.22 3.75 18.62 3.75H19.62C21.02 3.75 21.62 4.25 21.62 5.65Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <span>{{comment.dislikesCount}}</span>
      </div>
    </div>
  </article>
  <comment v-for="c in comment.answers" :comment="c" :is-child="true" @reacted="emits('reacted')" />
</template>

<script setup lang="ts">
import {CommentFilterData, ECommentStatus} from "~/models/comment/commentDto";
  import {ApiUrl} from "~/utilities/ApiUrls";
  import {EReactionType, ReactToCommentViewModel} from "~/models/comment/reactToCommentViewModel";
  import {DeleteReaction, ReactToComment} from "~/services/comment.service";
  import {errorAlert, successAlert} from "~/services/alert.service";

  const props = defineProps<{
    isChild:Boolean,
    comment:CommentFilterData,
  }>();

  const emits = defineEmits(['setParentId','reacted']);

  const options = ref(false);

  const toggleOptions=()=>{
    options.value = !options.value;
  }

  const reactToComment = async (reactionType:EReactionType)=>{
    const viewModel:ReactToCommentViewModel = {
      commentId : props.comment.id,
      reactionType : reactionType,
      postId : props.comment.postId,
    };
    const result = await ReactToComment(viewModel);
    if(result.isSuccess) {
      successAlert();
      emits('reacted');
    }
    else
      errorAlert();
  }

  const deleteReaction = async ()=>{
    const result = await DeleteReaction(props.comment.id);
    if(result.isSuccess) {
      successAlert();
      emits('reacted');
    }
    else
      errorAlert();
  }
</script>
