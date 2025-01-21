import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST, GET_POSTS } from "../queries/post-queries";

const PostForm = () => {
  const [form, setForm] = useState({ title: "", content: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [{ query: GET_POSTS }],
    onCompleted: () => {
      setSuccessMessage("Post added successfully!");
      setErrorMessage("");
    },
    onError: (error) => {
      setErrorMessage(`Error: ${error.message}`);
      setSuccessMessage("");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost({ variables: { postInput: form } });
    setForm({ title: "", content: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mb-6 border border-gray-200 p-4 rounded-md shadow-sm"
    >
      <input
        type="text"
        placeholder="Enter Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Enter Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        required
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        Add Post
      </button>

      {successMessage && (
        <div className="text-green-500 mt-4">{successMessage}</div>
      )}
      {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
    </form>
  );
};

export default PostForm;
