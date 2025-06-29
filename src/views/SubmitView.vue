<template>
	<SafeArea>
		<div class="padding-v-lg padding-h-lg">
			<h1>寄语提交</h1>
			
			<!-- 第一步：填写姓名 -->
			<InputField 
				v-if="currentStep >= 1"
				v-model="formData.name"
				:ques="'您的姓名'"
				@update:modelValue="handleNameInput"
			/>
			
			<!-- 第二步：选择收件人类型 -->
			<div v-if="currentStep >= 2" class="recipient-type">
				<p>收件人</p>
				<select 
					v-model="formData.recipientType"
					@change="selectRecipient(formData.recipientType)"
					class="recipient-select"
				>
					<option value="" disabled selected>请选择收件人</option>
					<option
						v-for="type in recipientTypes"
						:key="type.value"
						:value="type.value"
					>
						{{ type.label }}
					</option>
				</select>
			</div>
			
			<!-- 第三步：填写寄语内容 -->
			<InputField 
				v-if="currentStep === 3"
				v-model="formData.note"
				:ques="'寄语内容'"
				@update:modelValue="handleNoteInput"
			/>
			
			<!-- 提交按钮 -->
			<button 
				v-if="currentStep === 3 && formData.note.trim()"
				@click="submitMessage"
				:disabled="isSubmitting"
				class="submit-button"
			>
				{{ isSubmitting ? '提交中...' : '提交寄语' }}
			</button>
			
			<p v-if="submitError" class="error-message">{{ submitError }}</p>
			<p v-if="submitSuccess" class="success-message">提交成功！</p>
		</div>
		<hr>
	</SafeArea>
</template>

<script setup>
import { ref } from 'vue';
import InputField from '../components/InputField.vue';

const currentStep = ref(1);
const formData = ref({
	name: '',
	recipientType: '',
	note: ''
});

const recipientTypes = [
	{ value: 'wife', label: '至妻子' },
	{ value: 'children', label: '至子女' },
	{ value: 'family', label: '至家人' },
	{ value: 'lijin', label: '至李璟' }
];

const isSubmitting = ref(false);
const submitError = ref('');
const submitSuccess = ref(false);

const handleNameInput = (value) => {
	if (value.trim()) {
		currentStep.value = 2;
	}
};

const selectRecipient = (type) => {
	formData.value.recipientType = type;
	currentStep.value = 3;
};

const handleNoteInput = (value) => {
	// 无需改变currentStep，仅用于触发响应式更新
};

const submitMessage = async () => {
	try {
		isSubmitting.value = true;
		submitError.value = '';
		submitSuccess.value = false;
		
		// 验证表单
		if (!formData.value.name.trim()) {
			throw new Error('请填写您的姓名');
		}
		if (!formData.value.recipientType) {
			throw new Error('请选择收件人类型');
		}
		if (!formData.value.note.trim()) {
			throw new Error('请填写寄语内容');
		}

		// 准备请求数据
		const payload = {
			name: formData.value.name.trim(),
			note: formData.value.note.trim(),
			recipient: getRecipientLabel(formData.value.recipientType)
		};

		// API基础URL
		const apiBaseUrl = import.meta.env.VITE_API_URL || '';
		
		// 调用API
		const response = await fetch(`${apiBaseUrl}/messages`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(payload)
		});

		// 检查响应状态和内容类型
		const contentType = response.headers.get('content-type');
		if (!contentType || !contentType.includes('application/json')) {
			throw new Error('服务器返回了非JSON格式的响应');
		}

		const result = await response.json();
		console.log('API响应:', result);
		if (response.status === 400) {
			throw new Error(result.message || '输入数据不合法');
		}

		if (!response.ok) {
			throw new Error(result.message || `提交失败，状态码: ${response.status}`);
		}

		// 验证必要字段
		if (!result.name || !result.note || !result.recipient) {
			throw new Error('服务器返回了不完整的响应数据');
		}
		console.log('提交成功:', result);
		submitSuccess.value = true;
		
		// 重置表单
		formData.value = {
			name: '',
			recipientType: '',
			note: ''
		};
		currentStep.value = 1;
		
	} catch (err) {
		submitError.value = err.message;
		console.error('提交错误:', err);
	} finally {
		isSubmitting.value = false;
	}
};

const getRecipientLabel = (type) => {
	const found = recipientTypes.find(t => t.value === type);
	return found ? found.label : '';
};
</script>

<style scoped>
</style>