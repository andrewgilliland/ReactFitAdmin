"use server";
import { revalidatePath } from "next/cache";
import { BASE_URL } from "../utils";

const apiEndpoint = `${BASE_URL}/auth`;

const signUp = async (formData: FormData): Promise<void> => {
  revalidatePath("/");
  const email = formData.get("email");
  const password = formData.get("password");

  console.log("email: ", email);
  console.log("password: ", password);

  console.log("endpoint: ", `${apiEndpoint}/signup`);

  const response = await fetch(`${apiEndpoint}/signup`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.status === 200) {
    const { accessToken } = await response.json();
    console.log("accessToken: ", accessToken);
    // localStorage.setItem("accessToken", accessToken);
  }
};

const login = async (formData: FormData): Promise<void> => {
  const response = await fetch(`${apiEndpoint}/login`, {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 200) {
    const { accessToken } = await response.json();
    localStorage.setItem("accessToken", accessToken);
  }
};

export { signUp, login };
