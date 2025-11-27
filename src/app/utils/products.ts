import { isObject } from "@vueuse/core";
import { APP_ROUTES } from "@app/constants";
import type { Product } from "@entities/product";
import { getImageUrl } from "@api";

const calcFinalPrice = ({ discount_price, price }: Product) =>
  discount_price ?? price;

export const processProduct = (product: Product) => {
  const images = product.images.map(getImageUrl);
  return {
    ...product,
    ...{
      link: buildProductLink(product),
      full_title: buildProductFullTitle(product),
      final_price: calcFinalPrice(product),
      image: images[0],
      images,
    },
  };
};

export function buildProductFullTitle(product: Product) {
  const { name, category, color, brand, characteristics } = product;
  let title = `${brand}, ${name}`;
  switch (category) {
    case "Аксессуары":
      title += `, ${color}`;
      break;
    case "Смартфоны":
    case "Планшеты":
      title += `, ${color}`;
      const { value: memory, unit_type: memoryUnits } =
        characteristics.find(
          ({ characteristic: name }) => name == "Объем встроенной памяти"
        ) ?? {};
      if (memory) {
        title += `, ${memory}${memoryUnits}`;
      }
      break;
  }
  return title;
}

export const buildProductLink = (product: Product | number) =>
  `${APP_ROUTES.PRODUCTS}/${isObject(product) ? product.id : product}`;
