<template>
	<div>
		<h3>{{ ques }}</h3>
		<input
            ref="textarea"
			v-model="updateValue"
		/>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
	modelValue: String,
	ques: String
});

const emit = defineEmits(['update:modelValue']);

const updateValue = computed({
	get: () => props.modelValue,
	set: (val) => emit('update:modelValue', val)
});

const textarea = ref(null);

defineExpose({
	textarea
});

</script>
