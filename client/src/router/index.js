import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Signup from '@/components/Signup';
import Login from '@/components/Login';
import Review from '@/components/Review';
import New from '@/components/New';
import Search from '@/components/Search';
import ViewGrammar from '@/components/ViewGrammar';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/grammar', name: 'Main', component: Main},
    {path: '/signup', name: "Signup", component: Signup},
    {path: '/login', name: "Login", component: Login},
    {path: '/grammar/review', name: "Review", component: Review},
    {path: '/grammar/review/:id', name: "ViewGrammar", component: ViewGrammar},
    {path: '/grammar/new', name: "New", component: New, props: true},
    {path: '/grammar/search', name: "Search", component: Search}
    
  ]
})
