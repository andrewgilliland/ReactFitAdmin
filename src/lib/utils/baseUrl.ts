export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://0.0.0.0:8080"
    : "https://fastifyapi.fly.dev";
