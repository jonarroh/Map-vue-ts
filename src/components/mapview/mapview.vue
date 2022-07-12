<template>
	<div
		v-if="!isLocationReady"
		class="loading-map d-flex justify-content-center align-items-center text-light"
	>
		<div class="text-center">
			<h3>esperando</h3>
			<span>localizando</span>
		</div>
	</div>

	<div
		v-show="isLocationReady"
		class="map-container"
		ref="mapElement"
	/>
</template>

<style scoped>
.map-container {
	top: 0;
	height: 100vh;
	width: 100vw;
	position: fixed;
}

.loading-map {
	height: 100vh;
	width: 100vw;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 9999;
	top: 0;
}
</style>

<script lang="ts" src="./mapView"></script>
