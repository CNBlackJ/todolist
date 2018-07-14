import Vue from 'vue'
import App from './App'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/todo/main', 'pages/logs/main', 'pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '备忘录',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/todo/main',
        text: '待办',
        iconPath: 'static/images/todo.png',
        selectedIconPath: 'static/images/todo_selected.png'
      }, {
        pagePath: 'pages/done/main',
        text: '已完成',
        iconPath: 'static/images/done.png',
        selectedIconPath: 'static/images/done_selected.png'
      }, {
        pagePath: 'pages/profile/main',
        text: '我',
        iconPath: 'static/images/user.png',
        selectedIconPath: 'static/images/user_selected.png'
      }]
    }
  }
}
