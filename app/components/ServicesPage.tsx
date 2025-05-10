import Image from "next/image";

const services = [
  {
    title: "Custom Jewelry",
    description:
      "Our team specializes in designing and crafting complex custom jewelry in gold or platinum. Our 3D designers can work with even the most complex ideas and create a digital model for you to approve before committing to production.",
    img: "/images/c2.png",
  },
  {
    title: "Engagement Ring",
    description:
      "Our team of 3D modelers and jewelers can create literally any ring you can imagine, including complex designs. We're opening up our services to private clients, so you can get a beautiful, designer quality engagement ring at an affordable price.",
    img: "/images/c3.png",
  },
  {
    title: "Jewelry Manufacturing",
    description:
      "We work with you to make sure your jewelry is produced exactly as you specify and with impeccable standards. We can manufacture a unique collection for your store, or even work with custom orders for your customers.",
    img: "/images/c4.png",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-cream min-h-screen py-12 px-4">
      <h2 className="text-3xl font-bold text-[rgba(0,74,37,1)] font-serif mb-8">Our Services</h2>
      <div className="grid gap-12">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className={`flex flex-col md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } md:items-start gap-8 w-full`}
          >
            <Image
              src={service.img}
              alt={service.title}
              width={574}
              height={438}
              className="rounded shadow-md object-cover"
            />
            <div className="flex-1 flex flex-col justify-center ml-40 mt-20 ">
              <h3 className="text-4xl text-green-900 mb-2 font-serif">
                {service.title}
              </h3>
              <p className="text-[rgba(0,74,37,0.81)] font-serif mb-4 leading-[2] text-[20px]">{service.description}</p>
              <button className="bg-[rgba(177,150,51,1)] text-green-900 px-4 py-2 rounded shadow hover:bg-yellow-300 transition w-fit">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
