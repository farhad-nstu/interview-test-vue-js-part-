<template>

	<div class="col-md-4">
		<div class="container">
			
			<div style="border: 2px solid green; background-color: blue;">
				<h5 style="color: #fff;">Category Id: {{ proposal.category_id }}</h5>
				<h3 style="color: white; padding-left: 5px;">{{ proposal.number }}</h3>
				<p style="color: white; padding-left: 5px;">{{ proposal.customer_id }}</p>
				<p style="color: white; padding-left: 5px;">{{ proposal.discount }}</p>
				<hr>

				<a href="#" class="btn btn-sm btn-danger" role="button">Delete</a>
				 
			</div>
		</div> 
	</div>
</template>

<script> 
	import swal from 'sweetalert'
	export default {
		props: ['proposal'],

		methods: {
		}
	}
</script>