import { ActionTree } from 'vuex';
import { mapState } from './state';
import { StateInterface } from '../index';

const actions: ActionTree<mapState, StateInterface> = {
	someAction(/*{ commit }, payload  */) {
		// a line to prevent linter errors
	}
};

export default actions;
