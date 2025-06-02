import { BASE_URL } from "./base_url";

export const getAllPosts = async () => {
  try {
    const token = localStorage.getItem("userToken");
    const res = await fetch(`${BASE_URL}/posts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Unauthorized");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Serverfel vid hämtning av posts");
  }
};
