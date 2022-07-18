<script lang="ts" src="./SearchResults"></script>

<template>
	<div v-if="isLoadingPlaces" class="alert alert-primary text-center">
		<h5>cargando...</h5>
		<span>espere por favor</span>
	</div>

	<ul class="list-group mt-2" v-else-if="places.length > 0">
		<li
			class="list-group-item list-group-item-action"
			v-for="place in places"
			:class="{ active: place.id === activePlace }"
			:key="place.id"
			@click="onPlaceClick(place)"
		>
			<h5>{{ place.text }}</h5>
			<p>{{ place.place_name }}</p>
			<div align="right">
				<button
					class="btn btn-outline-success btn-sm"
					:class="
						place.id === activePlace
							? 'btn-outline-light'
							: 'btn-outline-success'
					"
				>
					Direccion
				</button>
			</div>
		</li>
	</ul>
</template>

<style scoped>
li {
	cursor: pointer !important;
}
h5 {
	font-size: 12px !important;
	font-weight: bold !important;
}
p {
	font-size: 12px !important;
}
</style>
