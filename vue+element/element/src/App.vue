<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#333" text-color="#fff" active-text-color="#fff">
      <el-menu-item index="1">处理中心</el-menu-item>
	  <el-menu-item index="2">处理中心</el-menu-item>
      <el-submenu index="3">
        <template slot="title">我的工作台</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
	
	<router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
	  return{
		activeIndex: '1',
		activeIndex2: '1'
	  }
  },
  components: {
    HelloWorld
  },
  methods:{
	  handleSelect(key, keyPath) {
	        console.log(key, keyPath);
			if(key==1){
				this.$router.push({path: '/'})
			}
			if(key==2){
				this.$router.push({name: 'About'})
			}
	  }
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
</style>
