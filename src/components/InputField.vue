<template>
  <p>{{ ques }}</p>
  <input
    v-model="updateValue"
  />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: String,
  ques: String
});

const emit = defineEmits(['update:modelValue']);

const updateValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
});
</script>
