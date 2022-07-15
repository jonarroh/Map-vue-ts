<template>
	<div class="searchbar-container">
		<input
			type="text"
			class="form-control"
			placeholder="Buscar lugares..."
			v-model="searchTerm"
		/>

		<SearchResults></SearchResults>
	</div>
</template>

<script lang="ts" src="./SearchBar"></script>

<style scoped>
.searchbar-container {
	position: fixed;
	top: 10px;
	left: 10px;
	z-index: 999;
	width: 170px;
	box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
		0 2px 4px -2px rgb(0 0 0 / 0.1);
	background-color: white;
	padding: 10px;
	border-radius: 5px;
}

li {
	cursor: pointer !important;
}
</style>
