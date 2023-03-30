const Counter = {
  data: function() {
    return {
      count: 0,
      hoge: 'aaaaaa'
    }
  },
  template: `<div><p>{{ count }}</p><button @click="countUp">カウントアップ</button></div>`,
  methods: {
    countUp() {
      console.log(this.hoge)
      this.count += 1
    }
  }
}

new Vue({
  el: '#app',
  components: {
    counter: Counter
  }
})