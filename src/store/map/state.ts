import mapboxgl from 'mapbox-gl';

export interface mapState {
	map?: mapboxgl.Map;
	markers: mapboxgl.Marker[];
	distans?: number;
	duration?: number;
}

function state(): mapState {
	return {
		map: undefined,
		markers: [],
		distans: undefined,
		duration: undefined
	};
}

export default state;
