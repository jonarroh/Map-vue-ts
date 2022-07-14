import { GetterTree } from 'vuex';
import { mapState } from './state';
import { StateInterface } from '../index';

const getters: GetterTree<mapState, StateInterface> = {
	isMapReady(state) {
		return !!state.map;
	}
};

export default getters;
