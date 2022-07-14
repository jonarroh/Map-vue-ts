<template>
	<Mapview></Mapview>
	<BtnLocation></BtnLocation>
</template>

<script lang="ts" setup>
import Mapview from '../components/mapview/mapview.vue';
import BtnLocation from '../components/btn-location/btnLocation.vue';
import { usePlacesStore } from '../composables';

usePlacesStore();
</script>
