<template>
  <tr ref="thisRow" class="border-b dark:border-gray-700">
    <td class="px-4 py-3 text-white">
      {{ index + 1 }}
    </td>
    <td class="px-4 py-3 text-white">
      {{ category.title }}
    </td>
    <td class="px-4 py-3 text-white">
      {{ category.slug }}
    </td>
    <td class="px-4 py-3 flex items-center justify-end">
      <button @click.prevent="emits('showOption',index)" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </button>
      <div class="table-option absolute hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <button @click="addCategoryChild"
                    class="w-full text-right block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">افزودن زیرمجموعه</button>
          </li>
        </ul>
      </div>
    </td>
  </tr>
  <tr class="border-b dark:border-gray-700" v-for="(child,i) in category.children" :key="child.id">
    <td class="pr-8 py-3" >
      {{ `${index+1} - ${i+1}` }}
    </td>
    <td class="px-4 py-3">
      {{ child.title }}
    </td>
    <td class="px-4 py-3">
      {{ child.slug }}
    </td>
    <td></td>
  </tr>
</template>

<script setup lang="ts">
const props = defineProps({
  category:{
    type: Object,
    required:true,
  },
  index:{
    type:Number,
    required:true,
  },
});

const thisRow = ref();

const emits = defineEmits(['showOption','addChild'])

const addCategoryChild=()=>{
  console.log(props.category)
  emits('addChild',props.category);
}
</script>
