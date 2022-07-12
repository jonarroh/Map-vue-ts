import { GetterTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

const getters: GetterTree<PlacesState, StateInterface> = {
	isLocationReady(state): boolean {
		return state.userLocation !== undefined;
	}
};

export default getters;
