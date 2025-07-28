"use client";

import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";

const menuItems = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "project",
    label: "projects",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item, index) => (
    <LinkScroll
      key={index}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
        activeLink === item.id
          ? "text-green-500 animation-active shadow-green-500"
          : "text-[#000] font-bold hover:text-green-500"
      }`}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.screenY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-gradient-to-r from-[whitesmoke] to-[rgb(167,243,242)] transition-all ${
          scrollActive
            ? "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] pt-0"
            : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-500 transition-all ease-in-out duration-750 hover:scale-110">
              <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded-[8px] border-green-500 bg-green-500">
                <span className="text-[#fff] text-[25px] font-bold hover:rotate-[360deg] transition-transform duration-700 ease-in-out">
                  P
                </span>
              </div>
              ortfolio
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-[#000] items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 2000,
                  delay: 100,
                  smooth: true,
                })
              }
              className="py-3 px-6 border-[2px] bg-white border-green-500 text-black font-semibold rounded-lg text-xl tracking-widest transition-all outline-none cursor-pointer hover:shadow-[5px_5px_0px_rgba(0,0,0,1)]"
            >
              Contact Me
            </button>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-[0_-1px_3px_0_rgba(0,0,0,0.1),_0_1px_2px_0_rgba(0,0,0,0.06)]">
        <div className="bg-gray-100 sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
