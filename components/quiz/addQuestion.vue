<template>
  <div class="question w-full overflow-clip">
    <div class="flex items-center w-full justify-between p-4 rounded-lg bg-gray-800 drop-shadow-xl cursor-pointer" @click="toggleExpand">
      <div class="flex pointer-events-none items-center text-white w-max px-2 text-lg space-x-1 space-x-reverse">
        <svg class="transition duration-300 rotate-90" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z" fill="#EEE"/>
        </svg>
        <span>سوال</span>
        <u-badge color="success" class="mr-2">{{number}}</u-badge>
        <span v-if="title">:</span>
        <p class="text-sm">{{title}}</p>
      </div>
      <base-button outline color="danger" type="button" @click="removeQuestion" >
        <svg class="pointer-events-none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.9997 6.72998C20.9797 6.72998 20.9497 6.72998 20.9197 6.72998C15.6297 6.19998 10.3497 5.99998 5.11967 6.52998L3.07967 6.72998C2.65967 6.76998 2.28967 6.46998 2.24967 6.04998C2.20967 5.62998 2.50967 5.26998 2.91967 5.22998L4.95967 5.02998C10.2797 4.48998 15.6697 4.69998 21.0697 5.22998C21.4797 5.26998 21.7797 5.63998 21.7397 6.04998C21.7097 6.43998 21.3797 6.72998 20.9997 6.72998Z" fill="#fff"/>
          <path d="M8.50074 5.72C8.46074 5.72 8.42074 5.72 8.37074 5.71C7.97074 5.64 7.69074 5.25 7.76074 4.85L7.98074 3.54C8.14074 2.58 8.36074 1.25 10.6907 1.25H13.3107C15.6507 1.25 15.8707 2.63 16.0207 3.55L16.2407 4.85C16.3107 5.26 16.0307 5.65 15.6307 5.71C15.2207 5.78 14.8307 5.5 14.7707 5.1L14.5507 3.8C14.4107 2.93 14.3807 2.76 13.3207 2.76H10.7007C9.64074 2.76 9.62074 2.9 9.47074 3.79L9.24074 5.09C9.18074 5.46 8.86074 5.72 8.50074 5.72Z" fill="#fff"/>
          <path d="M15.2104 22.7501H8.79039C5.30039 22.7501 5.16039 20.8201 5.05039 19.2601L4.40039 9.19007C4.37039 8.78007 4.69039 8.42008 5.10039 8.39008C5.52039 8.37008 5.87039 8.68008 5.90039 9.09008L6.55039 19.1601C6.66039 20.6801 6.70039 21.2501 8.79039 21.2501H15.2104C17.3104 21.2501 17.3504 20.6801 17.4504 19.1601L18.1004 9.09008C18.1304 8.68008 18.4904 8.37008 18.9004 8.39008C19.3104 8.42008 19.6304 8.77007 19.6004 9.19007L18.9504 19.2601C18.8404 20.8201 18.7004 22.7501 15.2104 22.7501Z" fill="#fff"/>
          <path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z" fill="#fff"/>
          <path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill="#fff"/>
        </svg>
      </base-button>
    </div>
    <div class="bg-gray-800/50 rounded-b-lg transition content h-0">
      <div class="flex items-end space-x-4 space-x-reverse">
        <div class="flex-1">
          <label class="flex items-center space-x-2 space-x-reverse mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <span>عنوان سؤال</span>
          </label>
          <input type="text"
                 v-model="title"
                 name="questionTitle"
                 placeholder="عنوان سؤال را وارد کنید"
                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div>
          <label class="flex items-center space-x-2 space-x-reverse mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <span>نمره سؤال</span>
          </label>
          <input type="number"
                 name="questionScore"
                 placeholder="نمره سؤال را وارد کنید"
                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-2">
        <div class="flex flex-col">
          <span>نوع سوال</span>
          <div class="grid grid-cols-2 gap-4 mt-2">
            <input ref="qType" type="hidden" name="questionType" :value="0">
            <label :for="`multiple${number}`" class="bg-gray-800 p-2 py-3 rounded-lg flex justify-between items-center cursor-pointer">
              <span >چند گزینه ای</span>
              <input ref="multiple" type="radio" :name="`questionType${number}`" v-model="addQuestionData.questionType" class="scale-125 ml-2" :id="`multiple${number}`" :value="EQuestionType.MultipleChoice" checked @change="setQType">
            </label>
            <label :for="`descriptive${number}`" class="bg-gray-800 p-2 py-3 rounded-lg flex justify-between items-center cursor-pointer">
              <span >تشریحی</span>
              <input ref="desc" type="radio" :name="`questionType${number}`" v-model="addQuestionData.questionType" class="scale-125 ml-2" :id="`descriptive${number}`" :value="EQuestionType.Descriptive" @change="setQType">
            </label>
            <label :for="`code${number}`" class="bg-gray-800 p-2 py-3 rounded-lg flex justify-between items-center cursor-pointer">
              <span >کُد</span>
              <input ref="code" type="radio" :name="`questionType${number}`" v-model="addQuestionData.questionType" class="scale-125 ml-2" :id="`code${number}`" :value="EQuestionType.Code" @change="setQType">
            </label>
            <label :for="`file${number}`" class="bg-gray-800 p-2 py-3 rounded-lg flex justify-between items-center cursor-pointer">
              <span >فایل</span>
              <input ref="file" type="radio" :name="`questionType${number}`" v-model="addQuestionData.questionType" class="scale-125 ml-2" :id="`file${number}`" :value="EQuestionType.File" @change="setQType">
            </label>
          </div>
        </div>
        <div v-if="addQuestionData.questionType !== EQuestionType.MultipleChoice">
          <label class="flex items-center space-x-2 space-x-reverse mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <span>پاسخ صحیح</span>
          </label>
          <textarea name="correctAnswer"
                    rows="4"
                    placeholder="پاسخ صحیح سؤال را وارد کنید"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
        </div>
      </div>

      <div v-if="addQuestionData.questionType === EQuestionType.MultipleChoice">
        <u-divider title="گزینه ها"/>
        <div class="grid grid-cols-4 gap-2 choices">
          <div class="relative">
            <input type="text"
                 name="choice"
                 placeholder="گزینه اول"
                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <input type="radio" name="isCorrect" class="absolute z-10 left-2 top-3 scale-125 cursor-pointer" checked>
          </div>
          <div class="relative">
            <input type="text"
                 name="choice"
                 placeholder="گزینه دوم"
                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <input type="radio" name="isCorrect" class="absolute z-10 left-2 top-3 scale-125 cursor-pointer">
          </div>
          <div class="relative">
            <input type="text"
                 name="choice"
                 placeholder="گزینه سوم"
                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <input type="radio" name="isCorrect" class="absolute z-10 left-2 top-3 scale-125 cursor-pointer">
          </div>
          <div class="relative">
            <input type="text"
                 name="choice"
                 placeholder="گزینه چهارم"
                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <input type="radio" name="isCorrect" class="absolute z-10 left-2 top-3 scale-125 cursor-pointer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {EQuestionType} from "~/models/quiz/quizDto";
import {InsertQuestionViewModel} from "~/models/quiz/commands/insertQuizViewModel";

const props = defineProps<{
  number:number,
}>();


const emits = defineEmits(['removeQuestion']);

const title = ref('');

const qType = ref();
const multiple = ref();
const desc = ref();
const code = ref();
const file = ref();

const addQuestionData:InsertQuestionViewModel = reactive({
  title:'',
  questionType:EQuestionType.MultipleChoice,
  correctAnswer:'',
  score:0,
  answers:[]
})

const removeQuestion = (event:any)=>{
  emits('removeQuestion',event)
}

const toggleExpand = (event)=>{
  event.target.classList.toggle('rounded-lg');
  event.target.classList.toggle('rounded-t-lg');
  event.target.querySelector('svg').classList.toggle('rotate-90');
  event.target.parentElement?.querySelector('.content').classList.toggle('h-0');
  event.target.parentElement?.querySelector('.content').classList.toggle('p-4');
}

const setQType = ()=>{
  if(multiple.value.checked)
    qType.value.value = 0;
  if(desc.value.checked)
    qType.value.value = 1
  if(file.value.checked)
    qType.value.value = 2;
  if(code.value.checked)
    qType.value.value = 3;
}

</script>