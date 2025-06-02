"use client";
import Link from "next/link";
import React from "react";
import useFetchPost from "../../../../customHooks/useFetchPost";

function PostPage() {
  const { posts, loading, error } = useFetchPost();
  console.log("Posts i dashboard", posts);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <h4 className="text-blue-400">Loading</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <h4 className="text-blue-400">{error}</h4>
      </div>
    );
  }
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div
            key={post._id}
            className="bg-white mt-5 p-5 shadow-lg w-full max-w-md border-l-2 border-l-green-600">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <span className="block text-sm">
              Created at {new Date(post.createdAt).toLocaleString()}
            </span>
            <div className="mt-6">
              <Link
                href={`/dashboard/posts/${post._id}`}
                className="text-blue-500 font-medium underline">
                View
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PostPage;
