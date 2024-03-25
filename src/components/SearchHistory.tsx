"use client";
import { useRouter } from "next/navigation";

const words = [
  {
    word: "Slang",
    definition:
      "A type of language that consists of words and phrases that are regarded as very informal",
  },
  {
    word: "Lit",
    definition: "Something that's awesome, amazing, or exciting",
  },
  { word: "Chill", definition: "To relax or hang out in a laid-back manner" },
  {
    word: "Fam",
    definition:
      "Short for family, used to refer to close friends or a tight-knit group",
  },
  {
    word: "Flex",
    definition:
      "To show off or boast, typically about one's achievements or possessions",
  },
  {
    word: "Savage",
    definition: "Fearless, outspoken, or brutal in behavior or actions",
  },
  { word: "Gucci", definition: "Good, cool, or stylish" },
  {
    word: "Woke",
    definition:
      "Aware of social and political issues, especially racism and injustice",
  },
];

const SearchHistory = () => {
  const router = useRouter();
  return (
    <div className="mt-8">
      <h2 className="text-lg font-bold">Search History</h2>
      <div className="ml-1 mr-3 grid grid-cols-1 justify-start gap-1 md:grid-cols-2 lg:grid-cols-3">
        {words.map((word, index) => (
          <div
            key={index}
            // className="transform cursor-pointer rounded-lg px-4 py-3 text-sm transition duration-300 ease-in-out hover:scale-105"
            className="px-4 py-3  text-sm"
          >
            <h3 className="mb-2 w-fit rounded-lg py-1 font-semibold text-blue-500  ">
              <button onClick={() => router.push("/")}>{word.word}</button>
            </h3>
            <p className="text-blue-900">
              {word.definition.length > 50
                ? word.definition.substring(0, 50) + "..."
                : word.definition}
            </p>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
