
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from './CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg group">
        <div className="relative pt-[100%] overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {product.discountPrice && (
            <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          )}
          {product.bestseller && (
            <Badge className="absolute top-3 left-3 bg-amber-500 hover:bg-amber-600">
              Bestseller
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-lg text-left">{product.name}</h3>
            </div>
            <p className="text-sm text-gray-600 text-left line-clamp-2">{product.shortDescription}</p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                {product.discountPrice ? (
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-lg text-brand-blue">${product.discountPrice.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  </div>
                ) : (
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                )}
              </div>
              <Button 
                size="sm" 
                className="rounded-full w-10 h-10 p-0"
                onClick={handleAddToCart}
                aria-label="Add to cart"
              >
                <ShoppingCart size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
