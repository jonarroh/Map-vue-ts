import { defineComponent } from 'vue';
import SearchResults from '../search-results/searchResults.vue';

export default defineComponent({
	name: 'SearchBar',
	components: {
		SearchResults
	},
	setup() {
		return {};
	}
});
