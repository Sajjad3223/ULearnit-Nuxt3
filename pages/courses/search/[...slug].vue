<template>
  <div>
    <course-filter />

    <div class="m-4">
      <div class="grid grid-cols-4 gap-8">
        <u-card v-for="course in courses"
                :image-name="course.imageName"
                :title="course.title"
                :time="course.time"
                :students-count="course.studentsCount"
                :price="course.price"
                :discount="course.discount"
                :real-price="course.realPrice"/>
      </div>
    </div>
  </div>
</template>

<script setup>

const courses = ref([
  {
    imageName:'unrealEngine-course.jpg',
    title:'آموزش جامع آنریل انجین',
    time:'60:32',
    studentsCount:785,
    price:100000,
    discount:0,
    realPrice:100000
  },
  {
    imageName:'ai.png',
    title:'آموزش هوش مصنوعی',
    time:'20:50',
    studentsCount:125,
    price:200000,
    discount:50,
    realPrice:400000
  },
  {
    imageName:'js-course.jpg',
    title:'آموزش جاوا اسکریپت',
    time:'12:20',
    studentsCount:253,
    price:70000,
    discount:30,
    realPrice:100000
  },
  {
    imageName:'blog-post-image.png',
    title:'آموزش بلاگ نویسی',
    time:'03:09',
    studentsCount:568,
    price:250000,
    discount:0,
    realPrice:250000
  },
  {
    imageName:'Save-Load.png',
    title:'آموزش Save و Load در آنریل انجین',
    time:'02:36',
    studentsCount:856,
    price:0,
    discount:0,
    realPrice:0
  },
  {
    imageName:'ue4-git.jpg',
    title:'آموزش استفاده از گیت در آنریل انجین',
    time:'00:37',
    studentsCount:375,
    price:0,
    discount:0,
    realPrice:0
  },
  {
    imageName:'unity-grid.jpg',
    title:'آموزش ساخت گرید 2 بعدی در یونیتی',
    time:'03:52',
    studentsCount:285,
    price:0,
    discount:0,
    realPrice:0
  },
  {
    imageName:'ساخت_بازی_2_بعدی_در_آنریل_انجین.jpg',
    title:'آموزش باخت بازی 2 بعدی در آنریل انجین',
    time:'08:17',
    studentsCount:716,
    price:0,
    discount:0,
    realPrice:0
  },
  {
    imageName:'آموزش_plusplusC_در_آنریل_انجین.jpg',
    title:'آموزش ++C در آنریل انجین',
    time:'19:34',
    studentsCount:645,
    price:40000,
    discount:60,
    realPrice:100000
  },
])
</script>