<template>
	<svg
		class="arrow"
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		:style="{ '--rotation': `${-rotation}deg` }"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		role="img"
	>
		<path
			d="M4 12 L20 12 M14 6 L20 12 L14 18"
			stroke="currentColor"
			stroke-width="2"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script lang="js" setup>
const props = defineProps({
	direction: {
		type: String,
		default: '0',
	},
	size: {
		type: String,
		default: '1.5em',
	},
})

const directionMap = {
	r: 0,
	u: 90,
	l: 180,
	d: 270,
	ur: 45,
	ul: 135,
	dl: 225,
	dr: 315,
}

function parseRotation(input) {
	const dir = input.toLowerCase()
	if (directionMap.hasOwnProperty(dir)) {
		return directionMap[dir]
	}
	const angle = Number(input)
	if (!isNaN(angle)) {
		return angle % 360
	}
	return 0
}

const rotation = parseRotation(props.direction)
</script>
<style lang="css" scoped>
a .arrow {
	--rotation: 0deg;
	transform: rotate(var(--rotation)) translate(0, 0);
	transition: transform 0.3s ease-in-out;
}

a:hover .arrow {
	transform: rotate(var(--rotation)) translate(5px, 0);
}
</style>