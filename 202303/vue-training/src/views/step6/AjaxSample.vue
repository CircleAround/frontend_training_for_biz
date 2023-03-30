<template>
  <div>
    <input v-model='message' /><button @click="createMessage">送信</button>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.message }}
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  name: 'AjaxSample',
  data: function() {
    return {
      posts: [],
      message: ''
    }
  },
  async mounted() {
    const url = 'http://localhost:8888/api/messages'
    const res = await axios.get(url)
    this.posts = res.data
  },
  methods: {
    async createMessage() {
      const url = 'http://localhost:8888/api/messages'
      const res = await axios.post(url, { message: this.message })
      this.posts.push(res.data)
    }
  }
})
</script>