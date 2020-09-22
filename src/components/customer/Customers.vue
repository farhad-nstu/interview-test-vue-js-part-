<template>
	<div class="row">
		<my-customer v-for="customer in customers" :customer="customer" ></my-customer>       
	</div>
</template>

<script>

	import Customer from './Customer.vue'

	export default {
		data() {
			return {
				customers: []
			}
		},

		// computed: {
		// 	authenticatedUser () {
		// 		return this.$auth.getAuthenticatedUser()
		// 	}
		// }, // if we put this authenticatedUser in data then we do not get the user after refreshing. so we put this in the computed.

		components: {
			'my-customer': Customer
		},

		created() {
           this.$http.get('api/customers')
           .then(response => {
           	   this.customers = response.body
           })
		}
	}
</script>