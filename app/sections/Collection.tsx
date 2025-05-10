import React, { forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesPage from '../components/ServicesPage';
import { TbShoppingBag } from "react-icons/tb";

type Category = {
  id: number;
  title: string;
  image: string;
  link: string;
};

const categories: Category[] = [
  { id: 1, title: 'Necklaces', image: '/images/SC6.png', link: '/shop/necklaces' },
  { id: 2, title: 'Earrings', image: '/images/SC1.png', link: '/shop/earrings' }, // fixed spelling
  { id: 3, title: 'Rings', image: '/images/SC3.png', link: '/shop/rings' },
  { id: 4, title: 'Bracelets', image: '/images/SC5.png', link: '/shop/bracelets' },
  { id: 5, title: 'Charms', image: '/images/SC4.png', link: '/shop/charms' }
];

type CategoryItemProps = Omit<Category, 'id'>;

const CategoryItem: React.FC<CategoryItemProps> = ({ title, image, link }) => (
  <div className="relative bg-gradient-to-b from-green-700 to-green-900 rounded-xl shadow-lg p-2  flex flex-col  border border-green-800 min-h-[320.0838623046875px] width-[240.3664093017578px] ">
   <div className="absolute top-1 right-1">
          <img src="/images/Group.png" alt="abx" className="w-6 h-6 object-contain" />
          </div>
          <div className="absolute bottom-1 left-1">
          <img src="/images/Group1.png" alt="abx" className="w-6 h-6 object-contain" />
          </div>
    <h3 className="text-[rgba(207,179,76,1)] font-serif ml-0 text-2xl">{title}</h3>
    {/* Image */}
    <div className="flex-1 flex items-center justify-center mb-4">
      <Image src={image} alt={title} width={150} height={150} style={{ objectFit: 'contain' }} />
    </div>
    {/* Button */}
    
    <button
      className=" mt-auto mb-4 border border-yellow-200 text-center ml-8 p-2 mr-8 text-yellow-200 rounded-lg  text-sm font-serif flex  gap-2 hover:bg-yellow-100 hover:text-green-900 transition items-center" 
    >
      Check More Products
       <TbShoppingBag size={20} className="text-yellow-200" />
       </button>
     
  </div>
);

const Collection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => (
  <section ref={ref} id="collection" className="py-2 bg-[#fcf7ea] w-full -mt-10" {...props}>
    <h2 className="text-5xl font-serif  text-[rgba(0,74,37,1)] text-center mb-12">Shop by category</h2>
    <div className="w-full px-4 pl-24 pr-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
    {categories.map((cat) => (
      <CategoryItem key={cat.id} {...cat} />
    ))}
  </div>
  <ServicesPage />
</div>

  </section>
));

Collection.displayName = 'Collection';

export default Collection;
