<template>
    <div id="epitaph" class="introduction-box padding-bottom padding-top-sub padding-h">
        <h2>追忆</h2>
        <p id="epitaph-display">{{ epitaph }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const epitaph = ref('')

onMounted(() => {
    const res = `
2024年12月20日晚上，我的父亲的生命永远定格在那个冬日，但他留给我们的爱与回忆却永远不会褪色。

就在父亲去世的前一天，我收到了上海星河湾双语的预录取通知。在那一刻，他非常高兴，虽然以后的日子他不能和我们一起分享更多的生活点滴，但我会带着这份喜悦和他的期盼继续前行。

因为事发突然，我陪伴妈妈整理遗物，在爸爸的手机里面看到了关于他的日常，除了工作，他时刻把家人放在第一位，转账记录几乎都是转给家人的零花钱。他作为父亲和家庭的支柱，已将他的爱给予得如此饱满。 而我们全家也将把这些永远都放在心底深处，相互支撑，相互陪伴，如爸爸所愿的过好以后的每一天。

我和妹妹都相信，爸爸只是换了一种方式在我们身边，我们还是相亲相爱的一家人。

愿爱与记忆永存。
    `
    epitaph.value = res
})
</script>

<style scoped>
#epitaph-display {
    white-space: pre-wrap;     /* preserve line breaks and spaces */
}
</style>
