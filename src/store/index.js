import Vue from "vue";
import Vuex from "vuex";
import {getCookie} from '@/utils'

Vue.use(Vuex);

const state = {
 token:getCookie('token'),
name:getCookie('name'),//用户名
}
const mutations = {
  setToken(state,value){
    state.token=value;
  },
  setName(state,value){
    state.name=value;
  }

}
const actions = {

}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store;
