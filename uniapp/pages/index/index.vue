<template>
	<view class="container">
		
		<view class="form">
			<input type="text" @input="input" />
			<button size="mini" type="default" v-on:click="toList">跳转</button>
		</view>
		
	</view>
</template>

<script>
	import commonJs from '../../static/js/common.js'
	export default {
		data() {
			return {
				value:'',//输入框
				latitude: 39.909,
				longitude: 116.39742,
			}
		},
		methods: {
			toList(){
				uni.navigateTo({
					url:'../list/list?id='+this.value
				})
			},
			input(e){
				this.value=e.detail.value
			}
		},
		onShow() {
			commonJs.add(1,2);//调用common.js的方法
		}
	}
</script>

<style>
	@import url("../../static/css/page.css");
	
	.swiper image{width: 100%;}
	.form button,.form input{float: left;}
	.form{margin: 20rpx;}
	.form input{border: 1rpx solid #ddd;padding: 4rpx;}
</style>
