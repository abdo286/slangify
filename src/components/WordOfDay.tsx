interface WordOfTheDayProps {
  verb: string;
  meaning: string;
}

const WordOfTheDay: React.FC<WordOfTheDayProps> = ({ verb, meaning }) => {
  return (
    <div className="relative rounded-lg bg-white p-6 shadow-lg">
      <div className="rounded-full bg-blue-500 px-5 py-1 text-xs font-semibold uppercase text-white w-fit">
        Word of the Day
      </div>
      <h2 className="mt-4 text-lg font-semibold">{verb}</h2>
      <p className="text-gray-700">{meaning}</p>
    </div>
  );
};

export default WordOfTheDay;
