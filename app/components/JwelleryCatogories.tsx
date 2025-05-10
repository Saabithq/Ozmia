// components/JewelryCategories.js
const categories = [
    {
      title: "Wedding",
      image: "/images/j1.png",
    },
    {
      title: "New Born",
      image: "/images/j2.png",
    },
    {
      title: "Engagement",
      image: "/images/j3.png",
    },
    {
      title: "Anniversary",
      image: "/images/j4.png",
    },
    {
      title: "Birthday",
      image: "/images/j5.png",
    },
    {
      title: "Graduation",
      image: "/images/j6.png",
    },
  ];
  
  export default function JewelryCategories() {
    return (
      <section className="bg-[#f9f6ea] py-12">
        <div className="w-full mx-auto px-4 grid md:grid-cols-2 gap-2">
          <div className="flex flex-col justify-center  ml-30 -mt-46">
            <h2 className="text-5xl md:text-5xl font-serif  text-green-900 leading-tight">
              Jewelry that speaks<br />
              the language of love,<br />
              milestones, and<br />
              memories
            </h2>
            <br />
            <p className="text-2xl font-serif text-green-900 mb-2">
              Surprise your beloved with a <br />timeless token of love
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mr-20 -ml-20">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-medium font-serif text-[rgba(0,0,0,1)] mb-2">{cat.title}</h3>
                  <button className="mx-4 inline-block border border-green-900 text-[rgba(0,74,37,1)] rounded-md  text-[12px] hover:bg-green-900 hover:text-white transition">
                    Find Your Favourite
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  