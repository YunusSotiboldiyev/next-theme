import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full py-4 flex justify-between items-center text-gray-500 text-sm border-t">
      <div className="ml-4">
        &copy; 2022 Inteo - Award-winning studio. Made with love by
        <span className="text-[#B5854B] ml-1">Landify</span>
      </div>
      <div className="flex items-center space-x-4 mr-4">
        <span className="uppercase text-xs tracking-wide font-semibold">Connect</span>
        <div className="w-12 h-px bg-gray-300"></div>
        <div className="flex space-x-2">
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 ">
            <FaInstagram className="text-[#B5854B]" />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">
            <FaFacebookF className="text-[#B5854B]" />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">
            <FaYoutube className="text-[#B5854B]"/>
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 ">
            <FaTwitter className="text-[#B5854B]" />
          </a>
        </div>
      </div>
    </footer>
  );
}