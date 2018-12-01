import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store/store';
import Main from '@/components/Main';
import Signup from '@/components/Signup';
import Login from '@/components/Login';
import Review from '@/components/Review';
import New from '@/components/New';
import Search from '@/components/Search';
import ViewGrammar from '@/components/ViewGrammar';
import LandingPage from '@/components/LandingPage';

Vue.use(Router);

const isAuthenticated = (to, from, next) => {
  if(store.state.isLoggedIn) {
    next();
    return;
  }
  next("/");
};

export default new Router({
  routes: [
    {path: '/', name: 'LandingPage', component: LandingPage},
    {path: '/grammar', name: 'Main', component: Main, beforeEnter: isAuthenticated},
    {path: '/signup', name: "Signup", component: Signup},
    {path: '/login', name: "Login", component: Login},
    {path: '/grammar/review', name: "Review", component: Review, beforeEnter: isAuthenticated},
    {path: '/grammar/review/:id', name: "ViewGrammar", component: ViewGrammar, beforeEnter: isAuthenticated},
    {path: '/grammar/new', name: "New", component: New, props: true, beforeEnter: isAuthenticated},
    {path: '/grammar/search', name: "Search", component: Search, beforeEnter: isAuthenticated}
  ]
})
