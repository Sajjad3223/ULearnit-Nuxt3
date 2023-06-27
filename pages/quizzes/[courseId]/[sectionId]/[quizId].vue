<template>
  <div v-if="quiz !== undefined">
    <div class="border-x-2 border-gray-500 rounded-xl p-4">
      <div class="p-4 bg-gray-800 rounded-lg flex items-center justify-center gap-4">
        <div class="w-full flex items-center justify-around">
          <div class="flex items-center space-x-2 space-x-reverse">
            <span>عنوان آزمون:</span>
            <h2>{{quiz.title}}</h2>
          </div>
          <div class="flex space-x-4 space-x-reverse">
            <div class="flex items-center space-x-2 space-x-reverse">
              <span>نمره کل آزمون:</span>
              <u-badge>{{quiz.totalScore}}</u-badge>
            </div>
            <div class="flex items-center space-x-2 space-x-reverse">
              <span>نمره قبولی:</span>
              <u-badge>{{quiz.passScore}}</u-badge>
            </div>
            <div class="flex items-center space-x-2 space-x-reverse">
              <span>سرفصل:</span>
              <u-badge color="dark">{{quiz.sectionTitle}}</u-badge>
            </div>
            <div class="flex items-center space-x-2 space-x-reverse">
              <span>          مدرس:</span>
              <u-badge color="warning">{{quiz.teacherName}}</u-badge>
            </div>
          </div>
        </div>
      </div>

      <Form @submit="sendQuizResult" class="quizForm flex flex-col mt-8 px-4">
        <ol class="w-full flex flex-col space-y-4">
          <li v-for="(q,i) in quiz.questions" class="question-container flex flex-col pb-2 border-b border-white/20 last-of-type:border-none">
            <div class="w-full flex justify-between items-start">
              <p>{{i+1}} - {{q.title}}</p>
              <u-badge color="primary">نمره: {{q.score}}</u-badge>
            </div>
            <input type="hidden" :value="q.questionType" class="qType">
            <input type="hidden" :value="q.id" class="qID">
            <div v-if="q.questionType == EQuestionType.MultipleChoice && q.choices != null" class="question grid grid-cols-2 lg:grid-cols-4 gap-4 p-2">
              <div class="relative" v-for="(c,j) in q.choices">
                <label :for="`choice${i}-${j}`" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer">
                  {{j + 1}} - {{c.title}}
                </label>
                <input type="radio" :name="`choice${i}`" :id="`choice${i}-${j}`" :value="c.title" class="choice absolute z-10 left-2 top-3 scale-125 cursor-pointer">
              </div>
            </div>
            <div v-else-if="q.questionType === EQuestionType.Descriptive" class="question">
              <base-input multiline :name="`answer${i}`" />
            </div>
            <div v-else-if="q.questionType === EQuestionType.Code" class="question">
              <code class="code p-4 m-4 text-left rounded-xl text-yellow-300 bg-gray-800 block border-none outline-none" dir="ltr" contenteditable="">
                // Insert Your Code Here
              </code>
            </div>
            <div v-else-if="q.questionType === EQuestionType.File" class="question">
              <base-file-uploader @file-uploaded="fileUploaded" :name="`name${i}`" upload-url="/quiz/upload-file" class="mt-2"/>
            </div>
          </li>
        </ol>

        <base-button class="mt-8 w-1/3 mr-auto">ثبت پاسخ</base-button>
      </Form>

    </div>
  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import {GetQuizForStudent, SendQuizResult} from "~/services/quiz.service";
import {EQuestionType, QuizForStudentDto} from "~/models/quiz/quizDto";
import {
  InsertQuizResultViewModel,
  InterQuizResultAnswerViewModel
} from "~/models/quiz/commands/insertQuizResultViewModel";
import {errorAlert, successAlert} from "~/services/alert.service";

const quiz = ref<QuizForStudentDto>()

const route = useRoute();

const courseId = Number(route.params?.courseId);
const quizId = Number(route.params?.quizId);
const filesUploaded = ref([])
let answers:InterQuizResultAnswerViewModel[] = [];
let quizResult:InsertQuizResultViewModel = {quizId: quizId,answers:[]};

//const { data: result, pending } = await useAsyncData("getQuiz", async () => await GetQuizForStudent(courseId,quizId))
onMounted(async ()=>{
  const result = await GetQuizForStudent(courseId,quizId);
  if(result.isSuccess) {
    quiz.value = result.data;
  }
});

const fileUploaded = (args)=>{
  filesUploaded.value.push({name:args.name,fileName:args.fileName});
}

const sendQuizResult = async () => {
  answers = [];
  const questionItems = document.querySelectorAll('.quizForm .question-container');
  questionItems.forEach((q, i) => {
    const qType: number = Number(q.querySelector('.qType')?.value ?? 'NaN');
    const qId = q.querySelector('.qID').value;

    let answer = '';
    switch (qType) {
      case 0: {
        const choices = q.querySelectorAll('.question .choice');
        choices.forEach(c => {
          if (c.checked) {
            answer = c.value;
          }
        })
      }
        break;
      case 1: {
        const text = q.querySelector('.question textarea').value;
        answer = text;
      }
        break;
      case 3: {
        const code = q.querySelector('.question .code');
        answer = code.innerHTML;
      }
        break;
      case 2: {
        const fileName: string = filesUploaded.value?.find(f => f.name == `name${i}`)?.fileName ?? undefined;
        if (fileName != undefined)
          answer = fileName;
      }
        break;
    }
    answers.push({answer: answer, questionId: qId});
  })
  quizResult = {quizId: quizId, answers: answers};

  const result = await SendQuizResult(quizResult);
  if(result.isSuccess){
    successAlert()
  } else {
    errorAlert()
  }

}

</script>