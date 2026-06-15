// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// const itineraryData = [
//   {
//     day: "Day 1",
//     title: "Welcome Party",
//     time: "PM",
//     venue: "The Oberoi, Marrakech",
//     description:
//       "The festivities begin. Join us for sunset cocktails, great food, familiar faces, and the first of many dance-floor appearances.",
//     icon: "🥂",
//     tag: "DAY 01",
//     image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
//   },
//   {
//     day: "Day 2",
//     title: "Mehndi",
//     time: "Early PM",
//     venue: "The Oberoi, Marrakech",
//     description:
//       "Henna, sunshine, music, and plenty of colour. A relaxed afternoon filled with laughter, celebration, and beautiful traditions.",
//     icon: "🌸",
//     tag: "DAY 02",
//     image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
//   },
//   {
//     day: "Day 2",
//     title: "Sangeet",
//     time: "Late PM",
//     venue: "The Oberoi, Marrakech",
//     description:
//       "The battle of performances begins. Expect dancing, surprises, family rivalries, and enough energy to power Marrakech for a week.",
//     icon: "🎶",
//     tag: "DAY 02",
//     image: "https://images.unsplash.com/photo-1566461993980-d8e85e0bef7e?w=600&q=80",
//   },
//   {
//     day: "Day 3",
//     title: "Rahul Ki Shraadi",
//     time: "Early PM",
//     venue: "The Oberoi, Marrakech",
//     description:
//       "A final send-off to Rahul's bachelor days. Come prepared for traditions, laughter, and a few stories best left unpublished.",
//     icon: "👘",
//     tag: "DAY 03",
//     image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=600&q=80",
//   },
//   {
//     day: "Day 3",
//     title: "Reception Dinner",
//     time: "PM",
//     venue: "The Oberoi, Marrakech",
//     description:
//       "An evening of celebration, heartfelt toasts, exceptional food, and the official beginning of the next chapter.",
//     icon: "🕯️",
//     tag: "DAY 03",
//     image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
//   },
//   {
//     day: "Day 3",
//     title: "After Party",
//     time: "Late PM – Early AM",
//     venue: "Location Revealed Later",
//     description:
//       "For those still standing. The music gets louder, the shoes come off, and the celebrations continue long after midnight.",
//     icon: "🌙",
//     tag: "DAY 03",
//     image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
//   },
//   {
//     day: "Day 4",
//     title: "Farewell",
//     time: "Morning",
//     venue: "The Oberoi, Marrakech",
//     description:
//       "One final breakfast, a few last hugs, and countless memories packed alongside your luggage for the journey home.",
//     icon: "✈️",
//     tag: "DAY 04",
//     image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
//   },
// ];

// function ItineraryRow({ item, index }) {
//   const rowRef = useRef(null);
//   const imageRef = useRef(null);
//   const titleRef = useRef(null);
//   const lineRef = useRef(null);
//   const [hovered, setHovered] = useState(false);
//   const mousePos = useRef({ x: 0, y: 0 });
//   const rafRef = useRef(null);

//   // Track mouse position relative to the page
//   const handleMouseMove = (e) => {
//     mousePos.current = { x: e.clientX, y: e.clientY };

//     if (hovered && imageRef.current) {
//       gsap.to(imageRef.current, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.55,
//         ease: "power3.out",
//       });
//     }
//   };

//   const handleMouseEnter = (e) => {
//     setHovered(true);

//     // Snap image to cursor position instantly, then animate in
//     gsap.set(imageRef.current, {
//       x: e.clientX,
//       y: e.clientY,
//     });

//     gsap.to(imageRef.current, {
//       opacity: 1,
//       scale: 1,
//       duration: 0.45,
//       ease: "power3.out",
//     });

//     gsap.to(titleRef.current, {
//       x: 18,
//       duration: 0.35,
//       ease: "power2.out",
//     });

//     gsap.to(lineRef.current, {
//       scaleX: 1,
//       duration: 0.5,
//       ease: "power3.out",
//     });
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);

//     gsap.to(imageRef.current, {
//       opacity: 0,
//       scale: 0.88,
//       duration: 0.35,
//       ease: "power3.in",
//     });

//     gsap.to(titleRef.current, {
//       x: 0,
//       duration: 0.35,
//       ease: "power2.out",
//     });

//     gsap.to(lineRef.current, {
//       scaleX: 0,
//       duration: 0.35,
//       ease: "power3.in",
//     });
//   };

//   // Global mousemove tracker for floating image
//   useEffect(() => {
//     const onMove = (e) => {
//       if (hovered && imageRef.current) {
//         gsap.to(imageRef.current, {
//           x: e.clientX,
//           y: e.clientY,
//           duration: 0.55,
//           ease: "power3.out",
//         });
//       }
//     };
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, [hovered]);

//   // Row entrance animation
//   useEffect(() => {
//     gsap.fromTo(
//       rowRef.current,
//       { opacity: 0, y: 40 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.7,
//         delay: 0.1 + index * 0.08,
//         ease: "power3.out",
//       }
//     );
//     // Set initial line state
//     gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });
//   }, []);

//   return (
//     <>
//       {/* Floating image — fixed position, follows cursor */}
//       <div
//         ref={imageRef}
//         className="pointer-events-none fixed z-50"
//         style={{
//           opacity: 0,
//           scale: 0.88,
//           transform: "translate(-50%, -60%)",
//           width: "260px",
//           height: "180px",
//           top: 0,
//           left: 0,
//           willChange: "transform",
//         }}
//       >
//         <div className="w-full h-full overflow-hidden" style={{ borderRadius: "2px" }}>
//           <img
//             src={item.image}
//             alt={item.title}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         {/* Subtle venue caption on image */}
//         <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent">
//           <p className="text-white text-xs tracking-widest uppercase opacity-90 font-light">
//             {item.venue}
//           </p>
//         </div>
//       </div>

//       {/* Row */}
//       <div
//         ref={rowRef}
//         className="group relative border-t border-stone-200 cursor-pointer"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         style={{ opacity: 0 }}
//       >
//         {/* Animated underline */}
//         <div
//           ref={lineRef}
//           className="absolute bottom-0 left-0 right-0 h-px bg-white"
//           style={{ transformOrigin: "left" }}
//         />

//         <div className="flex items-center justify-between py-7 md:py-9 px-0 gap-6">
//           {/* Left: tag */}
//           <div className="hidden md:block w-24 shrink-0">
//             <span
//               className="text-xs Font_CV tracking-[0.2em] text-white font-light"
              
//             >
//               {item.tag}
//             </span>
//           </div>

//           {/* Center: title */}
//           <div ref={titleRef} className="flex-1 min-w-0" style={{ willChange: "transform" }}>
//             <h2
//               className="text-3xl md:text-5xl Font_CV uppercase lg:text-6xl font-light text-white leading-none tracking-tight transition-none"
              
//             >
//               {item.title}
//             </h2>
//             {/* Description — appears on hover via CSS */}
//             <p
//               className={`mt-3 text-sm text-white Font_CV font-light leading-relaxed max-w-xl
//                          opacity-0 max-h-0 overflow-hidden
//                          group-hover:opacity-100 group-hover:max-h-20
//                          transition-all duration-500 ease-in-out`}
            
//             >
//               {item.description}
//             </p>
//             <p
//               className={`mt-3 text-sm text-white font-light leading-relaxed max-w-xl
//                          opacity-0 max-h-0 overflow-hidden
//                          group-hover:opacity-100 group-hover:max-h-20
//                          transition-all duration-500 ease-in-out`}
              
//             >
//               <span className="font-semibold Font_CV"> VENU </span> :  <span className=" Font_CV uppercase">  {item.venue} </span>
//             </p>
//           </div>

//           {/* Right: time + icon */}
//           <div className="shrink-0 text-right flex flex-col items-end gap-1">
//             <span
//               className="text-xs Font_CV  tracking-[0.18em] text-[white]  uppercase  block"
          
//             >
//               {item.time}
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default function WeddingItinerary() {
//   const headerRef = useRef(null);
//   const subRef = useRef(null);
//   const tagRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       tagRef.current,
//       { opacity: 0, y: -10 },
//       { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
//     );
//     gsap.fromTo(
//       headerRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 0.9, delay: 0.15, ease: "power3.out" }
//     );
//     gsap.fromTo(
//       subRef.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 0.7, delay: 0.35, ease: "power3.out" }
//     );
//   }, []);

//   return (
//     <main
//       className="min-h-screen  text-stone-800"
//     >

//          <div className="w-full h-screen fixed top-0 left-0 z-[-1] ">
//         <img
//           src="/images/home/SkyBg.png"
//           alt="iomg"
//           className=" w-full h-full scale-[1.2] object-cover object-center absolute top-0 left-0 z-[-1] opacity-90"
//         />
//       </div>
        
//       {/* Google Fonts */}
      

//       <div className="w-full mx-auto px-6 md:px-12 lg:px-16 ">
//         {/* Header */}

//         <h2
//           className="text-center uppercase Font_CV text-[4vw] text-white  max-sm:text-[10vw] font-semibold py-[20vh] Font_CV flex flex-col justify-center items-center max-sm:justify-start max-sm:mt-10"
          
//         >
//           Wedding Itinerary
//         </h2>
        

//         {/* Itinerary List */}
//         <section className="pb-28">
//           {itineraryData.map((item, index) => (
//             <ItineraryRow key={`${item.tag}-${item.title}`} item={item} index={index} />
//           ))}
//           {/* Final border */}
//           <div className="border-t border-stone-200" />
//         </section>

        
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const itineraryData = [
  {
    day: "Day 1",
    title: "Welcome Party",
    time: "PM",
    venue: "The Oberoi, Marrakech",
    description:
      "The festivities begin. Join us for sunset cocktails, great food, familiar faces, and the first of many dance-floor appearances.",
    icon: "🥂",
    tag: "DAY 01",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
  },
  {
    day: "Day 2",
    title: "Mehndi",
    time: "Early PM",
    venue: "The Oberoi, Marrakech",
    description:
      "Henna, sunshine, music, and plenty of colour. A relaxed afternoon filled with laughter, celebration, and beautiful traditions.",
    icon: "🌸",
    tag: "DAY 02",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
  },
  {
    day: "Day 2",
    title: "Sangeet",
    time: "Late PM",
    venue: "The Oberoi, Marrakech",
    description:
      "The battle of performances begins. Expect dancing, surprises, family rivalries, and enough energy to power Marrakech for a week.",
    icon: "🎶",
    tag: "DAY 02",
    image:
      "https://images.unsplash.com/photo-1566461993980-d8e85e0bef7e?w=600&q=80",
  },
  {
    day: "Day 3",
    title: "Rahul Ki Shraadi",
    time: "Early PM",
    venue: "The Oberoi, Marrakech",
    description:
      "A final send-off to Rahul's bachelor days. Come prepared for traditions, laughter, and a few stories best left unpublished.",
    icon: "👘",
    tag: "DAY 03",
    image:
      "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=600&q=80",
  },
  {
    day: "Day 3",
    title: "Reception Dinner",
    time: "PM",
    venue: "The Oberoi, Marrakech",
    description:
      "An evening of celebration, heartfelt toasts, exceptional food, and the official beginning of the next chapter.",
    icon: "🕯️",
    tag: "DAY 03",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
  },
  {
    day: "Day 3",
    title: "After Party",
    time: "Late PM – Early AM",
    venue: "Location Revealed Later",
    description:
      "For those still standing. The music gets louder, the shoes come off, and the celebrations continue long after midnight.",
    icon: "🌙",
    tag: "DAY 03",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
  },
  {
    day: "Day 4",
    title: "Farewell",
    time: "Morning",
    venue: "The Oberoi, Marrakech",
    description:
      "One final breakfast, a few last hugs, and countless memories packed alongside your luggage for the journey home.",
    icon: "✈️",
    tag: "DAY 04",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
  },
];

function ItineraryRow({ item, index }) {
  const rowRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);


  const handleMouseEnter = (e) => {
    if (isMobile) return;

    setHovered(true);

    gsap.set(imageRef.current, {
      x: e.clientX,
      y: e.clientY,
    });

    gsap.to(imageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(titleRef.current, {
      x: 18,
      duration: 0.35,
      ease: "power2.out",
    });

    gsap.to(lineRef.current, {
      scaleX: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };


  const handleMouseLeave = () => {
    setHovered(false);

    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 0.88,
      duration: 0.35,
      ease: "power3.in",
    });

    gsap.to(titleRef.current, {
      x: 0,
      duration: 0.35,
      ease: "power2.out",
    });

    gsap.to(lineRef.current, {
      scaleX: 0,
      duration: 0.35,
      ease: "power3.in",
    });
  };

    useEffect(() => {
    const moveImage = (e) => {
      if (!hovered || isMobile || !imageRef.current) return;

      gsap.to(imageRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.55,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveImage);

    return () => {
      window.removeEventListener("mousemove", moveImage);
    };
  }, [hovered, isMobile]);


  useEffect(() => {
    gsap.fromTo(
      rowRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: index * 0.08,
        ease: "power3.out",
      }
    );

    gsap.set(lineRef.current, {
      scaleX: 0,
      transformOrigin: "left",
    });
  }, []);


  return (
    <>
      {/* Floating Image Desktop Only */}
      <div
        ref={imageRef}
        className="hidden md:block pointer-events-none fixed z-50"
        style={{
          opacity: 0,
          scale: 0.88,
          transform: "translate(-50%, -60%)",
          width: "260px",
          height: "180px",
          top: 0,
          left: 0,
          willChange: "transform",
        }}
      >
        <div className="w-full h-full overflow-hidden rounded-sm">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white text-xs tracking-widest uppercase opacity-90 font-light">
            {item.venue}
          </p>
        </div>
      </div>


      {/* Row */}
      <div
        ref={rowRef}
        className="group relative border-t border-stone-200 cursor-pointer"
        onMouseEnter={!isMobile ? handleMouseEnter : undefined}
        onMouseLeave={!isMobile ? handleMouseLeave : undefined}
        style={{ opacity: 0 }}
      >

        {/* Hover underline */}
        <div
          ref={lineRef}
          className="absolute bottom-0 left-0 right-0 h-px bg-white"
        />


        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            justify-between
            py-5 md:py-9
            gap-3 md:gap-6
          "
        >

          {/* Day Tag Desktop */}
          <div className="hidden md:block w-24 shrink-0">
            <span className="text-xs Font_CV tracking-[0.2em] text-white font-light">
              {item.tag}
            </span>
          </div>


          {/* Title + Description */}
          <div
            ref={titleRef}
            className="flex-1 min-w-0 max-sm:py-[2vh]"
            style={{
              willChange: "transform",
            }}
          >

            {/* Mobile Tag */}
            <span className="block md:hidden text-xs Font_CV tracking-[0.2em] max-sm:text-3xl text-white mb-2">
              {item.tag}
            </span>


            <h2
              className={`
                text-[10vw]
                sm:text-5xl
                lg:text-6xl
                Font_CV
                uppercase
                font-light
                text-white
                leading-none
                tracking-tight
              `}
            >
              {item.title}
            </h2>


            {/* Description */}
            <p
              className={`
                mt-3
                text-sm
                text-white
                Font_CV
                font-light
                leading-relaxed
                max-w-xl

                opacity-100
                max-h-full

                md:opacity-0
                md:max-h-0
                md:overflow-hidden

                max-sm:uppercase

                md:group-hover:opacity-100
                md:group-hover:max-h-32

                transition-all
                duration-500
              `}
            >
              {item.description}
            </p>


            {/* Venue */}
            <p
              className={`
                mt-2
                text-sm
                text-white
                Font_CV
                leading-relaxed

                opacity-100
                max-h-full

                md:opacity-0
                md:max-h-0
                md:overflow-hidden

                md:group-hover:opacity-100
                md:group-hover:max-h-20

                transition-all
                duration-500
              `}
            >
              <span className="font-semibold">
                VENUE:
              </span>{" "}
              <span className="uppercase">
                {item.venue}
              </span>
            </p>

          </div>


          {/* Time */}
          <div
            className={`
              shrink-0
              flex
              flex-col
              items-start
              md:items-end
              text-left
              md:text-right
            `}
          >
            <span className="text-xs Font_CV tracking-[0.18em] text-white uppercase">
              {item.time}
            </span>
          </div>

        </div>
      </div>
    </>
  );
}

export default function WeddingItinerary() {
  const headerRef = useRef(null);
  const subRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      tagRef.current,
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      subRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.35,
        ease: "power3.out",
      }
    );
  }, []);


  return (
    <main className="min-h-screen text-stone-800">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/images/home/SkyBg.png"
          alt="background"
          className={`
            w-full 
            h-full 
            object-cover 
            object-center
            scale-110
            md:scale-125
            opacity-90
          `}
        />
      </div>


      {/* Container */}
      <div
        className={`
          w-full
          mx-auto
          px-5
          sm:px-8
          md:px-12
          lg:px-16
        `}
      >

        {/* Heading */}
        <h2
          ref={headerRef}
          className={`
            text-center
            uppercase
            Font_CV
            text-[10vw]
            md:text-[4vw]
            text-white
            font-semibold
            py-24
            md:py-[20vh]
            leading-none
          `}
        >
          Wedding
          <br className="md:hidden" />
          <span className="md:ml-3">
            Itinerary
          </span>
        </h2>


        {/* List */}
        <section className="pb-20 md:pb-28">

          {itineraryData.map((item, index) => (
            <ItineraryRow
              key={`${item.tag}-${item.title}`}
              item={item}
              index={index}
            />
          ))}

          {/* Final border */}
          <div className="border-t border-stone-200" />

        </section>

      </div>
    </main>
  );
}