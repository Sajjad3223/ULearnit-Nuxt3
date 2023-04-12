<template>
  <div>
    <Head>
      <Title>
        ثبت تخفیف
      </Title>
    </Head>

    <u-divider title="ثبت تخفیف برای همه دوره ها"/>

    <u-alert color="dark">
      <template #icon>
        <svg class="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V14C12.75 14.41 12.41 14.75 12 14.75Z" fill="currentColor"/>
          <path d="M12 18.0001C11.94 18.0001 11.87 17.9901 11.8 17.9801C11.74 17.9701 11.68 17.9501 11.62 17.9201C11.56 17.9001 11.5 17.8701 11.44 17.8301C11.39 17.7901 11.34 17.7501 11.29 17.7101C11.11 17.5201 11 17.2601 11 17.0001C11 16.7401 11.11 16.4801 11.29 16.2901C11.34 16.2501 11.39 16.2101 11.44 16.1701C11.5 16.1301 11.56 16.1001 11.62 16.0801C11.68 16.0501 11.74 16.0301 11.8 16.0201C11.93 15.9901 12.07 15.9901 12.19 16.0201C12.26 16.0301 12.32 16.0501 12.38 16.0801C12.44 16.1001 12.5 16.1301 12.56 16.1701C12.61 16.2101 12.66 16.2501 12.71 16.2901C12.89 16.4801 13 16.7401 13 17.0001C13 17.2601 12.89 17.5201 12.71 17.7101C12.66 17.7501 12.61 17.7901 12.56 17.8301C12.5 17.8701 12.44 17.9001 12.38 17.9201C12.32 17.9501 12.26 17.9701 12.19 17.9801C12.13 17.9901 12.06 18.0001 12 18.0001Z" fill="currentColor"/>
          <path d="M18.0605 22.1601H5.94046C3.99046 22.1601 2.50046 21.4501 1.74046 20.1701C0.990464 18.8901 1.09046 17.2401 2.04046 15.5301L8.10046 4.63009C9.10046 2.83009 10.4805 1.84009 12.0005 1.84009C13.5205 1.84009 14.9005 2.83009 15.9005 4.63009L21.9605 15.5401C22.9105 17.2501 23.0205 18.8901 22.2605 20.1801C21.5005 21.4501 20.0105 22.1601 18.0605 22.1601ZM12.0005 3.34009C11.0605 3.34009 10.1405 4.06009 9.41046 5.36009L3.36046 16.2701C2.68046 17.4901 2.57046 18.6101 3.04046 19.4201C3.51046 20.2301 4.55046 20.6701 5.95046 20.6701H18.0705C19.4705 20.6701 20.5005 20.2301 20.9805 19.4201C21.4605 18.6101 21.3405 17.5001 20.6605 16.2701L14.5905 5.36009C13.8605 4.06009 12.9405 3.34009 12.0005 3.34009Z" fill="currentColor"/>
        </svg>
      </template>
      برای حذف تخفیف ، مقدار فیلد تعداد روز را 0 قرار بدید
    </u-alert>


    <form class="mt-6">
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input type="number" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-right peer-focus:right-0 peer-focus:text-blue-700 peer-focus:dark:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">مبلغ تخفیف به درصد</label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input type="number" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-right peer-focus:right-0 peer-focus:text-blue-700 peer-focus:dark:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">تعداد روز در دسترس</label>
        </div>
      </div>
      <base-button type="submit" class="flex mr-auto w-1/3 justify-center">ثبت تخفیف</base-button>
    </form>

  </div>
</template>

<script setup>
definePageMeta({
  layout:"user",
middleware:'master'
})
</script>