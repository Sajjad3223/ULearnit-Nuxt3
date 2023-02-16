<template>
  <div id="data-table" class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mt-4">
    <div v-if="enableHider" @click.self="hideAll" class="absolute inset-0"></div>
    <div v-if="hasHeader" class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 md:space-x-reverse p-4">
      <div class="w-full md:w-1/2">
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">جستجو</label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="جستجو" required="">
          </div>
        </form>
      </div>
      <slot name="table-options" :showFilter="showFilter" :showActions="showActions" >
        <div v-if="hasFilter" class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 md:space-x-reverse flex-shrink-0">
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
      </slot>
    </div>
    <div class="overflow-x-auto" :style="{maxHeight:`${maxHeight}px`}">
      <table class="w-full text-sm text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <slot name="table-header"/>
        </tr>
        </thead>
        <tbody>
         <slot name="table-body" :showOption="showOption" :hideAll="hideAll"/>
        </tbody>
      </table>
    </div>
    <nav v-if="hasFooter" class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    نمایش
                    <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                    از
                    <span class="font-semibold text-gray-900 dark:text-white">1000</span>
                </span>
      <ul class="inline-flex items-stretch -space-x-px">
        <li>
          <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Next</span>
            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
        </li>
        <li>
          <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Previous</span>
            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script setup lang="ts">
defineProps({
  hasFilter:{
    type:Boolean,
    default:true,
  },
  hasFooter:{
    type:Boolean,
    default:true,
  },
  hasHeader:{
    type:Boolean,
    default:true,
  },
  maxHeight:{
    type:Number,
    required:false,
  },
})

const enableHider = ref(false);

const showFilter = ()=>{
  const filterMenu = document.getElementById("filterMenu");
  const filterButton = document.getElementById("filterButton");
  const table = document.getElementById("data-table");

  if(filterMenu.classList.contains('hidden'))
  {
    filterMenu.classList.remove('hidden');
    filterMenu.classList.add('block');

    filterMenu.style.position = "absolute";
    filterMenu.style.inset = "0px auto auto 0px";
    filterMenu.style.margin = "0px";

    const x = filterButton.getBoundingClientRect().left - (table.getBoundingClientRect().left) - 8;
    const y = filterButton.getBoundingClientRect().top - (table.getBoundingClientRect().top) + filterButton.getBoundingClientRect().height + 8;
    console.log(x,y)
    filterMenu.style.transform = `translate(${x}px,${y}px)`;
    enableHider.value = true;
  }
  else{
    filterMenu.classList.remove('block');
    filterMenu.classList.add('hidden');
    enableHider.value = false;
  }
}

const showActions = ()=>{
  const actionMenu = document.getElementById("actionMenu");
  const actionButton = document.getElementById("actionButton");
  const table = document.getElementById("data-table");

  if(actionMenu.classList.contains('hidden'))
  {
    actionMenu.classList.remove('hidden');
    actionMenu.classList.add('block');

    actionMenu.style.position = "absolute";
    actionMenu.style.inset = "0px auto auto 0px";
    actionMenu.style.margin = "0px";
    enableHider.value = true;

    const x = actionButton.getBoundingClientRect().left - table.getBoundingClientRect().left - 8;
    const y = actionButton.getBoundingClientRect().top - table.getBoundingClientRect().top + actionButton.getBoundingClientRect().height + 8;

    actionMenu.style.transform = `translate(${x}px,${y}px)`;
  }
  else{
    actionMenu.classList.remove('block');
    actionMenu.classList.add('hidden');
    enableHider.value = false;
  }
}

const showOption = (i)=>{
  const optionsList = document.getElementsByClassName("table-option");
  const options = [...optionsList];
  const table = document.getElementById("data-table");

  if(!options[i].classList.contains('hidden')) {
    options[i].classList.add('hidden');
    enableHider.value = false;
    return;
  }
  options.forEach(s=>{
    s.classList.add('hidden');
  })
  options[i].classList.toggle('hidden');
  options[i].classList.add('absolute');
  if(document.documentElement.clientHeight > options[i].parentElement.parentElement.getBoundingClientRect().bottom &&
    table.getBoundingClientRect().bottom - options[i].parentElement.parentElement.getBoundingClientRect().bottom > 100) {
    const y = (options[0].parentElement.parentElement.getBoundingClientRect().top - table.getBoundingClientRect().top) + options[0].parentElement.parentElement.getBoundingClientRect().height;
    options[i].style.inset = "0px auto auto 0px";
    options[i].style.transform = `translate(0px, ${y + (i * 49)}px)`;
  }
  else{
    const y = -(table.getBoundingClientRect().bottom - options[9].parentElement.parentElement.getBoundingClientRect().bottom) - options[9].parentElement.parentElement.getBoundingClientRect().height;
    options[i].style.inset = "auto auto 0px 0px";
    options[i].style.transform = `translate(0px, ${y - ((9 - i) * options[i].parentElement.parentElement.getBoundingClientRect().height)}px)`;
  }
  enableHider.value = true;
}

const hideAll = ()=>{
  const filterMenu = document.getElementById("filterMenu");
  if(filterMenu)
  {
    filterMenu.classList.add('hidden');
  }

  const actionMenu = document.getElementById("actionMenu");
  if(actionMenu)
  {
    actionMenu.classList.add('hidden');
  }

  const optionsList = document.getElementsByClassName("table-option");
  const options = [...optionsList];
  if(options.length > 0)
  {
    options.forEach(e=>{
      e.classList.add('hidden');
    })
  }

  enableHider.value = false;
}

defineExpose({
  hideAll,
});
</script>