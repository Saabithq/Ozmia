import React from 'react';
import { TbShoppingBag } from "react-icons/tb";

const categories = [
  {
    title: 'Diamond',
    image: '/images/about3.png', 
    
  },
  {
    title: 'Antique',
    image: '/images/about1.png', // Replace with actual image path
    
  },
  {
    title: 'Traditional',
    image: '/images/about2.png', // Replace with actual image path
    
  },
];

const About = React.forwardRef<HTMLElement>((props, ref) => (
  <section ref={ref} id="about" className="min-h-screen bg-[#fcf7ea] py-10">
    {/* Categories */}
    <div className="flex justify-center gap-6 mb-12 -mt-40">
      {categories.map((cat) => (
        <div
          key={cat.title}
          className={`w-[392px] h-[300px] rounded-xl shadow-lg p-5 bg-gradient-to-b from-[rgba(207,179,76,1)] to-[rgba(118,93,3,1)] text-white flex flex-col items-center relative`}
        ><div className="absolute top-2 right-2">
          <img src="/images/Group.png" alt="abx" className="w-10 h-10 object-contain" />
          </div>
          <div className="absolute bottom-2 left-2">
          <img src="/images/Group1.png" alt="abx" className="w-10 h-10 object-contain" />
          </div>
          <span className="absolute top-3 left-4 text-green-900 font-serif text-lg">categories</span>
          <span className="absolute top-10 left-4 text-green-900 font-serif text-2xl">{cat.title}</span>
          <img src={cat.image} alt={cat.title} className="w-40 h-40 my-8 mt-14 object-contain" />
          
          <div className="absolute bottom-2 ">
            
          <button className="bg-green-800 font-serif text-shadow-lg/10 hover:bg-green-900 text-white/80 px-2 py-2 rounded-lg flex items-center gap-2">
            Check More Products
           <TbShoppingBag size={20} className="text-white" />
          </button>
          </div>
        </div>
      ))}
    </div>

    {/* About Us Section */}
    <div className="w-full mx-auto flex flex-col md:flex-row items-center p-10">
      <div className="md:w-1/2 pr-10 md:pr-10 mr-10 pl-20">
        <h2 className="text-3xl font-serif text-center text-green-800  mb-4">About Us</h2>
        <p className="text-[rgba(74,125,93,1)] text-shadow-lg/10 text-lg font-serif leading-relaxed">
          At Ozmia Gold & Diamonds, tradition meets timeless elegance. Rooted in South India’s rich cultural heritage, we specialize in handcrafted temple and antique-style jewelry that celebrates the grandeur of the past with a touch of modern sophistication. Our collections are inspired by the intricate artistry of Chettinad temple designs, reflecting a deep respect for craftsmanship, heritage, and quality. Every piece is a work of art-meticulously designed, ethically sourced, and made to be treasured for generations. Whether you’re seeking a statement heirloom or a contemporary classic, Ozmia Gold & Diamonds offers jewelry that tells a story of beauty, legacy, and devotion.
        </p>
      </div>
      <div className="md:w-[700px] flex justify-center mt-8 md:mt-0">
        
  <div className="relative w-[520.79998779296875px] h-[665.5px] "> {/* Adjust size as needed */}
    {/* Border/frame image */}
    <img
      src="/images/borderarch.png"
      alt="Arch Border"
      className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
    />
    {/* Main image */}
    <img
      src="/images/arch1.png"
      alt="Jewelry Model"
      className="absolute inset-0 w-[90%] object-cover z-10 left-[5%] top-[5%] rounded-none"
    />
  </div>
</div>
<div className='absolute right-152 z-20'>
        <img
      src="/images/Star1.png"
      alt="Star Border"
    
    />
        </div>
        <div className='absolute right-170 -mt-20 z-400'>
        <img
      src="/images/Star2.png"
      alt="Star Border"
    
    />
        </div>

        <div className='absolute right-170 -mt-20 z-400'>
        <img
      src="/images/Star3.png"
      alt="Star Border"
    
    />
        </div>
        
    </div>
  </section>
));

export default About;
