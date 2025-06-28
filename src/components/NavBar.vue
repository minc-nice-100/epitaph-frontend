<template>
	<nav class="navbar">
		<RouterLink to="/life" class="nav-link">生平</RouterLink>
		<RouterLink to="/messages" class="nav-link">寄语</RouterLink>
		<RouterLink to="/memories" class="nav-link">记忆</RouterLink>
	</nav>
</template>

<script setup>
import '@/style.css';
</script>

<style scoped>
.navbar-container {
    position: fixed;
    top: 0;
}

.navbar {
    background-color: white;
    font-family: 'JetBrans Mono', monospace;
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 5px;
}

.nav-link {
    transition: color 0.3s, transform 0.3s;
    /* text-decoration: none; */
    /* color: black; */
    display: flex;
    flex-grow: 1;
    justify-content: center;
    padding: 10px;
}


.nav-link:not(:last-child) {
    border-right: 1px solid black;
}

</style>