import Link from "next/link";
import React from "react";

interface ExploreTopicsProps {
  topics: Array<string>;
}

const ExploreTopics: React.FC<ExploreTopicsProps> = ({ topics }) => {
  return (
    <div className="bg-lightDark mt-4 h-fit rounded-lg p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">More Topics</h2>
      <ul className="grid max-h-48 grid-cols-1 gap-4 overflow-y-auto overflow-x-hidden">
        {topics.slice(0, 4).map((result, index) => (
          <li key={index} className="cursor-pointer text-sm">
            <Link href="#">
              <span className="text-blue-500 hover:underline">{result}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExploreTopics;
