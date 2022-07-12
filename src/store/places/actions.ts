import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

const actions: ActionTree<PlacesState, StateInterface> = {
	getInialLocation({ commit }) {
		navigator.geolocation.getCurrentPosition(position => {
			commit('setUserLocation', [
				position.coords.longitude,
				position.coords.latitude
			]);
		});
	}
};

export default actions;
