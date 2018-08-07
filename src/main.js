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
    pages: [
      'pages/todo/main',
      'pages/logs/main',
      '^pages/index/main',
      'pages/cart/main',
      'pages/profile/main',
      'pages/product/main',
      'pages/login/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '皮皮宠物',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/index/main',
        text: '首页',
        iconPath: 'static/images/shop_home.png',
        selectedIconPath: 'static/images/shop_home_selected.png'
      }, {
        pagePath: 'pages/cart/main',
        text: '购物车',
        iconPath: 'static/images/shop_cart.png',
        selectedIconPath: 'static/images/shop_cart_selected.png'
      }, {
        pagePath: 'pages/profile/main',
        text: '我',
        iconPath: 'static/images/shop_user.png',
        selectedIconPath: 'static/images/shop_user_selected.png'
      }]
    }
  }
}
