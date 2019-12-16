import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		arr: [1, 2, 3, 4, 5],
		view: 'MainPage',
		number: '',
	},
	mutations: {
		service: (state, payload) => {
			state.number = payload;
		},
		move: (state, payload) => {
			state.number = payload;
		}
	},
	actions: {
	  service: ({commit}, payload) => {
	  	commit('service', payload);
	  },
	  move: ({ commit }, payload) => {
	  	commit('move', payload);
	  }
	},
})