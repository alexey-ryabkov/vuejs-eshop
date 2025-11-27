import { isObject } from "@vueuse/core";
import { APP_ROUTES } from "@app/constants";
import type { Category } from "@entities/category";

const categoryIcons: Record<string, string> = {
  Смартфоны: "phone",
  Компьютеры: "computer",
  Планшеты: "tablet",
  Часы: "watch",
  Гаджеты: "joystick",
  Аксессуары: "headphones",
};
export const processCategory = (category: Category) => ({
  ...category,
  ...{
    link: buildCategoryLink(category),
    icon: categoryIcons?.[category.name],
  },
});

export const buildCategoryLink = (category: Category | number) =>
  `${APP_ROUTES.CATEGORIES}/${isObject(category) ? category.id : category}`;
