import { cn } from "@/lib/utils";
import { Lato } from "next/font/google";
import MoreResults from "@/components/MoreResults";
import ExploreTopics from "@/components/ExploreTopics";
import WordOfTheDay from "@/components/WordOfDay";
import WordDetails from "@/components/WordDetails";
import ExerciseSection from "@/components/ExerciseSection";

const lato = Lato({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "700", "900"],
});

const moreResults = [
  "Cold War",
  "Holy War",
  "Iraq War",
  "Post-war",
  "Pre-war",
  "War cry",
  "War game",
];

const topics = [
  "Hard Science",
  "Factories",
  "Architecture",
  "Insects",
  "Family",
  "Travel",
  "Food",
  "Sports",
  "Music",
  "Movies",
  "Books",
  "Health",
  "Fashion",
  "Education",
  "Art",
  "History",
  "Nature",
  "Science",
  "Culture",
  "Relationships",
  "Finance",
  "Hobbies",
  "Languages",
  "Pets",
];

const TermPage = () => {
  return (
    <div
      className={cn(
        "prose lg:prose-xl mx-auto my-8 grid w-[90%] gap-9 lg:grid-cols-[75fr_25fr] 2xl:grid-cols-[80fr_20fr]",
        `${lato.className}`,
      )}
    >
      <WordDetails />
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-0 lg:block ">
        <MoreResults results={moreResults} />
        <ExploreTopics topics={topics} />
        <WordOfTheDay
          meaning="to get money from someone by deceiving them"
          verb="con"
        />
        <div className="relative mt-16">
          <ExerciseSection />
        </div>
      </div>
    </div>
  );
};

export default TermPage;
