<template>
  <div>
    <label :for="name" class="flex items-center space-x-2 space-x-reverse mb-2 text-sm font-medium text-gray-900 dark:text-white">
      <slot name="icon"/>
      <span>{{ label }}</span>
    </label>
    <input v-if="!multiline"
        :type="type"
        :id="name"
        :name="name"
        :value="inputValue"
        :maxlength="maxLength"
        :placeholder="placeholder"
        @input="handleInputChange"
        :required="isRequired"
        :dir="dir"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <textarea v-else
              :id="name"
              :name="name"
              :value="inputValue"
              :maxlength="maxLength"
              :placeholder="placeholder"
              @input="handleInputChange"
              :required="isRequired"
              :dir="dir"
              :rows="rows"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{{ inputValue }}</textarea>
    <span class="text-sm text-red-600 dark:text-red-400 ">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import {useField} from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  maxLength: {
    type: Number,
    required: false,
  },
  isRequired: {
    type: Boolean,
    default: true,
  },
  ignoreErrors: {
    type: Boolean,
    default: false,
  },
  multiline:{
    type: Boolean,
    default: false,
  },
  dir:{
    type: String,
    default: 'rtl',
  },
  rows:{
    type: Number,
    default: 8,
  },
})
const emits = defineEmits(['update:modelValue']);

const {
  errorMessage,
  handleChange,
  value: inputValue,
  setValue,
} = useField(props.name,undefined,{
  initialValue:props.modelValue,
})

watch(
    () => props.modelValue,
    (val)=>{
      setValue(val);
    }
);

const handleInputChange=(e)=>{
  handleChange(e,true);
  emits('update:modelValue',e.target.value);
}
</script>

<style scoped>
</style>