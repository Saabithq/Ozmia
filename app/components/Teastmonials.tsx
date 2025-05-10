// components/Testimonials.js
const testimonials = [
    {
      name: "Cooper",
      text: "Lorem ipsum dolor sit amet consectetur. Mattis pellentesque egestas elit. Vitae faucibus massa bibendum arcu varius facilisis. Vitae malesuada euismod euismod et nulla elit velit.",
      image: "/images/p1.png",
      rating: 5,
    },
    {
      name: "Kiara",
      text: "This collection brings tradition and modernity together perfectly — it’s more than jewelry; it’s a statement.",
      image: "/images/p1.png",
      rating: 5,
    },
    {
      name: "Sofei",
      text: "I’ve never received so many compliments — this necklace sparkles beautifully and feels like a timeless treasure ipsum dolor sit amet consectetur.",
      image: "/images/p1.png",
      rating: 5,
    },
    {
      name: "Ahmad",
      text: "Absolutely exquisite craftsmanship! The attention to detail and the brilliance of the stones make every piece feel truly luxurious.",
      image: "/images/p1.png",
      rating: 5,
    },
    {
      name: "Patrix",
      text: "From packaging to product, everything was flawless. You can tell these pieces are made with love and skill ipsum dolor sit amet consectetur.",
      image: "/images/p1.png",
      rating: 5,
    },
    {
      name: "Zain",
      text: "Elegant, lightweight, and beautifully designed. It adds the perfect touch of grace to both casual and formal outfits. ",
      image: "/images/p1.png",
      rating: 5,
    },
    {
      name: "Jules",
      text: "I bought this as a gift, and it completely stole the show. The quality and shine are even better in person. ipsum dolor sit amet consectetur. .",
      image: "/images/p1.png",
      rating: 5,
    },
    {
        name: "Jules",
        text: "Lorem ipsum dolor sit amet consectetur. Mattis adipiscing egestas elit. Vitae faucibus massa bibendum arcu varius facilisis.",
        image: "/images/p1.png",
        rating: 5,
      },
  ];
  
  export default function Testimonials() {
    return (
      <section className="bg-gradient-to-b from-green-900 to-green-700 py-12">
        <h2 className="text-center text-3xl font- text-[rgba(207,179,76,1)] mb-8 font-serif">
          Hear From Our Happy Customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto px-4 ml-10 mr-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gradient-to-b from-[rgba(88,211,149,0.74)] to-[rgba(51,154,103,0.63)] rounded-xl p-6 text-white shadow-md flex flex-col items-start">
              <div className="flex items-center mb-2">
                {[...Array(t.rating)].map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="mb-4 text-sm">{t.text}</p>
              <div className="flex items-center mt-auto">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full mr-3 border-2 border-white" />
                <span className="font-semibold">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  