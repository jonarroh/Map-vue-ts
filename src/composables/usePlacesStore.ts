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
		isLocationReady: computed<boolean>(
			() => store.getters['places/isLocationReady']
		)
	};
};
