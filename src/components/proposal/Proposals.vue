<template>
	<div class="row">
		<my-proposal v-for="proposal in proposals" :proposal="proposal" ></my-proposal>        
	</div>
</template>

<script>

	import Proposal from './Proposal.vue'

	export default {
		data() {
			return {
				proposals: [], 
			}
		},
		
		components: { 
			'my-proposal': Proposal 
		},

		created() {
			this.$http.get('api/proposals')
			.then(response => {
				this.proposals = response.body
			})
		}
	}
</script>