/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0,
  },
  getters: {
    doubleCounter: state => state.counter * 2,
    clickCounter: state => `${state.counter} clicks`,
    value: state => state.value,
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
    },
    setValue: (state, payload) => {
      state.value = payload;
    },
  },
  actions: {
    increment: ({ commit }, payload) => {
      commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
      commit('decrement', payload);
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by);
      }, payload.duration);
    },
    setValue: ({ commit }, payload) => {
      commit('setValue', payload);
    },
  },
});
