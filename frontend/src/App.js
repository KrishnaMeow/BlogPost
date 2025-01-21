import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Layout from './components/layout';
import PostList from './components/post-list';
import PostForm from './components/post-form';
import PostDetail from './components/post-detail';
import ApolloWrapper from './apollo/apollo-wrapper';

const App = () => {
  return (
    <ApolloWrapper>
      <Router>
        <Layout>
          <h1 className="text-2xl font-bold text-center mb-6">Blog Posts</h1>
          <Routes> {/* Use Routes to define routes */}
            <Route path="/" element={<><PostForm /><PostList /></>} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </Layout>
      </Router>
    </ApolloWrapper>
  );
};

export default App;

