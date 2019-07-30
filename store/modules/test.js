import * as _ from 'lodash';
import {AsyncMutationCreator, AsyncMutationCreatorP} from '../../core/util/mutstion-types';
import {getSampleJson} from '../../core/api/sampleApi';
import asyncCommit from '../../core/util/asyncCommit';
import asyncCall from '../../core/util/asyncCall';

const TEST = {
  INIT_TEST: 'INIT_TEST',
  GET_JSON_PLACE_HOLDER: AsyncMutationCreator('GET_JSON_PLACE_HOLDER'),
  GET_JSON_PLACE_HOLDER_P: AsyncMutationCreatorP('GET_JSON_PLACE_HOLDER')
}

const moduleName = 'test';

// initialState
const initState = {
  text: '',
  jsonPlaceHolder: {}
};

//state
export const state = _.cloneDeep(initState);

// actions
export const actions = {
  async initTest({commit}, value) {
    commit(TEST.INIT_TEST, value);
  },

  async getJsonPlaceHolderByPlugin({commit}) {
    commit(TEST.GET_JSON_PLACE_HOLDER_P.REQUEST, getSampleJson(1));
    commit(TEST.GET_JSON_PLACE_HOLDER_P.REQUEST, getSampleJson(2));
  },
  async getJsonPlaceHolderByUtil({commit}) {
    await asyncCall(commit,TEST.GET_JSON_PLACE_HOLDER, getSampleJson(1));
  },
  async getJsonPlaceHolder() {
    await asyncCommit(moduleName, TEST.GET_JSON_PLACE_HOLDER, getSampleJson(1));
    await asyncCommit(moduleName, TEST.GET_JSON_PLACE_HOLDER, getSampleJson(1));
  },
};

// mutations
export const mutations = {
  [TEST.INIT_TEST](state, value) {
    state.text = value;
  },
  [TEST.GET_JSON_PLACE_HOLDER.PENDING](state, value) {
    console.log('PENDING');
  },
  [TEST.GET_JSON_PLACE_HOLDER.SUCCESS](state, value) {
    console.log('SUCCESS');
    state.jsonPlaceHolder = value;
  },
  [TEST.GET_JSON_PLACE_HOLDER.FAILURE](state, value) {
    console.log('FAILURE');
  },
  [TEST.GET_JSON_PLACE_HOLDER_P.REQUEST](state, value) {
    console.log('REQUEST');
  },
  [TEST.GET_JSON_PLACE_HOLDER_P.SUCCESS](state, value) {
    console.log('SUCCESS');
    state.jsonPlaceHolder = value;
  },
  [TEST.GET_JSON_PLACE_HOLDER_P.FAILURE](state, value) {
    console.log('FAILURE');
  },

};
