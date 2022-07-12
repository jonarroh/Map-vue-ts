import { MutationTree } from 'vuex';
import { PlacesState } from './state';

const mutation: MutationTree<PlacesState> = {
	setUserLocation(state, payload: [number, number]) {
		console.log(payload, 'payload');
		state.userLocation = payload;
		state.isLoading = false;
	}
};

export default mutation;
