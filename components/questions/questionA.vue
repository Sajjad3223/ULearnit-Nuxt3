<template>
  <div :class="['flex items-center',{'order-1':answer.isCorrectAnswer}]" v-if="answer !== undefined">
    <div class="w-8 lg:w-16">
      <span v-if="answer.isCorrectAnswer" class="bg-gray-100 text-green-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-gray-800 dark:text-green-300">
        <svg aria-hidden="true" class="w-6 h-6 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Icon description</span>
      </span>
      <base-button v-if="isSolved === false" outline type="button" color="success" @click.prevent="setCorrectAnswer(answer.id)">
        <svg aria-hidden="true" class="w-6 h-6 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Icon description</span>
      </base-button>
    </div>
    <article :class="['mr-2 p-4 rounded-xl flex-1 text-base bg-white dark:bg-gray-800',{'dark:bg-amber-800':answer.isCorrectAnswer}]">
      <footer class="relative flex justify-between items-center mb-2">
        <div class="flex items-center">
          <p class="inline-flex items-center ml-3 text-sm text-gray-900 dark:text-white"><img
              class="ml-2 w-12 h-12 rounded-full"
              :src="`${ApiUrl}/user/avatars/${answer.sender.avatar}`"
              :alt="answer.sender.fullName">{{answer.sender.fullName}}</p>
          <p class="flex items-center text-sm text-gray-600 dark:text-gray-400 divide-x divide-x-reverse divide-gray-200 dark:divide-gray-700">
            <u-time :time="answer.creationDate" />
            <u-date :date="answer.creationDate" />
          </p>
        </div>
        <button @click.prevent="toggleOptions"
                :class="['inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
                {'dark:bg-amber-900':answer.isCorrectAnswer}]"
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
            <li>
              <a href="#"
                 class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">گزارش</a>
            </li>
          </ul>
        </div>
      </footer>
      <p class="text-gray-500 dark:text-gray-200 mt-2" v-html="answer.text">
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
  import {AnswerDto} from "~/models/question/questionDto";
  import {ApiUrl} from "~/utilities/ApiUrls";
  import {SetQuestionSolved} from "~/services/question.service";
  import {errorAlert, successAlert} from "~/services/alert.service";
  import UTime from "~/components/UTime.vue";

  const props = defineProps<{
    answer : AnswerDto,
    isSolved:Boolean
  }>()

  const emits = defineEmits(['questionSolved']);

  const options = ref(false);

  const toggleOptions=()=>{
    options.value = !options.value;
  }

  const setCorrectAnswer = async (id:Number)=>{
    console.log(props.answer.questionId,id);
    const result = await SetQuestionSolved(props.answer.questionId,id);
    if(result.isSuccess)
    {
      successAlert();
      emits('questionSolved');
    }
    else {
      errorAlert();
    }
  }
</script>
