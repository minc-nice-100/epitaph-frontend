<script setup>
import './style.css'
import { apiBaseUrl } from '@/constants.mjs'
fetch(`${apiBaseUrl}/grayscale/is-today`)
    .then(res => res.json())
    .then(res => {
        if (res.today) {
            const style = document.createElement('style');
            style.textContent = `html { filter: grayscale(100%); }`;
            document.head.appendChild(style);
        }
    });
</script>

<template>
    <router-view />
</template>

<style scoped>

</style>
