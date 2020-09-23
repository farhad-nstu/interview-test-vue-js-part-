<template>
	<div class="row">
		<div class="container" style="border: 2px solid green;">
			<div class="col-md-8 col-md-offset-2">
				<div class="panel panel-default">
					<div class="panel-body">

						<div class="form-group">
							<label>Select Customer</label>
							<select class="form-control" v-model="proposal.customer_id" >
								<option value>Select Customer</option>
								<option
								v-for="customer in customers" :key="customer.name"
								:value="customer.id">{{ customer.name }}
							</option>
						</select> 
					</div>

					<div class="form-group">
						<label>Proposal Number</label>
						<input type="text" name="number" class="form-control" v-model="proposal.number">							
					</div>

					<div class="form-group">
						<label>Select Category</label>
						<select class="form-control" v-model="proposal.category_id" >
							<option value>Select Category</option>
							<option
							v-for="category in categories" :key="category.name"
							:value="category.id">{{ category.name }}
						</option>
					</select>
				</div>

				<div class="form-group"> 
					<label>Discount Apply</label>
					<input type="checkbox" class="form-control" v-model="proposal.discount">
				</div>

				<button class="btn btn-success pul-right m-1" @click="create">
					Save
				</button>
			</div>
		</div>
	</div>	
</div>	    
</div>
</template>

<script>



	export default {

		data() {
			return {
				categories: [],
				customers: [],
				proposal: {
					number: '',
					discount: '',
					category_id: '',
					customer_id: ''
				}
			}
		},

		mounted() {
			this.getCategories();
			this.getCustomers();
		},

		// created() {
  //     this.$http.get('api/categories')
  //     .then(response => {

  //    	  this.categories = response.body
  //    	  console.log(this.categories);
  //     })
		// },

		methods: {
			getCategories() {
				this.$http.get('api/categories')
				.then(response => {
					this.categories = response.body;
					console.log(this.categories);
				})
			},

			getCustomers() {
				this.$http.get('api/customers')
				.then(response => {
					this.customers = response.body;
					console.log(this.customers);
				})
			},

			create () {
				this.$http.post('api/proposals', this.proposal)
				.then(response => {
					this.$router.push('/proposal');
				})
			}


		}
	}
</script>