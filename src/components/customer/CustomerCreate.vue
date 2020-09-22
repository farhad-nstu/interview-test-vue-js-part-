<template>
	<div class="row">
		<div class="container" style="border: 2px solid green;">
			<div class="col-md-8 col-md-offset-2">
				<div class="panel panel-default">
					<div class="panel-body">
						<div class="form-group">
							<label>Customer Name</label>
							<input type="text" name="name" class="form-control" v-model="customer.name">					
						</div>
						<div class="form-group">
							<label>Customer Email</label>
							<input type="text" name="email" class="form-control" v-model="customer.email">					
						</div>
						<div class="form-group">
							<label>Customer Mobile No.</label>
							<input type="text" name="mobile" class="form-control" v-model="customer.mobile">					
						</div>
						<div>
						    <!-- <img src:"image" class="uploading-image" /> -->
						    <input type="file" accept="image/*" @change=uploadImage>
						</div>      
						<!-- <button class="btn btn-success pul-right" v-show="product.name && product.price && product.description" @click="create">
						   Save
						</button> -->
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
		name:'imageUpload',
		data() {
			return {
				customer: {
					name: '',
					email: '',
					mobile: '',
					uniq_id: '',
					image:null
				}
			}
		},

		methods: {

			uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.customer.image = e.target.result;
                    console.log(this.customer);
                };
            },
        

			/*imageChanged (e) {
				console.log(e.target.files[0])
                var fileReader = new FileReader()

                fileReader.readAsDataURL(e.target.files[0])

                fileReader.onlaod = (e) => {
                	this.product.image = e.target.result
                }
                console.log(this.product)
			},
*/




			create () {
				this.$http.post('api/customers', this.customer)
				.then(response => {
					this.$router.push('/feed')
				})
			}


		}
	}
</script>