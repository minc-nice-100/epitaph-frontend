<template>
	<SafeArea>
		<div class="padding-v-sub padding-h-sub">
			<h1>寄语</h1>
			<p>提交寄语请前往 <RouterLink to="/dev">提交界面 -></RouterLink></p>
		</div>
		<hr>
		<MessageCard
			class="padding-v-sub padding-h-sub"
			v-for="msg in messages"
			:key="msg.id"
			:name="msg.name"
			:date="msg.createdAt"
			:content="msg.note"
			:recipient="msg.recipient"
		/>
		<div class="hstack padding-h-sub" id="controls">
			<button id="last-page-btn" @click="lastpage" :disabled="page <= 1">上一页</button>
			<p>第 {{ page }} / {{ totalPages }}</p>
			<button id="next-page-btn" @click="nextpage" :disabled="page >= totalPages">下一页</button>
		</div>
	</SafeArea>
</template>

<script setup>
import '@/style.css'
import SafeArea from '../components/SafeArea.vue';
import MessageCard from '../components/MessageCard.vue';
import { apiBaseUrl } from '../constants.mjs';
import { ref, onMounted, watch } from 'vue';

const messages = ref([]);
const totalPages = ref(0);
const page = ref(1);

function load() {
fetch(`${apiBaseUrl}/messages?limit=5&page=${page.value}`)
	.then(res => res.json())
	.then(res => {
		messages.value = res.results
		totalPages.value = res.totalPages
	})
	.catch(err => {
		console.error("Failed to fetch messages:", err)
	})
}

onMounted(() => {
	load()
})

watch(page, (newPage, oldPage) => {
	if (newPage !== oldPage) {
		load()
	}
})

function lastpage() {
	if (page.value > 1) {
		page.value -= 1
	}
}

function nextpage() {
	if (page.value < totalPages.value) {
		page.value += 1
	}
}
</script>

<style scoped>
#controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-inline: 10px;
}
#controls > * {
	padding-left: 10px;
	padding-right: 10px;
}
</style>
