<template>
  <div>
    <h1>TODO LIST</h1>
    <input type="text" placeholder="enter your todo" v-model="newTodo">
    <button @click="addTodo">ADD</button>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
  import Fly from 'flyio/dist/npm/wx'
  const fly = new Fly()

  export default{
    data () {
      return {
        newTodo: '',
        todoList: []
      }
    },
    mounted: function () {
      fly.get('http://localhost:3001/api/todos').then(res => {
        this.todoList = res.data.data
      })
    },
    methods: {
      addTodo: function () {
        const todo = { id: this.todoList.length, title: this.newTodo, status: 1 }
        this.todoList.push(todo)
      }
    }
  }
</script>
