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

export default Vue.extend({
  data() {
    return {
      todos: [
        { id: 1, text: 'タスク1', done: false },
        { id: 2, text: 'タスク2', done: false },
        { id: 3, text: 'タスク3', done: false }
      ],
      todoText: '',
      minLength: 3,
      alert: ''
    }
  },
  methods: {
    addTodo() {
      if (this.todoText.length < this.minLength) {
        this.alert = `Todoは${this.minLength}文字以上で入力してください`
        return
      }

      this.todos.push({
        id: this.todos.length + 1,
        text: this.todoText,
        done: false
      })
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