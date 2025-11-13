declare module "virtual:svg-icons-register" {
  const value: unknown;
  export default value;
}

declare module "*as=srcset" {
  const srcset: string;
  export default srcset;
}

declare module "*as=picture" {
  type PictureSet = {
    webp?: string;
    avif?: string;
    png?: string;
    jpg?: string;
  };
  const picture: PictureSet;
  export default picture;
}
