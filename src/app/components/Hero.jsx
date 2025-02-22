import Image from "next/image";

export default function Booking() {
  return (
    <section className="relative w-full bg-white">
      <div className="text-center py-12 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-semibold">
          Make <i>your home</i> an ode to joy
        </h1>
        <p className="mt-4 text-gray-600">
          We turn your empty house into a lovely home, making compact spaces
          with space-saving furniture. Making the unique tastes of yours into
          reality!
        </p>
      </div>

      <div className="relative w-full max-w-auto mx-auto">
        <Image
          src="/image2.png" 
          alt="Interior Design"
          width={1600}
          height={900}
          className="w-full rounded-lg"
        />
      </div>

      <div className=" bg-black text-white py-8 px-6 text-center flex flex-col md:flex-row justify-center items-center gap-6">
       <div><p className="[writing-mode:vertical-rl] [text-orientation:upright]">Avards</p></div>
        <div className="text-center flex">
        <Image
          src="/image3.png" 
          alt="Interior Design"
          width={100}
          height={100}
          className="block"
        />
        <div className="mt-8">
          <p className="text-lg font-semibold">German Design Award</p>
          <p className="text-sm text-gray-400">2021</p>
        </div>
        </div>
        <div className="text-center flex">
        <Image
          src="/image4.png" 
          alt="Interior Design"
          width={100}
          height={100}
          className="block"
        />
        <div className="mt-8">
          <p className="text-lg font-semibold">Gold A’ Design Award</p>
          <p className="text-sm text-gray-400">2021</p>
        </div>
        </div>
        <div className="text-center flex">
        <Image
          src="/image5.png" 
          alt="Interior Design"
          width={100}
          height={100}
          className="block"
        />
        <div className="mt-8">
          <p className="text-lg font-semibold">IF Design Award</p>
          <p className="text-sm text-gray-400">2021</p>
        </div>
        </div>
        <div className="text-center flex">
        <Image
          src="/image6.png" 
          alt="Interior Design"
          width={100}
          height={100}
          className="block"
        />
        <div className="mt-8">
          <p className="text-lg font-semibold">Good Design Award</p>
          <p className="text-sm text-gray-400">2021</p>
        </div>
        </div>
      </div>
    </section>
  );
}
