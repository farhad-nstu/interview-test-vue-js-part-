<template>
	<div class="row">
		<my-category v-for="category in categories" :category="category" ></my-category>       
	</div>
</template>

<script>

	import Category from './Category.vue'

	export default {
		data() {
			return {
				categories: [] 
			}
		},

		components: {
			'my-category': Category
		},

		created() {
           this.$http.get('api/categories')
           .then(response => {
           	   this.categories = response.body
           })
		}
	}
</script>