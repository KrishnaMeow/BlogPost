import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries/post-queries";

const PostList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <ul className="grid gap-4">
      {data.posts.map((post) => (
        <li
          key={post.id}
          className="border border-gray-200 rounded-md p-4 shadow-md"
        >
          <h2 className="text-lg font-semibold mb-2">
            <Link
              to={`/post/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              {post.title}
            </Link>
          </h2>
          <p className="text-gray-700">{post.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
