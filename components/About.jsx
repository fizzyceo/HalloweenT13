import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="flex relative flex-wrap flex-row justify-center items-center gap-5"
    >
      <div className="shape_big  absolute top-14 lg:right-[50%] right-36 rounded-full w-[200px] blur-[96px] bg-[#ca5f21] h-[200px]"></div>
      <div className="w-full texts max-w-[450px] z-10 flex flex-col justify-center items-center  py-5 mx-6 ">
        <h2 className="text-[40px]">
          ABOUT <span className="">TEAM 13</span>
        </h2>
        <p className="py-3 text-center">
          We are one of the upcoming GDSC members, Our team is composed of 9
          members : ilyes,manel,meriem,samy,Youssra,khawla,rami,mohammed managed
          by the team leader <p className="font-bold">'Kennyxy'</p>
        </p>
        <button className="rounded-full my-5  hover:text-[#fff] font-bold transition-all hover:bg-[#ca5f21] w-fit px-7  py-2 bg-[#fff] text-[#ca5f21]">
          CHECK US
        </button>
      </div>
      <img
        src="img/about-scare.png"
        className="w-[320px] lg:w-[32rem] md:w-[400px] xl:w-[500px]"
        alt=""
      />
    </div>
  );
};

export default About;
