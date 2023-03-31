<template>
  <div v-if="course !== undefined">
    <Head>
      <Title>{{course.title}}</Title>
    </Head>
    <div class="w-full lg:mx-auto mt-8" >
      <div class="flex flex-col lg:flex-row w-full items-center lg:items-end space-y-4 lg:space-y-0">
        <div class="flex-1 flex flex-col ">
          <h2 class="text-2xl font-bold">{{ course.title }}</h2>
          <bread-crumb :links="[
              {title:'دوره های آموزشی',link:`/courses`},
              {link:`/courses/category-${course.category.slug}`,title: course.category.title},
              {link: `/courses/category-${course.subCategory.slug}`,title: course.subCategory.title},
              {title: course.title ,link: ''}
              ]" />
        </div>
        <div class="w-full lg:w-1/3">
          <short-link link="https://ULearnit.ir/c/Z4ZR"/>
        </div>
      </div>
    </div>

    <div class="w-full lg:mx-auto mt-8">
      <div class="flex flex-col lg:flex-row-reverse w-full">
        <div class="courseSidebar">
          <course-sidebar
              :id="course.id"
              :price="course.price"
              :real-price="course.price"
              :discount="0"
              :teacher="course.teacher.user.fullName"
              teacher-resume="/userpanel"
              :students-count="879"
              :time="course.time"
              :videos-count="getEpisodesCount"
              :status="course.courseStatus"
              :level="course.courseLevel"
              :last-update="course.lastUpdate"
          />
          <u-tags title="برچسب ها" :tags="course.tags"/>
          <a href="#comments" class="btn link">
            <span>رفتن به نظرات</span>
          </a>
          <div class="share">
            <strong>اشتراک گذاری:</strong>
            <ul>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path d="M39.175,10.016c1.687,0,2.131,1.276,1.632,4.272c-0.571,3.426-2.216,14.769-3.528,21.83 c-0.502,2.702-1.407,3.867-2.724,3.867c-0.724,0-1.572-0.352-2.546-0.995c-1.32-0.872-7.984-5.279-9.431-6.314 c-1.32-0.943-3.141-2.078-0.857-4.312c0.813-0.796,6.14-5.883,10.29-9.842c0.443-0.423,0.072-1.068-0.42-1.068 c-0.112,0-0.231,0.034-0.347,0.111c-5.594,3.71-13.351,8.859-14.338,9.53c-0.987,0.67-1.949,1.1-3.231,1.1 c-0.655,0-1.394-0.112-2.263-0.362c-1.943-0.558-3.84-1.223-4.579-1.477c-2.845-0.976-2.17-2.241,0.593-3.457 c11.078-4.873,25.413-10.815,27.392-11.637C36.746,10.461,38.178,10.016,39.175,10.016 M39.175,7.016L39.175,7.016 c-1.368,0-3.015,0.441-5.506,1.474L33.37,8.614C22.735,13.03,13.092,17.128,6.218,20.152c-1.074,0.473-4.341,1.91-4.214,4.916 c0.054,1.297,0.768,3.065,3.856,4.124l0.228,0.078c0.862,0.297,2.657,0.916,4.497,1.445c1.12,0.322,2.132,0.478,3.091,0.478 c1.664,0,2.953-0.475,3.961-1.028c-0.005,0.168-0.001,0.337,0.012,0.507c0.182,2.312,1.97,3.58,3.038,4.338l0.149,0.106 c1.577,1.128,8.714,5.843,9.522,6.376c1.521,1.004,2.894,1.491,4.199,1.491c2.052,0,4.703-1.096,5.673-6.318 c0.921-4.953,1.985-11.872,2.762-16.924c0.331-2.156,0.603-3.924,0.776-4.961c0.349-2.094,0.509-4.466-0.948-6.185 C42.208,7.875,41.08,7.016,39.175,7.016L39.175,7.016z" fill="#FFFFFF" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path d="M16.5 5C10.16639 5 5 10.16639 5 16.5L5 31.5C5 37.832757 10.166209 43 16.5 43L31.5 43C37.832938 43 43 37.832938 43 31.5L43 16.5C43 10.166209 37.832757 5 31.5 5L16.5 5 z M 16.5 8L31.5 8C36.211243 8 40 11.787791 40 16.5L40 31.5C40 36.211062 36.211062 40 31.5 40L16.5 40C11.787791 40 8 36.211243 8 31.5L8 16.5C8 11.78761 11.78761 8 16.5 8 z M 34 12C32.895 12 32 12.895 32 14C32 15.105 32.895 16 34 16C35.105 16 36 15.105 36 14C36 12.895 35.105 12 34 12 z M 24 14C18.495178 14 14 18.495178 14 24C14 29.504822 18.495178 34 24 34C29.504822 34 34 29.504822 34 24C34 18.495178 29.504822 14 24 14 z M 24 17C27.883178 17 31 20.116822 31 24C31 27.883178 27.883178 31 24 31C20.116822 31 17 27.883178 17 24C17 20.116822 20.116822 17 24 17 z" fill="#FFFFFF" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path d="M32 6C26.568583 6 22.160643 10.388731 22.042969 15.792969C17.240727 15.216998 14.113589 13.421507 12.195312 11.652344C10.067982 9.6903754 9.3945312 7.9472656 9.3945312 7.9472656 A 1.50015 1.50015 0 0 0 6.8007812 7.5996094C6.8007812 7.5996094 5 10 5 13.5C5 15.500985 5.6317952 16.981554 6.3847656 18.236328C6.3570276 18.223338 6.1699219 18.158203 6.1699219 18.158203 A 1.50015 1.50015 0 0 0 4.0058594 19.636719C4.0058594 19.636719 4.5832039 23.856843 8.5507812 26.941406L8.1367188 27.044922 A 1.50015 1.50015 0 0 0 7.1972656 29.244141C7.1972656 29.244141 7.8700527 30.382221 9.2792969 31.580078C10.11485 32.290298 11.34227 33.023169 12.789062 33.701172C11.012271 34.35044 8.362818 35 4.5 35 A 1.50015 1.50015 0 0 0 3.3710938 37.488281C3.3710938 37.488281 4.5173251 38.751002 6.7832031 39.849609C9.0490812 40.948217 12.539474 42 17.5 42C26.219697 42 32.484656 37.817151 36.394531 32.515625C40.304407 27.214099 42 20.861111 42 16C42 15.691547 41.980739 15.387437 41.953125 15.085938C44.064371 13.051602 44.856626 11.522235 44.894531 11.447266C45.084531 11.066266 45.01375 10.608688 44.71875 10.304688C44.42475 9.9996875 43.969031 9.9137969 43.582031 10.091797L43.419922 10.166016C43.280922 10.230016 43.141953 10.294422 43.001953 10.357422C43.408953 9.7084219 43.730125 9.014875 43.953125 8.296875C44.077125 7.900875 43.943234 7.4669375 43.615234 7.2109375C43.287234 6.9549375 42.835469 6.9275312 42.480469 7.1445312C41.258221 7.8873594 40.086652 8.40739 38.867188 8.7558594C37.072578 7.0534724 34.656873 6 32 6 z M 32 9C35.883178 9 39 12.116822 39 16C39 20.138889 37.445593 26.035901 33.980469 30.734375C30.515344 35.432849 25.280303 39 17.5 39C13.7348 39 11.230189 38.318942 9.3535156 37.582031C11.319341 37.276755 13.011947 36.869367 14.228516 36.398438C16.338182 35.581792 17.476563 34.638672 17.476562 34.638672 A 1.50015 1.50015 0 0 0 16.863281 32.044922C14.140556 31.364241 12.394328 30.263307 11.298828 29.345703L12.863281 28.955078 A 1.50015 1.50015 0 0 0 13.039062 26.099609C9.7939415 24.851486 8.4312292 23.086373 7.734375 21.607422C8.5823538 21.782967 9.3718961 22 10.5 22 A 1.50015 1.50015 0 0 0 11.169922 19.158203C11.169922 19.158203 8 17.7 8 13.5C8 12.745947 8.2088435 12.268355 8.3613281 11.697266C8.884507 12.400354 9.3156815 13.07859 10.160156 13.857422C12.734824 16.231954 16.990366 18.653154 23.419922 18.998047 A 1.50015 1.50015 0 0 0 25 17.5L25 16C25 12.116822 28.116822 9 32 9 z" fill="#FFFFFF" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-24"></div>
        <div class="flex flex-col flex-1  mt-8 lg:mt-0">
<!--          <img :src="`${ApiUrl}/core/course/banner/${course.imageName}`" alt="unreal engine course" class="w-full rounded-lg">-->
          <video :poster="`${ApiUrl}/core/course/banner/${course.imageName}`" controls class="w-full rounded-lg" >
            <source :src="`${ApiUrl}/core/course/intro/${course.introVideo}`" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="course-description p-4 border-2 border-slate-700 rounded-lg mt-2">
            <h3 class="text-xl font-semibold my-4">{{course.title}}</h3>
            <p class="p-1 lg:p-4 text-justify text-sm lg:text-base" v-html="course.description"></p>
            <u-tags title="نیازمندی ها" :tags="course.requirements" v-if="course.requirements.length > 0 && course.requirements[0] !== ''"/>
            <div v-else class="flex flex-col space-y-2 mt-8">
              <span>نیازمندی ها:</span>
              <strong class="mr-4">پیش نیاز ندارد</strong>
            </div>
          </div>
          <course-videos :time="course.time" :videos="course.sections"/>
          <comments :post-type="EPostType.Course" :post-id="course.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {CourseDto} from "~/models/course/courseDto";
import {GetCourseBySlug} from "~/services/course.service";
import {useRoute} from "nuxt/app";
import {ApiUrl} from "~/utilities/ApiUrls";
import {EPostType} from "~/models/comment/commentDto";

const course = ref<CourseDto>();

const route = useRoute();
onMounted(async ()=>{
  const slug = route.params.slug.toString();
  const result = await GetCourseBySlug(slug);
  course.value = result.data;
})

const getEpisodesCount = computed(()=>{
  if(course.value.sections.length > 0) {
    const episodes = course.value.sections.map(c => c.episodes);
    return episodes[0].length;
  }
  else{
    return 0;
  }
})

const getCourseStatus=computed(()=>{
  switch (course.value.courseStatus)
  {
    case 0:
      return 'مقدماتی';
    case 1:
      return 'متوسط';
    case 2:
      return 'پیشرفته';
  }
})
const getCourseLevel=computed(()=>{
  switch (course.value.courseStatus)
  {
    case 0:
      return 'شروع به زودی...';
    case 1:
      return 'در حال برگزاری';
    case 2:
      return 'به اتمام رسیده';
    case 3:
      return 'متوقف شده';
  }
})
</script>