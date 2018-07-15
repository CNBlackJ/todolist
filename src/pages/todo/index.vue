<template>
  <div class="todo">
    <div v-if="isLogin">
      <mp-loadmore type="loading" v-if="!isLogin" />

      <div class="userinfo">
        <img class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover" />
      </div>
  
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
        max=1
        :title="todoTitle"
        :options="todoList"
        :checked="addToDoneData()"
      />
      <button class="mint-button mint-button--primary mint-button--large" @click="addTodoData">添加</button>
    </div>

    <button v-if="!isLogin" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">登陆</button>
  </div>
</template>

<script>
  import store from '@/store/index'
  import { mapState, mapActions } from 'vuex'

  import MpLoadmore from 'mp-weui/packages/loadmore'
  import MpField from 'mp-weui/packages/field'
  import MpChecklist from 'mp-weui/packages/checklist'

  export default {
    store,
    computed: {
      ...mapState('todo', {
        userInfo: state => state.userInfo,
        todoList: state => state.todoList,
        isLogin: state => state.isLogin,
        todoTitle: state => state.todoTitle
      })
    },
    data () {
      return {
        newTodo: '',
        checkedTodos: []
      }
    },
    components: {
      MpField,
      MpChecklist,
      MpLoadmore
    },
    created () {
      this.getSetting()
    },
    onShow () {
      this.getTodoList()
    },
    methods: {
      ...mapActions('todo', [
        'getUserInfo',
        'login',
        'getTodoList',
        'addTodo',
        'addToDone'
      ]),
      bindGetUserInfo (e) {
        if (e.mp.detail.rawData) {
          // 用户按了允许授权按钮
          this.getSetting()
        } else {
          // 用户按了拒绝按钮
          console.log('用户按了拒绝按钮')
        }
      },
      async getUserInfoDate () {
        this.getUserInfo()
      },
      async addTodoData () {
        const title = this.newTodo
        this.addTodo({ title }).then(() => {
          this.getTodoList()
          this.newTodo = ''
        })
      },
      async addToDoneData () {
        const doneId = this.checkedTodos[0]
        if (doneId) {
          this.addToDone({ doneId }).then(() => {
            this.getTodoList()
            this.checkedTodos = []
          })
        }
      },
      async getSetting () {
        this.login().then(() => {
          this.getTodoList()
        })
      }
    }
  }
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.todo {
  padding: 0 5%;
}
</style>