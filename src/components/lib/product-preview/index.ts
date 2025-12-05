export { default } from "./ProductPreview.vue";

export type ProductPreviewProps = {
  title: string;
  price: number;
  image: string;
  link: string;
  isFavorite?: boolean;
  isAvailiable?: boolean;
};
