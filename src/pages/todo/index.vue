<template>
  <div class="todo_list">
    <div class="userinfo">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
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
      :title="todos"
      :options="todoList"
      :checked="checkDone()"
    />
    <button class="weui-btn" type="primary" @click="addTodo">添加</button>
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="login">登陆</button>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { request } from '@/utils/request'

  import MpField from 'mp-weui/packages/field'
  import MpChecklist from 'mp-weui/packages/checklist'

  export default{
    data () {
      return {
        newTodo: '',
        todoList: [],
        checkedTodos: [],
        lastCheckedTodos: [],
        userInfo: {}
      }
    },
    components: {
      MpField,
      MpChecklist
    },
    mounted () {
      this.listTodo()
    },
    created () {
      this.getSetting()
    },
    methods: {
      addTodo: async function () {
        const todo = { title: this.newTodo, userId: this.userInfo._id }
        await request.createTodo(todo)
        this.newTodo = ''
        this.listTodo()
      },
      listTodo: async function () {
        const status = 1
        const userId = this.userInfo._id
        const todos = await request.listTodo(status, userId)
        if (todos.length) {
          this.todoList = todos.map(t => { return { label: t.title, value: t._id, disabled: t.status === 1 } })
        }
      },
      checkDone: function () {
        const checkedTodos = this.checkedTodos
        const lastCheckedTodos = this.lastCheckedTodos
        if (checkedTodos.length > lastCheckedTodos.length) {
          const id = _.difference(checkedTodos, lastCheckedTodos)
          if (id.length) {
            const resp = request.moveToDone(id[0])
            if (resp) {
              this.listTodo()
            }
          }
        } else {
          const id = _.difference(lastCheckedTodos, checkedTodos)
          if (id.length) {
            const resp = request.reTodo(id[0])
            if (resp) {
              this.listTodo()
            }
          }
        }
        this.lastCheckedTodos = checkedTodos
      },
      getUserInfo: function () {
        wx.login({
          success: async (res) => {
            const jscode = res.code
            const openId = await request.getToken(jscode)
            const userInfo = await request.getUser(openId)
            if (userInfo) {
              this.userInfo = userInfo
            } else {
              wx.getUserInfo({
                success: async (res) => {
                  const wxUserInfo = res.userInfo
                  wxUserInfo.openId = openId
                  if (Object.keys(wxUserInfo).length) {
                    this.userInfo = await request.createUser(wxUserInfo)
                  }
                }
              })
            }
          }
        })
      },
      login () {
        if (wx.canIUse('button.open-type.getUserInfo')) {
          // 用户版本可用
          this.getSetting()
        } else {
          console.log('请升级微信版本')
        }
      },
      bindGetUserInfo (e) {
        if (e.mp.detail.rawData) {
          // 用户按了允许授权按钮
          console.log('用户按了允许授权按钮')
          this.getSetting()
        } else {
          // 用户按了拒绝按钮
          console.log('用户按了拒绝按钮')
        }
      },
      getSetting () {
        wx.getSetting({
          success: function (res) {
            if (res.authSetting['scope.userInfo']) {
              wx.getUserInfo({
                success: function (res) {
                  console.log(res)
                  // 用户已经授权过
                  console.log('用户已经授权过')
                }
              })
            } else {
              console.log('用户还未授权过')
            }
          }
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
</style>