import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Form from '@/components/Form';
import Login from '@/components/Login';
import Review from '@/components/Review';
import New from '@/components/New';
import Search from '@/components/Search';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/grammar', name: 'Main', component: Main},
    {path: '/form', name: "Form", component: Form},
    {path: '/login', name: "Login", component: Login},
    {path: '/review', name: "Review", component: Review},
    {path: '/new', name: "New", component: New},
    {path: '/search', name: "Search", component: Search}
  ]
})