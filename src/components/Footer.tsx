
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription submitted');
  };
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-brand-blue">Tumbler Tales</h3>
            <p className="text-gray-600 max-w-xs">
              Premium insulated drinkware designed for life's adventures, keeping your drinks at the perfect temperature.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} className="text-gray-600 hover:text-brand-blue" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} className="text-gray-600 hover:text-brand-blue" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} className="text-gray-600 hover:text-brand-blue" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={20} className="text-gray-600 hover:text-brand-blue" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-brand-blue">Shop</Link>
              </li>
              <li>
                <Link to="/products?category=Insulated" className="text-gray-600 hover:text-brand-blue">Collections</Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-brand-blue">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-blue">Contact Us</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-brand-blue">My Account</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-brand-blue mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Tumbler Street, Drinkville, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-brand-blue mr-2 flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-brand-blue mr-2 flex-shrink-0" />
                <span className="text-gray-600">support@tumblertales.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Join Our Newsletter</h4>
            <p className="text-gray-600 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                required
                className="w-full"
              />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Tumbler Tales. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-gray-600 hover:text-brand-blue text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-brand-blue text-sm">
                Terms of Service
              </Link>
              <Link to="/shipping" className="text-gray-600 hover:text-brand-blue text-sm">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
