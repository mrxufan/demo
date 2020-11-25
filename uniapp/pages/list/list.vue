<template>
	<view class="container">
		<text style="margin: 20rpx;display: block;">接收参数：{{id}}</text>
		<view class="list">
			<text v-for="item in list">{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	import commonJs from '../../static/js/common.js'
	var page=1;
	export default {
		data() {
			return {
				list:[],
				id:''
			}
		},
		methods: {
			getData(page){
				var _this=this;
				uni.showLoading({title:'加载中'})
				uni.request({
					url:'http://jsonplaceholder.typicode.com/posts',
					data:{
						_page:page,
						_limit:20
					},
					success(data) {
						uni.hideLoading()
						console.log(data)
						if(data.data.length>0){
							for (var i=0;i<data.data.length;i++) {
								_this.list.push(data.data[i])
							}
						}else{
							uni.showToast({
								title:'已加载全部',
								icon:'none'
							})
						}
						
					}
				})
			}
		},
		onLoad(data) {
			this.id=data.id
			page=1;
			this.getData(page)
		},
		// 滚动到底加载下一页
		onReachBottom() {
			page++;
			this.getData(page);
			
		},
		// 上拉刷新
		onPullDownRefresh() {
			page=1;
			this.list=[];
			uni.stopPullDownRefresh();
			this.getData(page)
		}
	}
</script>

<style>
	@import url("../../static/css/page.css");
	.list text{
		display: block;
		padding: 10px;
		border-bottom: 1px solid #eee;
	}
</style>
