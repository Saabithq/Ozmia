import React from 'react';
import Image from 'next/image';
import Testimonials from '../components/Teastmonials';
import JewelryCategories from '../components/JwelleryCatogories';

const products = [
  { title: 'Traditional Collection', img: '/images/shop1.png' },
  { title: 'Kuwaiti Collections', img: '/images/shop2.png' },
  { title: 'Turkish Collections', img: '/images/shop3.png' },
  { title: 'Italian Silver Collections', img: '/images/shop4.png' },
  { title: 'Kids Collections', img: '/images/shop5.png' },
  { title: 'Watch Collections', img: '/images/shop6.png' },
];

const Shop = React.forwardRef<HTMLElement>((props, ref) => (
  <section
    ref={ref}
    id="shop"
    className="min-h-screen bg-[#fcf7e9] w-full"
  >
    <h2 className="text-4xl font-serif text-green-900 mb-8 text-center">
      Featured Products
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-10 mr-10">
      {products.map((product) => (
        <div
          key={product.title}
          className="relative w-full max-w-[600px] mx-auto h-[620] overflow-hidden rounded shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
        >
          <Image
            src={product.img}
            alt={product.title}
            fill
            className="object-cover"
          />
          
        </div>
      ))}
      
    </div>
    <div className="w-full mt-10"><Testimonials /></div>
    <div><JewelryCategories /></div>
  </section>
));

export default Shop;
