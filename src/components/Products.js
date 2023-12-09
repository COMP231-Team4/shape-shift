import React from 'react';
import '../App.css';

const sampleProducts = [
  {
    id: 1,
    title: '20lb Kettlebell',
    description: 'Sturdy kettlebell perfect for a variety of strength-building exercises.',
    price: '$59.99',
    imageUrl: 'kettlebell-image.jpeg',
    altText: 'Kettlebell Image',
  },
  {
    id: 2,
    title: 'Barbell Foam Pad',
    description: 'A soft foam pad that wraps around barbells to prevent discomfort during squats or hip thrusts.',
    price: '$19.99',
    imageUrl: 'barbellpad-image.png',
    altText: 'Barbell Foam Pad Image',
  },
  {
    id: 3,
    title: 'Foam Roller',
    description: 'Foam roller for deep tissue massage, aiding in muscle recovery.',
    price: '$29.99',
    imageUrl: 'roller-image.png',
    altText: 'Foam Roller Image',
  },
  {
    id: 4,
    title: 'Resistance Bands',
    description: 'A set of resistance bands with different levels of resistance for full-body workouts.',
    price: '$15.99',
    imageUrl: 'band-image.png',
    altText: 'Resistance Bands Image',
  },
];

function Product() {
  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="products">
        {sampleProducts.map((product) => (
          <div key={product.id} className="product">
            <div className="product-content">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
            </div>
            <div className="product-image">
              <img src={product.imageUrl} alt={product.altText} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;