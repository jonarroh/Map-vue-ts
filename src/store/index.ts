import { createStore } from 'vuex';
import mapModule from './map';
import { mapState } from './map/state';

// My custom modules
import PlacesModule from './places';
import { PlacesState } from './places/state';

export interface StateInterface {
	places: PlacesState;
	map: mapState;
}

export default createStore<StateInterface>({
	modules: {
		places: PlacesModule,
		map: mapModule
	}
});
