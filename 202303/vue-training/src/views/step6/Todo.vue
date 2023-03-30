<template>
  <div>
    <input v-model="todoText">
    <button @click="addTodo">
      登録
    </button>
    <p v-if="alert">{{ alert }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <div v-if="!todo.done">
          <input
            type="checkbox"
            :checked="todo.done"
            @change="changeStatus(todo)"
          >
          {{ todo.text }}
        </div>
        <div v-else class="done">
          {{ todo.text }}
          <button @click="changeStatus(todo)">未完了に戻す</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data() {
    return {
      todos: [],
      todoText: '',
      minLength: 3,
      alert: ''
    }
  },
  async mounted() {
    const url = 'http://localhost:8888/api/todos'
    const res = await axios.get(url)
    this.todos = res.data
  },
  methods: {
    async addTodo() {
      if (this.todoText.length < this.minLength) {
        this.alert = `Todoは${this.minLength}文字以上で入力してください`
        return
      }

      const url = 'http://localhost:8888/api/todos'
      const res = await axios.post(url, { text: this.todoText })
      this.todos.push(res.data)

      this.todoText = ''
      this.alert = ''
    },
    changeStatus(todo) {
      todo.done = !todo.done
    }
  }
})
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>