const state = {
  value: 0,
};

const getters = {
  value: state => state.value,
};

const mutations = {
  setValue: (state, payload) => {
    state.value = payload;
  },
};

const actions = {
  setValue: ({ commit }, payload) => {
    commit('setValue', payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
