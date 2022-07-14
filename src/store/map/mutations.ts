import mapboxgl from 'mapbox-gl';
import { MutationTree } from 'vuex';
import { mapState } from './state';

const mutation: MutationTree<mapState> = {
	setMap(state, map: mapboxgl.Map) {
		state.map = map;
	}
};

export default mutation;
