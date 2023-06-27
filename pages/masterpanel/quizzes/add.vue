<template>
  <div>
    <Head>
      <Title>افزودن کوییز جدید</Title>
    </Head>

    <u-divider title="افزودن کوییز جدید" />

    <Form @submit="addQuiz" :validation-schema="addQuizSchema" class="p-2">
      <div class="grid grid-cols-2 gap-4">
        <base-input name="title" v-model="addQuizData.title" label="عنوان کویز " is-required placeholder="عنوان کویز را وارد کنید"/>
        <div>
          <label for="">سرفصل</label>
          <select v-model="addQuizData.sectionId" name="sectionId" class="mt-1 h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option :selected="route.query.sectionId === undefined" :value="NaN">سرفصل را انتخاب کنید...</option>
            <option v-for="s in sectionIds" :key="s" :value="s.id" :selected="route.query?.sectionId?.toString() === s.id.toString()">{{s.title}}</option>
          </select>
        </div>
        <base-input name="totalScore" type="number" v-model="addQuizData.totalScore" label="نمره کل " is-required placeholder="نمره کل را وارد کنید"/>
        <base-input name="passScore" type="number" v-model="addQuizData.passScore" label="نمره قبولی " is-required placeholder="نمره قبولی را وارد کنید"/>
      </div>

      <u-divider title="سوالات آزمون" class="mt-4"/>

      <div>

        <div id="questions" class="flex flex-col space-y-4">
          <quiz-add-question v-for="(q, index) in questionsCount" @removeQuestion="deleteQuestion" :key="index" :number="index + 1"/>
        </div>

        <base-button @click="addQuestion" type="button" w-full class="flex justify-center flex-row-reverse space-x-2 mt-2" outline>
          <span>سوال جدید</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="currentColor"/>
            <path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z" fill="currentColor"/>
            <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="currentColor"/>
          </svg>
        </base-button>
      </div>

      <base-button type="submit" class="mt-4 flex mr-auto">ثبت آزمون</base-button>

    </Form>
  </div>
</template>

<script setup lang="ts">
import {
  InsertChoiceViewModel,
  InsertQuestionViewModel,
  InsertQuizViewModel
} from "~/models/quiz/commands/insertQuizViewModel";
import {Form} from "vee-validate";
import {number, object, string} from "yup";
import {GetSectionIdsOfTeacher} from "~/services/course.service";
import {SectionForSelectDto} from "~/models/course/courseDto";
import {EQuestionType} from "~/models/quiz/quizDto";
import {CreateQuiz} from "~/services/quiz.service";
import {errorAlert, successAlert} from "~/services/alert.service";


definePageMeta({
  layout:'user',
  middleware:'master'
})

const addQuizSchema =  object().shape({
  title:string().required('عنوان کوییز را وارد کنید'),
  passScore:number().required('نمره قبولی را وارد کنید'),
  totalScore:number().required('نمره کل را وارد کنید')
})

let questions:InsertQuestionViewModel[] = [];
let questionsCount = ref<number>(0);

const route = useRoute();
const router = useRouter();

const addQuizData:InsertQuizViewModel = reactive({
  sectionId:Number(route.query?.sectionId) ?? NaN,
  title:'',
  passScore:0,
  totalScore:0,
  questions:[]
});

const sectionIds = ref<SectionForSelectDto[]>();
onMounted(async ()=>{
  const result = await GetSectionIdsOfTeacher();
  if(result.isSuccess){
    sectionIds.value = result.data;
  }
})

const addQuestion = async ()=>{
  questionsCount.value ++;
  setTimeout(resetNumber,10);
}

const deleteQuestion = (e)=>{
  e.target.parentElement?.parentElement?.remove();
  resetNumber();
}

const resetNumber = ()=>{
  const qs = document.querySelectorAll('.question');

  for(let i = 0; i < qs.length; i++){
    qs[i].querySelector('div > span.badge').innerText = (i+1).toString();
  }
}

const addQuiz = async ()=>{
  questions = [];
  const qs = document.querySelectorAll('.question');
  for(let i = 0; i < qs.length; i++) {
    const qTitle = qs[i].querySelector('input[name=questionTitle]').value;
    const qScore = qs[i].querySelector('input[name=questionScore]').value;
    const qType = Number(qs[i].querySelector('input[name=questionType]').value);
    let questionType:EQuestionType = EQuestionType.MultipleChoice;
    let qCorrectAnswer;
    const answers:InsertChoiceViewModel[] = [];
    if(qType == 0) {
      questionType = EQuestionType.MultipleChoice;
      const choices = qs[i].querySelectorAll('.choices > div');
      choices.forEach((c,i)=>{
        const choiceAnswer = c.querySelector('input[name=choice]').value;
        const isCorrectChoice = c.querySelector('input[name=isCorrect]').checked;
        if(isCorrectChoice){
          qCorrectAnswer = choiceAnswer;
        }
        answers.push({
          title:choiceAnswer,
          isCorrectAnswer:isCorrectChoice
        })
      })
    }
    else{
      qCorrectAnswer = qs[i].querySelector('textarea[name=correctAnswer]').value;
    }
    if(qType == 1) questionType = EQuestionType.Descriptive;
    if(qType == 2) questionType = EQuestionType.File;
    if(qType == 3) questionType = EQuestionType.Code;
    questions.push({
      title:qTitle,
      score:Number(qScore),
      correctAnswer:qCorrectAnswer,
      questionType:questionType,
      answers:answers
    })
  }
  addQuizData.questions = questions;

  //console.log(questions); return;
  const result = await CreateQuiz(addQuizData);
  if(result.isSuccess){
    successAlert();
    router.push('/masterpanel/quizzes');
  }else{
    errorAlert();
  }
}

</script>