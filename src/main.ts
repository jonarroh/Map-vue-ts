import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
	'pk.eyJ1Ijoiam9uYXJybyIsImEiOiJjbDVpcTMxamQwMDhtM2NuMWpqcjE5ZGQyIn0.8KE9VFUga4F3KFyJV8Szgw';

if (!navigator.geolocation) {
	throw new Error('Geolocation is not supported by your browser');
}

const app = createApp(App);
app.use(store);
app.mount('#app');
