"use client";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "../backend/postAPI";

const useFetchPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      try {
        setPosts(postList);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return { posts, loading, error };
};

export default useFetchPost;
