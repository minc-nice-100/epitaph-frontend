<template>
	<img
		:src="`${apiBaseUrl}/resources/badges/${repo}/${badge}`"
		:alt="alt"
        class="badge"
		style="max-width: 100%;"
	/>
</template>

<script setup lang="js">
import { apiBaseUrl } from '../constants.mjs'
defineProps({ repo: String, badge: String, alt: String })
</script>