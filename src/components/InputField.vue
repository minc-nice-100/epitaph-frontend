<!-- InputField.vue -->
<template>
	<p>{{ ques }}</p>
	<input
		v-model="updateValue"
	/>
</template>

<script setup>
import { defineProps, defineEmits, watch, toRef, computed } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const updateValue = computed({
	get: () => props.modelValue, 
	set: (val) => emit('update:modelValue', val)
});

const modelValueRef = toRef(props, 'modelValue');

watch(modelValueRef, (newVal) => {
	console.log('Input updated:', newVal);
});

</script>
