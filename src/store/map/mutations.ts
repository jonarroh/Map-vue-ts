import mapboxgl from 'mapbox-gl';
import { MutationTree } from 'vuex';
import { Feature } from '../../interfaces/places';
import { mapState } from './state';

const mutation: MutationTree<mapState> = {
	setMap(state, map: mapboxgl.Map) {
		state.map = map;
	},
	setPlacesMarkers(state, places: Feature[]) {
		//borrar los markers antiguos
		state.markers.forEach(marker => marker.remove());
		state.markers = [];

		if (!state.map) return;
		//agregar los markers nuevos
		for (const place of places) {
			const [lng, lat] = place.center;

			const locationPopup = new mapboxgl.Popup().setLngLat([lng, lat])
				.setHTML(`<h4>${place.text}</h4>
        <p>${place.place_name}</p>`);

			const marker = new mapboxgl.Marker()
				.setLngLat([lng, lat])
				.setPopup(locationPopup)
				.addTo(state.map);

			state.markers.push(marker);
		}
	}
};

export default mutation;
