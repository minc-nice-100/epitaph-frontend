<!-- @ABloom 这里交给你了 加油 -->

<template>
	<SafeArea>
		<div class="padding-v-lg padding-h-lg">
			<h1>寄语提交</h1>
			<InputField 
				v-for="ques in questions"
				:key="ques.id"
				v-model="messages[ques.id]"
				:ques="ques.ques"
				v-if="appears(ques.id)"
			/>
		</div>
		<hr>
	</SafeArea>
</template>

<script setup>
import { reactive, ref } from 'vue';
import InputField from '../components/InputField.vue';

const current = ref(0);
const questions = [{ ques: "请输入寄语", id: 0 }];

const messages = reactive({});
questions.forEach(q => {
    messages[q.id] = '';
});


const appears = (index) => index <= current.value;
</script>
