import { Input } from "@/components/ui/input";
import SearchSuggestions from "./SearchSuggestions";
import { useState, useRef, useEffect } from "react";

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
    <div className="relative w-full">
      <Input
        type="text"
        placeholder="Search"
        className="focus-visible:ring-off w-full ring-offset-blue-500"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setIsModalOpen(true); // Open the modal when user starts typing
        }}
      />
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
