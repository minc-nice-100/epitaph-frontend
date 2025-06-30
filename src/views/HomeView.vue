<template>
    <div class="app">
        <Hero class="margin-v"/>
        <div class="content">
            <Intro id="intro"/>
            <Epitaph />
        </div>
    </div>
</template>

<script setup>
import '../style/style.css'
import Hero from '../components/Hero.vue'
import Intro from '../components/Intro.vue'
import Epitaph from '../components/Epitaph.vue'
</script>

<style lang="css" scoped>
.app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>