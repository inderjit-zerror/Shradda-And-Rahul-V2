"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RiMenu4Fill, RiMenu3Line } from "react-icons/ri";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const TopMenu = () => {
  const navRef = useRef(null);
  const pathname = usePathname();

  const [isNavOpen, SetIsNavOpen] = useState(false);


   if (pathname === "/") return null;


  // MOBILE MENU
  const clickCheck = () => {
    if (!isNavOpen) {
      const tl = gsap.timeline();

      tl.to(".MOBILENAV", {
        right: "0%",
        duration: 0.35,
        ease: "power3.out",
      });

      tl.to(
        ".smNavItem",
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.2",
      );

      SetIsNavOpen(true);
    } else {
      const tl = gsap.timeline();

      tl.to(".smNavItem", {
        opacity: 0,
        y: 20,
        stagger: 0.04,
        duration: 0.15,
      });

      tl.to(
        ".MOBILENAV",
        {
          right: "-100%",
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.05",
      );

      SetIsNavOpen(false);
    }
  };

  const closeMenu = () => {
    if (isNavOpen) clickCheck();
  };
  

  const navLinks = [

     {

    name: "Pyaar Dosti Hai",
    path: "/",
  },
  {

    name: "From Marrakech, with Love",
    path: "/",
  },
  {

    name: "Wedding Itinerary",
    path: "/wedding-itinerary",
  },
  {

    name: "Travel and FAQs",
    path: "/travel-and-faqs",
  },
    
  ];

  return (
    <>
      {/* MAIN NAVBAR */}
      <div
        ref={navRef}
        className="w-full h-[80px] fixed top-0 left-0 z-[9999] px-5 lg:px-8 flex items-center justify-between"
      >
        {/* LOGO */}
        <Link href={`/`} className="w-fit h-[40px] z-[1000]">
          <img
            src={`/logo.svg`}
            alt="Logo"
            className="h-full object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-[2vw]">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.path}>
              <div
                className={`relative text-[14px] F1 text-white uppercase cursor-pointer group ${
                  pathname === item.path ? "border-b border-[white]" : ""
                }`}
              >
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[white] group-hover:w-full duration-300"></div>

                {item.name}
              </div>
            </Link>
          ))}

          
        </div>

        {/* MOBILE MENU BTN */}
        <div onClick={clickCheck} className="lg:hidden z-[99999] cursor-pointer ">
          {isNavOpen ? (
            <RiMenu3Line className="text-[2rem] text-[#9E8854]" />
          ) : (
            <RiMenu4Fill className="text-[2rem] text-[#9E8854]" />
          )}
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div className="MOBILENAV fixed top-0 right-[-100%] w-full sm:w-[80%] h-screen bg-[#f8f5f1] z-[999] flex flex-col px-8 pt-[120px] pb-10">
        {/* LINKS */}
        <div className="flex flex-col gap-6">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.path} onClick={closeMenu}>
              <div
                className={`smNavItem opacity-0 translate-y-[20px] text-[1.3rem] uppercase tracking-wide ${
                  pathname === item.path ? "text-[#9E8854]" : "text-white"
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>

        
      </div>
    </>
  );
};

export default TopMenu;