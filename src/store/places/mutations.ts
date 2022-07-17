import { MutationTree } from 'vuex';
import { Feature } from '../../interfaces/places';
import { PlacesState } from './state';

const mutation: MutationTree<PlacesState> = {
	setUserLocation(state, payload: [number, number]) {
		state.userLocation = payload;
		state.isLoading = false;
	},
	setPlaces(state, payload: Feature[]) {
		state.places = payload;
		state.isLoadingPlaces = false;
	},
	setIsLoadingPlaces(state) {
		state.isLoadingPlaces = true;
	}
};

export default mutation;
