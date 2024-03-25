import { cn } from "@/lib/utils";
import Image from "next/image";

interface CategoryProps {
  name: string;
  Icon: React.ComponentType<any>;
  className?: string;
  iconClassName?: string;
}

const Category: React.FC<CategoryProps> = ({
  name,
  Icon,
  className="",
  iconClassName="",
}) => {
  return (
    <div
      className={cn(
        "flex w-fit cursor-pointer items-center gap-2 rounded-md bg-yellow-400 px-2 py-1 text-sm",
        className,
      )}
    >
      <span className="capitalize">{name}</span>
      {/* <Image src={image} alt="globe" width={16} height={16} /> */}
      <Icon className={cn("text-gray-500", iconClassName)} />
    </div>
  );
};
export default Category;
