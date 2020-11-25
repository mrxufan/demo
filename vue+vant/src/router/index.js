import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {path:'/',name:'default',redirect:'/index',component:()=>import('../views/index.vue')},//默认加载路由
  {path: '/index',name: 'index',component:()=>import('../views/index.vue')},//首页
  {path: '/list',name: 'list',component:()=>import('../views/list.vue')},//我的
];

const router = new VueRouter({
  routes
});

export default router;
