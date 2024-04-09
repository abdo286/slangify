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
    <div className="mt-8 sm:mt-12 lg:mt-16">
      <h2 className="text-lg font-bold sm:text-center lg:text-xl">Search History</h2>
      <div className="mx-6  mr-3 grid grid-cols-1 justify-start gap-3 sm:mx-[8%] md:grid-cols-2 xl:grid-cols-3 md:gap-8">
        {" "}
        {words.map((word, index) => (
          <div
            key={index}
            // className="transform cursor-pointer rounded-lg px-4 py-3 text-sm transition duration-300 ease-in-out hover:scale-105"
            className="py-1 text-sm sm:text-base lg:text-base"
          >
            <h3 className="mb-1 w-fit rounded-lg py-1 font-semibold text-blue-500  ">
              <button onClick={() => router.push("/")}>{word.word}</button>
            </h3>
            <p className="text-blue-900">
              {word.definition.length > 500
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
