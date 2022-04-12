import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/trending",
      name: "trending",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Trending.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/Settings.vue"),
    },
    {
      path: "/items",
      name: "Setup Items",
      component: () => import("../views/Items.vue"),
    },
    {
      path: '/:user/:date',
      name: 'posts',
      component: () => import('../views/Post.vue'),
      props: true,
    },
  ],

});

/* router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  // ...
}) */

export default router;
