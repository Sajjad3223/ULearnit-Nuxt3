<template>
  <div class="course-videos">
    <div class="title">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.1001 12V10.52C9.1001 8.60999 10.4501 7.83999 12.1001 8.78999L13.3801 9.52999L14.6601 10.27C16.3101 11.22 16.3101 12.78 14.6601 13.73L13.3801 14.47L12.1001 15.21C10.4501 16.16 9.1001 15.38 9.1001 13.48V12Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h4 >فهرست ویدیو ها:</h4>
      <div class="time">
        مدت زمان دوره:
        <span>{{ time }}</span>
      </div>
    </div>
    <ul class="videos flex flex-col w-full">
      <li class="hidden items-center justify-between mx-4">
        <div class="download-all flex items-center space-x-2 space-x-reverse">
          <span class="flex items-center space-x-2 space-x-reverse">
              <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 23.5L14.5 27M14.5 27L10.5 23.5M14.5 27L14.5 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.73216 7.99794C8.73216 7.99794 8.33387 9.20243 8.33463 9.99937C8.33539 10.7961 8.42927 11.2643 8.73575 11.9999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0C13.594 0 9.93803 2.62781 8.23155 6.35395C8.14559 6.54164 7.95644 6.66094 7.75 6.66094C3.45041 6.66094 0 10.277 0 14.4884C0 18.4604 3.22474 21.481 7.00214 21.9396C7.5504 22.0061 8 21.5523 8 21C8 20.4477 7.54928 20.0081 7.00369 19.9224C4.19589 19.4814 2 17.2128 2 14.4884C2 11.3424 4.59375 8.66094 7.75 8.66094C8.04252 8.66094 8.32981 8.68246 8.61035 8.72391C9.08754 8.79441 9.54705 8.51422 9.70289 8.05772C10.9087 4.52542 14.1102 2 18 2C22.9391 2 27 6.05451 27 10.9914C27 14.598 24.7932 17.8013 21.6754 19.2225C21.609 19.2527 21.5758 19.2678 21.5665 19.2723C21.2007 19.4483 21.0086 19.747 21.0002 20.1528C21 20.1632 21 20.1842 21 20.2262C21 20.248 21 20.1935 21.0006 20.2114C21.0234 20.8473 21.7687 21.3382 22.3619 21.1079C22.3785 21.1014 22.2342 21.1635 22.2919 21.1387C26.2256 19.4475 29 15.4673 29 10.9914C29 4.9477 24.0414 0 18 0ZM18.2297 22H17.9943C18.073 22.0009 18.1514 22.0009 18.2297 22Z" fill="white"/>
              </svg>
              <span>دریافت لینک دانلود تمامی قسمت ها:</span>
          </span>
          <a href="" id="get-all-links" class="link">برای دریافت اینجا کلیک کنید</a>
        </div>
        <a href="" class="flex items-center space-x-2 space-x-reverse text-xs">
          <span>رفتن به آخرین قسمت</span>
          <svg class="animate-bounce" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12L6 17M6 17L6 1M6 17L11 12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </li>

      <div>
        <div v-for="(s,i) in sections" >
          <h4 >
            <button @click.prevent="toggleSection(i)" type="button"
                    :class="['flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    ,{'rounded-t-xl':i === 0}
                    ,{'border-b-0':i < sections.length - 1}]">
              <span>{{s.title}}</span>
              <u-badge color="dark" class="mr-3" v-if="s.episodes.length > 0">{{s.episodes.length}} قسمت</u-badge>
              <u-badge color="dark" class="mr-3" v-if="s.sectionQuizzes.length > 0">{{s.sectionQuizzes.length}} آزمون</u-badge>
              <u-badge color="dark" class="mr-auto ml-4">{{s.time}}</u-badge>
              <svg class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </h4 >
          <div ref="section" :class="[{'hidden':i>0}]">
            <div :class="['p-2 font-light border border-gray-200 dark:border-gray-700 dark:bg-black/10'
                        ,{'border-b-0':i < sections.length - 1}
                        ,{'rounded-b-xl':i === sections.length - 1}]">
              <u-divider title="آموزش ها" />
              <course-video v-if="s.episodes != undefined && s.episodes.length > 0" v-for="(e,j) in s.episodes.filter(e=>e.isActive)"
                            :index="j + 1"
                            :section-index="i + 1"
                            :episode="e"
                            :user-has-course="userHasCourse"
                            :course-price="coursePrice"
                            :teacher-user-id="teacherUserId"/>
              <u-alert v-else color="warning">قسمتی برای این فصل بارگزاری نشده است!</u-alert>
              <u-divider title="آزمون ها" />
              <div v-if="s.sectionQuizzes != undefined && s.sectionQuizzes.length > 0" v-for="(q,i) in s.sectionQuizzes" class="mx-4 my-2 px-4 py-2 flex items-center bg-blue-100 dark:bg-gray-800 rounded-lg space-x-4 space-x-reverse">
                <span class="w-8 h-8 grid place-items-center font-bold text-center rounded-full dark:bg-gray-900 ">{{i + 1}}</span>
                <div class="w-full grid grid-cols-7 gap-4 items-center">
                  <div class="flex flex-col items-center col-span-2">
                    <span>عنوان آزمون</span>
                    <div class="h-[1px] bg-gray-400 dark:bg-gray-600 w-full my-1"></div>
                    <NuxtLink :to="`/quizzes/${courseId}/${s.id}/${q.id}`" class="link" v-if="!q.userHasPassed">{{q.title}}</NuxtLink>
                    <strong v-else>{{q.title}}</strong>
                  </div>
                  <div class="flex flex-col items-center">
                    <span>تعداد سؤالات</span>
                    <div class="h-[1px] bg-gray-400 dark:bg-gray-600 w-full my-1"></div>
                    <strong >{{q.totalQuestions}}</strong>
                  </div>
                  <div class="flex flex-col items-center">
                    <span>امتیاز کل</span>
                    <div class="h-[1px] bg-gray-400 dark:bg-gray-600 w-full my-1"></div>
                    <strong >{{q.totalScore}}</strong>
                  </div>
                  <div class="flex flex-col items-center">
                    <span>امتیاز پیروزی</span>
                    <div class="h-[1px] bg-gray-400 dark:bg-gray-600 w-full my-1"></div>
                    <strong >{{q.passScore}}</strong>
                  </div>
                  <div class="flex flex-col items-center">
                    <span>امتیاز شما</span>
                    <div class="h-[1px] bg-gray-400 dark:bg-gray-600 w-full my-1"></div>
                    <strong >{{q.userScore ?? 0}}</strong>
                  </div>
                  <div class="flex flex-col items-center">
                    <span>وضعیت</span>
                    <div class="h-[1px] bg-gray-400 dark:bg-gray-600 w-full my-1"></div>
                    <u-badge color="warning" v-if="!q.userHasPassed">
                      <NuxtLink :to="`/quizzes/${courseId}/${s.id}/${q.id}`" v-if="!q.userHasPassed">شرکت در کوییز</NuxtLink>
                    </u-badge>
                    <u-badge color="dark" v-else-if="q.userHasPassed && q.userScore === 0">شرکت کرده اید</u-badge>
                    <u-badge color="success" v-else-if="q.userHasPassed && (q.userScore ?? 0) > q.passScore">قبول</u-badge>
                    <u-badge color="danger" v-else-if="q.userHasPassed && (q.userScore ?? 0) < q.passScore">رد</u-badge>
                  </div>
                </div>
                </div>
              <u-alert v-else color="dark">آزمونی برای این فصل بارگزاری نشده است!</u-alert>
            </div>
          </div>
        </div>
<!--        <u-alert class="text-center" v-else color="warning">هنوز قسمتی بارگزاری نشده است!</u-alert>-->
      </div>

    </ul>
  </div>
</template>

<script setup lang="ts">
import {SectionDto} from "~/models/course/courseDto";

const props = defineProps<{
  time:string,
  sections:SectionDto[],
  userHasCourse:boolean,
  coursePrice:Number,
  teacherUserId:Number,
  episodesCount:Number,
  courseId:Number
}>();
const section = ref();
const toggleSection = (i)=>{
  if(!section.value[i].classList.contains('hidden')) {
    section.value[i].classList.add('hidden');
    return;
  }
  section.value.forEach(s=>{
    s.classList.add('hidden');
  })
  section.value[i].classList.remove('hidden');
}
</script>