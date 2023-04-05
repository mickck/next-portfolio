import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";
import * as Scroll from "react-scroll";
import Image from "next/image";
import logo from "../public/mk2.png";

export default function Header() {
  let scroll = Scroll.animateScroll;
  function onFooter() {
    scroll.scrollToBottom();
  }
  return (
    <>
      <header className="text-gray-600 body-font ">
        <div className=" px-12 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-md ">
          {/* Navbar left side */}
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image
              src={logo}
              className=""
              alt="logo"
              width={35}
              height={35}
            ></Image>
            <span className="ml-3">Mike`s portfolio</span>
          </Link>
          {/* Navbar rightside */}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
            <Link className=" hover:text-gray-800" href="/">
              Home
            </Link>
            <Link className=" hover:text-gray-800 " href="/project">
              Project
            </Link>

            <div
              className=" hover:text-gray-800 cursor-pointer"
              onClick={onFooter}
            >
              <Link href="">Contact</Link>
            </div>
            <DarkModeToggleButton />
          </nav>
        </div>
      </header>
    </>
  );
}
