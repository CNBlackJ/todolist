<template>
	<div class="done">
    <mp-checklist
      v-model="checkedTodos"
      :title="todos"
      :options="doneList"
      :checked="reTodo()"
    />
    <button @click="listDoneData">aaa</button>
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
    methods: {
      ...mapActions('done', [
        'listDone'
      ]),
      async listDoneData () {
        await this.listDone({ openId: 0 })
      },
      reTodo () {
        console.log('reTodo')
      }
    }
  }
</script>

<style scoped>

</style>