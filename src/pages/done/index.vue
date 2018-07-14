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
  import { mapState, mapActions } from 'vuex'
  import store from '@/store/index'
  import MpChecklist from 'mp-weui/packages/checklist'

  export default {
    store,
    computed: {
      ...mapState({
        doneList: state => state.done.doneList
      })
    },
    components: {
      MpChecklist
    },
    onShow () {
      this.listDone()
    },
    methods: {
      ...mapActions('done', [
        'listDone'
      ]),
      reTodo () {
        console.log('reTodo')
      }
    }
  }
</script>

<style scoped>

</style>