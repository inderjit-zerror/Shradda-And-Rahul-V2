
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyIMG = [
  `try/1.jpeg`,
  `try/2.jpeg`,
  `try/3.jpeg`,
  `try/4.jpeg`,
  `try/5.jpeg`,
  `try/6.jpeg`,
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

const titleTexts = ["Mumbai", ...Texts];

const ITEM_COUNT = Math.max(titleTexts.length, StickyIMG.length);
const YEARS = Array.from({ length: ITEM_COUNT }).map((_, i) => 2017 + i);

const heartLayout = [
  // ── Outline: Top & Cleft ──
  { x: 0,    y: -80,  w: 120, h: 150, r: -5 },   // 0  Cleft (Portrait)
  { x: 90,   y: -160, w: 140, h: 100, r: 8 },    // 1  Top Right Inner (Landscape)
  { x: 190,  y: -170, w: 130, h: 130, r: -4 },   // 2  Top Right Peak (Square)
  { x: -90,  y: -160, w: 140, h: 100, r: -7 },   // 3  Top Left Inner (Landscape)
  { x: -190, y: -170, w: 130, h: 130, r: 6 },    // 4  Top Left Peak (Square)

  // ── Outline: Outer Edges ──
  { x: 270,  y: -80,  w: 110, h: 140, r: 12 },   // 5  Top Right Outer (Portrait)
  { x: 270,  y: 30,   w: 140, h: 110, r: -6 },   // 6  Right Mid (Landscape)
  { x: -270, y: -80,  w: 110, h: 140, r: -11 },  // 7  Top Left Outer (Portrait)
  { x: -270, y: 30,   w: 140, h: 110, r: 9 },    // 8  Left Mid (Landscape)

  // ── Outline: Lower Edges ──
  { x: 190,  y: 150,  w: 120, h: 140, r: 7 },    // 9  Right Lower (Portrait)
  { x: 100,  y: 250,  w: 140, h: 110, r: -3 },   // 10 Right Bottom Edge (Landscape)
  { x: -190, y: 150,  w: 120, h: 140, r: -8 },   // 11 Left Lower (Portrait)
  { x: -100, y: 250,  w: 140, h: 110, r: 5 },    // 12 Left Bottom Edge (Landscape)

  // ── Outline: Bottom Point ──
  { x: 0,    y: 340,  w: 130, h: 150, r: 0 },    // 13 Bottom Tip (Portrait)

  // ── Interior Fill (Density) ──
  { x: 0,    y: 40,   w: 150, h: 110, r: 3 },    // 14 Center Top (Landscape)
  { x: 0,    y: 180,  w: 130, h: 140, r: -4 },   // 15 Center Bottom (Portrait)
  { x: 120,  y: -30,  w: 120, h: 150, r: -9 },   // 16 Mid Right 1 (Portrait)
  { x: 150,  y: 80,   w: 140, h: 110, r: 5 },    // 17 Mid Right 2 (Landscape)
  { x: -120, y: -30,  w: 120, h: 150, r: 8 },    // 18 Mid Left 1 (Portrait)
  { x: -150, y: 80,   w: 140, h: 110, r: -6 },   // 19 Mid Left 2 (Landscape)
  { x: 180,  y: -100, w: 110, h: 110, r: 14 },   // 20 Upper Right Inner (Square)
  { x: -180, y: -100, w: 110, h: 110, r: -12 },  // 21 Upper Left Inner (Square)
  { x: 80,   y: 150,  w: 120, h: 110, r: -2 },   // 22 Lower Right Inner (Square)
  { x: -80,  y: 150,  w: 120, h: 110, r: 3 },    // 23 Lower Left Inner (Square)
];

const heartPositions = heartLayout.map((p) => ({ x: p.x, y: p.y }));
const heartRotations = heartLayout.map((p) => p.r);
const imageDimensions = heartLayout.map((p) => ({ width: p.w, height: p.h }));

const section1 = [
  {
    id: 1,
    src: "/try/1.jpeg",
    alt: "Artwork 1",
    grid: "col-start-3 row-start-8",
    size: "w-44 aspect-[2/3]",
    shadowPosition: "-left-64 -top-20",
  },
  {
    id: 2,
    src: "/try/2.jpeg",
    alt: "Artwork 2",
    grid: "col-start-7 row-start-3",
    size: "w-56 aspect-[5/7]",
    shadowPosition: "left-0 top-[260px]",
  },
  {
    id: 3,
    src: "/try/3.jpeg",
    alt: "Artwork 3",
    grid: "col-start-11 row-start-10",
    size: "w-44 aspect-square",
    shadowPosition: "-left-28 -top-4",
  },
  {
    id: 4,
    src: "/try/4.jpeg",
    alt: "Artwork 4",
    grid: "col-start-11 row-start-1",
    size: "w-40 aspect-[3/4]",
    shadowPosition: "-left-64 top-8",
  },
  {
    id: 5,
    src: "/try/5.jpeg",
    alt: "Artwork 5",
    grid: "col-start-1 row-start-4",
    size: "w-32 aspect-[2/3]",
    shadowPosition: "left-16 top-72",
  },
  {
    id: 6,
    src: "/try/6.jpeg",
    alt: "Artwork 6",
    grid: "col-start-14 row-start-5",
    size: "w-36 aspect-[2/3]",
    shadowPosition: "-left-52 top-32",
  },
];

const section2 = section1.map((item) => ({
  ...item,
  src: `/try/${item.id}.jpeg`,
}));

const section3 = section1.map((item) => ({
  ...item,
  src: `/try/${item.id}.jpeg`,
}));

const section4 = section1.map((item) => ({
  ...item,
  src: `/try/${item.id}.jpeg`,
}));

const allSections = [section1, section2, section3, section4];

const flatArtworks = allSections.flatMap((sec, sIdx) =>
  sec.map((item) => ({ ...item, refKey: `s${sIdx + 1}-${item.id}` })),
);

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
function ScrollingTitle() {
  const wrapRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, {
          opacity: i === 0 ? 1 : 0,
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

      const segment = 1 / ITEM_COUNT; // evenly spaced across full scroll

      Array.from({ length: ITEM_COUNT }).forEach((_, i) => {
        if (i === ITEM_COUNT - 1) return;
        const start = i * segment + segment * 0.3; // hold briefly before transitioning
        const outEl = slideRefs.current[i];
        const inEl = slideRefs.current[i + 1];
        if (!outEl || !inEl) return;

        tl.to(
          outEl,
          { opacity: 0, filter: "blur(6px)", duration: segment * 0.4 },
          start,
        ).to(
          inEl,
          { opacity: 1, filter: "blur(0px)", duration: segment * 0.4 },
          start + segment * 0.05,
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-[3em] flex items-center justify-center text-center"
    >
      {Array.from({ length: ITEM_COUNT }).map((_, i) => {
        const text = titleTexts[i % titleTexts.length];
        return (
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
        );
      })}
    </div>
  );
}

function StickyImage() {
  const wrapRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, {
          opacity: i === 0 ? 1 : 0,
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

      const segment = 1 / ITEM_COUNT; // evenly spaced across full scroll

      Array.from({ length: ITEM_COUNT }).forEach((_, i) => {
        if (i === ITEM_COUNT - 1) return;
        const start = i * segment + segment * 0.3; // hold briefly before transitioning
        const outEl = imageRefs.current[i];
        const inEl = imageRefs.current[i + 1];
        if (!outEl || !inEl) return;

        tl.to(
          outEl,
          { opacity: 0, filter: "blur(8px)", duration: segment * 0.4 },
          start,
        ).to(
          inEl,
          { opacity: 1, filter: "blur(0px)", duration: segment * 0.4 },
          start + segment * 0.05,
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="w-[20vw] aspect-5/6 relative overflow-hidden rounded-lg"
    >
      {Array.from({ length: ITEM_COUNT }).map((_, i) => {
        const src = StickyIMG[i % StickyIMG.length];
        return (
          <img
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            src={src}
            alt={`Sticky image ${i + 1}`}
            className="absolute inset-0 w-full h-full object-center object-cover"
            style={{ willChange: "transform, opacity, filter" }}
          />
        );
      })}
    </div>
  );
}

function ArtworkGrid({ artworks, sectionIndex, registerRealRef, pointerRef }) {
  const gridRef = useRef(null);
  const shadowRefs = useRef([]);

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

    const gridXTo = gsap.quickTo(grid, "x", {
      duration: 0.9,
      ease: "power3.out",
    });
    const gridYTo = gsap.quickTo(grid, "y", {
      duration: 0.9,
      ease: "power3.out",
    });

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
      // Place each clone at its heart position with rotation
      cloneRefs.current.forEach((el, i) => {
        if (!el) return;
        const dims = imageDimensions[i];
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
          rotation: heartRotations[i],
          opacity: 0,
          scale: 0.6,
          force3D: true,
        });
      });

      // Entrance: heart assembles on first paint
      gsap.to(cloneRefs.current.filter(Boolean), {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.025,
        ease: "back.out(1.6)",
        delay: 0.2,
      });

      // --- Scroll: fly clones to grid positions ---
      const flyToGrid = () => {
        const overlayRect = overlayRef.current.getBoundingClientRect();

        flatArtworks.forEach((item, i) => {
          const clone = cloneRefs.current[i];
          const real = realRefs.current[item.refKey];
          if (!clone || !real) return;

          const rect = real.getBoundingClientRect();
          const relLeft = rect.left - overlayRect.left + rect.width / 2;
          const relTop = rect.top - overlayRect.top + rect.height / 2;

          gsap.to(clone, {
            left: relLeft,
            top: relTop,
            x: 0,
            y: 0,
            width: rect.width,
            height: rect.height,
            rotation: 0,
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

        gsap.to(".artwork-shadow", {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      // --- Scroll back: reassemble heart ---
      const flyBackToHeart = () => {
        flatArtworks.forEach((item, i) => {
          const clone = cloneRefs.current[i];
          const real = realRefs.current[item.refKey];
          if (!clone) return;

          const dims = imageDimensions[i];

          gsap.to(clone, {
            left: "50%",
            top: "50%",
            x: heartPositions[i].x,
            y: heartPositions[i].y,
            width: dims.width,
            height: dims.height,
            rotation: heartRotations[i],
            opacity: 1,
            scale: 1,
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

        gsap.to(".artwork-shadow", {
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          overwrite: "auto",
        });
      };

      ScrollTrigger.create({
        trigger: ".MainContALLStory",
        start: "top top",
        end: "top -5%",
        onEnter: flyToGrid,
        onLeaveBack: flyBackToHeart,
      });
    });

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
  }, []);

  return (
    <div
      ref={overlayRef}
      className="absolute top-0 left-0 w-full h-screen z-[100] pointer-events-none"
    >
      {flatArtworks.map((item, i) => {
        const dims = imageDimensions[i];

        return (
          <div
            key={item.refKey}
            ref={(el) => (cloneRefs.current[i] = el)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            style={{
              width: dims.width,
              height: dims.height,
              border: "3px solid #fff",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
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

function TimelineBar() {
  const barRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".MainContALLStory",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute bottom-10 left-10 right-10 z-[200] max-w-[20vw] mx-auto  HIGHTXT">
     
      <div className="relative w-full h-[3px] bg-black/10 rounded">
        <div
          ref={barRef}
          className="absolute top-0 left-0 h-full w-full bg-black origin-left scale-x-0 rounded"
        ></div>
      </div>
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
        <div className="w-[30vw] capitalize h-fit absolute bottom-[22%] Font_CV flex justify-center items-center ALTOD HIGHTXT">
          <ScrollingTitle />
        </div>

        <TimelineBar />
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