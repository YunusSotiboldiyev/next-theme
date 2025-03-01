import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-gray-700 dark:text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <Image src="/Logo.png" alt="Logo" width={120} height={50} />
          <p className="mt-3 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <p className="mt-2 text-sm">
            <strong>Email:</strong> info@jstemplate.net
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> 880 123 456 789
          </p>
          <Image src="/whiteLogo.png" className="my-5" alt="Logo" width={120} height={50} />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500">Archived</a></li>
            <li><a href="#" className="hover:text-blue-500">Author</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Category</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500">Lifestyle</a></li>
            <li><a href="#" className="hover:text-blue-500">Technology</a></li>
            <li><a href="#" className="hover:text-blue-500">Travel</a></li>
            <li><a href="#" className="hover:text-blue-500">Business</a></li>
            <li><a href="#" className="hover:text-blue-500">Economy</a></li>
            <li><a href="#" className="hover:text-blue-500">Sports</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Weekly Newsletter</h3>
          <p className="text-sm">Get blog articles and offers via email</p>
          <div className="mt-3 flex items-center border rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 text-sm bg-transparent focus:outline-none"
            />
            <FaEnvelope className="text-gray-500 mx-3" />
          </div>
          <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 border-t pt-4 flex flex-col md:flex-row justify-between text-sm">
        <p>© JS Template 2023. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500">Terms of Use</a>
          <a href="#" className="hover:text-blue-500">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
