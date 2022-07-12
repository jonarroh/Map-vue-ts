<template>
	<Mapview></Mapview>
</template>

<script lang="ts" setup>
import Mapview from '../components/mapview/mapview.vue';
import { usePlacesStore } from '../composables';

usePlacesStore();
</script>
