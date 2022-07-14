<template>
	<Mapview></Mapview>
	<BtnLocation></BtnLocation>
	<SearchBar></SearchBar>
</template>

<script lang="ts" setup>
import Mapview from '../components/mapview/mapview.vue';
import BtnLocation from '../components/btn-location/btnLocation.vue';
import SearchBar from '../components/searchbar/searchBar.vue';
import { usePlacesStore } from '../composables';

usePlacesStore();
</script>
