
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/components/CartContext';
import { CheckCircle, CreditCard, ArrowRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from '@/components/ui/use-toast';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  
  // Calculate order summary
  const subtotal = cart.total;
  const shipping = subtotal > 50 ? 0 : 7.99;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderComplete(true);
      clearCart();
      
      toast({
        title: "Order Placed Successfully",
        description: "Thank you for your purchase!",
      });
    }, 1500);
  };
  
  if (orderComplete) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center bg-white rounded-lg shadow-sm p-8">
          <div className="mx-auto w-16 h-16 bg-green-100 flex items-center justify-center rounded-full mb-6">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been received and will be processed shortly.
          </p>
          <p className="font-medium mb-6">Order #TT-{Math.floor(100000 + Math.random() * 900000)}</p>
          <p className="text-sm text-gray-600 mb-8">
            A confirmation email has been sent to your email address.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link to="/products">
                Continue Shopping
              </Link>
            </Button>
            <Button asChild>
              <Link to="/">
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <Link to="/cart" className="text-brand-blue hover:underline flex items-center">
          <ArrowRight size={16} className="mr-2 rotate-180" />
          Back to Cart
        </Link>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit}>
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required className="mt-1" />
                </div>
                <div className="col-span-1">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required className="mt-1" />
                </div>
              </div>
            </div>
            
            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required className="mt-1" />
                </div>
                <div className="col-span-1">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required className="mt-1" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" required className="mt-1" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="addressLine2">Apartment, suite, etc. (optional)</Label>
                  <Input id="addressLine2" className="mt-1" />
                </div>
                <div className="col-span-1">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required className="mt-1" />
                </div>
                <div className="col-span-1">
                  <Label htmlFor="state">State</Label>
                  <Select defaultValue="CA">
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AL">Alabama</SelectItem>
                      <SelectItem value="AK">Alaska</SelectItem>
                      <SelectItem value="AZ">Arizona</SelectItem>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="CO">Colorado</SelectItem>
                      <SelectItem value="CT">Connecticut</SelectItem>
                      {/* Add other states as needed */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-1">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input id="zipCode" required className="mt-1" />
                </div>
                <div className="col-span-1">
                  <Label htmlFor="country">Country</Label>
                  <Select defaultValue="US">
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                      {/* Add other countries as needed */}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              
              <RadioGroup 
                value={paymentMethod} 
                onValueChange={setPaymentMethod}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card">Credit Card</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
              </RadioGroup>
              
              {paymentMethod === 'credit-card' && (
                <div className="mt-4 space-y-4">
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" required className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative">
                      <Input 
                        id="cardNumber" 
                        required 
                        className="mt-1 pl-10" 
                        placeholder="1234 5678 9012 3456"
                      />
                      <CreditCard 
                        size={16} 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <Label htmlFor="expMonth">Expiry Month</Label>
                      <Select defaultValue="01">
                        <SelectTrigger>
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                          {[...Array(12)].map((_, i) => (
                            <SelectItem 
                              key={i} 
                              value={String(i + 1).padStart(2, '0')}
                            >
                              {String(i + 1).padStart(2, '0')}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="col-span-1">
                      <Label htmlFor="expYear">Expiry Year</Label>
                      <Select defaultValue="2023">
                        <SelectTrigger>
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {[...Array(10)].map((_, i) => {
                            const year = new Date().getFullYear() + i;
                            return (
                              <SelectItem key={i} value={String(year)}>
                                {year}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="col-span-1">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" required className="mt-1" maxLength={4} placeholder="123" />
                    </div>
                  </div>
                </div>
              )}
              
              {paymentMethod === 'paypal' && (
                <div className="mt-4 p-4 bg-gray-50 rounded-md text-center">
                  <p>You will be redirected to PayPal to complete your payment.</p>
                </div>
              )}
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </Button>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="max-h-64 overflow-y-auto mb-4">
              {cart.items.map(item => (
                <div 
                  key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} 
                  className="flex py-3 border-b last:border-b-0"
                >
                  <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <div className="text-sm text-gray-500">
                      {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                      {item.selectedSize && <span> • Size: {item.selectedSize}</span>}
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm">Qty: {item.quantity}</span>
                      <span className="font-medium">
                        ${((item.discountPrice || item.price) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
