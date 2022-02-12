import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DashboardLayout from "../components/DashboardLayout.vue";

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
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
export default router;
