import { APP_ROUTES } from "@app/constants";
import { createRouter, createWebHistory } from "vue-router";

const MainPage = () => import("@views/main");
const CategoryPage = () => import("@views/Category.vue");
const ProductPage = () => import("@views/Product.vue");
const FavoritesPage = () => import("@views/Favorites.vue");
const CartPage = () => import("@views/Cart.vue");
const Error404Page = () => import("@views/Error404.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: APP_ROUTES.MAIN, component: MainPage },
    {
      path: APP_ROUTES.CATEGORIES,
      children: [
        // { path: "", component: /* ... */ },
        { path: ":id", component: CategoryPage },
      ],
    },
    {
      path: APP_ROUTES.PRODUCTS,
      children: [
        // { path: "", component: /* ... */ },
        { path: ":id", component: ProductPage },
      ],
    },
    { path: APP_ROUTES.FAVORITES, component: FavoritesPage },
    { path: APP_ROUTES.CART, component: CartPage },
    { path: APP_ROUTES.UNKNOWN, component: Error404Page },
    { path: "/:pathMatch(.*)*", redirect: APP_ROUTES.UNKNOWN },
  ],
});

export default router;
