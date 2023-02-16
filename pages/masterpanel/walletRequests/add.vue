<template>
  <div>
    <u-divider title="ثبت درخواست جدید" />
    <span class="block mb-4">موجودی قابل برداشت کیف پول: <strong>6,250,000 تومان</strong></span>
    <u-alert color="warning">
      تسویه حساب ها هر روز صبح (روز های کاری و غیر تعطیل) ساعت 8 الی 10 انجام خواهد شد
    </u-alert>
    <form action="" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="w-full">
        <label for="value" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">مبلغ مورد نظر (به تومان)</label>
        <input type="number" name="value" id="value"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
               placeholder="0" required="">
      </div>
      <div>
        <label for="subCategory" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نوع درخواست</label>
        <select id="subCategory"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
          <option selected="">انتخاب کنید</option>
          <option value="TV">واریز به حساب</option>
          <option value="TV">انتقال به کیف پول</option>
        </select>
      </div>

      <u-alert color="danger" class="col-span-2">
        در صورت ثبت درخواست تسویه حساب ، مبلغ به حساب مشخص شده شما در جدول زیر واریز میشود!
      </u-alert>

      <u-table class="col-span-2" :has-header="false" :has-footer="false">
        <template #table-header>
          <th scope="col" class="px-6 py-3">
            صاحب حساب
          </th>
          <th scope="col" class="px-6 py-3">
            بانک
          </th>
          <th scope="col" class="px-6 py-3">
            شماره حساب
          </th>
          <th scope="col" class="px-6 py-3">
            شماره کارت
          </th>
          <th scope="col" class="px-6 py-3">
            شماره شبا
          </th>
          <th></th>
        </template>
        <template #table-body>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              سجاد میرشبی
            </th>
            <td class="px-6 py-4">
              بانک ملی
            </td>
            <td class="px-6 py-4">
              0111675292005
            </td>
            <td class="px-6 py-4">
              6037997419580817
            </td>
            <td class="px-6 py-4">
              IR860170000000111675292005
            </td>
            <td>
              <NuxtLink to="/masterpanel/paymentInfo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M5.53999 19.5201C4.92999 19.5201 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.10005C14.77 0.930049 16.91 0.870049 19.08 2.92005C21.25 4.97005 21.31 7.11005 19.26 9.28005L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.9401L6.01999 19.49C5.84999 19.5 5.69999 19.5201 5.53999 19.5201ZM15.93 2.91005C15.16 2.91005 14.49 3.39005 13.81 4.11005L5.59999 12.8101C5.39999 13.0201 5.16999 13.5201 5.12999 13.8101L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.4501C9.26999 17.4001 9.74999 17.14 9.94999 16.93L18.16 8.24005C19.4 6.92005 19.85 5.70005 18.04 4.00005C17.24 3.23005 16.55 2.91005 15.93 2.91005Z"
                      fill="currentColor"/>
                  <path
                      d="M17.3404 10.9498C17.3204 10.9498 17.2904 10.9498 17.2704 10.9498C14.1504 10.6398 11.6404 8.26985 11.1604 5.16985C11.1004 4.75985 11.3804 4.37985 11.7904 4.30985C12.2004 4.24985 12.5804 4.52985 12.6504 4.93985C13.0304 7.35985 14.9904 9.21985 17.4304 9.45985C17.8404 9.49985 18.1404 9.86985 18.1004 10.2798C18.0504 10.6598 17.7204 10.9498 17.3404 10.9498Z"
                      fill="currentColor"/>
                  <path
                      d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z"
                      fill="currentColor"/>
                </svg>
              </NuxtLink>
            </td>
          </tr>
        </template>
      </u-table>

      <div></div>

      <base-button type="sumbit" class="btn btn-primary mt-4">ثبت تغییرات</base-button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout:"user",
})
</script>