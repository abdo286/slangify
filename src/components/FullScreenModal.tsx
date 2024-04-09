import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
  AiOutlineFileText,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import CloseImage from "../../public/Close.svg";
import { Button } from "@/components/ui/button";
import IndividualImage from "../../public/Individual2.svg";

interface FullScreenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  {
    href: "/",
    icon: AiOutlineHome,
    text: "Home Page",
  },
  {
    href: "/community",
    icon: AiOutlineUsergroupAdd,
    text: "Community Page",
  },
  {
    href: "/content",
    icon: AiOutlineFileText,
    text: "Content Page",
  },
];

const FullScreenModal: React.FC<FullScreenModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed bottom-0 left-0 top-0 z-[999] grid w-screen grid-cols-[80fr_20fr] sm:grid-cols-[60fr_40fr] bg-white"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 opacity-100 backdrop-blur-sm"
      closeTimeoutMS={30}
      ariaHideApp={false}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="flex flex-col gap-6 rounded-lg bg-white p-6"
      >
        <button className=" cursor-pointer" onClick={onClose}>
          <Image src={CloseImage} alt="Menu" width={30} height={30} />
        </button>
        <div className="flex flex-col gap-5 rounded-lg bg-white p-6">
          <div>
            <Button
              variant="outline"
              className="mb-2 flex w-fit items-center gap-2 border-blue-400 text-blue-500 hover:text-blue-600"
            >
              <Image
                src={IndividualImage}
                width={15}
                height={15}
                alt="Individual"
              />
              <span className="relative top-[1px]">Sign in</span>
            </Button>
          </div>

          {links.map((link, index) => (
            <Link href={link.href} key={link.text}>
              <button
                className={`flex items-center text-gray-600 transition-colors duration-75 ease-in hover:text-blue-500`}
                onClick={onClose}
              >
                <link.icon className="mr-2 text-xl" />
                <span>{link.text}</span>
              </button>
            </Link>
          ))}
        </div>
      </motion.div>
      <div className=" bg-gray-300"></div>
    </Modal>
  );
};

export default FullScreenModal;
