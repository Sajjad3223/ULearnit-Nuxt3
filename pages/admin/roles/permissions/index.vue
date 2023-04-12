<template>
  <div>
    <u-divider title="دسترسی ها"/>

    <u-modal title="افزودن دسترسی جدید" v-model="permissionsModal">
      <template #default>
        <Form @submit.prevent="createPermissions" class="flex flex-col p-4 space-y-4">
          <base-input
              name="title"
              label="عنوان"
              v-model="addPermissionsData.title"
          />
          <base-button type="submit">ثبت دسترسی</base-button>
        </Form>
      </template>
    </u-modal>

    <u-table ref="dataTable">
      <template v-slot:table-options="{showFilter}">
        <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 md:space-x-reverse flex-shrink-0">
          <button @click="permissionsModal = true"  class="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">
            <svg class="ml-2 scale-125" width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 7.4375H3.5C3.26083 7.4375 3.0625 7.23917 3.0625 7C3.0625 6.76083 3.26083 6.5625 3.5 6.5625H10.5C10.7392 6.5625 10.9375 6.76083 10.9375 7C10.9375 7.23917 10.7392 7.4375 10.5 7.4375Z" fill="white"/>
              <path d="M7 10.9375C6.76083 10.9375 6.5625 10.7392 6.5625 10.5V3.5C6.5625 3.26083 6.76083 3.0625 7 3.0625C7.23917 3.0625 7.4375 3.26083 7.4375 3.5V10.5C7.4375 10.7392 7.23917 10.9375 7 10.9375Z" fill="white"/>
            </svg>
            دسترسی جدید
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
        <th scope="col" class="px-4 py-3">عنوان دسترسی</th>
        <th scope="col" class="px-4 py-3">
          <span class="sr-only">عملیات</span>
        </th>
      </template>
      <template v-slot:table-body="{showOption}">
        <tr  class="border-b dark:border-gray-700" v-for="(p,i) in permissions">
          <td class="px-4 py-3 text-white">
            {{ i + 1 }}
          </td>
          <td class="px-4 py-3 text-white">
            {{ p.title }}
          </td>
        </tr>
      </template>
    </u-table>
  </div>
</template>

<script setup lang="ts">

import {successAlert} from "~/services/alert.service";
import {PermissionDto} from "~/models/role/roleDto";
import {CreateRoleCommand} from "~/models/role/createRoleCommand";
import {CreatePermission, GetPermissions} from "~/services/admin/roles.service";

definePageMeta({
  layout:'admin',
middleware:'admin'
})

const permissionsModal = ref(false);
const permissions = ref<PermissionDto>();
const dataTable = ref();
const addPermissionsData:CreateRoleCommand = reactive({
  title:""
});

onMounted( async ()=>{
  await loadData();
})

const loadData = async ()=>{
  const result = await GetPermissions();
  if(result.isSuccess) {
    permissions.value = result.data;
  }
}

const createPermissions = async ()=>{
  const result = await CreatePermission(addPermissionsData);
  if(result.isSuccess) {
    permissionsModal.value = false;
    successAlert()
    await loadData();
  }
}
</script>

