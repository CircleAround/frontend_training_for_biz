<template>
  <div>
    <p>{{ count.value }}</p>
    <button v-on:click="countUp">カウントアップ</button>
    <button v-on:click="countDown">カウントダウン</button>
  </div>
</template>
<script>
import { ref } from "@vue/composition-api"

export default {
  setup() {
    const count = ref(0)

    const countUp = function() {
      count.value += 1
    }

    const countDown = function() {
      count.value -= 1
    }

    return {
      count,
      countUp,
      countDown
    }
  }
}
</script>