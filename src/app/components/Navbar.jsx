"use client";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="opacity-95 px-6 text-whitew bg-white py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center"> 
        <Link href="/" className="text-black">
        <Image src="/IMAGE.svg" alt="Logo" width={100} height={100} className="mr-2" />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="hidden md:block  justify-between">
        <Link href="#about-us" className="hover:text-black uppercase mx-4">About  </Link>
        <Link href="#services" className="hover:text-black uppercase mx-4">Services     </Link>
        <Link href="#Work" className="hover:text-black uppercase">Our work  </Link>
        </div>

        <Link href="#contact">
        <span className="bg-amber-600 p-2">Contact us ↗</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
