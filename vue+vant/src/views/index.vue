<template>
	<div class="index">
		<van-field v-model="input" border clearable placeholder="传递参数">
		  <template #button>
		    <van-button size="small" type="primary" v-on:click="toList">跳转路由</van-button>
		  </template>
		</van-field>
	</div>
</template>

<script type="text/javascript">
	
	export default{
		data:function(){
			return{
				title:'首页',
				input:''
			};
		},
		methods:{
			toList(){
				this.$router.push({path:'/list',query:{id:+this.input}})
			}
		},
		created:function(){
			
		}
	}
</script>
<style type="text/css">
img{width: 100%;height: 200px;}
</style>