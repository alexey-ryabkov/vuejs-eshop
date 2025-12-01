import { API_BASE_URL, API_ENDPOINTS } from "@app/constants";

export * from "./types";
export * from "./utils";

export const getImageUrl = (path: string) =>
  `${API_BASE_URL}${API_ENDPOINTS.IMAGE}${path.replace(/^\/+/, "")}`;
