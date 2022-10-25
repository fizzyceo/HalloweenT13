import React from 'react';

const Footer = () => {
  return (
    <div className="p-16 relative flex flex-col gap-5  w-full">
      <img
        src="img/home-tree2.png"
        className="absolute top-[-10%]   right-[-2%] w-48 md:w-60  "
        alt=""
      />
      <div className="shape_small -z-10 absolute bottom-0 right-3 lg:bottom-16 lg:right-32  rounded-full w-[200px] blur-[90px] bg-[#ca5f21] h-[200px]"></div>
      <div className="shape_big -z-10  absolute top-10 lg:left-[20%] left-28 rounded-full w-[200px] blur-[96px] bg-[#ca5f21] h-[200px]"></div>

      <a
        href="#home"
        className="flex z-10 my-3 gap-2 justify-start items-center"
      >
        <img
          src="img/2.png"
          alt=""
          className="rounded-full inline-flex nav__logo w-12 h-12"
        />

        <p className="font-bold text-lg">Trick Or Code</p>
      </a>
      <p className="font-bold my-2">Enjoy your spookiest Event</p>
      <div className="  flex gap-8 items-center justify-between flex-wrap">
        <div className="z-10 flex flex-col gap-5">
          <h1 className="font-bold text-xl title text-[32px]"> About Us </h1>
          <ul>
            <li className="hover:underline font-sans text-lg">
              <a
                href="https://www.linkedin.com/company/google-developer-student-club-usthb/"
                target="_blank"
              >
                Club
              </a>
            </li>
            {/**sent em to club canva presentation */}
            <li className='hover:underline font-sans text-lg"'>
              <a
                href="https://www.canva.com/design/DAFP3RU5vgM/pgrvKv68l2mXVigse4zwsQ/view?utm_content=DAFP3RU5vgM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                target="_blank"
              >
                {' '}
                Event
              </a>
            </li>{' '}
            {/**sent em to the trick or code canva presentation */}
          </ul>
        </div>
        <div className="z-10 flex flex-col gap-5">
          <h1 className="font-bold text-[32px] text-2xl title"> Contact Us</h1>
          <ul className="font-sans flex flex-col gap-2 text-lg">
            <li className="flex gap-5 flex-row justify-center items-center">
              <svg
                className="fill-white w-5 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <p>: 0554568731</p>
            </li>
            <li className="flex gap-5 flex-row justify-center  items-center">
              <svg
                className="fill-white w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <p>: 0754569631</p>
            </li>
          </ul>
        </div>
        <div className=" z-10 flex flex-col gap-5">
          <h1 className="font-bold text-[32px] title"> Socials</h1>
          <ul className=" flex flex-row justify-center items-center gap-5  socials">
            <li>
              <a href="linkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </li>
            <li>
              {' '}
              <a href="insta">
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </li>
            <li>
              {' '}
              <a href="Discord Community">
                <svg
                  className="w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img
        src="img/home-tree1.png"
        className="relative bottom-[-15%]   left-[-5%] w-36 md:w-60  "
        alt=""
      />
      <h2 className="text-center text-slate-400">
        All CopyRightS reserved by ' GDSC '
      </h2>
    </div>
  );
};

export default Footer;
