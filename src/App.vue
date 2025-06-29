<script setup>
import './style.css'
import { apiBaseUrl } from '@/constants.mjs'
import { ref, onBeforeMount } from 'vue'

const grayscaleReady = ref(false);

onBeforeMount(async () => {
    try {
        const res = await fetch(`${apiBaseUrl}/grayscale/today`).then(r => r.json());
        if (res.gray) {
            const style = document.createElement('style');
            style.textContent = `html { filter: grayscale(100%); }`;
            document.head.appendChild(style);
        }
    } catch (e) {
        console.warn("Failed to load grayscale flag:", e);
    } finally {
        grayscaleReady.value = true;
    }
});
</script>

<template>
    <router-view v-if="grayscaleReady" />
</template>
