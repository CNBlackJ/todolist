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
  export default{
    data () {
      return {
        newTodo: '',
        todoList: [
        { id: 1, title: 'play football', status: 1 }
        ]
      }
    },
    methods: {
      addTodo: function () {
        const todo = { id: this.todoList.length, title: this.newTodo, status: 1 }
        this.todoList.push(todo)
      }
    }
  }
</script>
