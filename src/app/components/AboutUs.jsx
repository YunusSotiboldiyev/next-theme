import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-12 px-6 lg:px-20 my-5" id="about-us">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-sm font-semibold text-gray-500 tracking-wide mb-2">ABOUT US</h3>
          <h1 className="text-4xl font-serif font-semibold">
            We help to bring your <i>dream home</i> to reality
          </h1>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
          </p>
          <p className="mt-4 text-gray-600">
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.
          </p>
        </div>
        
        <div className="relative flex gap-4 justify-center">
          <Image
            src="/image7.png" 
            alt="Kitchen Interior"
            width={500}
            height={700}
            className=""
          />
        </div>
      </div>
      
      <div className="mt-12 flex flex-col md:flex-row justify-around text-center">
        <div className="flex">
          <p className="text-3xl font-bold">100%</p>
          <p className="text-gray-500">SATISFACTION CLIENTS</p>
        </div>
        <div className="flex">
          <p className="text-3xl font-bold">250</p>
          <p className="text-gray-500">EMPLOYEES WORLDWIDE</p>
        </div>
        <div className="flex">
          <p className="text-3xl font-bold">3469</p>
          <p className="text-gray-500">PROJECTS COMPLETED <br /> ON 60 COUNTRIES</p>
        </div>
      </div>
      <hr />
    </section>
  );
}
