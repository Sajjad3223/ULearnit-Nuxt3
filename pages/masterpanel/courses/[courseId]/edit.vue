<template>
  <div>
    <div class="w-full">
      <h4 class="text-xl font-bold">افزودن دوره جدید</h4>
      <hr class="my-2">
      <div class="mt-6">
        <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="sm:col-span-2">
              <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عنوان دوره</label>
              <input type="text" name="title" id="title"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                     placeholder="عنوان آموزش شما" required="">
            </div>
            <div class="w-full">
              <label for="slug" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">اسلاگ به
                انگلیسی(عنوان نمایشی در URL)</label>
              <input type="text" name="slug" id="slug"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                     placeholder="اسلاگ به انگلیسی" required="">
            </div>
            <div class="w-full">
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">قیمت (0 برای
                رایگان)</label>
              <input type="number" name="price" id="price"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                     placeholder="0 رایگان - بیشتر از 0 نقدی" required="">
            </div>
            <div>
              <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">دسته
                بندی</label>
              <select id="category"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected="">انتخاب کنید</option>
                <option value="TV">آنریل انجین</option>
              </select>
            </div>
            <div>
              <label for="subCategory" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">زیر دسته
                بندی</label>
              <select id="subCategory"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected="">انتخاب کنید</option>
                <option value="TV">برنامه نویسی</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">توضیحات
                دوره</label>
              <textarea id="description" maxlength="500" rows="8"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        placeholder="توضیحات دوره خود را وارد کنید"></textarea>
            </div>
            <div>
              <label for="subCategory" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">سطح
                دوره</label>
              <select id="subCategory"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected="">انتخاب کنید</option>
                <option value="TV">مقدماتی</option>
                <option value="TV">متوسط</option>
                <option value="TV">پیشرفته</option>
              </select>
            </div>
            <div></div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">بنر دوره
                (فرمت jpeg)</label>
              <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input" type="file">
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">ویدئو معرفی
                (فرمت mp4)</label>
              <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input" type="file">
            </div>

            <div class="sm:col-span-2 mt-4">
              <h4>
                تنظیمات Seo
              </h4>
              <hr class="my-2">
            </div>
            <div class="w-full">
              <label for="metaTitle" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meta
                Title</label>
              <input type="text" name="metaTitle" id="metaTitle"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                     placeholder="Meta Title" required="">
            </div>
            <div class="w-full">
              <label for="metaKeywords" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meta
                Keywords</label>
              <input type="text" name="metaKeywords" id="metaKeywords"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                     placeholder="Meta Keywords" required="">
            </div>
            <div class="w-full sm:row-span-3">
              <label for="metaDescription" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meta
                Description</label>
              <textarea id="metaDescription" maxlength="500" rows="8"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        placeholder="Meta Description"></textarea>
            </div>
            <div class="w-full">
              <label for="canonical"
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Canonical</label>
              <input type="text" name="canonical" id="canonical"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                     placeholder="Canonical" required="">
            </div>
            <div class="w-full">
              <label for="schema" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Schema</label>
              <input type="text" name="schema" id="schema"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                     placeholder="Schema" required="">
            </div>
            <div class="self-end">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" name="indexPage" id="indexPage" value="" class="sr-only peer" checked>
                <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Index Page</span>
              </label>
            </div>


          </div>

          <base-button type="submit" color="cta" class="w-1/3 flex mr-auto justify-center mt-4">
            ویرایش دوره
          </base-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "user",
})

const route = useRoute();

const courseId = route.params.courseId;

</script>