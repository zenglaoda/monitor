import { createStore } from 'vuex';
import { setProjectId, getProjectId } from '@/storage/cookie';

const options = {
	state: {
		project: getProjectId()
	},
	mutations: {
		SET_PROJECT(state, payload) {
			state.project = payload;
			setProjectId(payload.id);
		}
	},
	actions: {

	}
};

export const store = createStore(options);