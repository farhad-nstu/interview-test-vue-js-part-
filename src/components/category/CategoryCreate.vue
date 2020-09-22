<template>
	<div class="row">
		<div class="container" style="border: 2px solid green;">
			<div class="col-md-8 col-md-offset-2">
				<div class="panel panel-default">
					<div class="panel-body">
						<div class="form-group">
							<label>Category Name</label>
							<input type="text" name="name" class="form-control" v-model="category.name">					
						</div>
						<div class="form-group">
							<label>Category Status</label>
							<input type="text" name="status" class="form-control" v-model="category.status">					
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
				category: {
					name: '',
					status: '',
				}
			}
		},

		methods: {

			create () {
				this.$http.post('api/categories', this.category)
				.then(response => {
					this.$router.push('/category')
				})
			}


		}
	}
</script>