import { useRouter } from "next/navigation";
import React from "react";

interface SearchSuggestionsProps {
  query: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  query,
  setIsModalOpen,
}) => {
  const suggestions = [
    "User Interface",
    "User Experience",
    "User Interaction",
    "User Testing",
    "User Research",
  ];

  const router = useRouter();

  const handleSuggestionClick = (suggestion: string) => {
    const link = `/search?q=${encodeURIComponent(suggestion)}`;
    router.push(link);

    setIsModalOpen(false)
  };

  return (
    <div className="absolute left-0 top-full z-1 w-full border border-gray-200 bg-white shadow-md text-sm">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          className="block w-full p-2 text-start hover:bg-gray-100 focus:outline-none"
          onClick={() => handleSuggestionClick(suggestion)}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default SearchSuggestions;
