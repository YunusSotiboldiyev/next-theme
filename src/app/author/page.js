import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

export default function AuthorSection() {
  return (
    <Layout>
    <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl text-center">
      <div className="flex justify-center">
        <Image
          src="/logo1.png" 
          alt="Jonathan Doe"
          width={80}
          height={80}
          className="rounded-full"
          />
      </div>
      <div className="w-1/2 mx-auto">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-3">Jonathan Doe</h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm">Collaborator & Editor</p>
      <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm">
        Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. 
        Jonathan holds a degree in Computer Science and has spent years working in the tech industry, 
        gaining a deep understanding of the impact technology has on our lives.
      </p>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500"><FaFacebook size={20} /></a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500"><FaTwitter size={20} /></a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-pink-500"><FaInstagram size={20} /></a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-500"><FaYoutube size={20} /></a>
      </div>
    </div>
    <h1 className="text-2xl mt-7">Latest Posts</h1>
        <Projects/>
          </Layout>
  );
}
