<template>
    <div>
        <div class="hstack expanded-between">
            <h3> {{ name }} </h3>
            <i> {{ date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }} </i>
        </div>
        <p> {{ content }}</p>
        <p class="recipient-line"> {{ recipient }}</p>
    </div>
</template>

<script setup lang="js">
import '../style/style.css'
defineProps({
    name: String,
    date: Date,
    content: String,
    recipient: String
})
</script>

<style scoped>
.recipient-line {
    color: var(--bg-gray)
}
</style>