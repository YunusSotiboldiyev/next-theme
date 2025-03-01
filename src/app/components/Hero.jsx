import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-12">
     
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src="/1.png" 
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </div>
      <div className="absolute bottom-0 left-10 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg">
        <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
          Technology
        </span>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/logo1.png" 
            alt="User"
            width={40}
            height={40}
          />
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-300">Jason Francisco</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">August 20, 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
