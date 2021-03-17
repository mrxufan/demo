<template>
	<view class="container">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
						:duration="duration">
						<swiper-item>
							<image src="../../static/images/01.jpg" mode=""></image>
						</swiper-item>
						<swiper-item>
							<image src="../../static/images/02.jpg" mode=""></image>
						</swiper-item>
						<swiper-item>
							<image src="../../static/images/03.jpg" mode=""></image>
						</swiper-item>
						
					</swiper>
				</view>
			</view>
		</view>
		

		<view class="wrap">
			<button size="mini" type="default" v-on:click="openScanCode">打开扫码</button>
			<button size="mini" type="default" v-on:click="openPhoneBluetooth">打开蓝牙</button>
			<button size="mini" type="default" v-on:click="getPosition">获取位置</button>
			<button size="mini" type="default" v-on:click="chooseImg">选择图片</button>
			<button size="mini" type="default" v-on:click="setScreenLightAdd">屏幕亮度最亮</button>
			<button size="mini" type="default" v-on:click="setScreenLightMin">屏幕亮度中间</button>
			<button size="mini" type="default" v-on:click="setScreenLightDark">屏幕亮度最暗</button>
			<button size="mini" type="default" v-on:click="setBarTitle">设置导航栏标题</button>
			<button size="mini" type="default" v-on:click="getNetworkType">获取网络类型</button>
			<button size="mini" type="default" v-on:click="getSystemInfo">获取系统信息</button>
			<button size="mini" type="default" v-on:click="addUser">添加手机联系人</button>
		</view>


		<view class="form">
			<input type="text" v-model="value" />
			<button size="mini" type="default" v-on:click="toList">跳转</button>
			<button size="mini" type="default" v-on:click="test=''">清空打印</button>
		</view>
		<div>{{test}}</div>
	</view>
</template>

<script>
	import commonJs from '../../static/js/common.js'
	export default {
		data() {
			return {
				value: '', //输入框
				test: '',
				screenValue: 0, //屏幕亮度值
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			// 跳转到list页面
			toList() {
				uni.navigateTo({
					url: '../list/list?id=' + this.value
				})
			},
			// 打开扫码
			openScanCode() {
				uni.scanCode({
					scanType: ['barCode'],
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);

						uni.showToast({
							title: '条码类型：' + res.scanType
						})
					}
				});
			},
			
			// 关闭蓝牙
			closeBluetooth() {
				uni.closeBluetoothAdapter({
					success(res) {
						console.log('关闭蓝牙', res)
					}
				})
			},
			// 搜索蓝牙设备
			searchBluetooth() {
				var _this = this;

				uni.getBluetoothAdapterState({
					success(res) {
						_this.test = res
					}
				})
			},
			// 获取位置
			getPosition() {
				var _this = this;
				uni.getLocation({
					success: function(res) {
						_this.test = res;
					}
				})
			},
			// 设置
			openSet() {
				var _this = this;
				_this.test = uni
			},
			// 选择图片
			chooseImg() {
				var _this = this;
				uni.chooseImage({
					count: 2, //最多2张
					sourceType: ['camera', 'album'], //album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
					success: function(res) {
						_this.test = res; //成功则返回图片的本地文件路径列表 tempFilePaths
					}
				})
			},
			// 设置屏幕亮度最亮
			setScreenLightAdd() {
				uni.setScreenBrightness({
					value: 1,
					success: function() {
						console.log('success');
					}
				});


			},
			// 设置屏幕亮度最暗
			setScreenLightDark() {
				uni.setScreenBrightness({
					value: 0,
					success: function() {
						console.log('success');
					}
				});
			},
			// 设置屏幕亮度中间值
			setScreenLightMin() {
				uni.setScreenBrightness({
					value: 5,
					success: function() {
						console.log('success');
					}
				});

			},
			// 获取屏幕亮度
			getScreenLight() {
				var _this = this;

				uni.getScreenBrightness({
					success(res) {
						_this.screenValue = res.value.toFixed(1)
					}
				})

				console.log('屏幕亮度：', _this.screenValue)
			},
			// 设置导航栏标题
			setBarTitle() {
				uni.setNavigationBarTitle({
					title: '新的标题'
				});
			},
			// 获取网络类型
			getNetworkType(){
				uni.getNetworkType({
				    success: function (res) {
						uni.showToast({
							title:res.networkType,
							icon:'none'
						})
				    }
				});
			},
			// 获取系统信息
			getSystemInfo(){
				var _this=this;
				uni.getSystemInfo({
				    success: function (res) {
						_this.test=res
				        console.log(res);
				    }
				});
			},
			// 添加手机联系人
			addUser(){
				uni.addPhoneContact({
				    lastName: '张',
				    firstName: '三',
					mobilePhoneNumber:'13888888888',
				    success: function () {
				        console.log('成功');
						uni.showToast({
							title:'添加成功',
							icon:'none'
						})
				    },
				    fail: function () {
				        console.log('失败');
						uni.showToast({
							title:'添加失败',
							icon:'none'
						})
				    }
				});
			},
			// 打开蓝牙
			openPhoneBluetooth(){
				var main,BluetoothAdapter,BAdapter;
				switch(uni.getSystemInfoSync().platform){
					case 'android':
						console.log('运行在Android上');
						main=plus.android.runtimeMainActivity();
						BluetoothAdapter=plus.android.importClass("android.bluetooth.BluetoothAdapter");
						BAdapter=BluetoothAdapter.getDefaultAdapter();
						if(!BAdapter.isEnabled()){
							BAdapter.enable();
						}
						break;
					case 'ios':
						console.log('运行在ios上');
						break;
					default:
						console.log('其他');
						break;
				}
			}

		},
		onShow() {
			commonJs.add(1, 2); //调用common.js的方法
			this.getScreenLight()
		},
		onLoad() {
			
		},
	}
</script>

<style>
	@import url("../../static/css/page.css");

	.wrap button {
		margin: 10px;
	}

	.swiper image {
		width: 100%;
	}

	.form button,
	.form input {
		float: left;
	}

	.form {
		margin: 20rpx;
	}

	.form input {
		border: 1rpx solid #ddd;
		padding: 4rpx;
	}

	.unit {
		width: 100rpx;
		height: 100rpx;
		background-color: #333;
	}
</style>
