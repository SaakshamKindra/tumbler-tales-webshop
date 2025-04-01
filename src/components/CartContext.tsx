
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../data/products';
import { toast } from '@/components/ui/use-toast';

// Define cart item type with quantity
export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

// Define cart state
interface CartState {
  items: CartItem[];
  total: number;
}

// Define cart actions
type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity: number; color?: string; size?: string } }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

// Cart context interface
interface CartContextType {
  cart: CartState;
  addToCart: (product: Product, quantity: number, color?: string, size?: string) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

// Initial cart state
const initialState: CartState = {
  items: [],
  total: 0
};

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity, color, size } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.id === product.id && 
                item.selectedColor === color && 
                item.selectedSize === size
      );

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += quantity;
        
        return {
          ...state,
          items: updatedItems,
          total: state.total + (product.discountPrice || product.price) * quantity
        };
      } else {
        // Add new item
        const newItem: CartItem = {
          ...product,
          quantity,
          selectedColor: color,
          selectedSize: size
        };
        
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + (product.discountPrice || product.price) * quantity
        };
      }
    }
    
    case 'REMOVE_ITEM': {
      const itemToRemove = state.items.find(item => item.id === action.payload.id);
      if (!itemToRemove) return state;
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        total: state.total - (itemToRemove.discountPrice || itemToRemove.price) * itemToRemove.quantity
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      
      if (itemIndex === -1) return state;
      
      const item = state.items[itemIndex];
      const priceDifference = (item.discountPrice || item.price) * (quantity - item.quantity);
      
      const updatedItems = [...state.items];
      updatedItems[itemIndex] = { ...item, quantity };
      
      return {
        ...state,
        items: updatedItems,
        total: state.total + priceDifference
      };
    }
    
    case 'CLEAR_CART':
      return initialState;
      
    default:
      return state;
  }
};

// Cart provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  
  const addToCart = (product: Product, quantity: number, color?: string, size?: string) => {
    dispatch({ 
      type: 'ADD_ITEM', 
      payload: { product, quantity, color, size } 
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };
  
  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };
  
  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
