import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

import { getAuth } from "firebase/auth";

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
      path: "/create/setup",
      name: "create_post",
      component: () => import("../views/Post.vue"),
      meta: {authRequired: true,},
    },
    {
      path: '/:user/:date',
      name: 'posts',
      component: () => import('../views/Post.vue'),
      props: true,
    },
    {
      path: '/items/:item',
      name: 'item',
      component: () => import('../views/Item.vue'),
      props: true,
    },

    // Authentication stuff
    {
      path: '/login',
      name: 'Authentication',
      component: () => import('../views/Auth.vue'),
    },
    {
      path: '/recover',
      name: 'recover password',
      component: () => import('../views/Recover.vue'),
    },
  ],

});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});

/* router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  // ...
}) */

export default router;
