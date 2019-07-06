import * as _ from 'lodash';

const TEST = {
  INIT_TEST : 'INIT_TEST',
}

// initialState
const initState = {
  text:''
};

//state
export const state = _.cloneDeep(initState);

// actions
export const actions = {
  async initTest({ commit }, value) {
      commit(TEST.INIT_TEST, value);
  },
};

// mutations
export const mutations = {
  [TEST.INIT_TEST](state, value) {
    state.text = value;
  },
};
