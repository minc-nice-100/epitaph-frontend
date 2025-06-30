<template>
	<div class="margin-h margin-v">
		<h1>
			Page Under Development.
		</h1>
		<h2>
			页面仍在开发中。
		</h2>

		<p>如有任何疑问，请联系<a href="mailto:makabaka1880@outlook.com">makabaka1880@outlook.com <Arrow /></a></p>
		<hr class="margin-v-md"/>
		<h3>贡献代码</h3>
		<div class="margin-v-sm">
			<Badge repo="epitaph-frontend" badge="build.yml" />
			<Badge repo="epitaph-frontend" badge="pages/
			pages-build-deployment" />
		</div>
		<p>
			本站前端代码已完全
			<a href="https://github.com/makabaka1880/epitaph-frontend">开源于 GitHub <Arrow /></a>。
		</p>
		<p>
			如果您希望参与本站的开发与建设，我们诚挚欢迎您进行 fork 与提交贡献。
		</p>
		<p>
			由于本站项目性质特殊，维护较为谨慎，若您在开发过程中遇到技术问题，请通过邮件联系：
			<a href="mailto:makabaka1880@outlook.com">makabaka1880@outlook.com</a>。
			请避免直接在 GitHub 仓库中提交 issue。
		</p>
		<p>
			项目文档与贡献指南详见：
			<a href="https://raw.githubusercontent.com/makabaka1880/epitaph-frontend/refs/heads/main/README.md">README.md</a>
		</p>

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