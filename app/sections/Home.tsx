import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = React.forwardRef<HTMLElement>((props, ref) => (
  <section ref={ref} id="home" className= "relative w-full min-h-[100vh] h-[800px] flex flex-col bg-gradient-to-r from-green-900 via-green-750 to-green-600 border-t-2 border-white/100 shadow">
  <div className="flex flex-row items-center justify-between px-16 pt-12 pb-4 mt-12">
    {/* Left: Heading and Buttons */}
    <div className="flex-1 mt-20 flex flex-col items-start">
    <h1
  className="text-6xl mb-6 leading-normal top-[20px] -ml-4"
  style={{
    fontFamily: 'Georgia, serif',
    color: 'rgba(200, 172, 70, 1)'
  }}
>
        Where elegance<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;meets eternity
        <br />
        <br />
      </h1>
      <div className="flex gap-4 ">
        <button className=" text-green-900 font-bold px-7 py-2 rounded shadow hover:bg-yellow-400 transition"
          style={{ background: 'rgba(200, 172, 70, 1)'
          }}>
          Explore
        </button>
        <button className="border-2 border-[rgba(207,179,76,1)] text-[rgba(207,179,76,1)] px-7 py-2 rounded hover:bg-yellow-300 hover:text-green-900 transition font-bold">
          About Us
        </button>
      </div>
    </div>
    {/* Right: Necklace Image and Description Box */}
    <div className="relative flex-1 flex flex-col items-end mr-80 left-[10%] top-[20px]">
      <Image
        src="/images/home.png" 
        alt="Gold necklace"
        width={620}
        height={433}
        className="drop-shadow-2xl"
        priority
      />
      {/*}
      </div>
      <div className="absolute top-40 right-70"
        style={{ fontFamily: 'serif' }}>
          <Image
        src="/images/line1.png" 
        alt="Gold necklace"
        width={145.88}
        height={35.600003051757847}
        className="drop-shadow-2xl mt-30"
        priority
      /></div>
      <div className="absolute top-56 right-34"
        style={{ fontFamily: 'serif' }}>
      <Image
      src="/images/rectangle.png" 
      alt="Gold necklace"
      width={145.88}
      height={35.57847}
      className="drop-shadow-2xl"
      priority
    /></div> 
    <div className="absolute top-56 right-34 text-white text-[12.5px] p-2"
        style={{ fontFamily: 'Georgia, serif' }}>
        Crafted with 916 <br></br>purity gold, our <br></br>jewelry reflects the <br></br>perfect blend of<br></br> tradition, trust, and <br></br>timeless beauty.
      </div>*/}
    
  </div>
  </div>
</section>
));
export default Home;
