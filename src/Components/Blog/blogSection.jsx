import React, { useEffect, useState } from 'react';
import './BlogSection.css';
import '/src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace this with your real API if ready
    const dummyPosts = [
      {
        title: 'What is AI Marketing? A Beginner’s Guide to Smarter Strategies',
        author: 'Chanuka Jeewantha',
        date: '2025 Jan 01',
        category: 'Marketing',
        description: 'Discover how AI is transforming the world of marketing. From automation to personalization, this beginner-friendly guide breaks down what AI marketing is, how it works, and why it’s the future of smarter, data-driven strategies.',
        image: '/src/assets/img/images.jpeg' // Make sure this is in /public/assets/img/
      },
      {
        title: 'The Future of Innovation in 2025',
        author: 'Ishanka Vishwa',
        date: '2025 Jan 15',
        category: 'Technology',
        description: 'Explore the trends that will dominate the tech world in 2025, from AI breakthroughs to new frontiers in sustainability and digital transformation.',
        image: '/src/assets/img/images.jpeg'
      },
      {
        title: 'Social Media Trends You Can’t Ignore',
        author: 'Dinithi Hansika',
        date: '2025 Feb 01',
        category: 'Social Media',
        description: 'Stay ahead of the game with the top social media trends for 2025. Learn what platforms and strategies will shape the future of digital engagement.',
        image: '/src/assets/img/images.jpeg'
      }
    ];

    setPosts(dummyPosts);
  }, []);

  return (
    <div className="text-white text-center py-5">
      <div className="my-4">
        <span className="glow-badge">BLOG</span>
      </div>

      <h2 className="fw-bold display-6 text-uppercase mb-5 text-glow">
        Insights, Ideas & Innovation
      </h2>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {posts.map((post, index) => (
            <div className="col-md-4" key={index}>
              <div className="card bg-dark text-start text-white h-100 border border-secondary rounded-4">
                <img
                  src={post.image}
                  className="card-img-top rounded-top-4 p-2"
                  alt="Blog Visual"
                />
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">{post.category}</span>
                  <h5 className="card-title fw-bold">{post.title}</h5>
                  <p className="card-text text-muted mb-1 small">
                    - {post.author} <i className="bi bi-calendar ms-2"></i> {post.date}
                  </p>
                  <p className="card-text small">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <a href="/blog" className="glow-button">
            Visit Our Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
