import axios from 'axios';

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
	params: {
		alternatives: false,
		geometries: 'geojson',
		overview: 'simplified',
		steps: false,
		access_token:
			'pk.eyJ1Ijoiam9uYXJybyIsImEiOiJjbDVpcTMxamQwMDhtM2NuMWpqcjE5ZGQyIn0.8KE9VFUga4F3KFyJV8Szgw'
	}
});

export default searchApi;
