import { defineComponent, onMounted, ref, watch } from 'vue';
import { usePlacesStore } from '../../composables';
import MapboxGl from 'mapbox-gl';

export default defineComponent({
	name: 'MapView',
	setup() {
		const mapElement = ref<HTMLDivElement>();
		const { isLocationReady, userLocation } = usePlacesStore();

		const initMap = async () => {
			if (!mapElement.value)
				throw new Error('Map element is not defined');
			if (!userLocation.value)
				throw new Error('User location is not defined');

			await Promise.resolve();

			const map = new MapboxGl.Map({
				container: mapElement.value, // container ID
				style: 'mapbox://styles/mapbox/streets-v11', // style URL
				center: userLocation.value, // starting position [lng, lat]
				zoom: 15 // starting zoom
			});
			map.on('style.load', () => {
				map.setFog({}); // Set the default atmosphere style
			});

			const locationPopup = new MapboxGl.Popup().setLngLat(
				userLocation.value
			).setHTML(`<h4>You are here</h4>
        <p>${userLocation.value[0]}, ${userLocation.value[1]}</p>`);

			const locationMarker = new MapboxGl.Marker()
				.setLngLat(userLocation.value)
				.setPopup(locationPopup)
				.addTo(map);
		};

		onMounted(() => {
			if (isLocationReady.value) {
				console.log(userLocation.value, 'userLocation');
				return initMap();
			}
		});

		watch(isLocationReady, newVal => {
			if (newVal) {
				console.log(newVal, 'newVal');
				initMap();
			}
		});

		return {
			isLocationReady,
			mapElement,
			userLocation
		};
	}
});
