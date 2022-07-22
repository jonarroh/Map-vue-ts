import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
	'pk.eyJ1Ijoiam9uYXJybyIsImEiOiJjbDV1MDFpdjMwODByM2RqeWI1MHdoNjkwIn0.yAxNGNuv4d1wnX5vameHbQ';

if (!navigator.geolocation) {
	throw new Error('Geolocation is not supported by your browser');
}

const app = createApp(App);
app.use(store);
app.mount('#app');
