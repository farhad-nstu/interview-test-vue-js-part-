<template>

	<div class="col-md-4">
		<div class="container">
			
			<div style="border: 2px solid green; background-color: blue;">
				<h3 style="color: white; padding-left: 5px;">{{ category.name }}</h3>
				<p style="color: white; padding-left: 5px;">{{ category.status }}</p>

				<hr>
				<a href="#" class="btn btn-sm btn-danger" role="button">Delete</a>
				
			</div>
		</div>
	</div>
</template>

<script>
	import swal from 'sweetalert'
	export default {
		props: ['category'],
	}
</script>