<template>
  <div>
    <input v-model="todoText">
    <button @click="addTodo">
      登録
    </button>
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
export default {
  data: {
    todos: [
      { id: 1, text: 'タスク1', done: false },
      { id: 2, text: 'タスク2', done: false },
      { id: 3, text: 'タスク3', done: false }
    ],
    todoText: ''
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.todoText.value,
        done: false
      })
      this.todoText = ''
    },
    changeStatus(todo) {
      todo.done = !todo.done
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>