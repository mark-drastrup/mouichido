import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Form from '@/components/Form';
import Login from '@/components/Login';
import Review from '@/components/Review';
import New from '@/components/New';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'Hello', component: Hello},
    {path: '/form', name: "Form", component: Form},
    {path: '/login', name: "Login", component: Login},
    {path: '/review', name: "Review", component: Review},
    {path: '/new', name: "New", component: New}
  ]
})
