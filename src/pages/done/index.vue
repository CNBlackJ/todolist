<template>
	<div class="done">
    <mp-checklist
      v-model="checkedTodos"
      :title="todos"
      :options="doneList"
      :checked="reTodo()"
    />
	</div>
</template>

<script>
  import store from '@/store/index'
  import MpChecklist from 'mp-weui/packages/checklist'

  export default {
    computed: {
      doneList () {
        return store.state.done.doneList
      }
    },
    components: {
      MpChecklist
    },
    onShow () {
      this.listDone()
    },
    methods: {
      listDone () {
        store.commit('done/listDone')
      },
      reTodo () {
        console.log('reTodo')
      }
    }
  }
</script>

<style scoped>

</style>