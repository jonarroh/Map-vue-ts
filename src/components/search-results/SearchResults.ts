import mapboxgl from 'mapbox-gl';
import { defineComponent, ref, watch } from 'vue';
import { useMapStore, usePlacesStore } from '../../composables';
import { Feature } from '../../interfaces/places';

export default defineComponent({
	name: 'SearchResults',
	setup() {
		const { places, isLoadingPlaces, userLocation } =
			usePlacesStore();
		const activePlace = ref('');
		const { map, setPlacesMarkers, getRouteBetweenPoints } =
			useMapStore();

		watch(places, newVal => {
			activePlace.value = '';
			setPlacesMarkers(newVal);
		});

		return {
			places,
			isLoadingPlaces,
			activePlace,
			onPlaceClick: (place: Feature) => {
				activePlace.value = place.id;
				const [lng, lat] = place.center;

				map.value?.flyTo({
					zoom: 15,
					center: [lng, lat]
				});
			},
			getRoute(place: Feature) {
				if (!userLocation.value) return;

				const [lng, lat] = place.center;

				const [startLng, startLat] = userLocation.value;

				const start: [number, number] = [startLng, startLat];
				const end: [number, number] = [lng, lat];

				getRouteBetweenPoints(start, end);
			}
		};
	}
});
