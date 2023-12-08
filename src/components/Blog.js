import React from 'react';
import '../App.css';

const sampleBlogPosts = [
  {
    id: 1,
    title: 'Delicious & Nutritious: 5 Salad Recipes to Brighten your Day!',
    content: 'Explore a variety of refreshing and full of nutrient salads that are full of colour and flavour! From citrus to sweet, find the perfect combination to nourish your body...',
    imageUrl: 'chopped-salad.jpeg',
    altText: 'Image',
    date: new Date('2022-10-15'),
  },
  {
    id: 2,
    title: 'The Power of Yoga: Transform Your Body Through Strength and Balance',
    content: 'Dive into the various benefits of yoga. From helping your mental health to enhancing your physical strenght, this ancient practice offers a holistic approach to health...',
    imageUrl: 'yoga-image.jpg',
    altText: 'Image',
    date: new Date('2022-10-15'),
  },];

function Blog() {
  return (
    <div className="blog">
      <h1>Blog Posts</h1>
      <div className="blog-posts">
        {sampleBlogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <div className="text-content">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
            <div className="">
              <img src={post.imageUrl} alt={post.altText} />
              <p className="date-blog">Date: {post.date.toDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
