import Vue from 'vue'
import Vuex from 'vuex'

import counter from '../pages/counter/store'
import done from '../pages/done/store'

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
    }
  }
})

export default store
