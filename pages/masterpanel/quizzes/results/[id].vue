<template>
  <div v-if="quizResult != undefined">
    <u-divider :title="`آزمون ${quizResult.quizTitle} دانشجو ${quizResult.student.fullName}`"/>
    <Head>
      <Title>آزمون {{quizResult.quizTitle}} دانشجو {{quizResult.student.fullName}}</Title>
    </Head>
    <div>
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div class="flex flex-col">
          <span class="text-sm">عنوان کوییز</span>
          <span>{{quizResult.quizTitle}}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-sm">نمره کل کوییز</span>
          <span>{{quizResult.quiz.totalScore}}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-sm">نمره قبولی کوییز</span>
          <span>{{quizResult.quiz.passScore}}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-sm">دانشجو</span>
          <span>{{quizResult.student.fullName}}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-sm">نمره دانشجو</span>
          <span>{{quizResult.score}}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-sm">تاریخ ثبت پاسخ</span>
          <span>{{new Date(quizResult.dateTaken).toLocaleDateString('fa-Ir')}}</span>
        </div>
      </div>
      <ul class="flex flex-col space-y-2">
        <li v-for="(q,i) in quizResult.questionResults" class="flex flex-col space-y-2">
          <div class="question w-full overflow-clip">
            <input type="hidden" :value="q.id" class="qrId">
            <div class="flex items-center w-full justify-between p-4 rounded-lg bg-gray-800 drop-shadow-xl cursor-pointer" @click="toggleExpand">
              <div class="flex pointer-events-none items-center text-white w-max px-2 text-lg space-x-1 space-x-reverse">
                <svg class="transition duration-300 rotate-90" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z" fill="#EEE"/>
                </svg>
                <span>سوال</span>
                <u-badge color="dark" class="mr-2">{{i + 1}}</u-badge>
                <span>:</span>
                <p class="text-sm">{{q.quizQuestion.title}}</p>
              </div>
              <div class="flex space-x-2 space-x-reverse">
                <div>
                  <u-badge color="dark">{{q.quizQuestion.score}} نمره</u-badge>
                </div>
                <label class="select-none">پاسخ درست
                <input type="checkbox" class="mr-2" :checked="q.answer == q.quizQuestion.correctAnswer || q.isCorrect">
                </label>
              </div>
            </div>
            <div class="bg-gray-800/50 rounded-b-lg transition content h-0">
              <div class="flex items-center">
                <div class="flex flex-1 flex-col space-y-2">
                  <div>
                    <label class="text-sm text-gray-900 dark:text-white">
                      <span>عنوان سؤال:</span>
                    </label>
                    <p>{{q.quizQuestion.title}}</p>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="flex flex-col">
                      <label class="text-sm text-gray-900 dark:text-white">
                        <span>پاسخ دانشجو:</span>
                      </label>
                      <p v-if="q.questionType === EQuestionType.Descriptive || q.questionType === EQuestionType.MultipleChoice">{{q.answer}}</p>
                      <code v-else-if="q.questionType === EQuestionType.Code">{{q.answer}}</code>
                      <a v-else-if="q.questionType === EQuestionType.File" :href="`${FtpUrl}/quizzes/${q.answer}`" class="link w-max">دانلود پاسخ</a>
                    </div>
                    <div class="flex flex-col">
                      <label class="text-sm text-gray-900 dark:text-white">
                        <span>پاسخ درست:</span>
                      </label>
                      <p v-if="q.questionType === EQuestionType.Descriptive || q.questionType === EQuestionType.MultipleChoice || q.questionType === EQuestionType.File">{{q.quizQuestion.correctAnswer}}</p>
                      <code v-else-if="q.questionType === EQuestionType.Code">{{q.quizQuestion.correctAnswer}}</code>
                    </div>
                  </div>
                </div>
                <a :href="`${FtpUrl}/quizzes/${q.answer}`" v-if="q.questionType === EQuestionType.File">
                  <base-img v-if="IsImage(q.answer)" :src="`/ulearnit/quizzes/${q.answer}`" class="max-h-[200px] rounded-lg"/>
                  <div v-else class="w-[300px] rounded-lg bg-gray-500 h-[200px] grid place-items-center text-4xl font-bold uppercase">
                    {{q.answer.split('.')[1]}}.
                  </div>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="flex flex-col row-span-2 my-2">
        <input-c-k-editor title="یادداشت استاد" v-model="teacherNote" :is-required="false"/>
      </div>

      <base-button class="flex mt-4 mr-auto w-1/3 justify-center" @click="signQuiz">ثبت نتیجه</base-button>
    </div>
  </div>
</template>

<script setup lang="ts">

import {QuizResultDto} from "~/models/quiz/quizResultDto";
import {GetQuizResultById, SignQuizResult} from "~/services/quiz.service";
import {EQuestionType} from "~/models/quiz/quizDto";
import {FtpUrl} from "~/utilities/ApiUrls";
import {IsImage} from "~/utilities/fileUtils";
import {SignQuestionResultViewModel, SignQuizResultViewModel} from "~/models/quiz/commands/insertQuizResultViewModel";
import {successAlert} from "~/services/alert.service";

definePageMeta({
  layout:"user",
  middleware:'master'
})

const quizResult = ref<QuizResultDto>();
const teacherNote = ref();

const route = useRoute();
const router = useRouter();
const quizId = Number(route.params?.id);
onMounted(async ()=>{
  const result = await GetQuizResultById(quizId);
  if(result.isSuccess){
    quizResult.value = result.data;
  }
})

const toggleExpand = (event)=>{
  event.target.classList.toggle('rounded-lg');
  event.target.classList.toggle('rounded-t-lg');
  event.target.querySelector('svg').classList.toggle('rotate-90');
  event.target.parentElement?.querySelector('.content').classList.toggle('h-0');
  event.target.parentElement?.querySelector('.content').classList.toggle('p-4');
}

const signQuiz = async ()=>{
  let signData:SignQuizResultViewModel = {
    teacherNote: teacherNote.value,
    quizResultId:quizId,
    answers:[]
  };

  const questions = document.querySelectorAll('.question');
  questions.forEach(q=>{
    const qrId = Number(q.querySelector('input.qrId')?.value);
    const isCorrect = q.querySelector('input[type=checkbox]')?.checked;
    signData.answers.push({questionResultId:qrId,isCorrect} as SignQuestionResultViewModel);
  })

  const result = await SignQuizResult(signData);
  if(result.isSuccess){
    successAlert();
    router.push('/masterpanel/quizzes/results');
  }
}
</script>