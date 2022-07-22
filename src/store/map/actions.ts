import { ActionTree } from 'vuex';
import { mapState } from './state';
import { StateInterface } from '../index';
import { directionApi } from '../../api';
import { DirectionsResponse } from '../../interfaces/directions';

export type LngLat = [number, number];
const actions: ActionTree<mapState, StateInterface> = {
	async getRouteBetweenPoints(
		{ commit },
		{ start, end }: { start: LngLat; end: LngLat }
	) {
		const response = await directionApi.get<DirectionsResponse>(
			`${start.join(',')};${end.join(',')}`
		);
		console.log(response.data.routes[0].geometry.coordinates);
		commit(
			'setRoutePolyline',
			response.data.routes[0].geometry.coordinates
		);
	}
};

export default actions;
