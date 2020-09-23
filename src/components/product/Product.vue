<template>

	<div class="col-md-4">
		<div class="container">
			
			<div style="border: 2px solid green; background-color: blue;">
				<h5 style="color: #fff;">Category Id: {{ product.category_id }}</h5>
				<h3 style="color: white; padding-left: 5px;">{{ product.name }}</h3>
				<p style="color: white; padding-left: 5px;">{{ product.price }}</p>
				<p style="color: white; padding-left: 5px;">{{ product.qty }}</p>
				<hr>

						<a href="#" class="btn btn-sm btn-danger" role="button">Delete</a>

				
			</div>
		</div> 
	</div>
</template>

<script>
	import swal from 'sweetalert'
	export default {
		props: ['product'],

		methods: {
		}
	}
</script>