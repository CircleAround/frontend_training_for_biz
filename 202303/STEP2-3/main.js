new Vue({
  el: '#app',
  data: {
    nums: [1, 4, 7, 11, 14, 15]
  },
  methods: {
    add() {
      this.nums.push(Math.floor(Math.random()*10) + 1)
    },
    isEven(num) {
      return (num % 2) === 0;
    }
  }
})