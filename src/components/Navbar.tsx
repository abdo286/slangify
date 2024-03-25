"use client";
import useModal from "@/hooks/useModal";
import Menu from "../../public/Menu.svg";
import Image from "next/image";
import FullScreenModal from "./FullScreenModal";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const { isOpen, closeModal, openModal } = useModal();
  return (
    <nav className="flex items-center gap-3 pl-3 pr-2 pt-3" id="navbar">
      <button className=" cursor-pointer" onClick={openModal}>
        <Image src={Menu} alt="Menu" width={50} height={50} />
      </button>

      <Searchbar />
      <div className="relative">
        <FullScreenModal
          isOpen={isOpen}
          onClose={isOpen ? closeModal : openModal}
        />
      </div>
    </nav>
  );
};
export default Navbar;
