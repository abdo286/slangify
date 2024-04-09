import Image from "next/image";
import exerciseImage from "../../public/exercise.jpg";
const exercises = [
  "Vocabulary exercises help you to learn synonyms, collocations and idioms.",
  "Intermediate and Advanced level grammar practice with progress tests.",
  "Listening and pronunciation, exam preparation and more!",
];

const ExerciseSection = () => {
  return (
    <div className="group relative hover:bg-black">
      <h2 className="group-hover:opacity-100 absolute left-1/3 top-1/3  rounded-md px-3 py-1 text-xl font-semibold opacity-0 group-hover:text-gray-100 hover:opacity-100">
        Exercises
      </h2>
      <div
        className="align-center h-36 w-full cursor-pointer rounded-sm font-sans text-lg leading-[150px] group-hover:opacity-0"
        // style={{ backfaceVisibility: "hidden" }}
      >
        <Image
          src={exerciseImage}
          alt="Exercise"
          className="h-full w-full rounded-lg object-cover group-hover:opacity-0"
        />
      </div>
    </div>
  );
};
export default ExerciseSection;
// import Image from "next/image";
// import exerciseImage from "../../public/exercise.jpg";
// const exercises = [
//     "Vocabulary exercises help you to learn synonyms, collocations and idioms.",
//     "Intermediate and Advanced level grammar practice with progress tests.",
//     "Listening and pronunciation, exam preparation and more!"
//   ];

// const ExerciseSection = () => {
//   return (
//     <div className="card-cont inline-block">
//       {" "}
//       <div
//         className="card relative h-40 w-full max-w-72 duration-500 ease-in"
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         <div
//           className="align-center absolute h-full w-full rounded-sm font-sans text-lg leading-[150px]"
//           // style={{ backfaceVisibility: "hidden" }}
//         >
//           <Image
//             src={exerciseImage}
//             alt="Exercise"
//             className="h-full w-full rounded-lg object-cover"
//           />
//         </div>
//         <div
//           className="align-center absolute h-full w-full rounded-sm bg-black font-sans text-lg leading-[150px]"
//           style={{ backfaceVisibility: "hidden" }}
//         >
//           <h2 className="mb-4 text-xl font-bold">Exercises</h2>
//           <ul className="list-inside list-disc">
//             {exercises.map((exercise, index) => (
//               <li key={index} className="mb-2 text-gray-100">
//                 {exercise}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ExerciseSection;
