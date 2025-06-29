<template>
	<nav class="navbar">
        <RouterLink to="/" class="nav-link">主页</RouterLink>
		<RouterLink to="/dev" class="nav-link">生平</RouterLink>
		<RouterLink to="/messages" class="nav-link">寄语</RouterLink>
		<RouterLink to="/dev" class="nav-link">记忆</RouterLink>
	</nav>
</template>

<script setup>
import '../style/style.css';
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