import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: () => import('../views/home/trip_home.vue'),
    },
    {
      path: "/favor",
      name: "favor",
      component: () => import("../views/favor/trip_favor.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("../views/message/trip_message.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../views/order/trip_order.vue"),
    },
    {
      path: "/city",
      name: "city",
      component: () => import("../views/city/trip_city.vue"),
      meta: {
        hiddlenTabbar: true
      }
    },
  ],
});

export default router;
