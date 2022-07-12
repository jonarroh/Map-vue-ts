import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

if (!navigator.geolocation) {
	throw new Error('Geolocation is not supported by your browser');
}

const app = createApp(App);
app.use(store);
app.mount('#app');
