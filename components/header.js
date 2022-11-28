import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";
import * as Scroll from "react-scroll";
import Image from "next/image";
import logo from "../public/mk_circle.png";

export default function Header() {
  let scroll = Scroll.animateScroll;
  function onFooter() {
    scroll.scrollToBottom();
  }
  return (
    <>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link href='/' className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <Image src={logo} className='' alt='logo' width={35} height={35}></Image>
            <span className='ml-3 text-xl'>Mike`s portfolio</span>
          </Link>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <Link className='mr-5 hover:text-gray-900' href='/'>
              Home
            </Link>
            <Link className='mr-5 hover:text-gray-900' href='/project'>
              Project
            </Link>
            {/* <Link className='mr-5 hover:text-gray-900' href='/about'>
              About
            </Link> */}
            <div className='mr-5 hover:text-gray-900 cursor-pointer' onClick={onFooter}>
              Contact
            </div>
            <DarkModeToggleButton />
          </nav>
        </div>
      </header>
    </>
  );
}
