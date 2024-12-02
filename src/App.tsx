import React from 'react';
import { Layout } from './components/Layout';
import { BlogPost } from './components/BlogPost';
import { posts } from './data/posts';

function App() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' }
  ];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <div className="space-y-8">
        <section className="text-center mb-12">
          <h1 className="font-serif text-4xl text-gray-800 mb-4">Welcome to My Digital Garden</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A cozy corner of the internet where thoughts bloom and ideas grow.
            Here, we embrace the beauty of simplicity and the joy of sharing.
          </p>
        </section>
        
        <section>
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default App;