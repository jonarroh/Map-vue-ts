export interface PlacesState {
	isLoading: boolean;
	userLocation?: [number, number]; // [lat, lng]
}

function state(): PlacesState {
	return {
		isLoading: true,
		userLocation: undefined
	};
}

export default state;
