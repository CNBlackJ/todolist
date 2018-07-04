<template>
  <div class="todo_list">
    <div class="weui-cells weui-cells_after-title">
      <mp-cell-group title="todolist">
        <mp-field
          placeholder="输入代办事项..."
          type="string"
          v-model="newTodo"
        />
      </mp-cell-group>
    </div>
    <mp-checklist
      v-model="checkedTodos"
      :title="todos"
      :options="todoList"
      :checked="checkDone()"
    />
    <button class="weui-btn" type="primary" @click="addTodo">添加</button>
  </div>
</template>

<script>
  import _ from 'lodash'
  import Fly from 'flyio/dist/npm/wx'
  const fly = new Fly()

  import MpField from 'mp-weui/packages/field'
  import MpChecklist from 'mp-weui/packages/checklist'

  export default{
    data () {
      return {
        newTodo: '',
        todoList: [],
        checkedTodos: [],
        lastCheckedTodos: []
      }
    },
    components: {
      MpField,
      MpChecklist
    },
    mounted: function () {
      this.listTodo()
    },
    methods: {
      addTodo: function () {
        const todo = { title: this.newTodo, status: 1 }
        fly.post('http://localhost:3001/api/todos', todo)
        this.newTodo = ''
        this.listTodo()
      },
      listTodo: function () {
        fly.get('http://localhost:3001/api/todos?status=1').then(res => {
          if (res && res.data && res.data.length > 0) {
            const results = []
            res.data.forEach(v => {
              results.push({
                label: v.title,
                value: v._id,
                disabled: v.status === 1
              })
            })
            this.todoList = results
          }
        })
      },
      removeTodo: function (id) {
        fly.delete(`http://localhost:3001/api/todos/${id}`)
      },
      checkDone: function () {
        const checkedTodos = this.checkedTodos
        const lastCheckedTodos = this.lastCheckedTodos
        if (checkedTodos.length > lastCheckedTodos.length) {
          const id = _.difference(checkedTodos, lastCheckedTodos)
          this.updateToDone(id[0])
        } else {
          const id = _.difference(lastCheckedTodos, checkedTodos)
          this.reTodo(id[0])
        }
        this.lastCheckedTodos = checkedTodos
      },
      updateToDone: function (id) {
        if (id) fly.put(`http://localhost:3001/api/todos/${id}`, { status: 2 })
      },
      reTodo: function (id) {
        if (id) fly.put(`http://localhost:3001/api/todos/${id}`, { status: 1 })
      }
    }
  }
</script>

<style scoped>
  .todo_list {
    background-color: #f8f8f8;
  }

</style>