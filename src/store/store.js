/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    doubleCounter: state => state.counter * 2,
    clickCounter: state => `${state.counter} clicks`,
  },
});
