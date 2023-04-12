<template>
  <div>
    <u-divider title="سفارشات"/>
    <div class="w-full mt-4">
      <u-table>
        <template #table-options="{showFilter}">
          <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 md:space-x-reverse flex-shrink-0">
            <div class="flex items-center space-x-3 space-x-reverse space-x-reverse w-full md:w-auto">
              <button id="filterButton" @click="showFilter" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 ml-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                </svg>
                فیلتر
                <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              <div id="filterMenu" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">انتخاب وضعیت</h6>
                <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                  <li class="flex items-center">
                    <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">در حال فروش</label>
                  </li>
                  <li class="flex items-center">
                    <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">به اتمام رسیده</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>
        <template #table-header>
          <th scope="col" class="px-4 py-3">کاربر</th>
          <th scope="col" class="px-4 py-3">وضعیت</th>
          <th scope="col" class="px-4 py-3">آخرین بروزرسانی</th>
          <th scope="col" class="px-4 py-3">قیمت کل</th>
          <th scope="col" class="px-4 py-3">تعداد آیتم</th>
          <th scope="col" class="px-4 py-3">تاریخ ایجاد</th>
          <th scope="col" class="px-4 py-3">فعال/غیرفعال</th>
          <th scope="col" class="px-4 py-3">
            <span class="sr-only">عملیات</span>
          </th>
        </template>
        <template v-slot:table-body="{showOption,hideAll}">
          <tr class="border-b dark:border-gray-700" v-for="(o,i) in orders">
            <td class="px-4 py-3">{{ o.userFullName }}</td>
            <td class="px-4 py-3">
              <u-badge v-if="o.orderStatus === EOrderStatus.Paid" color="success">پرداخت شده</u-badge>
              <u-badge v-if="o.orderStatus === EOrderStatus.Pending" color="primary">در انتظار پرداخت</u-badge>
              <u-badge v-if="o.orderStatus === EOrderStatus.Canceled" color="danger">لغو شده</u-badge>
            </td>
            <td class="px-4 py-3">{{new Date(o.lastUpdate).toLocaleDateString('fa-IR')}}</td>
            <td class="px-4 py-3">{{ o.totalPrice.toLocaleString() }}</td>
            <td class="px-4 py-3">{{ o.totalItemCount }}</td>
            <td class="px-4 py-3">{{new Date(o.creationDate).toLocaleDateString('fa-IR')}}</td>
            <td class="px-4 py-3">
              <u-badge v-if="o.isActive" color="success">فعال</u-badge>
              <u-badge v-else color="danger">غیرفعال</u-badge>
            </td>
            <td class="px-4 py-3 flex items-center justify-end">
              <button @click="showOption(i)" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
              <div class="hidden table-option z-20 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
              <!--<li v-if="c.commentStatus === ECourseStatus.Preparing">
                    <button @click="publishComment(c.id)" class="w-full text-right block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">انتشار</button>
                  </li>-->
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
import {OrderFilterData, OrderFilterParams} from "~/models/cart/orderFilterData";
import {GetOrdersByAdmin} from "~/services/admin/carts.admin.service";
import {EOrderStatus} from "~/models/cart/orderDto";

definePageMeta({
  layout:'admin',
  middleware:'admin'
})

const orders = ref<OrderFilterData[]>();

const filterParams:OrderFilterParams = reactive({
  userId:null,
  status:null,
  endDate:null,
  startDate:null,
  take : 10,
  pageId : 1
});

onMounted(async ()=>{
  await loadData();
})

const loadData = async ()=>{
  const result = await GetOrdersByAdmin(filterParams);
  if(result.isSuccess){
    orders.value = result.data.data;
  }
}
</script>