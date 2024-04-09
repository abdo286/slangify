"use client";

import { links } from "../constants/NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarDropdownMenu from "./NavbarDropdownMenu";
const TopNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full items-center justify-between bg-gray-900 p-3 px-3 py-1 font-bold lg:py-4 ">
      <Link className="text-[#B17A50] lg:text-xl xl:text-2xl" href="/">
        Slangy
      </Link>

      <div className="hidden gap-3 md:flex">
        {links.map((link, index) => (
          <Link href={link.href} key={link.text}>
            <div
              className={`flex items-center  transition-colors duration-75 ease-in hover:text-blue-500 lg:text-lg ${pathname === link.href ? "text-blue-500" : "text-gray-300"} `}
            >
              <span>{link.text}</span>
            </div>
          </Link>
        ))}
      </div>

      <NavbarDropdownMenu />
    </div>
  );
};
export default TopNavbar;
// <div>
//   <Button
//     variant="outline"
//     className="mb-2 flex w-fit items-center gap-2 border-blue-400 text-blue-500 hover:text-blue-600"
//   >
//     <Image src={IndividualImage} width={15} height={15} alt="Individual" />
//     <span className="relative top-[1px]">Sign in</span>
//   </Button>
// </div>;
