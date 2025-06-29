<template>
  <SafeArea>
    <div class="padding-v-lg padding-h-lg">
      <h1>寄语提交</h1>
      <template v-for="ques in questions" :key="ques.id">
        <InputField 
          v-if="appears(ques.id)"
          v-model="messages[ques.id]"
          :ques="ques.ques"
        />
      </template>
    </div>
    <hr>
  </SafeArea>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import InputField from '../components/InputField.vue';

const current = ref(0);
const questions = ref([{ ques: "请输入寄语", id: 0 }]);

const messages = reactive({});

// 确保messages与questions保持同步
watch(questions, (newQuestions) => {
  newQuestions.forEach(q => {
    if (!(q.id in messages)) {
      messages[q.id] = '';
    }
  });
}, { deep: true, immediate: true });

const appears = (index) => index <= current.value;
</script>
