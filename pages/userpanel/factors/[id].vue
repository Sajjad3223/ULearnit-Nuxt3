<template>
  <div>
    <div class="w-full">
      <h4 class="text-xl font-bold">فاکتور شماره 12345</h4>
      <hr class="my-2">
    </div>
    <div class="flex flex-col mt-4">
      <div class="factor-details grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div>
          <span>تعداد دوره ها:</span>
          <strong class="mr-2">2</strong>
        </div>
        <div>
          <span>جمع کل:</span>
          <strong class="mr-2">750,000<sub class="mr-1">تومان</sub></strong>
        </div>
        <div></div>
        <div>
          <span>تخفیف:</span>
          <strong class="mr-2">550,000<sub class="mr-1">تومان</sub></strong>
        </div>
        <div>
          <span>قابل پرداخت:</span>
          <strong class="mr-2">250,000<sub class="mr-1">تومان</sub></strong>
        </div>
      </div>
      <u-table :has-filter="false">
        <template #table-header>
          <th scope="col" class="px-4 py-3">#</th>
          <th scope="col" class="px-4 py-3">نام دوره</th>
          <th scope="col" class="px-4 py-3">قیمت دوره (تومان)</th>
          <th scope="col" class="px-4 py-3">تخفیف (تومان)</th>
          <th scope="col" class="px-4 py-3">مبلغ نهایی (تومان)</th>
        </template>
        <template #table-body>
          <tr class="border-b dark:border-gray-700">
            <td class="px-4 py-3">1</td>
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <NuxtLink to="/courses/1" class="hover:underline">آموزش جامع آنریل انجین</NuxtLink>
            </th>
            <td class="px-4 py-3">100,000</td>
            <td class="px-4 py-3">50,000</td>
            <td class="px-4 py-3">50,000</td>
          </tr>
        </template>
      </u-table>
      <base-button color="success" class="mt-4 w-full lg:w-1/3 mr-auto">
        پرداخت و نهایی سازی
      </base-button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "user",
})
</script>