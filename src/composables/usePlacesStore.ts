import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { StateInterface } from '../store';

export const usePlacesStore = () => {
	const store = useStore<StateInterface>();

	onMounted(() => {
		if (!store.getters['places/isLocationReady']) {
			store.dispatch('places/getInialLocation');
		}
	});

	return {
		isLoading: computed(() => store.state.places.isLoading),
		userLocation: computed(() => store.state.places.userLocation),
		places: computed(() => store.state.places.places),
		isLoadingPlaces: computed(
			() => store.state.places.isLoadingPlaces
		),
		isLocationReady: computed<boolean>(
			() => store.getters['places/isLocationReady']
		),
		searchPlacesByterm: (term: string) =>
			store.dispatch('places/searchPlacesByTerm', term)
	};
};
