<template>
  <div>
    <input type="text" v-model="todoText.value" />
    <button @click="addTodo">
      登録
    </button>
    <p v-if="alert">{{ alert.value }}</p>
    <ul>
      <li v-for="todo in todos.value" :key="todo.id">
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
import axios from 'axios'
import { ref } from "@vue/composition-api"

export default {
  setup() {
    const todos = ref([])
    const todoText = ref("")
    const minLength = 3
    const alert = ref("")

    ;(async () => {
      const url = 'http://localhost:8888/api/todos'
      const res = await axios.get(url)
      todos.value = res.data
    })()
    // const url = 'http://localhost:8888/api/todos'
    // axios.get(url).then(res => todos.value = res.data)

    const addTodo = async() => {
      if (todoText.value.length < minLength) {
        alert.value = `Todoは${minLength}文字以上で入力してください`
        return
      }

      const url = 'http://localhost:8888/api/todos'
      const res = await axios.post(url, { text: todoText.value })
      todos.value.push(res.data)
      todoText.value = ''
      alert.value = ''
    }

    const changeStatus = (todo) => {
      todo.done = !todo.done
    }

    return {
      todos,
      todoText,
      alert,
      addTodo,
      changeStatus
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>