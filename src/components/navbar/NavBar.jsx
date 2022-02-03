import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  bg-indigo-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white md:text-2xl">
                My library{' '}
              </p>
            </Link>

            <button
              className=" text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div className="space-y-2">
                <div className="w-8 h-0.5 bg-white" />
                <div className="w-8 h-0.5 bg-white" />
                <div className="w-8 h-0.5 bg-white" />
              </div>
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center${
              navbarOpen ? ' flex' : ' hidden'
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link to="/allbooks">
                <li className="nav-item">
                  <p className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75 md:text-lg">
                    All Books
                  </p>
                </li>
              </Link>
              <Link to="/addbook">
                <li className="nav-item">
                  <p className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75 md:text-lg">
                    Add Book
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
