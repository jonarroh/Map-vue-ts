import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '../../api';
import { PlacesResponse } from '../../interfaces/places';

const actions: ActionTree<PlacesState, StateInterface> = {
	getInialLocation({ commit }) {
		navigator.geolocation.getCurrentPosition(position => {
			commit('setUserLocation', [
				position.coords.longitude,
				position.coords.latitude
			]);
		});
	},

	async searchPlacesByTerm({ commit, state }, term: string) {
		const resp = await searchApi.get<PlacesResponse>(
			`/${term}.json`,
			{
				params: {
					proximity: state.userLocation?.join(',')
				}
			}
		);

		console.log(resp.data.features);
	}
};

export default actions;
