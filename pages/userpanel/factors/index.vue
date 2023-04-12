<template>
  <div>
    <Head>
      <Title>
        فاکتور های من
      </Title>
    </Head>

    <u-divider title="فاکتور های من" />
    <div class="w-full mt-4">
      <u-table>
        <template #table-header>
          <th scope="col" class="px-4 py-3">شماره فاکتور</th>
          <th scope="col" class="px-4 py-3">تعداد دوره</th>
          <th scope="col" class="px-4 py-3">مبلغ (تومان)</th>
          <th scope="col" class="px-4 py-3">تاریخ</th>
          <th scope="col" class="px-4 py-3">وضعیت</th>
          <th scope="col" class="px-4 py-3">
            <span class="sr-only">عملیات</span>
          </th>
        </template>
        <template v-slot:table-body="{showOption}">
          <tr class="border-b dark:border-gray-700" v-for="(f,i) in factors">
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              #{{ f.id }}
            </th>
            <td class="px-4 py-3">{{f.totalItemCount}}</td>
            <td class="px-4 py-3">{{f.totalPrice}}</td>
            <td class="px-4 py-3">{{ new Date(f.creationDate).toLocaleDateString() }}</td>
            <td class="px-4 py-3">
              <u-badge v-if="f.orderStatus === EOrderStatus.Pending"
                  >در انتظار پرداخت</u-badge>
              <u-badge v-if="f.orderStatus === EOrderStatus.Paid"
                  color="success">پرداخت شده</u-badge>
              <u-badge v-if="f.orderStatus === EOrderStatus.Canceled"
                  color="danger">لغو شده</u-badge>
            </td>
            <td class="px-4 py-3 flex items-center justify-end">
              <button @click.prevent="showOption(i)"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </button>
              <div
                   class="hidden table-option z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    >
                  <li>
                    <NuxtLink :to="`/userpanel/factors/${f.id}`"
                              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      جزئیات فاکتور
                    </NuxtLink>
                  </li>
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
import {GetUserOrders} from "~/services/cart.service";
import {EOrderStatus, OrderDto} from "~/models/cart/orderDto";

definePageMeta({
  layout: "user",
  middleware:'auth',
})

const factors = ref<OrderDto>();

onMounted(async ()=>{
  const result = await GetUserOrders();
  if(result.isSuccess)
  {
    factors.value = result.data.data;
    console.log(factors.value)
  }
})
</script>