import * as _ from 'lodash';

const DEPTH_STORE = {
  INIT_DEPTH_STORE : 'INIT_DEPTH_STORE',
}

// initialState
const initState = {
  depth:1
};

//state
export const state = _.cloneDeep(initState);

// actions
export const actions = {
  async initDepthStore({ commit }, value) {
    commit(DEPTH_STORE.INIT_DEPTH_STORE, value);
  },
};

// mutations
export const mutations = {
  [DEPTH_STORE.INIT_DEPTH_STORE](state, value) {
    state.text = value;
  },
};
