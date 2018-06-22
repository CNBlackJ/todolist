<template>
  <div>
    <h1>TODO LIST</h1>
    <input type="text" placeholder="enter your todo" v-model="newTodo">
    <button @click="addTodo">ADD</button>
    <ul id="todoList">
      <li v-for="(todo, index) in todoList" :key="todo._id">
        <input type="checkbox" value="todo._id" @click="removeTodo(todo._id)">
        <label for="jack">{{ todo.title }}</label>
      </li>
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
      this.listTodo()
    },
    methods: {
      addTodo: function () {
        const todo = { title: this.newTodo, status: 1 }
        fly.post('http://localhost:3001/api/todos', todo)
        this.listTodo()
      },
      listTodo: function () {
        fly.get('http://localhost:3001/api/todos').then(res => {
          this.todoList = res.data || []
        })
      },
      removeTodo: function (id) {
        fly.delete(`http://localhost:3001/api/todos/${id}`)
      }
    }
  }
</script>

<style scoped>

</style>