import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import comex from './comex'
import app from './app'
import verticalMenu from './vertical-menu'
import appConfig from './app-config'
import auth from './auth'
import Opstore from './OpStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    comex,
    verticalMenu,
    appConfig,
    app,
    Opstore,
    auth
    
  },
  //plugins: [...servicePlugins],
  //FIXME: We need to use persistent storage
  // currently on page refresh, store is getting reset
  strict: process.env.DEV,
})
