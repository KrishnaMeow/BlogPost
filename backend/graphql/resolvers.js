const Post = require('../models/post');  // Assuming you have a Post model

const resolvers = {
  posts: async () => {
    return await Post.find();  // Returns all posts from MongoDB
  },
  post: async ({ id }) => {
    return await Post.findById(id);  // Returns a single post by ID
  },
  addPost: async ({ postInput }) => {
    const post = new Post({
      title: postInput.title,
      content: postInput.content
    });
    return await post.save();  // Saves the new post to MongoDB and returns it
  }
};

module.exports = resolvers;
