import Vue from "vue";
import Vuex from "vuex";
import {getCookie} from '@/utils'

Vue.use(Vuex);

const state = {
name:getCookie('username'),//用户名
}
const mutations = {
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
