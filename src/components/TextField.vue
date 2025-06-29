<template>
    <div>
        <h3>{{ ques }}</h3>
        <textarea
            :placeholder="placeholder"
            v-model="updateValue"
        />
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	modelValue: String,
    placeholder: String,
	ques: String
});

const emit = defineEmits(['update:modelValue']);

const updateValue = computed({
	get: () => props.modelValue,
	set: (val) => emit('update:modelValue', val)
});
</script>
