<template>

	<div>
		<h1 style="text-align: center;">All Category</h1>
		<my-categories></my-categories>
	</div>
	
</template>

<script>
	import Categories from './category/Categories.vue'
	export default {
		components: {
			'my-categories': Categories
		}
	}
</script>