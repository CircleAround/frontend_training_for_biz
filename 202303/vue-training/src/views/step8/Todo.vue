<template>
  <div>
    <input v-model="todoText.value">
    <button @click="addTodo">登録</button>
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
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api'

export default {
  setup() {
    const todoText = ref('')
    const todos = reactive([
      { id: 1, text: 'タスク1', done: false },
      { id: 2, text: 'タスク2', done: false },
      { id: 3, text: 'タスク3', done: false }
    ])

    const addTodo = function() {
      todos.push({
        text: todoText.value,
        id: todos.length + 1,
        done: false
      })
      todoText.value = ''
    }

    const changeStatus = function(todo) {
      todo.done = !todo.done
    }

    return {
      addTodo,
      changeStatus,
      todoText,
      todos
    }
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>