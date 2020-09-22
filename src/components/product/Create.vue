<template>
	<div class="row">
		<div class="container" style="border: 2px solid green;">
			<div class="col-md-8 col-md-offset-2">
				<div class="panel panel-default">
					<div class="panel-body">
						<div class="form-group">
							<label>Product Name</label>
							<input type="text" name="name" class="form-control" v-model="name">							
						</div>
						<div class="form-group">
							<label>Product Price</label>
							<input type="number" class="form-control" v-model="price">
						</div>
						<div class="form-group">
							<label>Product Quantity</label>
							<input type="number" class="form-control" v-model="qty">
						</div>



	                    <div class="form-group">
	                        <label>Select Category</label>
	                        <select class="form-control" v-model="category_id" required >
		                        <option value>Select Category</option>
		                        <option
									v-for="category in categories" :key="category.name"
									:value="category.id">{{ category.name }}
								</option>
	                        </select>
	                    </div>

   
						<button class="btn btn-success pul-right" @click="create">
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
					name: '',
					price: '',
					qty: '',
					category_id: ''
			}
		},

		created() {
           this.$http.get('api/categories')
           .then(response => {

           	   this.categories = response.body
           	   console.log(this.categories)
           })
		},

		methods: {

			create () {
				this.$http.post('api/products', this.product)
				.then(response => {
					this.$router.push('/products')
				})
			}


		}
	}
</script>