
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select, 
  SelectContent, 
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { FilterX, SlidersHorizontal } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get('category');
  
  const [filters, setFilters] = useState({
    category: categoryFromUrl || 'all',
    priceRange: [0, 100],
    sortBy: 'featured',
    inStock: true,
  });
  
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Extract all available categories from products
  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Filter by price range
    result = result.filter(product => {
      const productPrice = product.discountPrice || product.price;
      return productPrice >= filters.priceRange[0] && productPrice <= filters.priceRange[1];
    });
    
    // Filter by stock status
    if (filters.inStock) {
      result = result.filter(product => product.inStock);
    }
    
    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case 'price-high':
        result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
      case 'newest':
        // In a real app, you would sort by date. For this example, we'll sort by ID assuming newer products have higher IDs
        result.sort((a, b) => b.id - a.id);
        break;
      case 'featured':
      default:
        // Sort bestsellers first
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  }, [filters]);
  
  const handlePriceChange = (value: number[]) => {
    setFilters({
      ...filters,
      priceRange: value as [number, number],
    });
  };
  
  const handleCategoryChange = (category: string) => {
    setFilters({
      ...filters,
      category,
    });
  };
  
  const handleSortChange = (value: string) => {
    setFilters({
      ...filters,
      sortBy: value,
    });
  };
  
  const handleInStockChange = (checked: boolean) => {
    setFilters({
      ...filters,
      inStock: checked,
    });
  };
  
  const resetFilters = () => {
    setFilters({
      category: 'all',
      priceRange: [0, 100],
      sortBy: 'featured',
      inStock: true,
    });
  };
  
  // Render filter controls
  const renderFilterControls = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category} className="flex items-center">
              <Checkbox 
                id={`category-${category}`}
                checked={filters.category === category}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <Label 
                htmlFor={`category-${category}`}
                className="ml-2 capitalize"
              >
                {category === 'all' ? 'All Products' : category}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-lg font-medium mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[0, 100]}
            max={100}
            step={1}
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            className="mb-6"
          />
          <div className="flex justify-between text-sm">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-lg font-medium mb-3">Product Status</h3>
        <div className="flex items-center">
          <Checkbox 
            id="in-stock"
            checked={filters.inStock}
            onCheckedChange={checked => handleInStockChange(checked as boolean)}
          />
          <Label htmlFor="in-stock" className="ml-2">
            In Stock Only
          </Label>
        </div>
      </div>
      
      <Button 
        variant="outline" 
        className="w-full mt-4 flex items-center justify-center"
        onClick={resetFilters}
      >
        <FilterX size={16} className="mr-2" />
        Reset Filters
      </Button>
    </div>
  );
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {filters.category === 'all' ? 'All Products' : `${filters.category} Collection`}
        </h1>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Select value={filters.sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  <SlidersHorizontal size={16} className="mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Narrow down products by applying filters
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  {renderFilterControls()}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Sidebar Filters */}
        <div className="hidden md:block w-64 flex-shrink-0">
          {renderFilterControls()}
        </div>
        
        {/* Mobile Sort Dropdown */}
        <div className="md:hidden mb-4">
          <Select value={filters.sortBy} onValueChange={handleSortChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to find what you're looking for.</p>
              <Button onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
