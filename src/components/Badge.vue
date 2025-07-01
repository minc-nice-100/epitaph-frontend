<template>
    <Suspense class="badge">
        <template #default>
            <AsyncBadge :repo="repo" :badge="badge" :alt="alt" class="badge"/>
        </template>
        <template #fallback>
		<div class="badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="168" height="20" role="img" aria-label="build loading: status loading"><title>build loading: status loading</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="168" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="81" height="20" fill="#555"/><rect x="81" width="87" height="20" fill="#007ec6"/><rect width="168" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="415" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="710">build loading</text><text x="415" y="140" transform="scale(.1)" fill="#fff" textLength="710">build loading</text><text aria-hidden="true" x="1235" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="770">status loading</text><text x="1235" y="140" transform="scale(.1)" fill="#fff" textLength="770">status loading</text></g></svg>
		</div>
        </template>
    </Suspense>
</template>

<script setup>
import { defineAsyncComponent, defineProps } from 'vue'
import { apiBaseUrl } from '../constants.mjs'

const props = defineProps({
    repo: String,
    badge: String,
    alt: String
})

const AsyncBadge = defineAsyncComponent(() =>
    new Promise((resolve) => {
        const img = new Image()
        img.src = `${apiBaseUrl}/resources/badges/${props.repo}/${props.badge}`
        img.onload = () => {
            resolve(import('./BadgeImage.vue'))
        }
        img.onerror = () => {
            resolve(import('./BadgeImage.vue'))
        }
    })
)
</script>
