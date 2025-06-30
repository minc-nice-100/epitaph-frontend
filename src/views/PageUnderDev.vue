<template>
	<div class="padding-h padding-v">
		<h1>
			Page Under Development.
		</h1>
		<h2>
			页面仍在开发中。
		</h2>

		<p>如有任何疑问，请联系<a href="mailto:makabaka1880@outlook.com">makabaka1880@outlook.com <Arrow /></a></p>

		<div class="padding-v-md">
			<Badge repo="epitaph-frontend" badge="build.yml" />
			<Badge repo="epitaph-frontend" badge="pages/
			pages-build-deployment" />
		</div>
	</div>
</template>

<script setup lang="js">
import '../style/style.css'
import Arrow from '../components/Arrow.vue';
import Badge from '../components/Badge.vue';
</script>

<style lang="css" scoped>
img.badge {
	padding-right: 0.5em;
}
</style>