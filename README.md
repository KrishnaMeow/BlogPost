Blog Application with GraphQL & React
This is a full-stack blog application built using Node.js, Express, MongoDB Atlas, and React with Apollo Client. The app allows users to create, view, and manage blog posts via a GraphQL API.

Features
Create a post: Allows users to add new blog posts.
View posts: Displays a list of all blog posts.
GraphQL API: Uses a GraphQL API for handling queries and mutations for posts.
MongoDB Atlas: Database hosted on MongoDB Atlas for storing posts.

Tech Stack
Backend:
Node.js
Express
MongoDB Atlas
GraphQL
Apollo Server

Frontend:
React
Apollo Client
GraphQL

Setup Instructions
Clone the repository:
git clone https://github.com/KrishnaMeow/BlogPost.git

Backend setup
cd backend
Install the dependencies:
npm install
Create a .env file in the backend folder and add your MongoDB Atlas URI:
MONGO_URI=mongodb+srv://Admin:Admin%402025@cluster0.6md9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
Run the backend server:
node index.js
The backend will now be running on http://localhost:5000.

Frontend Setup
Go to the frontend directory:
cd frontend

Install the dependencies:
npm install

Start the frontend development server:
npm start

The frontend will now be running on http://localhost:3000.

Ensure that both the backend and frontend servers are running to interact with the full application.

Usage
Open your browser and go to http://localhost:3000 to interact with the app.
You can create new posts using the form provided in the frontend, and they will be stored in the MongoDB database.
All posts can be viewed on the same page, retrieved via GraphQL queries.

Project Structure
Backend Structure:
backend/
├── models/
│   └── Post.js
├── graphql/
│   ├── schema.js
│   └── resolvers.js
├── .env
├── index.js
models/Post.js: Defines the schema for the posts in the database.
graphql/schema.js: Contains the GraphQL schema definition.
graphql/resolvers.js: Contains the resolvers for the GraphQL queries and mutations.
index.js: The entry point for the backend server.

Frontend Structure:
frontend/src/
├── components/
│   ├── PostForm.js
│   ├── PostList.js
│   └── Layout.js
├── apollo/
│   └── ApolloProvider.js
├── queries/
│   └── postQueries.js
├── App.js
├── App.css
├── index.js
components/PostForm.js: Handles the form for adding new blog posts.
components/PostList.js: Displays the list of blog posts.
apollo/ApolloProvider.js: Configures the Apollo Client for making GraphQL requests.
queries/postQueries.js: Contains GraphQL queries for fetching and adding posts.
Environment Variables
MONGO_URI: MongoDB Atlas connection string to connect to the MongoDB database.

License
This project is licensed under the MIT License - see the LICENSE file for details.
