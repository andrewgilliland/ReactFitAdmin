"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/utils/supabase/server";
import { FormState } from "@/types";
import { cookies } from "next/headers";

const getAuthJWT = async () => {
  const storageKey = `sb-${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID}-auth-token`;
  const cookieStore = cookies();
  const authCookie = cookieStore.get(storageKey);

  console.log("authCookie: ", authCookie?.value);

  return authCookie?.value;
};

const signIn = async (formData: FormData) => {
  const supabase = createClient();

  // TODO: validate form data
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const signInData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data, error } = await supabase.auth.signInWithPassword(signInData);

  console.log("data: ", data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/profile");
};

const signup = async (prevState: FormState, formData: FormData) => {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error("error: ", error);

    return {
      success: false,
      message: error.message,
      errors: { name: error.message },
    };
  }

  revalidatePath("/", "layout");
  redirect("/profile");
  return {
    success: true,
    message: `User: ${data.email} created!`,
    errors: undefined,
  };
};

const getUser = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

const logout = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
};

export { signIn, signup, getUser, logout, getAuthJWT };

// import { BASE_URL } from "../utils";

// const apiEndpoint = `${BASE_URL}/auth`;

// const signUp = async (formData: FormData): Promise<void> => {
//   revalidatePath("/");
//   const email = formData.get("email");
//   const password = formData.get("password");

//   console.log("email: ", email);
//   console.log("password: ", password);

//   console.log("endpoint: ", `${apiEndpoint}/signup`);

//   const response = await fetch(`${apiEndpoint}/signup`, {
//     method: "POST",
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   });

//   if (response.status === 200) {
//     const { accessToken } = await response.json();
//     console.log("accessToken: ", accessToken);
//     // localStorage.setItem("accessToken", accessToken);
//   }
// };

// const login = async (formData: FormData): Promise<void> => {
//   const response = await fetch(`${apiEndpoint}/login`, {
//     method: "POST",
//     body: JSON.stringify({
//       email: formData.get("email"),
//       password: formData.get("password"),
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.status === 200) {
//     const { accessToken } = await response.json();
//     localStorage.setItem("accessToken", accessToken);
//   }
// };

// export { signUp, login };
