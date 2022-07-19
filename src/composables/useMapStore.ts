import { useStore } from 'vuex';
import { computed } from 'vue';
import { StateInterface } from '../store';
import { Feature } from '../interfaces/places';
import { LngLat } from '../store/map/actions';

export const useMapStore = () => {
	const store = useStore<StateInterface>();

	return {
		map: computed(() => store.state.map.map),
		distance: computed(() => store.state.map.distans),
		duration: computed(() => store.state.map.duration),
		//getters
		isMapReady: computed(() => store.getters['map/isMapReady']),

		//mutations
		setMap: (map: mapboxgl.Map) => {
			store.commit('map/setMap', map);
		},
		setPlacesMarkers: (places: Feature[]) => {
			store.commit('map/setPlacesMarkers', places);
		},

		//actions
		getRouteBetweenPoints: (start: LngLat, end: LngLat) => {
			store.dispatch('map/getRouteBetweenPoints', { start, end });
		}
	};
};
