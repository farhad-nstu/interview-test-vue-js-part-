<template>
	<div>
		<h1 style="text-align: center;">All Proposals</h1>
		<my-proposals></my-proposals>
	</div>
	
</template>

<script>
	import Proposals from './proposal/Proposals.vue'
	export default {
		components: {
			'my-proposals': Proposals
		}
	}
</script>