import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the post ID from the URL
import { useQuery } from "@apollo/client";
import { GET_POST_ID } from "../queries/post-queries"; // Use the correct query

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL

  const { loading, error, data } = useQuery(GET_POST_ID, {
    variables: { id }, // Pass the id as a variable to the query
  });

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error loading post: {error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{data.post.title}</h2>
      <p>{data.post.content}</p>
    </div>
  );
};

export default PostDetail;
