<template>
  <div v-if="factor">

    <Head>
      <Title>
        فاکتور شماره {{factor.id}}
      </Title>
    </Head>

    <u-divider :title="`فاکتور شماره ${ factor.id }`"/>
    <div class="flex flex-col mt-4">
      <div class="factor-details grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div>
          <span>تعداد دوره ها:</span>
          <strong class="mr-2">{{ factor.items.length }}</strong>
        </div>
        <div>
          <span>جمع کل:</span>
          <strong class="mr-2">{{ factor.totalPrice.toLocaleString() }}<sub class="mr-1">تومان</sub></strong>
        </div>
        <div></div>
        <div>
          <span>تخفیف:</span>
          <strong class="mr-2" v-if="factor.discount">factor.discount.amount.toLocaleString()<sub class="mr-1">تومان</sub></strong>
          <strong class="mr-2" v-else>0<sub class="mr-1">تومان</sub></strong>
        </div>
        <div>
          <span>قابل پرداخت:</span>
          <strong class="mr-2">{{ factor.totalPrice.toLocaleString() }}<sub class="mr-1">تومان</sub></strong>
        </div>
      </div>
      <u-table :has-filter="false" :has-footer="false" :has-header="false">
        <template #table-header>
          <th scope="col" class="px-4 py-3">#</th>
          <th scope="col" class="px-4 py-3">نام دوره</th>
          <th scope="col" class="px-4 py-3">قیمت دوره (تومان)</th>
          <th scope="col" class="px-4 py-3">تخفیف (تومان)</th>
          <th scope="col" class="px-4 py-3">مبلغ نهایی (تومان)</th>
        </template>
        <template #table-body>
          <tr class="border-b dark:border-gray-700" v-for="(i,index) in factor.items" :key="i">
            <td class="px-4 py-3">{{index + 1}}</td>
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <NuxtLink :to="`/courses/${i.itemSlug}`" class="hover:underline">{{i.itemName}}</NuxtLink>
            </th>
            <td class="px-4 py-3">{{i.price.toLocaleString()}}</td>
            <td class="px-4 py-3">{{i.discount.toLocaleString()}}</td>
            <td class="px-4 py-3">{{i.totalPrice.toLocaleString()}}</td>
          </tr>
        </template>
      </u-table>
      <base-button is-link link="/cart" color="success" class="mt-4 w-full lg:w-1/3 mr-auto" v-if="factor.orderStatus === EOrderStatus.Pending">
        پرداخت و نهایی سازی
      </base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {GetOrderById} from "~/services/cart.service";
import {EOrderStatus, OrderDto} from "~/models/cart/orderDto";

definePageMeta({
  layout: "user",

})

const factor = ref<OrderDto>();

const route = useRoute();
onMounted(async ()=>{
  const id = Number.parseInt(route.params.id.toString());
  const result = await GetOrderById(id);
  if(result.isSuccess)
  {
    factor.value = result.data;
  }
})
</script>