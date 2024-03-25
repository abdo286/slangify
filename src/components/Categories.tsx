import Category from "@/components/Category";
import { FaBowlFood } from "react-icons/fa6";
import { IoBusinessOutline } from "react-icons/io5";
import { GiMaterialsScience } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { GiHotMeal, GiTestTubes } from "react-icons/gi";

const Categories = () => {
  return (
    <>
      <h2 className="text-lg font-bold">By Categories</h2>
      <div className="mt-[12px] flex items-center gap-5">
        <Category
          name="Business"
          Icon={FaBuilding}
          className="bg-blue-300"
          iconClassName="text-blue-600"
        />
        <Category
          name="Food"
          Icon={GiHotMeal}
          className="bg-green-300"
          iconClassName="text-green-600"
        />
        <Category
          name="Science"
          Icon={GiTestTubes}
          className="bg-purple-300"
          iconClassName="text-purple-600"
        />
      </div>
    </>
  );
};
export default Categories;
