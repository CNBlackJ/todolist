<template>
  <div>
    <h1>TODO LIST</h1>
    <input type="text" placeholder="enter your todo" v-model="newTodo">
    <button @click="addTodo">done</button>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
  import { list } from '@/utils/FileDBv2'
  export default{
    data () {
      return {
        newTodo: '',
        todoList: []
      }
    },
    methods: {
      addTodo: function () {
        console.log(list())
        const todo = { id: this.todoList.length, title: this.newTodo, status: 1 }
        this.todoList.push(todo)
      }
    }
  }
</script>
