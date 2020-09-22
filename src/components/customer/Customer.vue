<template>

	<div class="col-md-4">
		<div class="container">
			
			<div style="border: 2px solid green; background-color: blue;">
				<img :src="'http://127.0.0.1:8000/' + customer.image" style="width: 100px; height: 100px; border-radius: 50%;" class="pull-right">
				<h5 style="color: #fff;">Uniq Id: {{ customer.uniq_id }}</h5>
				<h3 style="color: white; padding-left: 5px;">{{ customer.name }}</h3>
				<p style="color: white; padding-left: 5px;">{{ customer.email }}</p>
				<p style="color: white; padding-left: 5px;">{{ customer.mobile }}</p>
				<hr>

				<hr>
						<a href="#" class="btn btn-sm btn-danger" role="button">Delete</a>
				
			</div>
		</div>
	</div>
</template>

<script>
	import swal from 'sweetalert'
	export default {
		props: ['customer'],
	}
</script>