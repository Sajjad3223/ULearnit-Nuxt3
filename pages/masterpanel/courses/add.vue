<template>
  <div>
    <Head>
      <Title>
        ثبت دوره جدید
      </Title>
    </Head>

    <u-divider title="افزودن دوره جدید"/>
    <div class="w-full">
      <div class="mt-2">
        <Form @submit="AddCourse" :validation-schema="addCourseValidationSchema">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <base-input label="عنوان دوره" name="title" v-model="addCourseData.title" class="col-span-2" placeholder="عنوان دوره شما"/>
            <base-input label="اسلاگ به انگلیسی(عنوان نمایشی در URL)" name="slug" v-model="addCourseData.slug" />
            <base-input type="number" label="قیمت (0 برای رایگان)" name="price" v-model="addCourseData.price" />
            <div>
              <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">دسته
                بندی</label>
              <select ref="categorySelect" id="category" @change="loadSubCategories" v-model="addCourseData.categoryId"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected="">انتخاب کنید</option>
                <option v-for="c in categories" :value="c.id">{{c.title}}</option>
              </select>
            </div>
            <div>
              <label for="subCategory" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">زیر دسته
                بندی</label>
              <select ref="subCategory" id="subCategory" v-model="addCourseData.subCategoryId"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected="">انتخاب کنید</option>
                <option v-for="s in subCategories" :value="s.id">{{s.title}}</option>
              </select>
            </div>

            <div class="col-span-2 text-black" dir="rtl">
              <input-c-k-editor v-model="addCourseData.description" is-required title="توضیحات دوره"/>
            </div>
            <div>
              <label for="level" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">سطح
                دوره</label>
              <select id="level" v-model="addCourseData.courseLevel"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected="">انتخاب کنید</option>
                <option :value="0">مقدماتی</option>
                <option :value="1">متوسط</option>
                <option :value="2">پیشرفته</option>
              </select>
            </div>
            <div></div>
            <base-file-uploader upload-url="/course/upload-banner" title="بنر دوره" v-model="addCourseData.imageName" accept-format="image"/>
            <base-file-uploader upload-url="/Course/upload-video" title="ویدئو معرفی" v-model="addCourseData.introVideo" accept-format="video"/>
            <base-input label="برچسب ها (با کاما(,) جدا کنید)" name="tags" v-model="addCourseData.tags" placeholder="آنریل انجین,سی شارپ,#c" :is-required="false"/>
            <base-input label="نیازمندی های دوره (با کاما(,) جدا کنید)" name="requirements" v-model="addCourseData.requirements" placeholder="c#,ue4,..." :is-required="false"/>
            <u-divider title="تنظیمات Seo" class="col-span-full mb-0"/>
            <base-input label="Meta Title" name="metaTitle" v-model="addCourseData.seoData.metaTitle" :is-required="false" />
            <base-input label="Meta Keywords" name="metaKeywords" v-model="addCourseData.seoData.metaKeyWords" :is-required="false" />
            <base-input label="Meta Description" name="metaDescription" v-model="addCourseData.seoData.metaDescription" class="row-span-3" multiline :is-required="false"/>
            <base-input label="Canonical" name="canonical" v-model="addCourseData.seoData.canonical" :is-required="false" />
            <base-input label="Schema" name="schema" v-model="addCourseData.seoData.schema" :is-required="false" />
            <div class="self-end">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" name="indexPage" id="indexPage" v-model="addCourseData.seoData.indexPage" class="sr-only peer">
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
import {CreateCourse} from "~/services/course.service";
import {CreateCourseViewModel} from "~/models/course/createCourseViewModel";
import {GetCourseCategories, GetCourseCategory} from "~/services/admin/courseCategory.service";
import * as Yup from "yup";
import {ApiUrl} from "~/utilities/ApiUrls";
import axios from "axios";
import {useAuthStore} from "~/stores/authStore";
const authStore = useAuthStore();

definePageMeta({
  layout:"user",
middleware:'master'
})

const addCourseValidationSchema = Yup.object().shape({
  title:Yup.string().required("نام کاربری الزامی است"),
  slug:Yup.string().required("اسلاگ الزامی است"),
  price:Yup.number().required("اسلاگ الزامی است").moreThan(-1,"مبلغ دوره نباید منفی باشد"),
});

const addCourseData:CreateCourseViewModel = reactive({
  teacherId: 0,
  title: "",
  slug: "",
  description: "",
  categoryId: 0,
  subCategoryId: 0,
  imageName: "",
  introVideo: "",
  courseLevel: 0,
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

const canSubmit = ref(false);

const router = useRouter();
const AddCourse= async ()=>{
  const result = await CreateCourse(addCourseData);
  if(result.isSuccess)
  {
    alert("دوره با موفقیت ثبت شد")
    router.push("/masterpanel/courses");
  }
  else{
    alert(result.metaData.message)
  }
}

onMounted( async ()=>{
  const categoriesResult = await GetCourseCategories();
  categories.value = categoriesResult.data;
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

</script>
