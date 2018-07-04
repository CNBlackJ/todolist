<template>
  <div>
    <h1>TODO LIST</h1>
    <mp-cell-group title="todolist">
      <mp-field
        placeholder="输入代办事项..."
        type="string"
        v-model="newTodo"
      />
    </mp-cell-group>
    <mp-checklist
      v-model="vals"
      :options="todoList"
      @click="removeTodo"
    />
    <button @click="addTodo">ADD</button>
  </div>
</template>

<script>
  import Fly from 'flyio/dist/npm/wx'
  const fly = new Fly()

  import MpField from 'mp-weui/packages/field'
  import MpChecklist from 'mp-weui/packages/checklist'

  export default{
    data () {
      return {
        newTodo: '',
        todoList: [],
        vals: []
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
        fly.get('http://localhost:3001/api/todos').then(res => {
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
      }
    }
  }
</script>

<style scoped>

</style>