import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DashboardLayout from "../components/DashboardLayout.vue";
import Surveys from "../views/Surveys.vue";
import store from "../store";

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: DashboardLayout,
    meta: {requiresAuth: true},
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/surveys',
        name: 'Surveys',
        component: Surveys
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    console.log('IF')
    next({
      name: 'Login',
    })
  } else if (store.state.user.token && (to.name === 'Login' || to.name === 'Register')) {
    console.log('ELSE IF')
    next({
      name: 'Dashboard',
    })
  } else {
    console.log('ELSE')
    next()
  }
})
export default router;
