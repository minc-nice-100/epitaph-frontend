<template>
    <div>
        <div class="hstack expanded-between">
            <h3> {{ name }} </h3>
            <i> {{ date }} </i>
        </div>
        <p> {{ content }}</p>
        <p class="recipient-line"> {{ recipient }}</p>
    </div>
</template>

<script setup lang="js">
import '@/style.css'
defineProps({
    name: String,
    date: String,
    content: String,
    recipient: String
})
</script>

<style scoped>
.recipient-line {
    color: var(--bg-gray)
}
</style>