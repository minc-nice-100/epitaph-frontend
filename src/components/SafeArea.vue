<template>
    <div class="safe-area">
        <slot />
    </div>
</template>

<style scoped>
.safe-area {
    padding: clamp(10px, 1%, 50px);
}

</style>
