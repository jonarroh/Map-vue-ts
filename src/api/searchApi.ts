import axios from 'axios';

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
	params: {
		limit: 5,
		languaje: 'es',
		access_token:
			'pk.eyJ1Ijoiam9uYXJybyIsImEiOiJjbDVpcTMxamQwMDhtM2NuMWpqcjE5ZGQyIn0.8KE9VFUga4F3KFyJV8Szgw'
	}
});

export default searchApi;
