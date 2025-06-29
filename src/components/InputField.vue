<!-- InputField.vue -->
<template>
	<p>{{ ques }}</p>
	<input
		:value="modelValue"
		@input="handleInput"
	/>
</template>

<script setup>
import { defineProps, defineEmits, watch, toRef, onMounted } from 'vue';

const props = defineProps({
	ques: String,
	modelValue: String
});

const emit = defineEmits(['update:modelValue']);

function handleInput(event) {
	emit('update:modelValue', event.target.value);
}

const modelValueRef = toRef(props, 'modelValue');

watch(modelValueRef, (newVal) => {
	console.log('Input updated:', newVal);
});
</script>
