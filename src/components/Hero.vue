<template>
	<div class="heading-box padding-h padding-top">
		<div class="index-h-layout">
			<img src="../assets/hero.webp" id="heroimage" />
			<HeroHeadline class="heroheadline-container"/>
		</div>
	</div>
</template>

<style lang="css" scoped>
#heroimage {
	width: 30vw;
}

@media screen and (min-aspect-ratio: 1.2) {
	.index-h-layout {
		display: flex;
		align-items: center;
	}

	.heroheadline-container {
		margin-left: 100px;
	}

	#heroimage {
		width: 30vw;
	}
}

@media screen and (max-aspect-ratio: 1.2) {
	#heroimage {
		width: 50vw;
	}
	.heroheadline-container {
		margin-top: 10vw;
	}
}

</style>

<script setup>
import '../style/style.css';
import HeroHeadline from './HeroHeadline.vue';
</script>