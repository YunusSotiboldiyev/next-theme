import React from "react";
import Layout from "../components/Layout";
import { FaRegUserCircle } from "react-icons/fa";
import Image from "next/image"; 
import Projects from "../components/Projects";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      <section className="relative w-full max-w-6xl mx-auto my-7">
      <div className="flex flex-col items-center justify-center text-center min-h-30">
  <h1 className="text-xl">Page Title</h1>
  <div className="mt-2 flex items-center gap-2.5">
  <Link href="./" className="my-4">Home</Link>
  <Link href="./">Link One</Link>
</div>

</div>

        <div className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full overflow-hidden rounded-lg">
          <Image
            src="/1.png"
            alt="Hero Image"
            fill={true} 
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

          <div className="absolute bottom-5 left-5 text-white px-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-semibold">
              Technology
            </span>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <FaRegUserCircle />
              <p className="text-sm">Tracey Wilson • August 20, 2022</p>
            </div>
          </div>
        </div>
      </section>
      <Projects/>
    </Layout>
  );
};

export default Blog;
