import axios from 'axios';

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
	params: {
		alternatives: false,
		geometries: 'geojson',
		overview: 'simplified',
		steps: false,
		access_token:
			'pk.eyJ1Ijoiam9uYXJybyIsImEiOiJjbDV1MDFpdjMwODByM2RqeWI1MHdoNjkwIn0.yAxNGNuv4d1wnX5vameHbQ'
	}
});

export default searchApi;
