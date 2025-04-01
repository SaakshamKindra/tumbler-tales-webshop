
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { useCart } from './CartContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const cartItemCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-brand-blue">Tumbler Tales</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link font-medium text-gray-700">Home</Link>
            <Link to="/products" className="nav-link font-medium text-gray-700">Shop</Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="nav-link font-medium text-gray-700">Collections</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link to="/products?category=Insulated" className="w-full">Insulated</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/products?category=Travel" className="w-full">Travel</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/products?category=Water+Bottles" className="w-full">Water Bottles</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/products?category=Outdoor" className="w-full">Outdoor</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/contact" className="nav-link font-medium text-gray-700">Contact</Link>
            <Link to="/returns" className="nav-link font-medium text-gray-700">Returns</Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <Link
              to="/login"
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100"
              aria-label="Account"
            >
              <User size={20} />
            </Link>
            
            <Link
              to="/cart"
              className="relative p-2 rounded-full text-gray-700 hover:bg-gray-100"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue text-xs text-white">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 rounded-full text-gray-700 hover:bg-gray-100"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue text-xs text-white">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="py-2 font-medium text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="py-2 font-medium text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/products?category=Insulated" 
              className="py-2 font-medium text-gray-700 pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Insulated Collection
            </Link>
            <Link 
              to="/products?category=Travel" 
              className="py-2 font-medium text-gray-700 pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Travel Collection
            </Link>
            <Link 
              to="/products?category=Water+Bottles" 
              className="py-2 font-medium text-gray-700 pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Water Bottles
            </Link>
            <Link 
              to="/products?category=Outdoor" 
              className="py-2 font-medium text-gray-700 pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Outdoor Collection
            </Link>
            <Link 
              to="/contact" 
              className="py-2 font-medium text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/returns" 
              className="py-2 font-medium text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Returns
            </Link>
            <Link 
              to="/login" 
              className="py-2 font-medium text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Account
            </Link>
            <div className="flex items-center border rounded-lg overflow-hidden mt-2">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-grow p-2 text-sm focus:outline-none"
              />
              <button className="bg-gray-100 p-2">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
