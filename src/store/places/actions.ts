import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '../../api';

import { PlacesResponse, Feature } from '../../interfaces/places';

const actions: ActionTree<PlacesState, StateInterface> = {
	getInialLocation({ commit }) {
		navigator.geolocation.getCurrentPosition(position => {
			commit('setUserLocation', [
				position.coords.longitude,
				position.coords.latitude
			]),
				(err: any) => {
					console.log(err);
					throw new Error('no se pudo obtener la ubicación');
				};
		});
	},

	async searchPlacesByTerm(
		{ commit, state },
		term: string
	): Promise<Feature[]> {
		if (term.length === 0) {
			commit('setPlaces', []);
			return [];
		}

		if (!state.userLocation) {
			throw new Error('no hay ubicación del usuario');
		}

		const proximity = state.userLocation!;

		commit('setIsLoadingPlaces');

		const resp = await searchApi.get<PlacesResponse>(
			`/${term}.json`,
			{
				params: {
					proximity: proximity.join(',')
				}
			}
		);
		commit('setPlaces', resp.data.features);

		return resp.data.features;
	}
};

export default actions;
