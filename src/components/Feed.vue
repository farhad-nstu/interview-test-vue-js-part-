<template>

	<div>
		<h1 style="text-align: center;">All Products</h1>
		<my-customers></my-customers>
	</div>
	
</template>

<script>
	import Customers from './customer/Customers.vue'
	export default {
		components: {
			'my-customers': Customers
		}
	}
</script>