import axios from 'axios';

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
	params: {
		limit: 5,
		languaje: 'es',
		access_token:
			'pk.eyJ1Ijoiam9uYXJybyIsImEiOiJjbDV1MDFpdjMwODByM2RqeWI1MHdoNjkwIn0.yAxNGNuv4d1wnX5vameHbQ'
	}
});

export default searchApi;
