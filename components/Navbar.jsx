import React from 'react';
import { useState } from 'react';

const Navbar = ({ selectedMenu }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className={`py-3 px-8 fill-white  nav  flex justify-between items-center `}
    >
      <a href=" nav__logo  " className="flex gap-2 justify-center items-center">
        <img
          src="img/logo-skull.png"
          alt=""
          className="inline-flex nav__logo w-10 h-10"
        />

        <p className="font-bold text-lg">Halloween</p>
      </a>
      <div
        className={` nav__menu z-30  rounded-b-2xl py-2 ${
          showMenu ? 'top-0' : 'top-[-100%]'
        }`}
      >
        <ul className="py-3 gap-5 nav__list">
          <li
            className={`${
              selectedMenu === 'home' && 'text-[#ca5f21]'
            }  nav__item`}
          >
            <a className={``} href="#home">
              Home
            </a>
          </li>

          <li
            className={`nav__item ${
              selectedMenu === 'about' && 'text-[#ca5f21]'
            }`}
          >
            <a className="" href="#about">
              About
            </a>
          </li>

          <li
            className={`nav__item ${
              selectedMenu === 'items' && 'text-[#ca5f21]'
            }`}
          >
            <a className="" href="#items">
              Items
            </a>
          </li>

          <li
            className={`nav__item ${
              selectedMenu === 'plan' && 'text-[#ca5f21]'
            }`}
          >
            <a className="" href="#challenges">
              Challenges
            </a>
          </li>
        </ul>
        <div
          onClick={() => setShowMenu((show) => !show)}
          className="close absolute cursor-pointer  top-2 right-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </svg>
        </div>
        <img
          src="img/nav-bat.png"
          className={`w-40 ${showMenu ? 'block' : 'hidden'} nav__img`}
          alt=""
        />
      </div>
      <div
        className="toggle cursor-pointer"
        onClick={() => setShowMenu((show) => !show)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
