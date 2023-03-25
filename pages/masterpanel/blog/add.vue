<template>
  <div>
    <div class="w-full">
      <u-divider title="افزودن مقاله جدید" />
      <div>
        <Form @submit="AddPost" :validation-schema="addPostValidationSchema">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <base-input label="عنوان مقاله" name="title" v-model="addPostData.title" />
            <base-input label="اسلاگ" name="slug" v-model="addPostData.slug" />
            <input-c-k-editor v-model="addPostData.content" title="متن مقاله" is-required class="col-span-full"/>
            <div>
              <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">دسته
                بندی</label>
              <select ref="categorySelect" id="category" @change="loadSubCategories" v-model="addPostData.categoryId"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected="">انتخاب کنید</option>
                <option v-for="c in categories" :value="c.id">{{c.title}}</option>
              </select>
            </div>
            <div>
              <label for="subCategory" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">زیر دسته
                بندی</label>
              <select ref="subCategory" id="subCategory" v-model="addPostData.subCategoryId"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected="">انتخاب کنید</option>
                <option v-for="s in subCategories" :value="s.id">{{s.title}}</option>
              </select>
            </div>
            <base-file-uploader upload-url="/blog/upload-banner" title="بنر مقاله" v-model="addPostData.imageName" accept-format="image"/>
            <base-input label="برچسب ها (با کاما(,) جدا کنید)" name="tags" v-model="addPostData.tags" placeholder="آنریل انجین,سی شارپ,#c" :is-required="false"/>
            <u-divider title="تنظیمات Seo" class="col-span-full mb-0"/>
            <base-input label="Meta Title" name="metaTitle" v-model="addPostData.seoData.metaTitle" :is-required="false" />
            <base-input label="Meta Keywords" name="metaKeywords" v-model="addPostData.seoData.metaKeyWords" :is-required="false" />
            <base-input label="Meta Description" name="metaDescription" v-model="addPostData.seoData.metaDescription" class="row-span-3" multiline :is-required="false"/>
            <base-input label="Canonical" name="canonical" v-model="addPostData.seoData.canonical" :is-required="false" />
            <base-input label="Schema" name="schema" v-model="addPostData.seoData.schema" :is-required="false" />
            <div class="self-end">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" name="indexPage" id="indexPage" v-model="addPostData.seoData.indexPage" class="sr-only peer">
                <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Index Page</span>
              </label>
            </div>
          </div>
          <base-button type="submit" class="w-1/3 flex mr-auto justify-center mt-4" >
            ثبت مقاله
          </base-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import * as Yup from "yup";
import {CreatePostViewModel} from "~/models/blog/createPostViewModel";
import {GetBlogCategories, GetBlogCategory} from "~/services/blogCategory.service";
import {CreatePost} from "~/services/blog.service";
import {successAlert} from "~/services/alert.service";


definePageMeta({
  layout: "user",
})

const addPostValidationSchema = Yup.object().shape({
  title:Yup.string().required("عنوان الزامی است"),
  slug:Yup.string().required("اسلاگ الزامی است"),
  content:Yup.string().required("متن وبلاگ الزامی است"),
});

const addPostData:CreatePostViewModel = reactive({
  title: "",
  slug: "",
  content: "",
  categoryId: 0,
  subCategoryId: 0,
  imageName: "",
  tags: "",
  seoData: {
    metaTitle: "",
    metaDescription: "",
    metaKeyWords: "",
    canonical: "",
    indexPage: false,
    schema: "",
  },
});

const categories = ref();
const categorySelect = ref();
const subCategories = ref();

const router = useRouter();
const AddPost= async ()=>{
  const result = await CreatePost(addPostData);
  if(result.isSuccess)
  {
    successAlert();
    router.push("/masterpanel/blog");
  }
  else{
    alert(result.metaData.message)
  }
}

onMounted( async ()=>{
  const categoriesResult = await GetBlogCategories();
  categories.value = categoriesResult.data;
})

const loadSubCategories= async ()=>{
  const selectedId = categorySelect.value.value;
  if(selectedId === 'انتخاب کنید') {
    subCategories.value = null;
    return;
  }
  const category = await GetBlogCategory(selectedId);
  subCategories.value = category.data.children;
}

</script>