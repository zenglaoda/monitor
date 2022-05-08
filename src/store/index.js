import { createStore } from 'vuex';

const options = {
	state: {
		project: null
	},
	mutations: {
		SET_PROJECT(state, payload) {
			state.project = payload;
		}
	},
	actions: {

	}
};

export const store = createStore(options);