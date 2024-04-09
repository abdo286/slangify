import { Input } from "@/components/ui/input";
import SearchSuggestions from "./SearchSuggestions";
import { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Button } from "./ui/button";

// import ZoomOutRoundedIcon from "@mui/icons-material/ZoomOutRounded";
const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("war");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to handle click outside of modal
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false); // Close the modal if clicked outside of it
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full lg:w-[80%] mx-auto xl:w-[70%]">
      <form className="flex rounded-md border border-input bg-background">
        <Input
          type="text"
          placeholder="Search"
          className="focus-visible:ring-off w-full border-none focus-visible:ring-1 focus-visible:ring-slate-200"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsModalOpen(true); // Open the modal when user starts typing
          }}
        />

        <div className="hover:bg-[#e6e5e5] align-middle transition-colors ease-in duration-75">
          <CiSearch className="h-full w-8 md:w-9 cursor-pointer border text-center leading-10 text-[#4877af]" />
        </div>
      </form>

      {isModalOpen && (
        <div
          ref={modalRef}
          className="absolute left-0 top-full z-10 w-full border border-gray-200 bg-white shadow-md"
        >
          {searchQuery && (
            <SearchSuggestions
              query={searchQuery}
              setIsModalOpen={setIsModalOpen}
            />
          )}{" "}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
//ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
//ring-offset-blue-500
