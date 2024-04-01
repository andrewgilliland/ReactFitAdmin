export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.LOCAL_BACKEND_URL
    : process.env.PROD_BACKEND_URL;
