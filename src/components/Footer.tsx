import Link from "next/link";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3">
        {/* Section 1 */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Explore</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dictionary">Dictionary</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Categories</h4>
          <ul>
            <li>
              <Link href="/slang-words">Slang Words</Link>
            </li>
            <li>
              <Link href="/phrases">Phrases</Link>
            </li>
            <li>
              <Link href="/abbreviations">Abbreviations</Link>
            </li>
            <li>
              <Link href="/expressions">Expressions</Link>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="#" className="text-xl">
              <FaTwitter />
            </Link>

            <Link href="#" className="text-xl">
              <FaInstagram />
            </Link>

            <Link href="#" className="text-xl">
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
