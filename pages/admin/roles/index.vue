<template>
  <div>
    <u-divider title="لقب ها"/>

    <u-modal title="افزودن لقب جدید" v-model="roleModal">
      <template #default>
        <Form @submit.prevent="createRole" class="flex flex-col p-4 space-y-4">
          <base-input
              name="title"
              label="عنوان"
              v-model="addRoleData.title"
          />
          <base-button type="submit">ثبت لقب</base-button>
        </Form>
      </template>
    </u-modal>

    <u-table ref="dataTable">
      <template v-slot:table-options="{showFilter}">
        <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 md:space-x-reverse flex-shrink-0">
          <button @click="roleModal = true"  class="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">
            <svg class="ml-2 scale-125" width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 7.4375H3.5C3.26083 7.4375 3.0625 7.23917 3.0625 7C3.0625 6.76083 3.26083 6.5625 3.5 6.5625H10.5C10.7392 6.5625 10.9375 6.76083 10.9375 7C10.9375 7.23917 10.7392 7.4375 10.5 7.4375Z" fill="white"/>
              <path d="M7 10.9375C6.76083 10.9375 6.5625 10.7392 6.5625 10.5V3.5C6.5625 3.26083 6.76083 3.0625 7 3.0625C7.23917 3.0625 7.4375 3.26083 7.4375 3.5V10.5C7.4375 10.7392 7.23917 10.9375 7 10.9375Z" fill="white"/>
            </svg>
            لقب جدید
          </button>
          <div class="flex items-center space-x-3 space-x-reverse w-full md:w-auto">
            <button id="filterButton" @click.prevent="showFilter" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 ml-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
              </svg>
              فیلتر
              <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            <div id="filterMenu" class="z-10 w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700 hidden" >
              <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">انتخاب وضعیت</h6>
              <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                <li class="flex items-center">
                  <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">در حال برگزاری</label>
                </li>
                <li class="flex items-center">
                  <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">شروع به زودی</label>
                </li>
                <li class="flex items-center">
                  <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">به پایان رسیده</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
      <template #table-header>
        <th scope="col" class="px-4 py-3">ردیف</th>
        <th scope="col" class="px-4 py-3">عنوان لقب</th>
        <th scope="col" class="px-4 py-3">
          <span class="sr-only">عملیات</span>
        </th>
      </template>
      <template v-slot:table-body="{showOption}">
        <tr  class="border-b dark:border-gray-700" v-for="(r,i) in roles">
          <td class="px-4 py-3 text-white">
            {{ i + 1 }}
          </td>
          <td class="px-4 py-3 text-white">
            {{ r.title }}
          </td>
          <td class="px-4 py-3 flex items-center justify-end">
            <button @click.prevent="showOption(i)" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
              <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
            <div class="table-option absolute hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <NuxtLink :to="`/admin/roles/${r.id}/permissions`"
                          class="w-full text-right block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">دسترسی ها</NuxtLink>
                </li>
                <li>
                  <button @click="edit"
                          class="w-full text-right block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ویرایش</button>
                </li>
              </ul>
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button @click="remove"
                          class="w-full text-right block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">حذف</button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </template>
    </u-table>
  </div>
</template>

<script setup lang="ts">
import {CreateRole, GetRoles} from "~/services/roles.service";
import {RoleDto} from "~/models/role/roleDto";
import {CreateRoleCommand} from "~/models/role/createRoleCommand";
import {successAlert} from "~/services/alert.service";

//TODO implement edit and remove functions

definePageMeta({
  layout:'admin',
})

const roleModal = ref(false);
const roles = ref<RoleDto>();
const dataTable = ref();
const addRoleData:CreateRoleCommand = reactive({
  title:""
});

onMounted( async ()=>{
  await loadData();
})

const loadData = async ()=>{
  const result = await GetRoles();
  if(result.isSuccess) {
    roles.value = result.data;
  }
}

const createRole = async ()=>{
  const result = await CreateRole(addRoleData);
  if(result.isSuccess) {
    roleModal.value = false;
    successAlert()
    await loadData();
  }
}
</script>

