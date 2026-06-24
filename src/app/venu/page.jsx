// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const isTouchDevice = () =>
//   typeof window !== "undefined" && "ontouchstart" in window;

// // Shared state manager — only one card open at a time on mobile
// const CardGroup = ({ children }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   return (
//     <>
//       {React.Children.map(children, (child, index) =>
//         React.cloneElement(child, {
//           isActive: activeIndex === index,
//           onActivate: () => setActiveIndex(index),
//           onDeactivate: () => setActiveIndex(null),
//         })
//       )}
//     </>
//   );
// };

// const FlipCard = ({ children, className, isActive, onActivate, onDeactivate }) => {
//   const [hovered, setHovered] = useState(false);

//   const revealed = isTouchDevice() ? isActive : hovered;

//   const handleClick = () => {
//     if (!isTouchDevice()) return;
//     if (isActive) {
//       onDeactivate();
//     } else {
//       onActivate(); // automatically closes previous via parent state
//     }
//   };

//   const handleMouseEnter = () => {
//     if (!isTouchDevice()) setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     if (!isTouchDevice()) setHovered(false);
//   };

//   const childArray = React.Children.toArray(children);

//   return (
//     <div
//       className={className}
//       onClick={handleClick}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{ cursor: "pointer", position: "relative" }}
//     >
//       <div className="relative w-full h-full">
//         {/* FRONT */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             transition: "opacity 0.5s ease",
//             opacity: revealed ? 0 : 1,
//             pointerEvents: revealed ? "none" : "auto",
//           }}
//         >
//           {childArray[0]}
//         </div>

//         {/* BACK */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             transition: "opacity 0.5s ease",
//             opacity: revealed ? 1 : 0,
//             pointerEvents: revealed ? "auto" : "none",
//           }}
//         >
//           {childArray[1]}
//         </div>
//       </div>
//     </div>
//   );
// };

// const page = () => {
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const intro = gsap.timeline();

//       intro
//         .from(".stickyAnimation2", {
//           opacity: 0,
//           duration: 1.2,
//           ease: "power4.out",
//         })
//         .from(
//           ".MainTI",
//           {
//             y: "200%",
//             duration: 1.2,
//             ease: "power4.out",
//             stagger: 0.1,
//           },
//           "-=0.8",
//         );

//       gsap.to(".stickyAnimation2", {
//         scale: 1.5,
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".MMAINDDiv2",
//           start: "top top",
//           end: "top -100%",
//           scrub: true,
//         },
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <div className="w-full min-h-screen relative MMAINDDiv overflow-x-hidden">
//         <div className="w-full h-[100vh] relative z-[-90] MMAINDDiv2 overflow-hidden">
//           {/* TEXT */}
//           <div className="w-full h-fit flex flex-col justify-center text-center items-center pt-[20vh]">
//             <div className="text-[#6C1D35] Font_CV text-[6vw] w-fit h-fit leading-[6vw] max-md:text-[14vw] max-md:leading-[14vw] tracking-tight overflow-hidden">
//               <span className="flex Font_CV MainTI text-white">Wedding <span className="max-md:hidden ml-5"> Events</span></span>
//             </div>
//             <div className="text-[#6C1D35] Font_CV text-[6vw] w-fit h-fit leading-[6vw] max-md:text-[14vw] max-md:leading-[14vw] tracking-tight overflow-hidden">
//               <span className="flex Font_CV sm:hidden MainTI text-white">Events</span>
//             </div>
//             <div className="text-[#6C1D35] Font_CV w-fit h-fit tracking-tight overflow-hidden">
//               <p className="Font_CV max-w-[600px] MainTI text-white w-[90%] mx-auto pb-5 mt-4 flex justify-center items-center">
//                 Join us for three days in Marrakech, among the olive groves and Atlas Mountains, beginning with the Mehendi and Sangeet on Saturday, followed by the Wedding Ceremony and Reception on Sunday, and a farewell breakfast on Monday.
//               </p>
//             </div>
//           </div>

//           <div className="w-full h-full absolute top-[0%] left-0 z-[-1] overflow-hidden">
//             <img
//               src={`/images/home/BgBack.png`}
//               alt="Img"
//               className="w-full h-full object-cover object-bottom ] stickyAnimation2"
//             />
//           </div>
//           <div className="pointer-events-none absolute bottom-[0%] left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#6C1D35]/60 to-[#6C1D35] z-100" />
//         </div>

//         {/* Cards Section */}
//         <div className="w-full h-fit bg-[#F1E2C6] relative z-100 bg-[] flex max-md:flex-col p-20 max-md:gap-10 gap-5 px-10 justify-center items-center">

//           <p className=" Font_CV capitalize italic text-[#6C1D35] text-[17px] leading-[2.5vw]  py-5 sm:hidden text-center ">Click on the cards below for more information on each event</p>

//           <CardGroup>

//             {/* T1 — Mehndi Lunch */}
//             <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%] ">
//               {/* FRONT */}
//               <div className="absolute inset-0 bg-[#F1E2C6] border border-[#6C1D35] py-10 px-5 flex flex-col justify-between">
//                 <div className="w-full h-fit flex flex-col max-md:items-center">
//                   <h1 className="text-[3vw] text-[#6C1D35] leading-[3vw] max-md:text-center max-md:text-[7vw] max-md:leading-[7vw] Font_CV text-[#6C1D35]">
//                     Mehendi
//                   </h1>
//                   <span className="text-[14px] text-[#6C1D35] leading-[16px] max-md:text-center Font_CV text-[#6C1D35]">
//                     Saturday, November 14th, 2026
//                   </span>
//                 </div>
//                 <div className="w-full aspect-2/1 flex justify-end max-md:justify-center items-end">
//                    <img src="/images/home/Tile.png" className="w-[40%] object-cover" />
//                 </div>
//               </div>
//               {/* BACK */}
//               <div className="absolute inset-0 text-[white] overflow-hidden flex items-center justify-center p-5">
//                 <img src={`/images/home/SkyBg.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1]  object-center" />
//                 <p className="text-[17px] text-center Font_CV">
//                   Timing ~ 12:00 PM <br /><br />
//                   Main Pool & Orchards<br /><br />
//                   Henna, lunch, and an afternoon in the orchards.
//                 </p>
//               </div>
//             </FlipCard>

//             {/* T2 — Sangeet Dinner */}
//             <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%]">
//               {/* FRONT */}
//               <div className="absolute inset-0 bg-[#F1E2C6] border border-[#6C1D35] py-10 px-5 flex flex-col justify-between">
//                 <div className="w-full h-fit flex flex-col max-md:items-center">
//                   <h1 className="text-[3vw] text-[#6C1D35] leading-[3vw] max-md:text-[7vw] max-md:leading-[7vw] Font_CV text-[#6C1D35]">
//                     Sangeet
//                   </h1>
//                   <span className="text-[14px] text-[#6C1D35] leading-[16px] Font_CV text-[#6C1D35]">
//                     Saturday, November 14th, 2026
//                   </span>
//                 </div>
//                 <div className="w-full aspect-2/1 flex justify-end max-md:justify-center items-end">
//                   <img src="/images/home/Tile.png" className="w-[40%] object-cover" />
//                 </div>
//               </div>
//               {/* BACK */}
//               <div className="absolute inset-0 text-[white] overflow-hidden flex items-center justify-center p-5">
//                 <img src={`/images/home/SkyBg.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1]  object-center" />
//                 <p className="text-[17px] text-center Font_CV">
//                   Timing ~ 7:30 PM <br /><br />
//                   Secret Garden<br /><br />
//                   Experience the magic of Marrakech with a night of music, dance, and two families coming together in celebration
//                 </p>
//               </div>
//             </FlipCard>

//             {/* T3 — Nikkah Ceremony */}
//             <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%]">
//               {/* FRONT */}
//               <div className="absolute inset-0 bg-[#F1E2C6] border border-[#6C1D35] py-10 px-5 flex flex-col justify-between">
//                 <div className="w-full h-fit flex flex-col max-md:items-center">
//                   <h1 className="text-[3vw] leading-[3vw] max-md:text-[7vw] max-md:leading-[7vw] Font_CV text-[#6C1D35]">
//                     Nikkah
//                   </h1>
//                   <span className="text-[14px] Font_CV text-[#6C1D35]">
//                     Sunday, November 15th, 2026
//                   </span>
//                 </div>
//                 <div className="w-full h-fit flex justify-end max-md:justify-center items-end">
//                    <img src="/images/home/Tile.png" className="w-[40%] object-cover" />
//                 </div>
//               </div>
//               {/* BACK */}
//               <div className="absolute inset-0 text-[white] overflow-hidden flex items-center justify-center p-5">
//                 <img src={`/images/home/SkyBg.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1]  object-center" />
//                 <p className="text-[17px] text-center Font_CV">
//                   Timing ~ 12:30 PM<br /><br />
//                   Grand Canal<br /><br />
//                   Amidst the olive groves and still waters of the Grand Canal, the wedding ceremony takes place
//                 </p>
//               </div>
//             </FlipCard>

//             {/* T4 — Reception */}
//             <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%]">
//               {/* FRONT */}
//               <div className="absolute inset-0 bg-[#F1E2C6] border border-[#6C1D35] py-10 px-5 flex flex-col justify-between">
//                 <div className="w-full h-fit flex flex-col max-md:items-center">
//                   <h1 className="text-[3vw] leading-[3vw] max-md:text-[7vw] max-md:leading-[7vw] Font_CV text-[#6C1D35]">
//                     Reception Dinner
//                   </h1>
//                   <span className="text-[14px] Font_CV text-[#6C1D35]">
//                     Sunday, November 15th, 2026
//                   </span>
//                 </div>
//                 <div className="w-full aspect-2/1 flex justify-end max-md:justify-center items-end">
//                    <img src="/images/home/Tile.png" className="w-[40%] object-cover" />
//                 </div>
//               </div>
//               {/* BACK */}
//               <div className="absolute inset-0 text-[white] overflow-hidden flex items-center justify-center p-5">
//                 <img src={`/images/home/SkyBg.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1]  object-center" />
//                 <p className="text-[17px] text-center Font_CV">
//                   Timing ~ 7:30 PM<br /><br />
//                   The Courtyard<br /><br />
//                   Beneath the arches of the Courtyard, an evening of dinner, toasts, and dancing
//                 </p>
//               </div>
//             </FlipCard>

//             {/* T5 — Farewell Breakfast */}
//             <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%]">
//               {/* FRONT */}
//               <div className="absolute inset-0 bg-[#F1E2C6] border border-[#6C1D35] py-10 px-5 flex flex-col justify-between">
//                 <div className="w-full h-fit flex flex-col max-md:items-center">
//                   <h1 className="text-[3vw] leading-[3vw] max-md:text-center max-md:text-[7vw] max-md:leading-[7vw] Font_CV text-[#6C1D35]">
//                     Farewell Breakfast
//                   </h1>
//                   <span className="text-[14px] Font_CV text-[#6C1D35]">
//                     Monday, November 16th, 2026
//                   </span>
//                 </div>
//                 <div className="w-full aspect-2/1 flex justify-end max-md:justify-center items-end">
//                   <img src="/images/home/Tile.png" className="w-[40%] object-cover" />
//                 </div>
//               </div>
//               {/* BACK */}
//               <div className="absolute inset-0 text-[white] overflow-hidden flex items-center justify-center p-5">
//                 <img src={`/images/home/SkyBg.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1]  object-center" />
//                 <p className="text-[17px] text-center Font_CV">
//                   Timing ~ 11:00 AM<br /><br />
//                   The Terraces<br /><br />
//                   A final farewell over breakfast on the Terrace
//                 </p>
//               </div>
//             </FlipCard>

//           </CardGroup>
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const isTouchDevice = () =>
  typeof window !== "undefined" && "ontouchstart" in window;

// Shared state manager — only one card open at a time on mobile
const CardGroup = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isActive: activeIndex === index,
          onActivate: () => setActiveIndex(index),
          onDeactivate: () => setActiveIndex(null),
        })
      )}
    </>
  );
};

const FlipCard = ({ children, className, isActive, onActivate, onDeactivate }) => {
  const [hovered, setHovered] = useState(false);

  const revealed = isTouchDevice() ? isActive : hovered;

  const handleClick = () => {
    if (!isTouchDevice()) return;
    if (isActive) {
      onDeactivate();
    } else {
      onActivate(); // automatically closes previous via parent state
    }
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice()) setHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice()) setHovered(false);
  };

  const childArray = React.Children.toArray(children);

  return (
    <div
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer", position: "relative" }}
    >
      <div className="relative w-full h-full">
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 0.5s ease",
            opacity: revealed ? 0 : 1,
            pointerEvents: revealed ? "none" : "auto",
          }}
        >
          {childArray[0]}
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 0.5s ease",
            opacity: revealed ? 1 : 0,
            pointerEvents: revealed ? "auto" : "none",
          }}
        >
          {childArray[1]}
        </div>
      </div>
    </div>
  );
};

const page = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline();

      intro
        .from(".stickyAnimation2", {
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
        })
        .from(
          ".MainTI",
          {
            y: "200%",
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1,
          },
          "-=0.8",
        );

      gsap.to(".stickyAnimation2", {
        scale: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".MMAINDDiv2",
          start: "top top",
          end: "top -100%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen relative MMAINDDiv overflow-x-hidden">
        <div className="w-full h-[100vh] relative z-[-90] MMAINDDiv2 overflow-hidden">
          {/* TEXT */}
          <div className="w-full h-fit flex flex-col justify-center text-center items-center pt-[20vh]">
            <div className="text-[#6C1D35] Font_CV text-[6vw] w-fit h-fit leading-[7.5vw] max-md:text-[14vw] max-md:leading-[14vw] tracking-tight overflow-hidden">
              <span className="flex Font_CV MainTI text-[#F1E2C6]">Wedding <span className="max-md:hidden ml-5"> Events</span></span>
            </div>
            <div className="text-[#6C1D35] Font_CV text-[6vw] w-fit h-fit leading-[6vw] max-md:text-[14vw] max-md:leading-[14vw] tracking-tight overflow-hidden">
              <span className="flex Font_CV sm:hidden MainTI text-[#F1E2C6]">Events</span>
            </div>
            <div className="text-[#6C1D35] Font_CV w-fit h-fit tracking-tight overflow-hidden">
              <p className="Font_CV max-w-[600px] MainTI text-[#F1E2C6] w-[90%] mx-auto pb-5 mt-4 flex justify-center items-center">
                Join us for three days in Marrakech, among the olive groves and Atlas Mountains, beginning with Marbha on Tuesday, Haldi and Sangeet on Wednesday, and the Baraat, Wedding Ceremony, Reception and After Party on Thursday.
              </p>
            </div>
          </div>

          <div className="w-full h-full absolute top-[0%] left-0 z-[-1] overflow-x-hidden">
            <img
              src={`/images/home/BgBack.png`}
              alt="Img"
              className="w-full h-full object-cover object-bottom max-md:object-[80%_0%] stickyAnimation2"
            />
          </div>
          <div className="pointer-events-none absolute bottom-[0%] left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#6C1D35]/60 to-[#6C1D35] z-100" />
        </div>

        {/* Cards Section */}
        <div className="w-full h-fit bg-[#F1E2C6] relative z-100 bg-[] flex max-md:flex-col p-20 max-md:gap-10 gap-5 px-10 justify-center items-center">

          <p className=" Font_CV capitalize italic text-[#6C1D35] text-[17px] leading-[2.5vw]  py-5 sm:hidden text-center ">Click on the cards below for more information on each event</p>

          <CardGroup>

            {/* T1 — Marbha / Welcome Dinner */}
            <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%] ">
              {/* FRONT */}
              <div className="absolute inset-0 bg-[#F1E2C6] border border-[#6C1D35] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit flex flex-col max-md:items-center">
                  <h1 className="text-[3vw] text-[#6C1D35] leading-[3vw] max-md:text-center max-md:text-[7vw] max-md:leading-[7vw] Font_CV text-[#6C1D35]">
                    Marbha
                  </h1>
                  <span className="text-[14px] text-[#6C1D35] leading-[16px] max-md:text-center Font_CV text-[#6C1D35]">
                    Tuesday, October 20th, 2026
                  </span>
                </div>
                <div className="w-full aspect-2/1 flex justify-end max-md:justify-center items-end">
                   <img src="/images/home/Tile.png" className="w-[40%] object-cover" />
                </div>
              </div>
              {/* BACK */}
              <div className="absolute inset-0 text-[white] overflow-hidden flex items-center justify-center p-5">
                <img src={`/images/home/SkyBg.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1]  object-center" />
                <p className="text-[17px] text-center Font_CV">
                  Welcome Dinner<br /><br />
                  Timing ~ 7:00 PM <br /><br />
                  Secret Location<br /><br />
                  An evening under the moon and stars in a night garden
                </p>
              </div>
            </FlipCard>

            {/* T2 — Here Comes the Sun / Haldi Ceremony */}
            <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%]">
              {/* FRONT */}
              <div className="absolute inset-0 bg-[#F1E2C6] border border-[#6C1D35] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit flex flex-col max-md:items-center">
                  <h1 className="text-[3vw] text-[#6C1D35] leading-[3vw] max-md:text-[7vw] max-md:leading-[7vw] Font_CV text-[#6C1D35]">
                    Here Comes the Sun
                  </h1>
                  <span className="text-[14px] text-[#6C1D35] leading-[16px] Font_CV text-[#6C1D35]">
                    Wednesday, October 21st, 2026
                  </span>
                </div>
                <div className="w-full aspect-2/1 flex justify-end max-md:justify-center items-end">
                  <img src="/images/home/Tile.png" className="w-[40%] object-cover" />
                </div>
              </div>
              {/* BACK */}
              <div className="absolute inset-0 text-[white] overflow-hidden flex items-center justify-center p-5">
                <img src={`/images/home/SkyBg.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1]  object-center" />
                <p className="text-[17px] text-center Font_CV">
                  Haldi Ceremony<br /><br />
                  Timing ~ 1:00 PM <br /><br />
                  Main Pool, The Oberoi<br /><br />
                  Sunflowers, marigolds, a yellow vespa, and citrus trees
                </p>
              </div>
            </FlipCard>

            {/* T3 — Naach Habibi / Sangeet */}
            <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%]">
              {/* FRONT */}
              <div className="absolute inset-0 bg-[#F1E2C6] border border-[#6C1D35] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit flex flex-col max-md:items-center">
                  <h1 className="text-[3vw] leading-[3vw] max-md:text-[7vw] max-md:leading-[7vw] Font_CV text-[#6C1D35]">
                    Naach Habibi
                  </h1>
                  <span className="text-[14px] Font_CV text-[#6C1D35]">
                    Wednesday, October 21st, 2026
                  </span>
                </div>
                <div className="w-full h-fit flex justify-end max-md:justify-center items-end">
                   <img src="/images/home/Tile.png" className="w-[40%] object-cover" />
                </div>
              </div>
              {/* BACK */}
              <div className="absolute inset-0 text-[white] overflow-hidden flex items-center justify-center p-5">
                <img src={`/images/home/SkyBg.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1]  object-center" />
                <p className="text-[17px] text-center Font_CV">
                  Sangeet: Bollywood in the Medina<br /><br />
                  Timing ~ 7:30 PM<br /><br />
                  The Oberoi<br /><br />
                  Morocco meets Bollywood, the Marrakech medina, and romantic early '90s–'00s film nostalgia
                </p>
              </div>
            </FlipCard>

            {/* T4 — Dilwale Dulhania Le Jaayenge / Baraat */}
            <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%]">
              {/* FRONT */}
              <div className="absolute inset-0 bg-[#F1E2C6] border border-[#6C1D35] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit flex flex-col max-md:items-center">
                  <h1 className="text-[3vw] leading-[3vw] max-md:text-[7vw] max-md:leading-[7vw] Font_CV text-[#6C1D35]">
                    Dilwale Dulhania Le Jaayenge
                  </h1>
                  <span className="text-[14px] Font_CV text-[#6C1D35]">
                    Thursday, October 22nd, 2026
                  </span>
                </div>
                <div className="w-full aspect-2/1 flex justify-end max-md:justify-center items-end">
                   <img src="/images/home/Tile.png" className="w-[40%] object-cover" />
                </div>
              </div>
              {/* BACK */}
              <div className="absolute inset-0 text-[white] overflow-hidden flex items-center justify-center p-5">
                <img src={`/images/home/SkyBg.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1]  object-center" />
                <p className="text-[17px] text-center Font_CV">
                  Baraat<br /><br />
                  Timing ~ 12:00 PM<br /><br />
                  Olive Tree Driveway, The Oberoi
                </p>
              </div>
            </FlipCard>

            {/* T5 — Pyaar Dosti Hai / Wedding Ceremony */}
            <FlipCard className="w-1/4 h-[43vh] max-md:h-[50vh] max-md:w-[90%]">
              {/* FRONT */}
              <div className="absolute inset-0 bg-[#F1E2C6] border border-[#6C1D35] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit flex flex-col max-md:items-center">
                  <h1 className="text-[3vw] leading-[3vw] max-md:text-center max-md:text-[7vw] max-md:leading-[7vw] Font_CV text-[#6C1D35]">
                    Pyaar Dosti Hai
                  </h1>
                  <span className="text-[14px] Font_CV text-[#6C1D35]">
                    Thursday, October 22nd, 2026
                  </span>
                </div>
                <div className="w-full aspect-2/1 flex justify-end max-md:justify-center items-end">
                  <img src="/images/home/Tile.png" className="w-[40%] object-cover" />
                </div>
              </div>
              {/* BACK */}
              <div className="absolute inset-0 text-[white] overflow-hidden flex items-center justify-center p-5">
                <img src={`/images/home/SkyBg.png`} alt="img" className="w-full h-full absolute top-0 left-0 object-cover z-[-1]  object-center" />
                <p className="text-[17px] text-center Font_CV">
                  Wedding Ceremony<br /><br />
                  Timing ~ 3:00 PM<br /><br />
                  Patio, The Oberoi<br /><br />
                  Tree, pillars, peacock, earth, and nature
                </p>
              </div>
            </FlipCard>

          </CardGroup>
        </div>
      </div>
    </>
  );
};

export default page;