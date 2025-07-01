<!-- BadgeImage.vue -->
<template>
    <img
        :src="imgUrl"
        :alt="alt"
        style="max-width: 100%;"
    />
</template>

<script setup>
import { apiBaseUrl } from '../constants.mjs'
import { defineProps } from 'vue'

const { repo, badge, alt } = defineProps({
    repo: String,
    badge: String,
    alt: String
})

const imgUrl = `${apiBaseUrl}/resources/badges/${repo}/${badge}`
</script>
