<template>
  <div>
    <Head>
      <Title>
        ویرایش دوره
      </Title>
    </Head>

    <div class="w-full">
      <h4 class="text-xl font-bold">ویرایش دوره</h4>
      <hr class="my-2">
      <div class="mt-6">
        <Form @submit="UpdateCourse" :validation-schema="editCourseValidationSchema">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <base-input label="عنوان دوره" name="title" v-model="editCourseData.title" class="col-span-2" placeholder="عنوان دوره شما"/>
            <base-input label="اسلاگ به انگلیسی(عنوان نمایشی در URL)" name="slug" v-model="editCourseData.slug" />
            <base-input type="number" label="قیمت (0 برای رایگان)" name="price" v-model="editCourseData.price" />
            <div>
              <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">دسته
                بندی</label>
              <select ref="categorySelect" id="category" @change="loadSubCategories" v-model="editCourseData.categoryId"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected="">انتخاب کنید</option>
                <option v-for="c in categories" :value="c.id">{{c.title}}</option>
              </select>
            </div>
            <div>
              <label for="subCategory" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">زیر دسته
                بندی</label>
              <select ref="subCategory" id="subCategory" v-model="editCourseData.subCategoryId"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected="">انتخاب کنید</option>
                <option v-for="s in subCategories" :value="s.id">{{s.title}}</option>
              </select>
            </div>

            <div class="col-span-2 text-black" dir="rtl">
              <input-c-k-editor v-model="editCourseData.description" />
            </div>
            <div>
              <label for="level" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">سطح
                دوره</label>
              <select id="level" v-model="editCourseData.courseLevel"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected="">انتخاب کنید</option>
                <option :value="0">مقدماتی</option>
                <option :value="1">متوسط</option>
                <option :value="2">پیشرفته</option>
              </select>
            </div>
            <div>
              <label for="level" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">سطح
                دوره</label>
              <select id="level" v-model="editCourseData.courseStatus"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected="">انتخاب کنید</option>
                <option :value="0">شروع به زودی</option>
                <option :value="1">در حال برگزاری</option>
                <option :value="2">به اتمام رسیده</option>
                <option :value="3">متوقف شده</option>
              </select>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">بنر دوره
                (فرمت jpeg)</label>
              <input ref="banner" @input="UploadImage"
                     class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                     id="file_input" type="file">
              <master-upload-progress :value="uploadBannerPercentage">{{ uploadBannerPercentage }}</master-upload-progress>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">ویدئو معرفی
                (فرمت mp4)</label>
              <input ref="introVideo" @input="UploadVideo"
                     class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                     id="file_input" type="file">
              <master-upload-progress :value="uploadVideoPercentage">{{ uploadVideoPercentage }}</master-upload-progress>
            </div>
            <base-input label="برچسب ها (با کاما(,) جدا کنید)" name="tags" v-model="editCourseData.tags" placeholder="آنریل انجین,سی شارپ,#c" :is-required="false"/>
            <base-input label="نیازمندی های دوره (با کاما(,) جدا کنید)" name="requirements" v-model="editCourseData.requirements" placeholder="c#,ue4,..." :is-required="false"/>
            <div class="sm:col-span-2 mt-4">
              <h4>
                تنظیمات Seo
              </h4>
              <hr class="my-2">
            </div>
            <base-input label="Meta Title" name="metaTitle" v-model="editCourseData.seoData.metaTitle" :is-required="false" />
            <base-input label="Meta Keywords" name="metaKeywords" v-model="editCourseData.seoData.metaKeyWords" :is-required="false" />
            <base-input label="Meta Description" name="metaDescription" v-model="editCourseData.seoData.metaDescription" class="row-span-3" multiline :is-required="false"/>
            <base-input label="Canonical" name="canonical" v-model="editCourseData.seoData.canonical" :is-required="false" />
            <base-input label="Schema" name="schema" v-model="editCourseData.seoData.schema" :is-required="false" />
            <div class="self-end">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" name="indexPage" id="indexPage" v-model="editCourseData.seoData.indexPage" class="sr-only peer">
                <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Index Page</span>
              </label>
            </div>


          </div>
          <base-button type="submit" class="w-1/3 flex mr-auto justify-center mt-4" >
            ثبت دوره
          </base-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import {EditCourse, GetCourse} from "~/services/course.service";
import {CourseDto} from "~/models/course/courseDto";
import * as Yup from "yup";
import {EditCourseViewModel} from "~/models/course/editCourseViewModel";
import {GetCourseCategories, GetCourseCategory} from "~/services/admin/courseCategory.service";
import {ApiUrl} from "~/utilities/ApiUrls";
import axios from "axios";

definePageMeta({
  layout:"user",
middleware:'master'
})

const editCourseValidationSchema = Yup.object().shape({
  title:Yup.string().required("نام کاربری الزامی است"),
  slug:Yup.string().required("اسلاگ الزامی است"),
  price:Yup.number().required("قیمت الزامی است").moreThan(-1,"مبلغ دوره نباید منفی باشد"),
});

const editCourseData:EditCourseViewModel = reactive({
  courseId: 0,
  title: "",
  slug: "",
  description: "",
  categoryId: 0,
  subCategoryId: 0,
  imageName: "",
  introVideo: "",
  courseLevel: 0,
  courseStatus: 0,
  seoData: {
    metaTitle: "",
    metaDescription: "",
    metaKeyWords: "",
    canonical: "",
    indexPage: false,
    schema: "",
  },
  price: 0,
  tags: '',
  requirements: '',
});

const categories = ref();
const categorySelect = ref();
const subCategories = ref();

const course = ref<CourseDto>();

const desc = ref();

const route = useRoute();
const courseId = route.params.courseId;
onMounted( async ()=>{
  const result = await GetCourse(courseId);
  if(result.isSuccess)
  {
    course.value = result.data;
    editCourseData.courseId = course.value.id;
    editCourseData.title = course.value.title;
    editCourseData.slug = course.value.slug;
    editCourseData.description = course.value.description;
    editCourseData.categoryId = course.value.category.id;
    editCourseData.subCategoryId = course.value.subCategory.id;
    editCourseData.imageName = course.value.imageName;
    editCourseData.introVideo = course.value.introVideo;
    editCourseData.courseLevel = course.value.courseLevel;
    editCourseData.price = course.value.price;
    editCourseData.tags = course.value.tags.join(',');
    editCourseData.requirements = course.value.requirements.join(',');
    editCourseData.seoData.metaTitle = course.value.seoData.metaTitle;
    editCourseData.seoData.metaDescription = course.value.seoData.metaDescription;
    editCourseData.seoData.metaKeyWords = course.value.seoData.metaKeyWords;
    editCourseData.seoData.canonical = course.value.seoData.canonical;
    editCourseData.seoData.indexPage = course.value.seoData.indexPage;
    editCourseData.seoData.schema = course.value.seoData.schema;
  }

  const categoriesResult = await GetCourseCategories();
  categories.value = categoriesResult.data;

  const category = await GetCourseCategory(course.value.category.id);
  subCategories.value = category.data.children;
})

const loadSubCategories= async ()=>{
  const selectedId = categorySelect.value.value;
  if(selectedId === 'انتخاب کنید') {
    subCategories.value = null;
    return;
  }
  const category = await GetCourseCategory(selectedId);
  subCategories.value = category.data.children;
}


const router = useRouter();
const UpdateCourse= async ()=>{
  //editCourseData.description = document.querySelector(".ck-content").innerHTML;
  const result = await EditCourse(editCourseData);
  if(result.isSuccess)
  {
    alert("دوره با موفقیت ثبت شد")
    router.push("/masterpanel/courses");
  }
  else{
    alert(result.metaData.message)
  }
}

const banner = ref();
const introVideo = ref();
const canSubmit = ref(false);

const uploadBannerPercentage = ref(0);
const UploadImage = async (e)=>{
  const file = e.target.files[0];
  const url = `${ApiUrl}/api/Course/upload-banner`;
  const form = new FormData()
  form.append('file', file)

  if(confirm("آیا از آپلود فایل انتخاب شده اطمینان دارید؟"))
  {
    const data = await axios.post(url,form,{
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore?.loginResult?.token}`,
      },
      onUploadProgress: function( progressEvent ) {
        uploadBannerPercentage.value = parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ) );
      }.bind(this)
    }).then(function(response){
      addCourseData.imageName = response.data.data;
      canSubmit.value = true;
    })
        .catch(function(){
          alert('در آپلود فایل مشکلی پیش آمده است');
        });
  }
}

const uploadVideoPercentage = ref(0);
const UploadVideo = async (e)=> {
  canSubmit.value = false;
  const file = e.target.files[0];
  const url = `${ApiUrl}/api/Course/upload-video`;
  const form = new FormData()
  form.append('file', file)

  if(confirm("آیا از آپلود فایل انتخاب شده اطمینان دارید؟"))
  {
    const data = await axios.post(url,form,{
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore?.loginResult?.token}`,
      },
      onUploadProgress: function( progressEvent ) {
        uploadVideoPercentage.value = parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ) );
      }.bind(this)
    }).then(function(response){
      addCourseData.introVideo = response.data.data;
      canSubmit.value = true;
    })
        .catch(function(){
          alert('در آپلود فایل مشکلی پیش آمده است');
        });
  }
}

</script>