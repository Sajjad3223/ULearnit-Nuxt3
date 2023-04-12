<template>
  <div>
    <Head>
      <Title>
        باندل ها
      </Title>
    </Head>
    <u-divider title="مدیریت باندل ها" />
    <div class="w-full mt-4">
      <u-table>
        <template v-slot:table-options="{showFilter,showActions}" >
          <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 md:space-x-reverse flex-shrink-0">
            <NuxtLink to="/masterpanel/bundles/add" class="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">
              <svg class="ml-2 scale-125" width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 7.4375H3.5C3.26083 7.4375 3.0625 7.23917 3.0625 7C3.0625 6.76083 3.26083 6.5625 3.5 6.5625H10.5C10.7392 6.5625 10.9375 6.76083 10.9375 7C10.9375 7.23917 10.7392 7.4375 10.5 7.4375Z" fill="white"/>
                <path d="M7 10.9375C6.76083 10.9375 6.5625 10.7392 6.5625 10.5V3.5C6.5625 3.26083 6.76083 3.0625 7 3.0625C7.23917 3.0625 7.4375 3.26083 7.4375 3.5V10.5C7.4375 10.7392 7.23917 10.9375 7 10.9375Z" fill="white"/>
              </svg>
              باندل جدید
            </NuxtLink>
          </div>
        </template>
        <template #table-header>
          <th scope="col" class="px-4 py-3">عنوان باندل</th>
          <th scope="col" class="px-4 py-3">تعداد آیتم</th>
          <th scope="col" class="px-4 py-3">قیمت کل</th>
          <th scope="col" class="px-4 py-3">تخفیف</th>
          <th scope="col" class="px-4 py-3">قیمت نهایی</th>
          <th scope="col" class="px-4 py-3">تاریخ انقضاء</th>
          <th scope="col" class="px-4 py-3">
            <span class="sr-only">عملیات</span>
          </th>
        </template>
        <template v-slot:table-body="{showOption,hideAll}">
          <tr class="border-b dark:border-gray-700" v-for="(b,i) in bundles">
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <NuxtLink :to="`/bundle/${b.slug}`" class="link" >{{ b.title }}</NuxtLink>
            </th>
            <td class="px-4 py-3">{{ b.itemsCount }}</td>
            <td class="px-4 py-3">{{ b.totalPrice }}</td>
            <td class="px-4 py-3">{{ b.discount }}</td>
            <td class="px-4 py-3">{{ b.finalPrice }}</td>
            <td class="px-4 py-3">{{new Date(b.expirationTime).toLocaleDateString('fa-IR')}}</td>
            <td class="px-4 py-3 flex items-center justify-end">
              <button @click="showOption(i)" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
              <div class="hidden table-option z-20 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" >
                  <li>
                    <NuxtLink :to="`/masterpanel/bundles/${b.id}`" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">جزئیات باندل</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="`/masterpanel/bundles/edit/${b.id}`" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ویرایش باندل</NuxtLink>
                  </li>
                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" >
                    <li>
                      <button @click="deleteBundle(b.id)" class="w-full text-right block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">حذف مقاله</button>
                    </li>
                  </ul>
                </ul>
              </div>
            </td>
          </tr>
        </template>
      </u-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {errorAlert, successAlert} from "~/services/alert.service";
import Swal from "sweetalert2";
import {BundleFilterData} from "~/models/bundle/bundleFilterResult";
import {DeleteBundle, GetUserBundles} from "~/services/bundle.service";

definePageMeta({
  layout:"user",
middleware:'master'
})

const bundles = ref<BundleFilterData[]>();

onBeforeMount( async ()=>{
  await loadData();
})

const loadData = async ()=>{
  const result = await GetUserBundles();
  if(result.isSuccess)
    bundles.value = result.data.data;
}

const deleteBundle = async (id:any)=>{
  await Swal.fire({
    title:`آیا از حذف این باندل مطمئن هستید؟`,
    icon:'question',
    showConfirmButton:true,
    confirmButtonText:'حذف',
    showCancelButton:true,
    cancelButtonText:'انصراف',
  }).then(async (result)=>{
    if(result.isConfirmed) {
      const result = await DeleteBundle(id);
      if(result.isSuccess)
      {
        successAlert();
        await loadData();
      }else{
        errorAlert();
      }
    }
  });
}

</script>