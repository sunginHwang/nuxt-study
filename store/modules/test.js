import * as _ from 'lodash';
import {AsyncMutationCreator} from '../../core/util/mutstion-types';
import asyncCall from '../../core/util/asyncUtil';
import {getSampleJson} from '../../core/api/sampleApi';

const TEST = {
  INIT_TEST: 'INIT_TEST',
  GET_JSON_PLACE_HOLDER: AsyncMutationCreator('GET_JSON_PLACE_HOLDER')
}

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

  async getJsonPlaceHolder(store) {
/*
    await asyncCall(store, getSampleJson,{id:1}, TEST.GET_JSON_PLACE_HOLDER);
*/
    store.commit(TEST.GET_JSON_PLACE_HOLDER.INDEX, getSampleJson({id:1}))
  },
};

// mutations
export const mutations = {
  [TEST.INIT_TEST](state, value) {
    state.text = value;
  },
  [TEST.GET_JSON_PLACE_HOLDER.INDEX](state, value) {
    console.log('PENDING');
  },
  [TEST.GET_JSON_PLACE_HOLDER.SUCCESS](state, value) {
    console.log('SUCCESS');
    state.jsonPlaceHolder = value;
  },
  [TEST.GET_JSON_PLACE_HOLDER.FAILURE](state, value) {
    console.log('FAILURE');
  },

};
