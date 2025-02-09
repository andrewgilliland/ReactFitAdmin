declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_PROJECT_ID: string;
      NEXT_PUBLIC_SUPABASE_URL: string;
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: string;
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: string;
      LOCAL_BACKEND_URL: string;
      PROD_BACKEND_URL: string;
    }
  }
}

export {};
