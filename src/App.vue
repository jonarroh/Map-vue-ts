<script setup lang="ts">
import HomeView from './view/HomeView.vue';
</script>

<template>
	<HomeView></HomeView>
	<img src="./assets/logo.png" alt="logo" class="logo" />
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	color: #2c3e50;
	margin-top: 60px;
}
.logo {
	position: fixed;
	bottom: 0;
	right: 0;
	width: 100px;
}
</style>
