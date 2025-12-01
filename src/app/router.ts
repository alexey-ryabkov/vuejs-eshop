import { createRouter, createWebHistory } from "vue-router";
import { APP_ROUTES } from "@app/constants";

const MainPage = () => import("@views/main");
const CategoryPage = () => import("@views/category");
const ProductPage = () => import("@views/product");
const FavoritesPage = () => import("@views/favorities");
const CartPage = () => import("@views/cart");
const Error404Page = () => import("@views/error404");

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
