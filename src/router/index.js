import { createRouter, createWebHashHistory } from 'vue-router';

import Users from '../components/Users.vue';
const UserPost = () => import('../components/UserPost.vue');


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Users },
  { path: '/posts/:id', component: UserPost }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router;
