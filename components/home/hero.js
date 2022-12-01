import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          {`Hello, I'm Mike`}
          <br className='hidden lg:inline-block' />
        </h1>
        <p className='mb-8 leading-relaxed'>
          Front End Developer based in Melbourne with experience and passion for responsive websites to deliverer exceptional user experiences. Proficient in JavaScript, TypeScript, HTML/CSS, modern
          libraries and frameworks. Passionate about aesthetics and usability.
        </p>
        <div className='flex justify-center'>
          <Link className='btn-project' href='/project'>
            View selected Projects
          </Link>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <Animation />
      </div>
    </>
  );
}
