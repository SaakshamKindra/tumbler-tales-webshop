
import React from 'react';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Truck, RotateCcw, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div>
      <Hero />
      
      <FeaturedProducts />
      
      {/* Features Section */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Tumblers?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-3 rounded-full mb-4">
                <Clock size={24} className="text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24-Hour Insulation</h3>
              <p className="text-gray-600">Keep your cold drinks cold for 24 hours and hot drinks hot for 12 hours.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-3 rounded-full mb-4">
                <Star size={24} className="text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Made with food-grade 18/8 stainless steel that won't rust or transfer flavors.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-3 rounded-full mb-4">
                <Truck size={24} className="text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Enjoy free shipping on all orders over $50 within the continental US.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-brand-blue/10 p-3 rounded-full mb-4">
                <RotateCcw size={24} className="text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600">Our products are built to last with a lifetime warranty against manufacturing defects.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Collections Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden group h-80">
              <img 
                src="https://images.unsplash.com/photo-1526394931762-8a4116f6e8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Outdoor Collection" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Outdoor Collection</h3>
                <p className="text-white mb-4">Designed for adventures in the great outdoors</p>
                <Button asChild size="sm" className="self-start">
                  <Link to="/products?category=Outdoor">
                    Explore
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden group h-80">
              <img 
                src="https://images.unsplash.com/photo-1572866703372-f6c540466786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Commuter Collection" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Commuter Collection</h3>
                <p className="text-white mb-4">Sleek designs for your daily coffee runs</p>
                <Button asChild size="sm" className="self-start">
                  <Link to="/products?category=Travel">
                    Explore
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-amber-400 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-600 mb-4">
                "I've tried many tumblers, but this one truly keeps my coffee hot all morning. The design is beautiful and I love the leak-proof lid!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-brand-blue font-semibold">JM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jessica M.</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-amber-400 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-600 mb-4">
                "As someone who spends a lot of time outdoors, I needed something durable that actually keeps ice from melting. This tumbler delivers!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-brand-blue font-semibold">RT</span>
                </div>
                <div>
                  <h4 className="font-semibold">Robert T.</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-amber-400 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-600 mb-4">
                "I bought these as gifts for my team and everyone loves them! Great quality, beautiful colors, and excellent customer service."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-brand-blue font-semibold">AL</span>
                </div>
                <div>
                  <h4 className="font-semibold">Amanda L.</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Drinkware?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who have made the switch to premium insulated tumblers.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-white/90">
            <Link to="/products">
              Shop Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
