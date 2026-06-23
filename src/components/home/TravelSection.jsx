// // "use client";

// // import Image from "next/image";
// // import { useEffect, useRef, useState } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);


// // const Texts = [
// //   "Success is not about achieving perfection every day; it is about making consistent progress",

// //   "Technology continues to evolve at an incredible pace, ",

// //   "Every great project starts with a simple idea. ",

// //   "Learning to code is a journey that requires patience, curiosity, and persistence. Each challenge you solve strengthens your problem-solving skills and builds confidence.",

// //   "The most successful people are often those who embrace change, ",

// //   "A positive mindset can significantly influence your productivity and creativity.",

// //   "Building meaningful relationships is one of the most valuable investments you can make.",
// // ];

// // // First "slide" is the location title, the rest are the rotating Texts.
// // const titleTexts = ["Mumbai", ...Texts];

// // // ---------------------------------------------------------------------------
// // // Heart-shape math (unchanged) — generates points lying exactly on the
// // // classic parametric heart curve so the intro silhouette is a real heart
// // // rather than a hand-guessed shape.
// // // ---------------------------------------------------------------------------
// // function generateHeartPositions(count = 24, scale = 17) {
// //   const positions = [];
// //   for (let i = 0; i < count; i++) {
// //     const t = (i / count) * Math.PI * 2;
// //     const mathX = 16 * Math.pow(Math.sin(t), 3);
// //     const mathY =
// //       13 * Math.cos(t) -
// //       5 * Math.cos(2 * t) -
// //       2 * Math.cos(3 * t) -
// //       Math.cos(4 * t);

// //     positions.push({
// //       x: Math.round(mathX * scale),
// //       // Flip Y: the formula assumes "up" is positive, CSS/screen grows down.
// //       y: Math.round(-mathY * scale),
// //     });
// //   }
// //   return positions;
// // }

// // // 24 heart-shaped target offsets, mapped 1:1 onto the 24 images
// // // (6 per section x 4 sections), in render order (section1 -> section4).
// // const heartPositions = generateHeartPositions(24, 17);

// // const section1 = [
// //   {
// //     id: 1,
// //     src: "/images/try/1.jpg",
// //     alt: "Artwork 1",
// //     grid: "col-start-3 row-start-8",
// //     size: "w-44 aspect-[2/3]",
// //     shadowPosition: "-left-64 -top-20",
// //   },
// //   {
// //     id: 2,
// //     src: "/images/try/2.jpg",
// //     alt: "Artwork 2",
// //     grid: "col-start-7 row-start-3",
// //     size: "w-56 aspect-[5/7]",
// //     shadowPosition: "left-0 top-[260px]",
// //   },
// //   {
// //     id: 3,
// //     src: "/images/try/3.jpg",
// //     alt: "Artwork 3",
// //     grid: "col-start-11 row-start-10",
// //     size: "w-44 aspect-square",
// //     shadowPosition: "-left-28 -top-4",
// //   },
// //   {
// //     id: 4,
// //     src: "/images/try/4.jpg",
// //     alt: "Artwork 4",
// //     grid: "col-start-11 row-start-1",
// //     size: "w-40 aspect-[3/4]",
// //     shadowPosition: "-left-64 top-8",
// //   },
// //   {
// //     id: 5,
// //     src: "/images/try/5.jpg",
// //     alt: "Artwork 5",
// //     grid: "col-start-1 row-start-4",
// //     size: "w-32 aspect-[2/3]",
// //     shadowPosition: "left-16 top-72",
// //   },
// //   {
// //     id: 6,
// //     src: "/images/try/6.jpg",
// //     alt: "Artwork 6",
// //     grid: "col-start-14 row-start-5",
// //     size: "w-36 aspect-[2/3]",
// //     shadowPosition: "-left-52 top-32",
// //   },
// // ];

// // const section2 = section1.map((item) => ({
// //   ...item,
// //   src: `/images/try1/${item.id}.jpg`,
// // }));

// // const section3 = section1.map((item) => ({
// //   ...item,
// //   src: `/images/try2/${item.id}.jpg`,
// // }));

// // const section4 = section1.map((item) => ({
// //   ...item,
// //   src: `/images/try/${item.id}.jpg`,
// // }));

// // const allSections = [section1, section2, section3, section4];

// // // Flat list of every image with a unique key (s{sectionIndex}-{id}), in the
// // // exact order heartPositions should map onto them.
// // const flatArtworks = allSections.flatMap((sec, sIdx) =>
// //   sec.map((item) => ({ ...item, refKey: `s${sIdx + 1}-${item.id}` })),
// // );

// // // ---------------------------------------------------------------------------
// // // Shared pointer tracker — ONE mousemove listener for the whole page instead
// // // of one per <ArtworkGrid/>. Each grid subscribes via gsap.ticker so the
// // // actual interpolation/easing is handled entirely by GSAP's quickTo (which
// // // runs on GSAP's own rAF loop), not React state — so none of this ever
// // // triggers a React re-render.
// // // ---------------------------------------------------------------------------
// // function usePointerRef() {
// //   const pointerRef = useRef({ x: 0, y: 0 });

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       const centerX = window.innerWidth / 2;
// //       const centerY = window.innerHeight / 2;
// //       const normalizedX = (e.clientX - centerX) / centerX;
// //       const normalizedY = (e.clientY - centerY) / centerY;

// //       pointerRef.current.x = -normalizedX * 50;
// //       pointerRef.current.y = -normalizedY * 50;
// //     };

// //     window.addEventListener("mousemove", handleMouseMove, { passive: true });
// //     return () => window.removeEventListener("mousemove", handleMouseMove);
// //   }, []);

// //   return pointerRef;
// // }

// // // ---------------------------------------------------------------------------
// // // ScrollingTitle — crossfades through ["Mumbai", ...Texts] as the user
// // // scrolls down the page. All slides are stacked absolutely on top of each
// // // other; a single scrubbed timeline (tied to the full scroll length of
// // // .MainContALLStory) fades + drifts the outgoing slide up while fading +
// // // drifting the incoming slide in from below, so transitions track scroll
// // // position exactly (scroll up = it reverses smoothly too).
// // // ---------------------------------------------------------------------------
// // function ScrollingTitle() {
// //   const wrapRef = useRef(null);
// //   const slideRefs = useRef([]);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       // Initial state: first slide visible, rest hidden just below.
// //       slideRefs.current.forEach((el, i) => {
// //         if (!el) return;
// //         gsap.set(el, {
// //           opacity: i === 0 ? 1 : 0,
// //           y: i === 0 ? 0 : 16,
// //           filter: i === 0 ? "blur(0px)" : "blur(6px)",
// //         });
// //       });

// //       const tl = gsap.timeline({
// //         scrollTrigger: {
// //           trigger: ".MainContALLStory",
// //           start: "top top",
// //           end: "bottom bottom",
// //           scrub: true,
// //         },
// //         defaults: { ease: "power2.inOut" },
// //       });

// //       const slideCount = titleTexts.length;
// //       const segment = 1 / slideCount; // evenly spaced across full scroll

// //       titleTexts.forEach((_, i) => {
// //         if (i === slideCount - 1) return;
// //         const start = i * segment + segment * 0.3; // hold briefly before transitioning
// //         const outEl = slideRefs.current[i];
// //         const inEl = slideRefs.current[i + 1];
// //         if (!outEl || !inEl) return;

// //         tl.to(
// //           outEl,
// //           { opacity: 0, y: -16, filter: "blur(6px)", duration: segment * 0.4 },
// //           start,
// //         ).to(
// //           inEl,
// //           { opacity: 1, y: 0, filter: "blur(0px)", duration: segment * 0.4 },
// //           start + segment * 0.05,
// //         );
// //       });
// //     });

// //     return () => ctx.revert();
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);

// //   return (
// //     <div
// //       ref={wrapRef}
// //       className="relative w-full h-[3em] flex items-center justify-center text-center"
// //     >
// //       {titleTexts.map((text, i) => (
// //         <p
// //           key={i}
// //           ref={(el) => (slideRefs.current[i] = el)}
// //           className={`
// //             absolute inset-0 flex items-center justify-center
// //             px-4
// //             ${i === 0 ? "uppercase text-[2vw] tracking-tight" : "text-[1.1vw] leading-snug"}
// //           `}
// //           style={{ willChange: "transform, opacity, filter" }}
// //         >
// //           {text}
// //         </p>
// //       ))}
// //     </div>
// //   );
// // }

// // function ArtworkGrid({ artworks, sectionIndex, registerRealRef, pointerRef }) {
// //   const gridRef = useRef(null);
// //   const shadowRefs = useRef([]);

// //   // Stable per-item ref callbacks so re-renders never detach/reattach the
// //   // real-image refs the heart-intro flies into.
// //   const refCallbacks = useRef({});
// //   const getRealRefCallback = (key) => {
// //     if (!refCallbacks.current[key]) {
// //       refCallbacks.current[key] = (el) => registerRealRef(key, el);
// //     }
// //     return refCallbacks.current[key];
// //   };

// //   const getShadowRefCallback = (index) => {
// //     return (el) => {
// //       shadowRefs.current[index] = el;
// //     };
// //   };

// //   useEffect(() => {
// //     const grid = gridRef.current;
// //     if (!grid) return;

// //     // quickTo gives GPU-friendly, interruptible tweens — moving the
// //     // mouse mid-animation re-targets smoothly instead of snapping.
// //     const gridXTo = gsap.quickTo(grid, "x", {
// //       duration: 0.9,
// //       ease: "power3.out",
// //     });
// //     const gridYTo = gsap.quickTo(grid, "y", {
// //       duration: 0.9,
// //       ease: "power3.out",
// //     });

// //     // Shadows trail behind the images (slower duration = more lag),
// //     // each with its own per-item drift multiplier, just like the original.
// //     const shadowTweens = shadowRefs.current.map((el, i) => {
// //       if (!el) return null;
// //       const factor = 1 + artworks[i].id * 0.08;
// //       return {
// //         factor,
// //         xTo: gsap.quickTo(el, "x", { duration: 1.6, ease: "power2.out" }),
// //         yTo: gsap.quickTo(el, "y", { duration: 1.6, ease: "power2.out" }),
// //       };
// //     });

// //     const tick = () => {
// //       const { x, y } = pointerRef.current;
// //       gridXTo(x);
// //       gridYTo(y);
// //       shadowTweens.forEach((t) => {
// //         if (!t) return;
// //         t.xTo(x * 1.25 * t.factor);
// //         t.yTo(y * 1.25 * t.factor);
// //       });
// //     };

// //     gsap.ticker.add(tick);
// //     return () => gsap.ticker.remove(tick);
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);

// //   return (
// //     <section className="relative h-screen overflow-hidden bg-[#f6f6f6] scale-[0.9] ALLINCONT">
// //       <div
// //         ref={gridRef}
// //         className="mx-auto grid h-full max-w-[1800px] grid-cols-14 grid-rows-12 px-10"
// //         style={{ willChange: "transform" }}
// //       >
// //         {artworks.map((item, index) => (
// //           <div key={item.id} className={`${item.grid} relative self-start`}>
// //             {/* Shadow */}
// //             <div
// //               ref={getShadowRefCallback(index)}
// //               className={`
// //                 artwork-shadow
// //                 absolute
// //                 ${item.shadowPosition}
// //                 ${item.size}

// //                 bg-[#ececec]
// //                 opacity-0
// //                 z-0
// //               `}
// //               style={{ willChange: "transform" }}
// //             />

// //             {/* Image — the "real" final-position box the heart clones fly
// //                 into. Starts invisible until the intro hands off. */}
// //             <div
// //               ref={getRealRefCallback(`s${sectionIndex}-${item.id}`)}
// //               className={`
// //                 relative
// //                 ${item.size}
// //                 z-10
// //                 overflow-hidden
// //                 opacity-0
// //               `}
// //             >
// //               <Image
// //                 src={item.src}
// //                 alt={item.alt}
// //                 fill
// //                 sizes="300px"
// //                 className={`
// //                   object-cover
// //                   transition-transform
// //                   duration-700
// //                   ease-out
// //                   hover:scale-105
// //                   shadow-[0_20px_45px_rgba(0,0,0,0.18)]
// //                 `}
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // function HeartIntro({ realRefs }) {
// //   const overlayRef = useRef(null);
// //   const cloneRefs = useRef([]);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       // Arrange every clone into the heart shape, centered within the
// //       // overlay box (which sits at the top of .MainContALLStory, scoped
// //       // to that container instead of the raw browser viewport).
// //       cloneRefs.current.forEach((el, i) => {
// //         if (!el) return;
// //         gsap.set(el, {
// //           position: "absolute",
// //           top: "50%",
// //           left: "50%",
// //           xPercent: -50,
// //           yPercent: -50,
// //           x: heartPositions[i].x,
// //           y: heartPositions[i].y,
// //           width: 56,
// //           height: 56,
// //           opacity: 0,
// //           scale: 0.6,
// //           force3D: true,
// //         });
// //       });

// //       // Small entrance flourish: the heart assembles itself on first paint.
// //       gsap.to(cloneRefs.current, {
// //         opacity: 1,
// //         scale: 1,
// //         duration: 0.8,
// //         stagger: 0.02,
// //         ease: "back.out(1.6)",
// //         delay: 0.2,
// //       });

// //       const flyToGrid = () => {
// //         const overlayRect = overlayRef.current.getBoundingClientRect();

// //         flatArtworks.forEach((item, i) => {
// //           const clone = cloneRefs.current[i];
// //           const real = realRefs.current[item.refKey];
// //           if (!clone || !real) return;

// //           const rect = real.getBoundingClientRect();
// //           // Convert the real image's viewport-relative rect into a position
// //           // relative to the overlay box, so the clone lands correctly no
// //           // matter where .MainContALLStory sits on the page or how far
// //           // the page has scrolled.
// //           const relLeft = rect.left - overlayRect.left + rect.width / 2;
// //           const relTop = rect.top - overlayRect.top + rect.height / 2;

// //           gsap.to(clone, {
// //             left: relLeft,
// //             top: relTop,
// //             x: 0,
// //             y: 0,
// //             width: rect.width,
// //             height: rect.height,
// //             opacity: 0,
// //             duration: 1.1,
// //             delay: i * 0.015,
// //             ease: "power3.inOut",
// //             overwrite: "auto",
// //             force3D: true,
// //           });

// //           gsap.to(real, {
// //             opacity: 1,
// //             duration: 0.6,
// //             delay: i * 0.015 + 0.55,
// //             ease: "power2.out",
// //             overwrite: "auto",
// //           });
// //         });

// //         // Shadows go fully opaque once MainContALLStory's trigger fires.
// //         gsap.to(".artwork-shadow", {
// //           opacity: 1,
// //           duration: 0.6,
// //           ease: "power2.out",
// //           overwrite: "auto",
// //         });
// //       };

// //       const flyBackToHeart = () => {
// //         flatArtworks.forEach((item, i) => {
// //           const clone = cloneRefs.current[i];
// //           const real = realRefs.current[item.refKey];
// //           if (!clone) return;

// //           gsap.to(clone, {
// //             left: "50%",
// //             top: "50%",
// //             x: heartPositions[i].x,
// //             y: heartPositions[i].y,
// //             width: 56,
// //             height: 56,
// //             opacity: 1,
// //             duration: 0.8,
// //             delay: i * 0.01,
// //             ease: "power2.inOut",
// //             overwrite: "auto",
// //             force3D: true,
// //           });

// //           if (real) {
// //             gsap.to(real, {
// //               opacity: 0,
// //               duration: 0.3,
// //               ease: "power2.in",
// //               overwrite: "auto",
// //             });
// //           }
// //         });

// //         // Revert shadows back to invisible when scrolling back above the trigger.
// //         gsap.to(".artwork-shadow", {
// //           opacity: 0,
// //           duration: 0.4,
// //           ease: "power2.in",
// //           overwrite: "auto",
// //         });
// //       };

// //       // Fires once scroll passes top:-5% of .MainContALLStory, reverses if
// //       // you scroll back above it.
// //       ScrollTrigger.create({
// //         trigger: ".MainContALLStory",
// //         start: "top top",
// //         end: "top -5%",
// //         onEnter: flyToGrid,
// //         onLeaveBack: flyBackToHeart,
// //       });
// //     });

// //     // Debounced resize -> single ScrollTrigger.refresh() instead of one
// //     // per pixel of resize jitter.
// //     let resizeTimeout;
// //     const handleResize = () => {
// //       clearTimeout(resizeTimeout);
// //       resizeTimeout = setTimeout(() => ScrollTrigger.refresh(), 150);
// //     };
// //     window.addEventListener("resize", handleResize, { passive: true });

// //     return () => {
// //       clearTimeout(resizeTimeout);
// //       window.removeEventListener("resize", handleResize);
// //       ctx.revert();
// //     };
// //     // realRefs is a stable ref object — this only needs to run once.
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);

// //   return (
// //     <div
// //       ref={overlayRef}
// //       className="absolute top-0 left-0 w-full h-screen z-[100] pointer-events-none"
// //     >
// //       {flatArtworks.map((item, i) => (
// //         <div
// //           key={item.refKey}
// //           ref={(el) => (cloneRefs.current[i] = el)}
// //           // rounded
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 opacity-0  overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
// //         >
// //           <div className="relative w-full h-full">
// //             <Image
// //               src={item.src}
// //               alt={item.alt}
// //               fill
// //               sizes="200px"
// //               className="object-cover"
// //             />
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default function TravelSection() {
// //   const realRefs = useRef({});
// //   const pointerRef = usePointerRef();

// //   const registerRealRef = (key, el) => {
// //     realRefs.current[key] = el;
// //   };

// //   const locations1 = [
// //     "Bademiya",
// //     "Bastian",
// //     "Sea Link",
// //     "Gateway Of India",
// //     "Marine Drive",
// //   ];

// //   // Both scroll-driven timelines for the fixed intro panel live in a single
// //   // gsap.context so they're properly killed/reverted together on unmount
// //   // (the original never cleaned these up, which leaks ScrollTriggers on
// //   // route changes / hot reload and is a common source of jank).
// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       const tl11 = gsap.timeline({
// //         scrollTrigger: {
// //           trigger: ".MainContALLStory",
// //           start: "top -50%",
// //           end: "top -100%",
// //           scrub: true,
// //         },
// //         defaults: { ease: "none" },
// //       });
// //       tl11
// //         .to(".CENTERIMGMAIN", { top: "15%" }, "aaq1")
// //         .to(".MainInnerCont", { scale:1.5 }, "aaq1")
// //         .from(".BGOUTOPC", { opacity: 0 }, "aaq1")
// //         .from(".HIGHTXT", { opacity: 0 }, "aaq1")
// //         .from(".SYM", { opacity: 0 }, "aaq1");

     
// //     });

// //     return () => ctx.revert();
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);

// //   return (
// //     <main className="bg-[#f6f6f6] MainContALLStory relative w-full overflow-hidden">
// //       <div className="FixedAnimaterScreen fixed left-0 top-0 w-full h-svh z-199 flex justify-center items-center">
// //         {/* <div className="w-[50vw] h-full bg-[#f6f6f6] BGOUTOPC opacity-70" /> */}

// //         <div className="w-[20vw] aspect-5/6 CENTERIMGMAIN absolute top-[150%] left-[50%] -translate-x-1/2">
// //           <img
// //             src="/images/try2/4.jpg"
// //             alt="img"
// //             className="w-full h-full object-center object-cover"
// //           />
// //         </div>

// //         {/* TEXT-Name — now cycles through Mumbai + Texts as you scroll */}
// //         <div className="w-[30vw] capitalize h-fit absolute bottom-[15%] Font_CV flex justify-center items-center ALTOD HIGHTXT">
// //           <ScrollingTitle />
// //         </div>
       
// //       </div>

// //       <div className="w-full h-fit relative MainInnerCont">
// //         <HeartIntro realRefs={realRefs} />
// //         <ArtworkGrid
// //           artworks={section1}
// //           sectionIndex={1}
// //           registerRealRef={registerRealRef}
// //           pointerRef={pointerRef}
// //         />
// //         <ArtworkGrid
// //           artworks={section2}
// //           sectionIndex={2}
// //           registerRealRef={registerRealRef}
// //           pointerRef={pointerRef}
// //         />
// //         <ArtworkGrid
// //           artworks={section3}
// //           sectionIndex={3}
// //           registerRealRef={registerRealRef}
// //           pointerRef={pointerRef}
// //         />
// //         <ArtworkGrid
// //           artworks={section4}
// //           sectionIndex={4}
// //           registerRealRef={registerRealRef}
// //           pointerRef={pointerRef}
// //         />
// //       </div>
// //     </main>
// //   );
// // }


// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const StickyIMG = [
//   `/images/try/1.jpg`,
//   `/images/try/2.jpg`,
//   `/images/try/3.jpg`,
//   `/images/try/4.jpg`,
//   `/images/try/5.jpg`,
//   `/images/try/6.jpg`,
// ]


// const Texts = [
//   "Success is not about achieving perfection every day; it is about making consistent progress",

//   "Technology continues to evolve at an incredible pace, ",

//   "Every great project starts with a simple idea. ",

//   "Learning to code is a journey that requires patience, curiosity, and persistence. Each challenge you solve strengthens your problem-solving skills and builds confidence.",

//   "The most successful people are often those who embrace change, ",

//   "A positive mindset can significantly influence your productivity and creativity.",

//   "Building meaningful relationships is one of the most valuable investments you can make.",
// ];

// // First "slide" is the location title, the rest are the rotating Texts.
// const titleTexts = ["Mumbai", ...Texts];

// // ---------------------------------------------------------------------------
// // Heart-shape math (unchanged) — generates points lying exactly on the
// // classic parametric heart curve so the intro silhouette is a real heart
// // rather than a hand-guessed shape.
// // ---------------------------------------------------------------------------
// function generateHeartPositions(count = 24, scale = 17) {
//   const positions = [];
//   for (let i = 0; i < count; i++) {
//     const t = (i / count) * Math.PI * 2;
//     const mathX = 16 * Math.pow(Math.sin(t), 3);
//     const mathY =
//       13 * Math.cos(t) -
//       5 * Math.cos(2 * t) -
//       2 * Math.cos(3 * t) -
//       Math.cos(4 * t);

//     positions.push({
//       x: Math.round(mathX * scale),
//       // Flip Y: the formula assumes "up" is positive, CSS/screen grows down.
//       y: Math.round(-mathY * scale),
//     });
//   }
//   return positions;
// }

// // 24 heart-shaped target offsets, mapped 1:1 onto the 24 images
// // (6 per section x 4 sections), in render order (section1 -> section4).
// const heartPositions = generateHeartPositions(24, 17);

// // Image dimensions for heart formation (width, height) in pixels
// const imageDimensions = [
//   { width: 56, height: 84 },   // id: 1, aspect 2/3
//   { width: 80, height: 112 },  // id: 2, aspect 5/7
//   { width: 56, height: 56 },   // id: 3, aspect square
//   { width: 64, height: 85 },   // id: 4, aspect 3/4
//   { width: 48, height: 72 },   // id: 5, aspect 2/3
//   { width: 56, height: 84 },   // id: 6, aspect 2/3
// ];

// const section1 = [
//   {
//     id: 1,
//     src: "/images/try/1.jpg",
//     alt: "Artwork 1",
//     grid: "col-start-3 row-start-8",
//     size: "w-44 aspect-[2/3]",
//     shadowPosition: "-left-64 -top-20",
//   },
//   {
//     id: 2,
//     src: "/images/try/2.jpg",
//     alt: "Artwork 2",
//     grid: "col-start-7 row-start-3",
//     size: "w-56 aspect-[5/7]",
//     shadowPosition: "left-0 top-[260px]",
//   },
//   {
//     id: 3,
//     src: "/images/try/3.jpg",
//     alt: "Artwork 3",
//     grid: "col-start-11 row-start-10",
//     size: "w-44 aspect-square",
//     shadowPosition: "-left-28 -top-4",
//   },
//   {
//     id: 4,
//     src: "/images/try/4.jpg",
//     alt: "Artwork 4",
//     grid: "col-start-11 row-start-1",
//     size: "w-40 aspect-[3/4]",
//     shadowPosition: "-left-64 top-8",
//   },
//   {
//     id: 5,
//     src: "/images/try/5.jpg",
//     alt: "Artwork 5",
//     grid: "col-start-1 row-start-4",
//     size: "w-32 aspect-[2/3]",
//     shadowPosition: "left-16 top-72",
//   },
//   {
//     id: 6,
//     src: "/images/try/6.jpg",
//     alt: "Artwork 6",
//     grid: "col-start-14 row-start-5",
//     size: "w-36 aspect-[2/3]",
//     shadowPosition: "-left-52 top-32",
//   },
// ];

// const section2 = section1.map((item) => ({
//   ...item,
//   src: `/images/try1/${item.id}.jpg`,
// }));

// const section3 = section1.map((item) => ({
//   ...item,
//   src: `/images/try2/${item.id}.jpg`,
// }));

// const section4 = section1.map((item) => ({
//   ...item,
//   src: `/images/try/${item.id}.jpg`,
// }));

// const allSections = [section1, section2, section3, section4];

// // Flat list of every image with a unique key (s{sectionIndex}-{id}), in the
// // exact order heartPositions should map onto them.
// const flatArtworks = allSections.flatMap((sec, sIdx) =>
//   sec.map((item) => ({ ...item, refKey: `s${sIdx + 1}-${item.id}` })),
// );

// // ---------------------------------------------------------------------------
// // Shared pointer tracker — ONE mousemove listener for the whole page instead
// // of one per <ArtworkGrid/>. Each grid subscribes via gsap.ticker so the
// // actual interpolation/easing is handled entirely by GSAP's quickTo (which
// // runs on GSAP's own rAF loop), not React state — so none of this ever
// // triggers a React re-render.
// // ---------------------------------------------------------------------------
// function usePointerRef() {
//   const pointerRef = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const centerX = window.innerWidth / 2;
//       const centerY = window.innerHeight / 2;
//       const normalizedX = (e.clientX - centerX) / centerX;
//       const normalizedY = (e.clientY - centerY) / centerY;

//       pointerRef.current.x = -normalizedX * 50;
//       pointerRef.current.y = -normalizedY * 50;
//     };

//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return pointerRef;
// }

// // ---------------------------------------------------------------------------
// // ScrollingTitle — crossfades through ["Mumbai", ...Texts] as the user
// // scrolls down the page. All slides are stacked absolutely on top of each
// // other; a single scrubbed timeline (tied to the full scroll length of
// // .MainContALLStory) fades + drifts the outgoing slide up while fading +
// // drifting the incoming slide in from below, so transitions track scroll
// // position exactly (scroll up = it reverses smoothly too).
// // ---------------------------------------------------------------------------
// function ScrollingTitle() {
//   const wrapRef = useRef(null);
//   const slideRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Initial state: first slide visible, rest hidden just below.
//       slideRefs.current.forEach((el, i) => {
//         if (!el) return;
//         gsap.set(el, {
//           opacity: i === 0 ? 1 : 0,
//           y: i === 0 ? 0 : 16,
//           filter: i === 0 ? "blur(0px)" : "blur(6px)",
//         });
//       });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".MainContALLStory",
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true,
//         },
//         defaults: { ease: "power2.inOut" },
//       });

//       const slideCount = titleTexts.length;
//       const segment = 1 / slideCount; // evenly spaced across full scroll

//       titleTexts.forEach((_, i) => {
//         if (i === slideCount - 1) return;
//         const start = i * segment + segment * 0.3; // hold briefly before transitioning
//         const outEl = slideRefs.current[i];
//         const inEl = slideRefs.current[i + 1];
//         if (!outEl || !inEl) return;

//         tl.to(
//           outEl,
//           { opacity: 0, y: -16, filter: "blur(6px)", duration: segment * 0.4 },
//           start,
//         ).to(
//           inEl,
//           { opacity: 1, y: 0, filter: "blur(0px)", duration: segment * 0.4 },
//           start + segment * 0.05,
//         );
//       });
//     });

//     return () => ctx.revert();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div
//       ref={wrapRef}
//       className="relative w-full h-[3em] flex items-center justify-center text-center"
//     >
//       {titleTexts.map((text, i) => (
//         <p
//           key={i}
//           ref={(el) => (slideRefs.current[i] = el)}
//           className={`
//             absolute inset-0 flex items-center justify-center
//             px-4
//             ${i === 0 ? "uppercase text-[2vw] tracking-tight" : "text-[1.1vw] leading-snug"}
//           `}
//           style={{ willChange: "transform, opacity, filter" }}
//         >
//           {text}
//         </p>
//       ))}
//     </div>
//   );
// }

// function ArtworkGrid({ artworks, sectionIndex, registerRealRef, pointerRef }) {
//   const gridRef = useRef(null);
//   const shadowRefs = useRef([]);

//   // Stable per-item ref callbacks so re-renders never detach/reattach the
//   // real-image refs the heart-intro flies into.
//   const refCallbacks = useRef({});
//   const getRealRefCallback = (key) => {
//     if (!refCallbacks.current[key]) {
//       refCallbacks.current[key] = (el) => registerRealRef(key, el);
//     }
//     return refCallbacks.current[key];
//   };

//   const getShadowRefCallback = (index) => {
//     return (el) => {
//       shadowRefs.current[index] = el;
//     };
//   };

//   useEffect(() => {
//     const grid = gridRef.current;
//     if (!grid) return;

//     // quickTo gives GPU-friendly, interruptible tweens — moving the
//     // mouse mid-animation re-targets smoothly instead of snapping.
//     const gridXTo = gsap.quickTo(grid, "x", {
//       duration: 0.9,
//       ease: "power3.out",
//     });
//     const gridYTo = gsap.quickTo(grid, "y", {
//       duration: 0.9,
//       ease: "power3.out",
//     });

//     // Shadows trail behind the images (slower duration = more lag),
//     // each with its own per-item drift multiplier, just like the original.
//     const shadowTweens = shadowRefs.current.map((el, i) => {
//       if (!el) return null;
//       const factor = 1 + artworks[i].id * 0.08;
//       return {
//         factor,
//         xTo: gsap.quickTo(el, "x", { duration: 1.6, ease: "power2.out" }),
//         yTo: gsap.quickTo(el, "y", { duration: 1.6, ease: "power2.out" }),
//       };
//     });

//     const tick = () => {
//       const { x, y } = pointerRef.current;
//       gridXTo(x);
//       gridYTo(y);
//       shadowTweens.forEach((t) => {
//         if (!t) return;
//         t.xTo(x * 1.25 * t.factor);
//         t.yTo(y * 1.25 * t.factor);
//       });
//     };

//     gsap.ticker.add(tick);
//     return () => gsap.ticker.remove(tick);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden bg-[#f6f6f6] scale-[0.9] ALLINCONT">
//       <div
//         ref={gridRef}
//         className="mx-auto grid h-full max-w-[1800px] grid-cols-14 grid-rows-12 px-10"
//         style={{ willChange: "transform" }}
//       >
//         {artworks.map((item, index) => (
//           <div key={item.id} className={`${item.grid} relative self-start`}>
//             {/* Shadow */}
//             <div
//               ref={getShadowRefCallback(index)}
//               className={`
//                 artwork-shadow
//                 absolute
//                 ${item.shadowPosition}
//                 ${item.size}

//                 bg-[#ececec]
//                 opacity-0
//                 z-0
//               `}
//               style={{ willChange: "transform" }}
//             />

//             {/* Image — the "real" final-position box the heart clones fly
//                 into. Starts invisible until the intro hands off. */}
//             <div
//               ref={getRealRefCallback(`s${sectionIndex}-${item.id}`)}
//               className={`
//                 relative
//                 ${item.size}
//                 z-10
//                 overflow-hidden
//                 opacity-0
//               `}
//             >
//               <Image
//                 src={item.src}
//                 alt={item.alt}
//                 fill
//                 sizes="300px"
//                 className={`
//                   object-cover
//                   transition-transform
//                   duration-700
//                   ease-out
//                   hover:scale-105
//                   shadow-[0_20px_45px_rgba(0,0,0,0.18)]
//                 `}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function HeartIntro({ realRefs }) {
//   const overlayRef = useRef(null);
//   const cloneRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Arrange every clone into the heart shape with different sizes/aspect ratios
//       cloneRefs.current.forEach((el, i) => {
//         if (!el) return;
        
//         // Calculate which image this clone corresponds to (repeats every 6 images for each section)
//         const imageIndex = i % 6;
//         const dims = imageDimensions[imageIndex];
        
//         gsap.set(el, {
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           xPercent: -50,
//           yPercent: -50,
//           x: heartPositions[i].x,
//           y: heartPositions[i].y,
//           width: dims.width,
//           height: dims.height,
//           opacity: 0,
//           scale: 0.6,
//           force3D: true,
//         });
//       });

//       // Small entrance flourish: the heart assembles itself on first paint.
//       gsap.to(cloneRefs.current, {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         stagger: 0.02,
//         ease: "back.out(1.6)",
//         delay: 0.2,
//       });

//       const flyToGrid = () => {
//         const overlayRect = overlayRef.current.getBoundingClientRect();

//         flatArtworks.forEach((item, i) => {
//           const clone = cloneRefs.current[i];
//           const real = realRefs.current[item.refKey];
//           if (!clone || !real) return;

//           const rect = real.getBoundingClientRect();
//           // Convert the real image's viewport-relative rect into a position
//           // relative to the overlay box, so the clone lands correctly no
//           // matter where .MainContALLStory sits on the page or how far
//           // the page has scrolled.
//           const relLeft = rect.left - overlayRect.left + rect.width / 2;
//           const relTop = rect.top - overlayRect.top + rect.height / 2;

//           gsap.to(clone, {
//             left: relLeft,
//             top: relTop,
//             x: 0,
//             y: 0,
//             width: rect.width,
//             height: rect.height,
//             opacity: 0,
//             duration: 1.1,
//             delay: i * 0.015,
//             ease: "power3.inOut",
//             overwrite: "auto",
//             force3D: true,
//           });

//           gsap.to(real, {
//             opacity: 1,
//             duration: 0.6,
//             delay: i * 0.015 + 0.55,
//             ease: "power2.out",
//             overwrite: "auto",
//           });
//         });

//         // Shadows go fully opaque once MainContALLStory's trigger fires.
//         gsap.to(".artwork-shadow", {
//           opacity: 1,
//           duration: 0.6,
//           ease: "power2.out",
//           overwrite: "auto",
//         });
//       };

//       const flyBackToHeart = () => {
//         flatArtworks.forEach((item, i) => {
//           const clone = cloneRefs.current[i];
//           const real = realRefs.current[item.refKey];
//           if (!clone) return;

//           // Get the dimensions for this clone
//           const imageIndex = i % 6;
//           const dims = imageDimensions[imageIndex];

//           gsap.to(clone, {
//             left: "50%",
//             top: "50%",
//             x: heartPositions[i].x,
//             y: heartPositions[i].y,
//             width: dims.width,
//             height: dims.height,
//             opacity: 1,
//             duration: 0.8,
//             delay: i * 0.01,
//             ease: "power2.inOut",
//             overwrite: "auto",
//             force3D: true,
//           });

//           if (real) {
//             gsap.to(real, {
//               opacity: 0,
//               duration: 0.3,
//               ease: "power2.in",
//               overwrite: "auto",
//             });
//           }
//         });

//         // Revert shadows back to invisible when scrolling back above the trigger.
//         gsap.to(".artwork-shadow", {
//           opacity: 0,
//           duration: 0.4,
//           ease: "power2.in",
//           overwrite: "auto",
//         });
//       };

//       // Fires once scroll passes top:-5% of .MainContALLStory, reverses if
//       // you scroll back above it.
//       ScrollTrigger.create({
//         trigger: ".MainContALLStory",
//         start: "top top",
//         end: "top -5%",
//         onEnter: flyToGrid,
//         onLeaveBack: flyBackToHeart,
//       });
//     });

//     // Debounced resize -> single ScrollTrigger.refresh() instead of one
//     // per pixel of resize jitter.
//     let resizeTimeout;
//     const handleResize = () => {
//       clearTimeout(resizeTimeout);
//       resizeTimeout = setTimeout(() => ScrollTrigger.refresh(), 150);
//     };
//     window.addEventListener("resize", handleResize, { passive: true });

//     return () => {
//       clearTimeout(resizeTimeout);
//       window.removeEventListener("resize", handleResize);
//       ctx.revert();
//     };
//     // realRefs is a stable ref object — this only needs to run once.
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div
//       ref={overlayRef}
//       className="absolute top-0 left-0 w-full h-screen z-[100] pointer-events-none"
//     >
//       {flatArtworks.map((item, i) => {
//         // Calculate dimensions for this clone
//         const imageIndex = i % 6;
//         const dims = imageDimensions[imageIndex];

//         return (
//           <div
//             key={item.refKey}
//             ref={(el) => (cloneRefs.current[i] = el)}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
//             style={{
//               width: dims.width,
//               height: dims.height,
//             }}
//           >
//             <div className="relative w-full h-full">
//               <Image
//                 src={item.src}
//                 alt={item.alt}
//                 fill
//                 sizes="200px"
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default function TravelSection() {
//   const realRefs = useRef({});
//   const pointerRef = usePointerRef();

//   const registerRealRef = (key, el) => {
//     realRefs.current[key] = el;
//   };

//   const locations1 = [
//     "Bademiya",
//     "Bastian",
//     "Sea Link",
//     "Gateway Of India",
//     "Marine Drive",
//   ];

//   // Both scroll-driven timelines for the fixed intro panel live in a single
//   // gsap.context so they're properly killed/reverted together on unmount
//   // (the original never cleaned these up, which leaks ScrollTriggers on
//   // route changes / hot reload and is a common source of jank).
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl11 = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".MainContALLStory",
//           start: "top -50%",
//           end: "top -100%",
//           scrub: true,
//         },
//         defaults: { ease: "none" },
//       });
//       tl11
//         .to(".CENTERIMGMAIN", { top: "15%" }, "aaq1")
//         .to(".MainInnerCont", { scale: 1.5 }, "aaq1")
//         .from(".BGOUTOPC", { opacity: 0 }, "aaq1")
//         .from(".HIGHTXT", { opacity: 0 }, "aaq1")
//         .from(".SYM", { opacity: 0 }, "aaq1");
//     });

//     return () => ctx.revert();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <main className="bg-[#f6f6f6] MainContALLStory relative w-full overflow-hidden">
//       <div className="FixedAnimaterScreen fixed left-0 top-0 w-full h-svh z-199 flex justify-center items-center">
//         {/* <div className="w-[50vw] h-full bg-[#f6f6f6] BGOUTOPC opacity-70" /> */}

//         <div className="w-[20vw] aspect-5/6 CENTERIMGMAIN absolute top-[150%] left-[50%] -translate-x-1/2">
//           <img
//             src="/images/try2/4.jpg"
//             alt="img"
//             className="w-full h-full object-center object-cover"
//           />
//         </div>

//         {/* TEXT-Name — now cycles through Mumbai + Texts as you scroll */}
//         <div className="w-[30vw] capitalize h-fit absolute bottom-[15%] Font_CV flex justify-center items-center ALTOD HIGHTXT">
//           <ScrollingTitle />
//         </div>
//       </div>

//       <div className="w-full h-fit relative MainInnerCont">
//         <HeartIntro realRefs={realRefs} />
//         <ArtworkGrid
//           artworks={section1}
//           sectionIndex={1}
//           registerRealRef={registerRealRef}
//           pointerRef={pointerRef}
//         />
//         <ArtworkGrid
//           artworks={section2}
//           sectionIndex={2}
//           registerRealRef={registerRealRef}
//           pointerRef={pointerRef}
//         />
//         <ArtworkGrid
//           artworks={section3}
//           sectionIndex={3}
//           registerRealRef={registerRealRef}
//           pointerRef={pointerRef}
//         />
//         <ArtworkGrid
//           artworks={section4}
//           sectionIndex={4}
//           registerRealRef={registerRealRef}
//           pointerRef={pointerRef}
//         />
//       </div>
//     </main>
//   );
// }
 

// ================================================================================================================== WITHOUT_BG_IMG_BLUR _ON_SCROLL

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyIMG = [
  `/images/try/1.jpg`,
  `/images/try/2.jpg`,
  `/images/try/3.jpg`,
  `/images/try/4.jpg`,
  `/images/try/5.jpg`,
  `/images/try/6.jpg`,
]


const Texts = [
  "Success is not about achieving perfection every day; it is about making consistent progress",

  "Technology continues to evolve at an incredible pace, ",

  "Every great project starts with a simple idea. ",

  "Learning to code is a journey that requires patience, curiosity, and persistence. Each challenge you solve strengthens your problem-solving skills and builds confidence.",

  "The most successful people are often those who embrace change, ",

  "A positive mindset can significantly influence your productivity and creativity.",

  "Building meaningful relationships is one of the most valuable investments you can make.",
];

// First "slide" is the location title, the rest are the rotating Texts.
const titleTexts = ["Mumbai", ...Texts];

// ---------------------------------------------------------------------------
// Heart-shape math (unchanged) — generates points lying exactly on the
// classic parametric heart curve so the intro silhouette is a real heart
// rather than a hand-guessed shape.
// ---------------------------------------------------------------------------
function generateHeartPositions(count = 24, scale = 17) {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2;
    const mathX = 16 * Math.pow(Math.sin(t), 3);
    const mathY =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);

    positions.push({
      x: Math.round(mathX * scale),
      // Flip Y: the formula assumes "up" is positive, CSS/screen grows down.
      y: Math.round(-mathY * scale),
    });
  }
  return positions;
}

// 24 heart-shaped target offsets, mapped 1:1 onto the 24 images
// (6 per section x 4 sections), in render order (section1 -> section4).
const heartPositions = generateHeartPositions(24, 17);

// Image dimensions for heart formation (width, height) in pixels
const imageDimensions = [
  { width: 56, height: 84 },   // id: 1, aspect 2/3
  { width: 80, height: 112 },  // id: 2, aspect 5/7
  { width: 56, height: 56 },   // id: 3, aspect square
  { width: 64, height: 85 },   // id: 4, aspect 3/4
  { width: 48, height: 72 },   // id: 5, aspect 2/3
  { width: 56, height: 84 },   // id: 6, aspect 2/3
];

const section1 = [
  {
    id: 1,
    src: "/images/try/1.jpg",
    alt: "Artwork 1",
    grid: "col-start-3 row-start-8",
    size: "w-44 aspect-[2/3]",
    shadowPosition: "-left-64 -top-20",
  },
  {
    id: 2,
    src: "/images/try/2.jpg",
    alt: "Artwork 2",
    grid: "col-start-7 row-start-3",
    size: "w-56 aspect-[5/7]",
    shadowPosition: "left-0 top-[260px]",
  },
  {
    id: 3,
    src: "/images/try/3.jpg",
    alt: "Artwork 3",
    grid: "col-start-11 row-start-10",
    size: "w-44 aspect-square",
    shadowPosition: "-left-28 -top-4",
  },
  {
    id: 4,
    src: "/images/try/4.jpg",
    alt: "Artwork 4",
    grid: "col-start-11 row-start-1",
    size: "w-40 aspect-[3/4]",
    shadowPosition: "-left-64 top-8",
  },
  {
    id: 5,
    src: "/images/try/5.jpg",
    alt: "Artwork 5",
    grid: "col-start-1 row-start-4",
    size: "w-32 aspect-[2/3]",
    shadowPosition: "left-16 top-72",
  },
  {
    id: 6,
    src: "/images/try/6.jpg",
    alt: "Artwork 6",
    grid: "col-start-14 row-start-5",
    size: "w-36 aspect-[2/3]",
    shadowPosition: "-left-52 top-32",
  },
];

const section2 = section1.map((item) => ({
  ...item,
  src: `/images/try1/${item.id}.jpg`,
}));

const section3 = section1.map((item) => ({
  ...item,
  src: `/images/try2/${item.id}.jpg`,
}));

const section4 = section1.map((item) => ({
  ...item,
  src: `/images/try/${item.id}.jpg`,
}));

const allSections = [section1, section2, section3, section4];

// Flat list of every image with a unique key (s{sectionIndex}-{id}), in the
// exact order heartPositions should map onto them.
const flatArtworks = allSections.flatMap((sec, sIdx) =>
  sec.map((item) => ({ ...item, refKey: `s${sIdx + 1}-${item.id}` })),
);

// ---------------------------------------------------------------------------
// Shared pointer tracker — ONE mousemove listener for the whole page instead
// of one per <ArtworkGrid/>. Each grid subscribes via gsap.ticker so the
// actual interpolation/easing is handled entirely by GSAP's quickTo (which
// runs on GSAP's own rAF loop), not React state — so none of this ever
// triggers a React re-render.
// ---------------------------------------------------------------------------
function usePointerRef() {
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const normalizedX = (e.clientX - centerX) / centerX;
      const normalizedY = (e.clientY - centerY) / centerY;

      pointerRef.current.x = -normalizedX * 50;
      pointerRef.current.y = -normalizedY * 50;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return pointerRef;
}

// ---------------------------------------------------------------------------
// ScrollingTitle — crossfades through ["Mumbai", ...Texts] as the user
// scrolls down the page. All slides are stacked absolutely on top of each
// other; a single scrubbed timeline (tied to the full scroll length of
// .MainContALLStory) fades + drifts the outgoing slide up while fading +
// drifting the incoming slide in from below, so transitions track scroll
// position exactly (scroll up = it reverses smoothly too).
// ---------------------------------------------------------------------------
function ScrollingTitle() {
  const wrapRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state: first slide visible, rest hidden just below.
      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, {
          opacity: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 16,
          filter: i === 0 ? "blur(0px)" : "blur(6px)",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".MainContALLStory",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        defaults: { ease: "power2.inOut" },
      });

      const slideCount = titleTexts.length;
      const segment = 1 / slideCount; // evenly spaced across full scroll

      titleTexts.forEach((_, i) => {
        if (i === slideCount - 1) return;
        const start = i * segment + segment * 0.3; // hold briefly before transitioning
        const outEl = slideRefs.current[i];
        const inEl = slideRefs.current[i + 1];
        if (!outEl || !inEl) return;

        tl.to(
          outEl,
          { opacity: 0, y: -16, filter: "blur(6px)", duration: segment * 0.4 },
          start,
        ).to(
          inEl,
          { opacity: 1, y: 0, filter: "blur(0px)", duration: segment * 0.4 },
          start + segment * 0.05,
        );
      });
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-[3em] flex items-center justify-center text-center"
    >
      {titleTexts.map((text, i) => (
        <p
          key={i}
          ref={(el) => (slideRefs.current[i] = el)}
          className={`
            absolute inset-0 flex items-center justify-center
            px-4
            ${i === 0 ? "uppercase text-[2vw] tracking-tight" : "text-[1.1vw] leading-snug"}
          `}
          style={{ willChange: "transform, opacity, filter" }}
        >
          {text}
        </p>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// StickyImage — changes through StickyIMG array as the user scrolls down
// synchronized with the ScrollingTitle transitions. All images are stacked
// absolutely on top of each other; transitions are handled by a scrubbed
// timeline tied to the full scroll length.
// ---------------------------------------------------------------------------
function StickyImage() {
  const wrapRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state: first image visible, rest hidden just below.
      imageRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, {
          opacity: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 20,
          filter: i === 0 ? "blur(0px)" : "blur(8px)",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".MainContALLStory",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        defaults: { ease: "power2.inOut" },
      });

      const imgCount = StickyIMG.length;
      const segment = 1 / imgCount; // evenly spaced across full scroll

      StickyIMG.forEach((_, i) => {
        if (i === imgCount - 1) return;
        const start = i * segment + segment * 0.3; // hold briefly before transitioning
        const outEl = imageRefs.current[i];
        const inEl = imageRefs.current[i + 1];
        if (!outEl || !inEl) return;

        tl.to(
          outEl,
          { opacity: 0, y: -20, filter: "blur(8px)", duration: segment * 0.4 },
          start,
        ).to(
          inEl,
          { opacity: 1, y: 0, filter: "blur(0px)", duration: segment * 0.4 },
          start + segment * 0.05,
        );
      });
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={wrapRef}
      className="w-[20vw] aspect-5/6 relative overflow-hidden rounded-lg"
    >
      {StickyIMG.map((src, i) => (
        <img
          key={i}
          ref={(el) => (imageRefs.current[i] = el)}
          src={src}
          alt={`Sticky image ${i + 1}`}
          className="absolute inset-0 w-full h-full object-center object-cover"
          style={{ willChange: "transform, opacity, filter" }}
        />
      ))}
    </div>
  );
}

function ArtworkGrid({ artworks, sectionIndex, registerRealRef, pointerRef }) {
  const gridRef = useRef(null);
  const shadowRefs = useRef([]);

  // Stable per-item ref callbacks so re-renders never detach/reattach the
  // real-image refs the heart-intro flies into.
  const refCallbacks = useRef({});
  const getRealRefCallback = (key) => {
    if (!refCallbacks.current[key]) {
      refCallbacks.current[key] = (el) => registerRealRef(key, el);
    }
    return refCallbacks.current[key];
  };

  const getShadowRefCallback = (index) => {
    return (el) => {
      shadowRefs.current[index] = el;
    };
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // quickTo gives GPU-friendly, interruptible tweens — moving the
    // mouse mid-animation re-targets smoothly instead of snapping.
    const gridXTo = gsap.quickTo(grid, "x", {
      duration: 0.9,
      ease: "power3.out",
    });
    const gridYTo = gsap.quickTo(grid, "y", {
      duration: 0.9,
      ease: "power3.out",
    });

    // Shadows trail behind the images (slower duration = more lag),
    // each with its own per-item drift multiplier, just like the original.
    const shadowTweens = shadowRefs.current.map((el, i) => {
      if (!el) return null;
      const factor = 1 + artworks[i].id * 0.08;
      return {
        factor,
        xTo: gsap.quickTo(el, "x", { duration: 1.6, ease: "power2.out" }),
        yTo: gsap.quickTo(el, "y", { duration: 1.6, ease: "power2.out" }),
      };
    });

    const tick = () => {
      const { x, y } = pointerRef.current;
      gridXTo(x);
      gridYTo(y);
      shadowTweens.forEach((t) => {
        if (!t) return;
        t.xTo(x * 1.25 * t.factor);
        t.yTo(y * 1.25 * t.factor);
      });
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#f6f6f6] scale-[0.9] ALLINCONT">
      <div
        ref={gridRef}
        className="mx-auto grid h-full max-w-[1800px] grid-cols-14 grid-rows-12 px-10"
        style={{ willChange: "transform" }}
      >
        {artworks.map((item, index) => (
          <div key={item.id} className={`${item.grid} relative self-start`}>
            {/* Shadow */}
            <div
              ref={getShadowRefCallback(index)}
              className={`
                artwork-shadow
                absolute
                ${item.shadowPosition}
                ${item.size}

                bg-[#ececec]
                opacity-0
                z-0
              `}
              style={{ willChange: "transform" }}
            />

            {/* Image — the "real" final-position box the heart clones fly
                into. Starts invisible until the intro hands off. */}
            <div
              ref={getRealRefCallback(`s${sectionIndex}-${item.id}`)}
              className={`
                relative
                ${item.size}
                z-10
                overflow-hidden
                opacity-0
              `}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="300px"
                className={`
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  hover:scale-105
                  shadow-[0_20px_45px_rgba(0,0,0,0.18)]
                `}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HeartIntro({ realRefs }) {
  const overlayRef = useRef(null);
  const cloneRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Arrange every clone into the heart shape with different sizes/aspect ratios
      cloneRefs.current.forEach((el, i) => {
        if (!el) return;
        
        // Calculate which image this clone corresponds to (repeats every 6 images for each section)
        const imageIndex = i % 6;
        const dims = imageDimensions[imageIndex];
        
        gsap.set(el, {
          position: "absolute",
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          x: heartPositions[i].x,
          y: heartPositions[i].y,
          width: dims.width,
          height: dims.height,
          opacity: 0,
          scale: 0.6,
          force3D: true,
        });
      });

      // Small entrance flourish: the heart assembles itself on first paint.
      gsap.to(cloneRefs.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.02,
        ease: "back.out(1.6)",
        delay: 0.2,
      });

      const flyToGrid = () => {
        const overlayRect = overlayRef.current.getBoundingClientRect();

        flatArtworks.forEach((item, i) => {
          const clone = cloneRefs.current[i];
          const real = realRefs.current[item.refKey];
          if (!clone || !real) return;

          const rect = real.getBoundingClientRect();
          // Convert the real image's viewport-relative rect into a position
          // relative to the overlay box, so the clone lands correctly no
          // matter where .MainContALLStory sits on the page or how far
          // the page has scrolled.
          const relLeft = rect.left - overlayRect.left + rect.width / 2;
          const relTop = rect.top - overlayRect.top + rect.height / 2;

          gsap.to(clone, {
            left: relLeft,
            top: relTop,
            x: 0,
            y: 0,
            width: rect.width,
            height: rect.height,
            opacity: 0,
            duration: 1.1,
            delay: i * 0.015,
            ease: "power3.inOut",
            overwrite: "auto",
            force3D: true,
          });

          gsap.to(real, {
            opacity: 1,
            duration: 0.6,
            delay: i * 0.015 + 0.55,
            ease: "power2.out",
            overwrite: "auto",
          });
        });

        // Shadows go fully opaque once MainContALLStory's trigger fires.
        gsap.to(".artwork-shadow", {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const flyBackToHeart = () => {
        flatArtworks.forEach((item, i) => {
          const clone = cloneRefs.current[i];
          const real = realRefs.current[item.refKey];
          if (!clone) return;

          // Get the dimensions for this clone
          const imageIndex = i % 6;
          const dims = imageDimensions[imageIndex];

          gsap.to(clone, {
            left: "50%",
            top: "50%",
            x: heartPositions[i].x,
            y: heartPositions[i].y,
            width: dims.width,
            height: dims.height,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.01,
            ease: "power2.inOut",
            overwrite: "auto",
            force3D: true,
          });

          if (real) {
            gsap.to(real, {
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
              overwrite: "auto",
            });
          }
        });

        // Revert shadows back to invisible when scrolling back above the trigger.
        gsap.to(".artwork-shadow", {
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          overwrite: "auto",
        });
      };

      // Fires once scroll passes top:-5% of .MainContALLStory, reverses if
      // you scroll back above it.
      ScrollTrigger.create({
        trigger: ".MainContALLStory",
        start: "top top",
        end: "top -5%",
        onEnter: flyToGrid,
        onLeaveBack: flyBackToHeart,
      });
    });

    // Debounced resize -> single ScrollTrigger.refresh() instead of one
    // per pixel of resize jitter.
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => ScrollTrigger.refresh(), 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
    // realRefs is a stable ref object — this only needs to run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={overlayRef}
      className="absolute top-0 left-0 w-full h-screen z-[100] pointer-events-none"
    >
      {flatArtworks.map((item, i) => {
        // Calculate dimensions for this clone
        const imageIndex = i % 6;
        const dims = imageDimensions[imageIndex];

        return (
          <div
            key={item.refKey}
            ref={(el) => (cloneRefs.current[i] = el)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
            style={{
              width: dims.width,
              height: dims.height,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TravelSection() {
  const realRefs = useRef({});
  const pointerRef = usePointerRef();

  const registerRealRef = (key, el) => {
    realRefs.current[key] = el;
  };

  const locations1 = [
    "Bademiya",
    "Bastian",
    "Sea Link",
    "Gateway Of India",
    "Marine Drive",
  ];

  // Both scroll-driven timelines for the fixed intro panel live in a single
  // gsap.context so they're properly killed/reverted together on unmount
  // (the original never cleaned these up, which leaks ScrollTriggers on
  // route changes / hot reload and is a common source of jank).
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl11 = gsap.timeline({
        scrollTrigger: {
          trigger: ".MainContALLStory",
          start: "top -50%",
          end: "top -100%",
          scrub: true,
        },
        defaults: { ease: "none" },
      });
      tl11
        .to(".CENTERIMGMAIN", { top: "15%" }, "aaq1")
        .to(".MainInnerCont", { scale: 1.5 }, "aaq1")
        .from(".BGOUTOPC", { opacity: 0 }, "aaq1")
        .from(".HIGHTXT", { opacity: 0 }, "aaq1")
        .from(".SYM", { opacity: 0 }, "aaq1");
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="bg-[#f6f6f6] MainContALLStory relative w-full overflow-hidden">
      <div className="FixedAnimaterScreen fixed left-0 top-0 w-full h-svh z-199 flex justify-center items-center">
        {/* <div className="w-[50vw] h-full bg-[#f6f6f6] BGOUTOPC opacity-70" /> */}

        <div className="CENTERIMGMAIN absolute top-[150%] left-[50%] -translate-x-1/2">
          <StickyImage />
        </div>

        {/* TEXT-Name — now cycles through Mumbai + Texts as you scroll */}
        <div className="w-[30vw] capitalize h-fit absolute bottom-[15%] Font_CV flex justify-center items-center ALTOD HIGHTXT">
          <ScrollingTitle />
        </div>
      </div>

      <div className="w-full h-fit relative MainInnerCont">
        <HeartIntro realRefs={realRefs} />
        <ArtworkGrid
          artworks={section1}
          sectionIndex={1}
          registerRealRef={registerRealRef}
          pointerRef={pointerRef}
        />
        <ArtworkGrid
          artworks={section2}
          sectionIndex={2}
          registerRealRef={registerRealRef}
          pointerRef={pointerRef}
        />
        <ArtworkGrid
          artworks={section3}
          sectionIndex={3}
          registerRealRef={registerRealRef}
          pointerRef={pointerRef}
        />
        <ArtworkGrid
          artworks={section4}
          sectionIndex={4}
          registerRealRef={registerRealRef}
          pointerRef={pointerRef}
        />
      </div>
    </main>
  );
}