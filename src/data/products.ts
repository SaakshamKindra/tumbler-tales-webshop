
export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  discountPrice?: number;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  features: string[];
  inStock: boolean;
  category: string;
  bestseller: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Alpine Insulated Tumbler",
    description: "Our premium Alpine insulated tumbler keeps drinks cold for 24 hours and hot for 12 hours. Made with double-walled, vacuum-insulated stainless steel, it's perfect for your daily adventures. The sleek design fits most cup holders and includes a leak-proof lid with a sliding cover to prevent spills.",
    shortDescription: "Double-walled vacuum insulation for 24-hour cold retention",
    price: 34.99,
    discountPrice: 29.99,
    images: [
      "https://images.unsplash.com/photo-1610220941077-1ec123de0ce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577917754728-08170a13c661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Ocean Blue", hex: "#0077B6" },
      { name: "Midnight Black", hex: "#1A1A1A" },
      { name: "Forest Green", hex: "#2D6A4F" }
    ],
    sizes: ["20oz", "30oz", "40oz"],
    features: [
      "Double-walled vacuum insulation",
      "18/8 food-grade stainless steel",
      "Sweat-free exterior",
      "Dishwasher safe",
      "Lifetime warranty"
    ],
    inStock: true,
    category: "Insulated",
    bestseller: true
  },
  {
    id: 2,
    name: "Voyager Travel Mug",
    description: "The Voyager Travel Mug is designed for life on the move. Featuring an easy-grip silicone sleeve and a secure, spill-resistant lid with a one-touch open/close mechanism. The slim design fits perfectly in car cup holders, making it ideal for commuters and travelers.",
    shortDescription: "Sleek travel mug with spill-resistant lid and silicone grip",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585647347934-7feb4019f59a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Ruby Red", hex: "#A4161A" },
      { name: "Slate Gray", hex: "#6C757D" },
      { name: "Teal", hex: "#0096A1" }
    ],
    sizes: ["16oz", "20oz"],
    features: [
      "Leak-proof flip lid",
      "Ergonomic design",
      "Non-slip silicone base",
      "Fits standard cup holders",
      "BPA-free materials"
    ],
    inStock: true,
    category: "Travel",
    bestseller: false
  },
  {
    id: 3,
    name: "Summit Water Bottle",
    description: "Conquer your day with the Summit Water Bottle. Its wide-mouth design makes it easy to fill with ice cubes and clean thoroughly. The built-in carrying handle and powder-coated finish ensure durability for your outdoor adventures. Stay hydrated in style with this rugged, dependable bottle.",
    shortDescription: "Wide-mouth bottle with carrying handle for outdoor adventures",
    price: 39.99,
    discountPrice: 34.99,
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Sunset Orange", hex: "#F95738" },
      { name: "Mountain Purple", hex: "#7B68EE" },
      { name: "Glacier White", hex: "#F8F9FA" }
    ],
    sizes: ["24oz", "32oz", "40oz"],
    features: [
      "Wide-mouth opening",
      "Integrated carrying handle",
      "Powder-coated finish",
      "Double-wall insulation",
      "Leak-proof cap"
    ],
    inStock: true,
    category: "Water Bottles",
    bestseller: true
  },
  {
    id: 4,
    name: "Urban Commuter Tumbler",
    description: "The Urban Commuter Tumbler is the perfect companion for city life. Its slim profile and secure lid make it ideal for busy mornings. The unique temperature indicator changes color to let you know when your drink is hot. Enjoy your coffee or tea at the perfect temperature throughout your commute.",
    shortDescription: "Slim tumbler with temperature indicator for city commuters",
    price: 32.99,
    images: [
      "https://images.unsplash.com/photo-1578079999123-3d44eea3fcbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587582816779-de6c01c3e5b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Metropolitan Gray", hex: "#343A40" },
      { name: "Rose Gold", hex: "#E9BCAF" },
      { name: "Matte Black", hex: "#1A1A1A" }
    ],
    sizes: ["12oz", "16oz", "20oz"],
    features: [
      "Temperature-sensitive exterior",
      "One-handed operation lid",
      "Slim design for cup holders",
      "360° drinking capability",
      "Easy-grip texture"
    ],
    inStock: true,
    category: "Commuter",
    bestseller: false
  },
  {
    id: 5,
    name: "Wilderness Camp Mug",
    description: "Bring the comfort of home to the great outdoors with our Wilderness Camp Mug. The rugged construction and insulated design keep your campfire coffee hot while your hands stay comfortable. The included carabiner clip lets you attach it to your backpack for easy carrying on the trail.",
    shortDescription: "Rugged camp mug with carabiner for outdoor enthusiasts",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1525398451142-ca6c80a84c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571859927240-74a9f28d7ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Campfire Red", hex: "#BC4749" },
      { name: "Forest Green", hex: "#2D6A4F" },
      { name: "Granite Gray", hex: "#6C757D" }
    ],
    sizes: ["10oz", "14oz"],
    features: [
      "Double-wall construction",
      "Powder-coated finish",
      "Carabiner-compatible handle",
      "Wide rim for easy drinking",
      "Stackable design"
    ],
    inStock: true,
    category: "Outdoor",
    bestseller: true
  },
  {
    id: 6,
    name: "Coastal Wave Tumbler",
    description: "Inspired by the ocean, our Coastal Wave Tumbler features a unique wave-textured exterior that provides a secure grip. The splash-proof lid with a sliding cover makes it perfect for beach days or poolside lounging. Its vibrant colors won't fade, even after repeated dishwasher cycles.",
    shortDescription: "Wave-textured tumbler with splash-proof lid for beach days",
    price: 27.99,
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610220944211-592e39dd6773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Coral Reef", hex: "#FF8A5C" },
      { name: "Ocean Blue", hex: "#0077B6" },
      { name: "Seafoam Green", hex: "#93E1D8" }
    ],
    sizes: ["20oz", "30oz"],
    features: [
      "Wave-textured grip",
      "Splash-resistant lid",
      "Fade-resistant colors",
      "Fits most cup holders",
      "Keeps drinks cold for 20 hours"
    ],
    inStock: true,
    category: "Beach",
    bestseller: false
  }
];
