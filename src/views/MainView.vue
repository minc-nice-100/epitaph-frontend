<template>
    <SafeArea>
        <NavBar />
        <RouterView />
        <hr />
        <FooterNote />
    </SafeArea>
</template>

<script setup>
import '../style/style.css'
import { RouterView } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import FooterNote from '../components/FooterNote.vue'
import SafeArea from '../components/SafeArea.vue'
</script>