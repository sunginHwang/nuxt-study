import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import vuexMiddleware from '../plugins/vuexMiddleware';

Vue.use(Vuex);

const store = () => new Vuex.Store({ modules});

export default store;
