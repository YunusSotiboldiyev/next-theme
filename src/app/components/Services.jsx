import { FaBuilding, FaTools, FaProjectDiagram } from "react-icons/fa";

const services = [
  {
    icon: <FaBuilding className="text-4xl text-[#9C7B5B]" />, // Adjust color as needed
    title: "Architectural & Interior Design",
    description: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
  },
  {
    icon: <FaTools className="text-4xl text-[#9C7B5B]" />, // Adjust color as needed
    title: "Building Renovation",
    description: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
  },
  {
    icon: <FaProjectDiagram className="text-4xl text-[#9C7B5B]" />, // Adjust color as needed
    title: "Construction Management",
    description: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-white py-12 px-6 lg:px-20 mt-12" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-sm font-semibold text-gray-500 tracking-wide mb-2 text-left">OUR SERVICES</h3>
        <h1 className="text-4xl font-serif font-semibold text-left">
          We provide the <i>best solutions</i> <br /> for your dream home
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 justify-between max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="border rounded-lg p-6 transition mx-1">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
