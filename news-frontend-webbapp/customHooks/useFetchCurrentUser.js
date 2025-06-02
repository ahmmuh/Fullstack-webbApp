"use client";
import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../backend/authAPI";
import { useRouter } from "next/navigation";

const useFetchCurrentUser = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        if (error.message.toLowerCase().includes("unauthorized")) {
          return router.push("/login");
        }
      }
    };
    fetchUser();
  }, [router]);
  return { user, loading, error };
};

export default useFetchCurrentUser;
