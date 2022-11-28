import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className='text-gray-600 body-font'>
        <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
          <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
            Mike`s -
            <Link href='/project' className='text-gray-600 ml-1 ' rel='noopener noreferrer'>
              portfolio
            </Link>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            {/* <Link className='text-gray-500 hover:text-sky-600' href=''>
              <svg fill='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-5 h-5' viewBox='0 0 24 24'>
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </Link>
            <Link className='ml-3 text-gray-500' href=''>
              <svg fill='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-5 h-5' viewBox='0 0 24 24'>
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
              </svg>
            </Link>*/}
            <Link className='ml-3 text-gray-500 ' href='mailto:mikemwkim@gmail.com'>
              <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-5 h-5' viewBox='0 0 24 24'>
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                <path d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'></path>
              </svg>
            </Link>
            {/* LinkdIn */}
            <Link className='ml-3 text-gray-500' href='https://www.linkedin.com/in/mike-kim-59205323a' target='_blank'>
              <svg fill='currentColor' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0' className='w-5 h-5' viewBox='0 0 24 24'>
                <path stroke='none' d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'></path>
                <circle cx='4' cy='4' r='2' stroke='none'></circle>
              </svg>
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
}
