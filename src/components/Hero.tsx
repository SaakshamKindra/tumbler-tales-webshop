
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-brand-navy to-brand-blue text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,transparent_1px,black_1px,transparent_8px)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
              Keep Your Drinks <span className="text-brand-teal">Perfect</span> All Day Long
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in" style={{animationDelay: "200ms"}}>
              Premium insulated tumblers designed for life's adventures, from mountain trails to morning commutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "400ms"}}>
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90">
                <Link to="/products">
                  Shop Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/products?category=Insulated">
                  Explore Collections
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[400px] flex justify-center">
            <div className="absolute w-48 h-48 md:w-64 md:h-64 bg-brand-teal rounded-full opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDuration: "3s"}}></div>
            <img 
              src="https://images.unsplash.com/photo-1610220944211-592e39dd6773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Premium tumbler" 
              className="absolute h-full object-contain z-10 animate-float"
            />
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-12 bg-black/20 filter blur-xl rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
