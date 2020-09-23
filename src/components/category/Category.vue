<template>

	<div class="col-md-4">
		<div class="container">
			
			<div style="border: 2px solid green; background-color: blue;">
				<h3 style="color: white; padding-left: 5px;">{{ category.name }}</h3>
				<p style="color: white; padding-left: 5px;">{{ category.status }}</p>

				<hr>
				<a class="btn btn-sm btn-danger" role="button" @click="deleteCategory(category)">Delete</a>
				
			</div>
		</div>
	</div>
</template>

<script>
	import swal from 'sweetalert'
	export default {
		props: ['category'],

		methods: {
			deleteCategory(category){
				// alert(id);
				this.$http.delete('api/categories/' + category.id)
				.then(response => {
					this.category = category;
					this.$router.push('/category');
					console.log(response)
				})
	                					
			}
		}
	}
</script>