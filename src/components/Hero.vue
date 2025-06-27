<template>
	<div class="heading-box padding-h padding-top">
		<div class="index-h-layout">
			<img src="@/assets/hero.webp" id="heroimage" />
			<div class="headings">
				<div class="hstack expanded-between" style="width: 40vw;">
					<h1 id="hero-heading">李璟</h1>
					<h1 id="hero-heading">
						<a href="#intro" class="oscillate-10">-></a>
					</h1>
				</div>
				<p id="hero-headline">在一个和平时一样的清晨，有的人留在了昨天。</p>
				<p id="hero-headline">It's too late to regret when goodbye came without a goodbye.</p>
			</div>
		</div>
	</div>
</template>

<style lang="css" scoped>
#heroimage {
	width: 30vw;
}
.headings {
	padding: 30px 60px 30px 60px;
}

@media screen and (min-aspect-ratio: 1.618) {

	.index-h-layout {
		display: flex;
		align-items: center;
	}

	.headings {
		padding: 30px;
		padding-left: 60px;
	}

	#heroimage {
		width: 30vw;
	}
}

@media screen and (max-aspect-ratio: 1.618) {
	.headings {
		padding: 5vw;
	}
	#heroimage {
		width: 50vw;
	}
}
#hero-heading {
    font-size: 2.5em;
}

#hero-headline {
    color: var(--bg-gray)
}

</style>

<script setup>
import '@/style.css';
</script>