<template>
	<div class="done">
    <mp-checklist
      v-model="checkedTodos"
      :title="todos"
      :options="todoList"
      :checked="reTodo()"
    />
    <h3>
      {{ count }}
    </h3>
	</div>
</template>

<script>
  import store from '@/store/index'
  import MpChecklist from 'mp-weui/packages/checklist'

  export default {
    data () {
      return {
        todoList: [],
        count: 0
      }
    },
    components: {
      MpChecklist
    },
    onShow () {
      this.listTodo()
    },
    methods: {
      listTodo () {
        this.todoList = [
          { label: 'a', value: 1, disabled: true }
        ]
        this.count = store.state.counter.count
      },
      reTodo () {
        console.log('reTodo')
      }
    }
  }
</script>

<style scoped>

</style>