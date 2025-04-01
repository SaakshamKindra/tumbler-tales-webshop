
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/components/CartContext';
import { ArrowLeft, Heart, Share, Star, ShoppingCart, Shield, Truck, RotateCcw } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(products[0]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<typeof products>([]);
  
  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === Number(productId));
    if (foundProduct) {
      setProduct(foundProduct);
      // Set default selections
      setSelectedColor(foundProduct.colors[0].name);
      setSelectedSize(foundProduct.sizes[0]);
      
      // Find related products (same category, excluding current product)
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 3);
      setRelatedProducts(related);
    }
  }, [productId]);
  
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };
  
  // Handle quantity changes
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  // Find the hex color for the selected color name
  const selectedColorHex = product.colors.find(c => c.name === selectedColor)?.hex || '';
  
  if (!product) {
    return <div className="container mx-auto px-4 py-12">Product not found</div>;
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="text-gray-600 hover:text-brand-blue inline-flex items-center">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link to="/products" className="text-gray-600 hover:text-brand-blue">
                  Products
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link 
                  to={`/products?category=${product.category}`} 
                  className="text-gray-600 hover:text-brand-blue"
                >
                  {product.category}
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="product-image-container overflow-hidden rounded-lg aspect-square bg-white">
                      <img
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          
          <div className="flex justify-center mt-4 space-x-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-md overflow-hidden border cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Details */}
        <div className="lg:w-1/2">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <span className="text-gray-600">4.9 (120 reviews)</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full border hover:bg-gray-50">
                <Heart size={20} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-full border hover:bg-gray-50">
                <Share size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            {product.discountPrice ? (
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-brand-blue">${product.discountPrice.toFixed(2)}</span>
                <span className="text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                  Save ${(product.price - product.discountPrice).toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
            <RadioGroup 
              value={selectedColor} 
              onValueChange={setSelectedColor}
              className="flex flex-wrap gap-3"
            >
              {product.colors.map(color => (
                <div key={color.name} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={color.name} 
                    id={`color-${color.name}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`color-${color.name}`}
                    className="flex items-center space-x-2 rounded-md border-2 border-transparent px-3 py-2 peer-data-[state=checked]:border-brand-blue cursor-pointer"
                  >
                    <div 
                      className="h-6 w-6 rounded-full border shadow-sm" 
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
            <RadioGroup 
              value={selectedSize} 
              onValueChange={setSelectedSize}
              className="flex flex-wrap gap-2"
            >
              {product.sizes.map(size => (
                <div key={size} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={size} 
                    id={`size-${size}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`size-${size}`}
                    className="flex h-10 w-16 items-center justify-center rounded-md border-2 border-gray-200 peer-data-[state=checked]:border-brand-blue peer-data-[state=checked]:bg-brand-blue/5 cursor-pointer"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex border rounded-md w-36 h-11">
              <button 
                onClick={decrementQuantity}
                className="flex-1 flex items-center justify-center text-gray-600 hover:text-gray-900"
              >
                -
              </button>
              <span className="flex-1 flex items-center justify-center border-x">
                {quantity}
              </span>
              <button 
                onClick={incrementQuantity}
                className="flex-1 flex items-center justify-center text-gray-600 hover:text-gray-900"
              >
                +
              </button>
            </div>
            <Button 
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </Button>
          </div>
          
          {/* Product Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Truck size={18} className="text-brand-blue" />
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield size={18} className="text-brand-blue" />
              <span className="text-sm">Lifetime Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <RotateCcw size={18} className="text-brand-blue" />
              <span className="text-sm">30-Day Returns</span>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <Tabs defaultValue="features">
            <TabsList className="w-full">
              <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
              <TabsTrigger value="shipping" className="flex-1">Shipping</TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="pt-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="pt-4">
              <div className="space-y-4 text-gray-600">
                <p>Free standard shipping on all orders over $50 within the continental US.</p>
                <p>Orders typically ship within 1-2 business days. Standard shipping takes 3-5 business days.</p>
                <p>Express shipping options are available at checkout for an additional fee.</p>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-4">
              <div className="text-center py-4">
                <h3 className="text-lg font-medium">Customer Reviews</h3>
                <p className="text-gray-600">Coming soon! Be the first to review this product.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <Separator className="mb-8" />
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
