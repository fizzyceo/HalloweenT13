import React from 'react';

const Homepage = () => {
  return (
    <div id="home" className="mx-3">
      <div className="home__container relative flex flex-col items-center justify-center gap-5">
        <div className="shape_small absolute bottom-7 right-3 lg:bottom-16 lg:right-32  rounded-full w-[200px] blur-[90px] bg-[#ca5f21] h-[200px]"></div>
        <div className="shape_big  absolute top-10 lg:left-10 left-0 rounded-full w-[300px] blur-[96px] bg-[#ca5f21] h-[300px]"></div>

        <div className="texts max-w-[450px] z-10 flex flex-col justify-center items-center  py-5 ">
          <div className="relative  thetitle flex flex-col justify-center items-center   font-serif text-3xl lg:text-[50px]  ">
            <h1 className="  py-2">HALLOWEEN</h1>
            <h2>
              {' '}
              TRICK OR <span className="">Code!</span>{' '}
            </h2>
            <img
              src="img/stars.png"
              className="absolute top-[-5%] animate-ping animate-pulse w-10 left-[-12%] -rotate-12"
              alt=""
            />
            <img
              src="img/stars.png"
              alt=""
              className="absolute bottom-5 w-10 right-[-20%] rotate-12 animate-pulse"
            />
          </div>
          <p className="py-3 text-center">
            At the welcoming of fall, a halloween themed tech development event
            was organized to bring in together designers, game dev and AI
            enthusiasts to show off their skills through tech challenges and
            learn about some fundamentals in python and AI through coding
            workshops and precise talks.
          </p>
        </div>
        <div className="z-10 flex flex-col items-center gap-5">
          <a
            href="#about"
            className="rounded-full  hover:text-[#fff] font-bold transition-all hover:bg-[#ca5f21] w-fit px-7  py-2 bg-[#fff] text-[#ca5f21]"
          >
            Explore Now!
          </a>
          <img
            src="img/home-pumpkin.png"
            alt=""
            className="w-[320px] lg:w-[32rem] md:w-[400px] xl:w-[500px]"
          />
        </div>
        <img
          src="img/home-tree1.png"
          className="absolute bottom-[35%] left-[-5%] w-36 md:w-60 lg:bottom-[30%] xl:bottom-[30%] lg:w-96 xl:w-96"
          alt=""
        />
        <img
          src="img/home-tree2.png"
          className="absolute bottom-[35%]   right-[-5%] w-36 md:w-60 lg:bottom-[30%] xl:bottom-[30%] lg:w-96 xl:w-96"
          alt=""
        />
      </div>
    </div>
  );
};

export default Homepage;
