import { useStore } from 'vuex';
import { computed } from 'vue';
import { StateInterface } from '../store';

export const useMapStore = () => {
	const store = useStore<StateInterface>();

	return {
		map: computed(() => store.state.map.map),
		distance: computed(() => store.state.map.distans),
		duration: computed(() => store.state.map.duration),
		setMap: (map: mapboxgl.Map) => {
			store.commit('map/setMap', map);
		}
	};
};
