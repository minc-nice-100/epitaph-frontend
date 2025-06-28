<template>
    <SafeArea>
        <NavBar />
        <Hero class="padding-v"/>
        <Intro />
        <Epitaph />
        <FooterNote />
    </SafeArea>
</template>

<script setup>
import '@/style.css'
import NavBar from '@/components/NavBar.vue'
import Hero from '@/components/Hero.vue'
import Intro from '@/components/Intro.vue'
import Epitaph from '@/components/Epitaph.vue'
import FooterNote from '@/components/FooterNote.vue'
import SafeArea from '@/components/SafeArea.vue'
</script>