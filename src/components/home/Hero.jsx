"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const MainContHome = useRef();
  const Wall = useRef();
  const LeftDoor = useRef();
  const RightDoor = useRef();
  const doorContainer = useRef();

  const menuItems = [
    {
      img: "/images/home/Tile.png",
      title: "Pyaar Dosti Hai",
      link: "/",
    },
    {
      img: "/images/home/Tile.png",
      title: "From Marrakech, with Love",
      link: "/",
    },
    {
      img: "/images/home/Tile.png",
      title: "Wedding Itinerary",
      link: "/wedding-itinerary",
    },
    {
      img: "/images/home/Tile.png",
      title: "Travel and FAQs",
      link: "/travel-and-faqs",
    },
  ];

  useEffect(() => {
    const TL1 = gsap.timeline({
      scrollTrigger: {
        trigger: MainContHome.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        ease: "none",
      },
    });
    // Left door opens to the left (rotate from right edge)
    TL1.to(
      LeftDoor.current,
      {
        rotateY: -110,
        transformOrigin: "left center",
        ease: "none",
      },
      0,
    );

    // Right door opens to the right (rotate from left edge)
    TL1.to(
      RightDoor.current,
      {
        rotateY: -110,
        transformOrigin: "right center",
        ease: "none",
      },
      0,
    );
    TL1.to(doorContainer.current, { autoAlpha: 0, duration: 0.01 });
    TL1.to(Wall.current, {
      scale: 6,
      transformOrigin: "center",
      ease: "none",
    });

    // ================================================== ── Timeline 2: Menu Items (toggleActions — NOT scrub) ====================================== ──
    const TL2 = gsap.timeline({
      scrollTrigger: {
        trigger: MainContHome.current, // starts when door is done
        start: "85% bottom",
        toggleActions: "play reverse play reverse",
        // markers:true,
      },
    });
    TL2.to(".wedding-title", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    TL2.to(".menu-item", {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <div ref={MainContHome} className="w-full  max-sm:h-[300svh] sm:h-[400svh] relative flex">
      <div className=" w-full h-svh sticky top-0 left-0">
        {/* All-Content-Container */}
        <div className="w-full h-full relative overflow-hidden">
          {/* BAckground image */}
          <img
            src={`/images/home/BgBack.png`}
            alt="Img"
            className=" w-full h-full object-cover object-center z-45"
          />

          {/* Middel-Cont */}

          <div className="w-full h-full absolute top-0 left-0 z-47 flex flex-col justify-center items-center">
            {/* Logo */}
            <div className="w-[40px] aspect-square absolute top-[2%] left-1/2 -translate-x-1/2">
              <img
                src="/logo.svg"
                className="w-full object-cover object-center"
              />
            </div>

            <div className="wedding-container text-center pb-[5vh]">
              <div className="wedding-title w-[50vw] max-sm:w-[90vw] opacity-0 translate-y-10  flex mx-auto">
                <img
                  src="/images/home/NAMES.svg"
                  className="w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Menu_Cont */}
            <div className="grid w-fit grid-cols-4 menuScaler gap-[2vw] max-sm:grid-cols-2">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.link}>
                  <div
                    key={index}
                    className="menu-item flex cursor-pointer group flex-col opacity-0 translate-y-10 items-center gap-3 relative"
                  >
                    {/* Icon with click-hint animations */}
                    <div className="menu-icon h-[100px] w-[100px] relative transition-all duration-500 ease-out group-hover:rotate-45 group-hover:scale-[0.7]">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                      {/* Pulse rings */}
                      <span className="pulse-ring " />
                      <span
                        className="pulse-ring "
                        style={{ animationDelay: "0.7s" }}
                      />
                      {/* Cursor-click dot */}
                      <span className="cursor-hint " />
                    </div>

                    <p className="menu-text F1 font-semibold Font_CV transition-all duration-500 ease-out sm:opacity-0 sm:group-hover:opacity-100 text-[14px] text-white leading-[15px] uppercase max-w-[150px] text-center">
                      {item.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Wall-With-MainDoor */}
          <div className=" w-full h-full absolute  top-0 left-0 overflow-hidden z-50 pointer-events-none">
            {/* Wall-Image */}
            <img
              ref={Wall}
              src={`/images/home/Wall.png`}
              alt="wall"
              className="w-full h-full object-bottom object-cover max-sm:object-[51.1%_100%]  relative z-50"
            />

            {/* Door-Container */}
            <div
              ref={doorContainer}
              className="  DoorHeight Doorwidth absolute left-[51.2%]  flex -translate-x-1/2  bottom-[7.5%] z-49 "
            >
              {/* Left-Door */}
              <div
                ref={LeftDoor}
                className="w-1/2 h-full overflow-hidden "
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={`/images/home/DOOR-L.png`}
                  alt="left"
                  className=" h-full  object-center"
                />
              </div>

              {/* Right-Door */}
              <div
                ref={RightDoor}
                className="w-1/2 h-full  overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={`/images/home/DOOR-R.png`}
                  alt="Right"
                  className=" h-full  object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
