<template>
	<div>
		<van-nav-bar
		  left-text="返回"
		  left-arrow
		  @click-left="$router.go(-1)"
		/>
		传递参数：{{this.$route.query.id?this.$route.query.id:''}}
		
		<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
			<van-list immediate-check
			  v-model="loading"
			  :finished="finished"
			  finished-text="没有更多了"
			  @load="nextPage"
			>
			  <van-cell v-for="item in list" :title="item.title" />
			  <!-- <ul class="list">
			  	<li v-for="(item,index) in list">{{index+1}}. {{item.title}}</li>
			  </ul> -->
			</van-list>
		</van-pull-refresh>
		
	</div>
</template>
<script type="text/javascript">
	var page=1;
	export default {
		data: function() {
			return {
				loading: false,
				finished: false,
				list:[],
				refreshing: false,
			};
		},
		methods: {
			// 发送请求
			getList(page){
				var _this=this;
				// var loading=_this.$toast.loading({duration:0});//开启loading
				_this.$axios({
					  method: 'get',
					  url: 'http://jsonplaceholder.typicode.com/posts',
					  params: {
						_page:page,
						_limit:20
					  }
					}).then(function(data){
						// loading.clear();//关闭loading
						if(data.data.length>0){
							_this.loading = false;
							for (var i=0;i<data.data.length;i++) {
								_this.list.push(data.data[i])
							}
						}else{
							_this.finished=true;
						}
						 
						console.log('数据',data)
					}).catch(function(error){
						console.log(error);
					});
			},
			// 滚动到底加载下一页数据
			nextPage(){
				page++;
				this.getList(page);
				console.log('到底了')
			},
			onRefresh(){
				console.log('下拉刷新');
				this.refreshing=false;
				this.loading = false;
				this.finished=false;
				page=1;
				this.list=[];
				this.getList(page);
			}
		},
		created: function() {
			page=1;
			this.getList(page);
		}
	};
</script>
<style scoped="scoped" type="text/css">
.list li{padding: 10px;border-bottom: 1px solid #eee;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
</style>
