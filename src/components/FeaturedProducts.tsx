
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  // Get bestseller products
  const bestsellerProducts = products.filter(product => product.bestseller).slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
          <Link 
            to="/products" 
            className="text-brand-blue hover:text-brand-blue/80 flex items-center"
          >
            View all <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestsellerProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
