import { v4 as uuidv4 } from "uuid"; // Import UUID first

export const products = [
  {
    id:  1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 99.99,
    image: "https://picsum.photos/300/300?random=25",
    category: "Electronics",
    quantity: 10,
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone with advanced features.",
    price: 699.99,
    image: "https://picsum.photos/300/300?random=24",
    category: "Electronics",
    quantity: 5,
  },
  {
    id:  3,
    name: "Running Shoes",
    description: "Comfortable and durable running shoes for all terrains.",
    price: 49.99,
    image: "https://picsum.photos/300/300?random=23",
    category: "Footwear",
    quantity: 20,
  },
  {
    id:  4,
    name: "Backpack",
    description: "Stylish and spacious backpack for daily use.",
    price: 29.99,
    image: "https://picsum.photos/300/300?random=22",
    category: "Accessories",
    quantity: 15,
  },
  {
    id:  5,
    name: "Wrist Watch",
    description: "Elegant wristwatch with a leather strap.",
    price: 199.99,
    image: "https://picsum.photos/300/300?random=21",
    category: "Accessories",
    quantity: 8,
  },
  {
    id: 6,
    name: "Classic Denim Jacket",
    description: "Timeless blue denim jacket for all seasons.",
    price: 1200,
    image: "https://picsum.photos/300/300?random=1",
    category: "Fashion",
    quantity: 1,
  },
  {
    id: 7,
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with premium sound.",
    price: 3500,
    image: "https://picsum.photos/300/300?random=2",
    category: "Electronics",
    quantity: 1,
  },
  {
    id: 8,
    name: "Minimalist Table Lamp",
    description: "Sleek table lamp for modern homes.",
    price: 1800,
    image: "https://picsum.photos/300/300?random=3",
    category: "Home Decor",
    quantity: 1,
  },
  {
    id: 9,
    name: "The Art of War",
    description: "Classic strategy book by Sun Tzu.",
    price: 499,
    image: "https://picsum.photos/300/300?random=4",
    category: "Books",
    quantity: 1,
  },
  {
    id: 10,
    name: "Men's Casual Sneakers",
    description: "Lightweight and stylish everyday sneakers.",
    price: 2200,
    image: "https://picsum.photos/300/300?random=5",
    category: "Fashion",
    quantity: 1,
  },
  {
    id: 11,
    name: "Bluetooth Speaker",
    description: "Portable wireless speaker with deep bass.",
    price: 2900,
    image: "https://picsum.photos/300/300?random=6",
    category: "Electronics",
    quantity: 1,
  },
  {
    id: 12,
    name: "Modern Wall Clock",
    description: "Silent, elegant wall clock for your living room.",
    price: 950,
    image: "https://picsum.photos/300/300?random=7",
    category: "Home Decor",
    quantity: 1,
  },
  {
    id: 13,
    name: "Becoming - Michelle Obama",
    description: "Inspirational memoir by the former First Lady.",
    price: 799,
    image: "https://picsum.photos/300/300?random=8",
    category: "Books",
    quantity: 1,
  },
  {
    id: 14,
    name: "Women's Tote Bag",
    description: "Spacious and stylish leather tote bag.",
    price: 2700,
    image: "https://picsum.photos/300/300?random=9",
    category: "Fashion",
    quantity: 1,
  },
  {
    id: 15,
    name: "Smart Fitness Band",
    description: "Track your health metrics on the go.",
    price: 1999,
    image: "https://picsum.photos/300/300?random=10",
    category: "Electronics",
    quantity: 1,
  },
  {
    id: 16,
    name: "Decorative Throw Pillow",
    description: "Cozy and colorful accent for sofas and beds.",
    price: 499,
    image: "https://picsum.photos/300/300?random=11",
    category: "Home Decor",
    quantity: 1,
  },
  {
    id: 17,
    name: "Atomic Habits",
    description: "Life-changing guide to building good habits.",
    price: 649,
    image: "https://picsum.photos/300/300?random=12",
    category: "Books",
    quantity: 1,
  },
  {
    id: 18,
    name: "Slim Fit T-Shirt",
    description: "Soft cotton t-shirt perfect for layering.",
    price: 799,
    image: "https://picsum.photos/300/300?random=13",
    category: "Fashion",
    quantity: 1,
  },
  {
    id: 19,
    name: "4K Action Camera",
    description: "Capture your adventures in stunning detail.",
    price: 5499,
    image: "https://picsum.photos/300/300?random=14",
    category: "Electronics",
    quantity: 1,
  },
  {
    id: 20,
    name: "Ceramic Vase Set",
    description: "Elegant vases to enhance your interiors.",
    price: 1300,
    image: "https://picsum.photos/300/300?random=15",
    category: "Home Decor",
    quantity: 1,
  },
  {
    id: 21,
    name: "The Alchemist",
    description: "A fable about following your dreams.",
    price: 499,
    image: "https://picsum.photos/300/300?random=16",
    category: "Books",
    quantity: 1,
  },
  {
    id: 22,
    name: "Women's Summer Dress",
    description: "Floral printed casual summer dress.",
    price: 1800,
    image: "https://picsum.photos/300/300?random=17",
    category: "Fashion",
    quantity: 1,
  },
  {
    id: 23,
    name: "Smart Home Security Camera",
    description: "Keep an eye on your home, anytime anywhere.",
    price: 4200,
    image: "https://picsum.photos/300/300?random=18",
    category: "Electronics",
    quantity: 1,
  },
  {
    id: 24,
    name: "Boho Area Rug",
    description: "Add bohemian charm to your living space.",
    price: 2100,
    image: "https://picsum.photos/300/300?random=19",
    category: "Home Decor",
    quantity: 1,
  },
  {
    id: 25,
    name: "Sapiens: A Brief History of Humankind",
    description: "Bestselling exploration of human evolution.",
    price: 699,
    image: "https://picsum.photos/300/300?random=20",
    category: "Books",
    quantity: 1,
  },
];



