<script lang="ts" src="./SearchResults"></script>

<template>
	<ul class="list-group mt-2">
		<li class="list-group-item list-group-item-action">
			<h5>Nombre del lugar</h5>
			<p>esto es un texto</p>
			<div align="right">
				<button class="btn btn-outline-success btn-sm">
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
