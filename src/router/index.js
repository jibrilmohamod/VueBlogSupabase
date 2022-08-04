import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import article from "../views/TheArticleDetails.vue"

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
  {
   path: "/",
   name: "home",
   component: HomeView,
  },
  {
   path: "/register",
   name: "register",
   component: () => import("../views/TheRegister.vue"),
  },
  {
   path: "/login",
   name: "login",
   component: () => import("../views/TheLogin.vue"),
  },
  {
   path: "/article/:slug",
   name: "article",
   component: article,
  },
 ],
})

export default router
