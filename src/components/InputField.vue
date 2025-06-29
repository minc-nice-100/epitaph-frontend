<template>
	<p>{{ props.ques }}</p>
	<input
		:value="props.modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
		:class="{ invalid: !isValid.value }"
	/>
	<p v-if="!isValid.value" class="error-text">Invalid format</p>
</template>

<script setup lang="js">
import { ref, watch, defineEmits, defineProps } from 'vue';

const props = defineProps({
	ques: String,
	modelValue: String,
	regex: {
		type: String,
		required: false,
		default: null
	}
});

const emit = defineEmits(['update:modelValue', 'update:isValid']);
const isValid = ref(true);

watch(() => props.modelValue, (newVal) => {
    if (!props.regex) {
        isValid.value = true;
    } else {
        const re = new RegExp(props.regex);
        isValid.value = re.test(newVal);
    }
    console.log(newVal)
    emit('update:isValid', isValid.value);
});

</script>

<style scoped>
.invalid {
	border-color: red;
	outline: none;
}
.error-text {
	color: red;
	font-size: 0.9em;
}
</style>