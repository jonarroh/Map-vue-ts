import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

const actions: ActionTree<PlacesState, StateInterface> = {
	getInialLocation({ commit }) {
		navigator.geolocation.getCurrentPosition(position => {
			commit('setUserLocation', [
				position.coords.latitude,
				position.coords.longitude
			]);
		});
	}
};

export default actions;
