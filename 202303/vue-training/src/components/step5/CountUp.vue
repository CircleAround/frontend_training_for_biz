<template>
  <div>
    <p>{{ count }}</p>
    <button @click="countUp">カウントアップ</button>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Counter',
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
    countUp: function() {
      this.count += 1
    }
  }
})
</script>