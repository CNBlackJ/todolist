<template>
  <div class="todo">
    <mp-loadmore type="!isLogin" v-if="loadingLayer" />

    <div class="userinfo">
      <img class="userinfo-avatar" :src="userInfo.avatarUrl || defaultAvatar" background-size="cover" />
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
      :checked="addToDone()"
    />
    <button v-if="isLogin" class="weui-btn" type="primary" @click="addTodo">添加</button>
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="login">登陆</button>
  </div>
</template>

<script>
  import { request } from '@/utils/request'
  import { wechat } from '@/utils/wechat'

  import MpLoadmore from 'mp-weui/packages/loadmore'
  import MpField from 'mp-weui/packages/field'
  import MpChecklist from 'mp-weui/packages/checklist'

  export default{
    data () {
      return {
        isLogin: false,
        defaultAvatar: 'https://secure.gravatar.com/avatar/aac2f5df7319d9cc3eb089695857613f?s=180&d=identicon',
        newTodo: '',
        todoList: [],
        checkedTodos: [],
        lastCheckedTodos: [],
        userInfo: {},
        openId: ''
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
    methods: {
      addTodo: async function () {
        const todo = { title: this.newTodo, userId: this.userInfo._id }
        await request.createTodo(todo)
        this.newTodo = ''
        this.listTodo()
      },
      listTodo: async function () {
        const status = 1
        const todos = await request.listTodo(status, this.openId)
        if (todos.length) {
          this.todoList = todos.map(t => { return { label: t.title, value: t._id, disabled: t.status === 1 } })
        }
      },
      async addToDone () {
        const checkedTodos = this.checkedTodos
        if (checkedTodos[0]) {
          await request.moveToDone(checkedTodos[0])
          this.listTodo()
          this.checkedTodos = []
        }
      },
      fetchUserInfo: function () {
        wx.getUserInfo({
          success: async (res) => {
            const wxUserInfo = res.userInfo
            wxUserInfo.openId = this.openId
            if (Object.keys(wxUserInfo).length) {
              this.userInfo = await request.createUser(wxUserInfo)
            }
          }
        })
      },
      login () {
        if (wx.canIUse('button.open-type.getUserInfo')) {
          // 用户版本可用
          wx.login({
            success: async (res) => {
              const jscode = res.code
              this.openId = await request.getToken(jscode)
              const userInfo = await request.getUser(this.openId)
              if (userInfo) {
                this.userInfo = userInfo
              } else {
                this.fetchUserInfo()
              }
            }
          })
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
      async getSetting () {
        const resp = await wechat.login()
        const jscode = resp.code
        const openId = await request.getToken(jscode)
        this.openId = openId
        const userInfo = await request.getUser(openId)
        const todos = await request.listTodo(1, openId)
        if (todos.length) {
          this.todoList = todos.map(t => { return { label: t.title, value: t._id, disabled: t.status === 1 } })
        }
        if (userInfo) {
          this.userInfo = userInfo
        } else {
          const res = await wechat.getUserInfo()
          const wxUserInfo = res.userInfo
          wxUserInfo.openId = openId
          if (Object.keys(wxUserInfo).length) {
            this.userInfo = await request.createUser(wxUserInfo)
          }
        }
        this.isLogin = true
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