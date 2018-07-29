import Vue from 'vue'
import Vuex from 'vuex'

import counter from '../pages/counter/store'
import done from '../pages/done/store'
import todo from '../pages/todo/store'
import profile from '../pages/profile/store'

import index from '../pages/index/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter: {
      namespaced: true,
      ...counter
    },
    done: {
      namespaced: true,
      ...done
    },
    todo: {
      namespaced: true,
      ...todo
    },
    profile: {
      namespaced: true,
      ...profile
    },
    index: {
      namespaced: true,
      ...index
    }
  }
})

export default store
