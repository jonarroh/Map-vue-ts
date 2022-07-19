import mapboxgl, { MapboxEvent } from 'mapbox-gl';
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
	},
	setRoutePolyline(state, coords: number[][]) {
		const start = coords[0];
		const end = coords[coords.length - 1];

		//definir los bounds
		const bounds = new mapboxgl.LngLatBounds(
			[start[0], start[1]],
			[start[0], start[1]]
		);
		//agregar cada punto a los bounds
		for (const coord of coords) {
			const newCords: [number, number] = [coord[0], coord[1]];
			bounds.extend(newCords);
		}

		state.map?.fitBounds(bounds, {
			padding: 300
		});

		//polyline
		const soucerData: mapboxgl.AnySourceData = {
			type: 'geojson',
			data: {
				type: 'FeatureCollection',
				features: [
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'LineString',
							coordinates: coords
						}
					}
				]
			}
		};
		if (state.map?.getSource('RouteString')) {
			state.map?.removeLayer('RouteString');
			state.map?.removeSource('RouteString');
		}

		state.map?.addSource('RouteString', soucerData);
		state.map?.addLayer({
			id: 'RouteString',
			type: 'line',
			source: 'RouteString',
			layout: {
				'line-cap': 'round',
				'line-join': 'round'
			},
			paint: {
				'line-color': '#3bb2d0',
				'line-width': 3
			}
		});
	}
};

export default mutation;
