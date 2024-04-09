import { cn } from "@/lib/utils";
import { Lato } from "next/font/google";
import { AiOutlineSound } from "react-icons/ai";
import { RiStarLine } from "react-icons/ri";
import { FaVolumeUp } from "react-icons/fa";

const lato = Lato({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "700", "900"],
});

const TermPage = () => {
  return (
    <div className={cn("prose lg:prose-xl mx-6 my-8", `${lato.className}`)}>
      <div className="mb-4 flex items-center">
        <h1 className="mr-2 font-medium text-yellow-600">War</h1>
        <div className="flex items-center text-sm text-gray-500">
          <FaVolumeUp title="Pronounce" className="mr-1" />
          <span>[wɔːr]</span> {/* IPA pronunciation */}
        </div>
        <div className="relative ml-2 text-sm text-gray-500">
          <RiStarLine title="Add to favorites" className="mr-1" />
          <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 transform rounded-md bg-gray-200 px-2 py-1 text-xs text-gray-700 opacity-0 transition-opacity duration-300">
            Add to favorites
          </span>{" "}
          {/* Favorite icon */}
        </div>
      </div>
      <ul className="mt-2 list-decimal pl-6">
        <li className="mb-2">
          <div className="text-gray-600">
            [uncountable, countable] a situation in which two or more countries
            or groups of people fight against each other over a period of time
          </div>
          <div className="text-gray-500">
            <strong>Example:</strong> The country was torn apart by civil war.
          </div>
        </li>
        <li className="mb-2">
          <div className="text-gray-600">
            [countable, uncountable] a situation in which there is aggressive
            competition between groups, companies, countries, etc.
          </div>
          <div className="text-gray-500">
            <strong>Example:</strong> There is fierce war between rival
            companies in the market.
          </div>
        </li>
        <li className="mb-2">
          <div className="text-gray-600">
            [uncountable, singular] a fight or an effort over a long period of
            time to get rid of or stop something unpleasant
          </div>
          <div className="text-gray-500">
            <strong>Example:</strong> She waged a personal war against drugs in
            her community.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TermPage;
