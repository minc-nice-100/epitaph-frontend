<template>
    <div id="epitaph" class="introduction-box margin-bottom margin-top-md margin-h">
        <h2>追忆</h2>
        <p id="epitaph-display">{{ epitaph }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { apiBaseUrl } from '../constants.mjs'

const epitaph = ref('')

onMounted(async () => {
    await fetch(`${apiBaseUrl}/plaintext?key=epitaph`)
        .then(res => res.json())
        .then(res => epitaph.value = res.content)
})
</script>

<style scoped>
#epitaph-display {
    white-space: pre-wrap;     /* preserve line breaks and spaces */
}
</style>
