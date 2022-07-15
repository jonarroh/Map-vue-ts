import { computed, defineComponent, ref } from 'vue';
import { usePlacesStore } from '../../composables';
import SearchResults from '../search-results/searchResults.vue';

export default defineComponent({
	name: 'SearchBar',
	components: {
		SearchResults
	},
	setup() {
		const deboundTimeout = ref();
		const deboundValue = ref('');
		const { searchPlacesByterm } = usePlacesStore();
		return {
			deboundValue,
			searchTerm: computed({
				get() {
					return deboundValue.value;
				},
				set(value: string) {
					if (deboundTimeout.value)
						clearTimeout(deboundTimeout.value);
					deboundTimeout.value = setTimeout(() => {
						deboundValue.value = value;
						searchPlacesByterm(value);
					}, 500);
				}
			})
		};
	}
});
