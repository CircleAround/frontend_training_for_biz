const Counter = {
  template: `<div><button @click="childCountUp">カウントアップ</button></div>`,
  methods: {
    childCountUp: function() {
      this.$emit('count-up')
    }
  }
}

const DecrementCounter = {
  template: `<div><button @click="childCountDown">カウントダウン</button></div>`,
  methods: {
    childCountDown: function() {
      this.$emit('count-down')
    }
  }
}

new Vue({
  el: '#app',
  components: {
    counter: Counter,
    decrementCounter: DecrementCounter
  },
  data: {
    count: 0,
  },
  methods: {
    countUp() {
      this.count += 1
    },
    countDown() {
      this.count -= 1
    }
  }
})