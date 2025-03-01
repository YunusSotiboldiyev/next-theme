"use client";
import Image from "next/image";
import Logo from "../../../public/Logo.png"
import Link from "next/link";
import ModeToggle from "../../../components/shared/mode-toggle";
import { CiSearch } from "react-icons/ci";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
}
  return (
    <nav className="opacity-98 p-3 flex justify-around sticky top-0 z-30 bg-white dark:bg-black" >
      <div className="flex mt-2"> 
        <Link href="/">
          
          {theme==="dark"?<Image src="/whiteLogo.png"className="" alt="Logo" width={100} height={100} />:
          <Image src={Logo} alt="Logo" width={100} height={100} />}
        </Link>
      </div>
      <div className="flex gap-5">
        <div className="md:flex gap-4 mt-2">
          <Link href="./">Home</Link>
          <Link href="./blog">Blog</Link>
          <Link href="./single-post">Single post</Link>
          <Link href="./pages">Pages</Link>
        <Link href="./contact">Contact</Link>
        </div>
      </div>
        <div className="flex">
          <div className="flex border-2 mx-4 py-0">
            <input className=" py-0 " type="text" placeholder="Search" /><button><CiSearch /></button>
          </div>
        <ModeToggle onClick={toggleTheme}/>
        </div>
    </nav>
  );
};


export default Navbar;
