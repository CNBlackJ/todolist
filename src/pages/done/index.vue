<template>
	<div class="done">
    <mp-checklist
      v-if="isLogin"
      v-model="checkedDones"
      max=1
      :title="todos"
      :options="doneList"
      :checked="reTodoData()"
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
        doneList: state => state.done.doneList,
        isLogin: state => state.todo.isLogin
      })
    },
    data () {
      return {
        checkedDones: []
      }
    },
    components: {
      MpChecklist
    },
    onShow () {
      this.listDone()
    },
    methods: {
      ...mapActions('done', [
        'listDone',
        'reTodo'
      ]),
      async reTodoData () {
        const reTodoId = this.checkedDones[0]
        if (reTodoId) {
          this.reTodo({ reTodoId }).then(() => {
            this.listDone()
            this.checkedDones = []
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>