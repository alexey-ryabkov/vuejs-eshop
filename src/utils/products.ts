import { isObject } from "@vueuse/core";
import { APP_ROUTES } from "@app/constants";
import type { Product } from "@entities/product";
import { getImageUrl } from "@api";
import { simpleHash, toBase36 } from "@shared/utils";

export const processProduct = (product: Product) => {
  const images = product.images.map(getImageUrl);
  const full_title = buildProductFullTitle(product);
  return {
    ...product,
    ...{
      full_title,
      sku: buildSku(full_title),
      link: buildProductLink(product),
      final_price: calcFinalPrice(product),
      image: images[0],
      images,
    },
  };
};

export const buildProductLink = (product: Product | number) =>
  `${APP_ROUTES.PRODUCTS}/${isObject(product) ? product.id : product}`;

function buildProductFullTitle(product: Product) {
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

function buildSku(name: string): string {
  const normalized = name.toLowerCase().trim();
  const hash = simpleHash(normalized);
  const body = toBase36(hash).padStart(12, "0").slice(0, 12);

  return `#${body}`;
}

const calcFinalPrice = ({ discount_price, price }: Product) =>
  discount_price ?? price;

export const isProductAvailiable = ({ is_available }: Product) =>
  !!is_available;

export const isProductDiscounted = ({ discount_price, price }: Product) =>
  discount_price ? discount_price < price : false;

export const getDiscountAmount = ({ discount_price, price }: Product) => {
  discount_price ??= price;
  const amount = price - discount_price;
  return amount > 0 ? amount : 0;
};

export const getDiscountPercent = (product: Product) => {
  const discount = getDiscountAmount(product);
  const { price } = product;
  return price > 0 ? Math.round((100 * discount) / price) : 0;
};
