import Image from "next/legacy/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Animation from "./animation";
import * as React from "react";

export default function Hero({ projects }) {
  const projectImages = projects.results.map((image) => image.cover.file?.url);

  const [imageNumber, SetImageNumber] = useState(0);
  const imgLength = projectImages.length;

  // last Slide
  const lastSlide = projectImages[imgLength - 1];
  //first Slide
  const firstSlide = projectImages[0];

  const transitionStyle = `transform 1000ms ease 0s`;
  const [transition, setTransition] = useState("");
  const [resize, setResize] = useState();

  // copied slide Arr for infinite Slider
  let copiedImages = [lastSlide, ...projectImages, firstSlide];

  // responsive resizing function for mobile
  const handleResize = () => {
    setResize(window.innerWidth);
  };
  React.useEffect(() => {
    setResize(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resize]);

  useEffect(() => {
    if (imageNumber === 6) {
      let a = setTimeout(() => {
        setTransition(" ");
        SetImageNumber(0);
        return () => {
          clearTimeout(a);
        };
      }, 2100);
    } else if (imageNumber >= 1 && imageNumber < 6) {
      let b = setTimeout(() => {
        SetImageNumber(imageNumber + 1);
        return () => {
          clearTimeout(b);
        };
      }, 2000);
    } else if (imageNumber === 0) {
      let c = setTimeout(() => {
        setTransition(transitionStyle);
        SetImageNumber(imageNumber + 1);
        return () => {
          clearTimeout(c);
        };
      }, 500);
    }
  });

  return (
    <>
      <div className="  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          {`Hello, I'm Mike`}
          <br className="hidden lg:inline-block" />
        </h1>

        <p className="mb-8 leading-relaxed">
          Front End Developer based in Melbourne with experience and passion for
          responsive websites to deliver exceptional user experiences.
          Proficient in
          <strong>
            JavaScript, TypeScript, HTML/CSS, ReactJs, Redux, Tailwindcss
          </strong>
          , modern libraries and frameworks. Passionate about aesthetics and
          usability.
        </p>
        <div className="flex justify-center">
          <Link className="btn-project" href="/project">
            View selected Projects
          </Link>
        </div>
      </div>

      {/* slide image */}
      {resize >= 1280 || resize === "" ? (
        <div
          className={
            "overflow-hidden  w-[546px] sm:h-[390px] rounded-md max-w-full "
          }
        >
          {copiedImages.map((slideImage, slideIndex) => {
            return (
              <div
                key={slideIndex}
                style={{
                  transform: `translate3d(0px,${imageNumber * -396}px, 0px `,
                  transition: `${transition}`,
                }}
                className={"xxs:"}
              >
                <Image
                  src={`${slideImage}`}
                  className="rounded-md  "
                  alt="cover image"
                  width="546"
                  height="390"
                  objectfit="cover"
                  quality={70}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Animation />
        </div>
      )}
      {/* </div> */}
    </>
  );
}
