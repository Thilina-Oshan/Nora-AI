import React from 'react';
import './news.css'; // We'll move styles here optionally

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <h2 className="newsletter-title">
        Newsletter: Stay Ahead with our AI Marketing Insights
      </h2>
      <p className="newsletter-subtitle">
        Get the latest marketing tips, analysis & trends. Be the first to know.
      </p>

      <form className="newsletter-form mt-3">
        <input type="email" placeholder="Email Address" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
