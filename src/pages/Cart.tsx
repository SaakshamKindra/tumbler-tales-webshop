
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/components/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, Truck, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };
  
  // Calculate order summary
  const subtotal = cart.total;
  const shipping = subtotal > 50 ? 0 : 7.99;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;
  
  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <ShoppingBag size={32} className="text-gray-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild>
            <Link to="/products">
              Start Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="hidden sm:grid grid-cols-12 gap-4 p-4 text-sm font-medium text-gray-500 bg-gray-50">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>
            
            {cart.items.map(item => (
              <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="border-t first:border-t-0">
                <div className="grid grid-cols-12 gap-4 p-4 items-center">
                  {/* Product Image & Info */}
                  <div className="col-span-12 sm:col-span-6 flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="flex-1">
                      <Link 
                        to={`/product/${item.id}`}
                        className="font-medium hover:text-brand-blue"
                      >
                        {item.name}
                      </Link>
                      <div className="text-sm text-gray-500 mt-1">
                        {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                        {item.selectedSize && <span> • Size: {item.selectedSize}</span>}
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm flex items-center mt-2 sm:hidden"
                      >
                        <Trash2 size={14} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="col-span-4 sm:col-span-2 text-center sm:text-center flex items-center sm:block">
                    <span className="sm:hidden mr-2 text-gray-500">Price:</span>
                    <span>${(item.discountPrice || item.price).toFixed(2)}</span>
                  </div>
                  
                  {/* Quantity */}
                  <div className="col-span-4 sm:col-span-2 flex justify-center items-center">
                    <div className="flex border rounded-md h-8">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-8 flex items-center justify-center text-gray-600 hover:text-gray-900"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-10 flex items-center justify-center border-x">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-8 flex items-center justify-center text-gray-600 hover:text-gray-900"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Total & Remove */}
                  <div className="col-span-4 sm:col-span-2 text-right flex items-center justify-between sm:block">
                    <span className="sm:hidden mr-2 text-gray-500">Total:</span>
                    <span className="font-medium">
                      ${((item.discountPrice || item.price) * item.quantity).toFixed(2)}
                    </span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 hidden sm:inline-block ml-4"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between">
            <Link to="/products" className="text-brand-blue hover:underline flex items-center">
              <ArrowRight size={16} className="mr-2 rotate-180" />
              Continue Shopping
            </Link>
            
            <div className="flex items-center mt-4 sm:mt-0">
              <Input 
                placeholder="Promo code" 
                className="w-36 sm:w-48 mr-2" 
              />
              <Button variant="outline">Apply</Button>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <Button asChild className="w-full" size="lg">
              <Link to="/checkout">
                Proceed to Checkout
              </Link>
            </Button>
            
            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <div className="flex items-center">
                <Truck size={16} className="mr-2 text-gray-400" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center">
                <ShoppingBag size={16} className="mr-2 text-gray-400" />
                <span>30-day easy returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
