
// import Image from "next/image";

// const section1 = [
//   {
//     id: 1,
//     src: "/images/custom_img/try1/1.jpg",
//     alt: "Artwork 1",
//     grid: "col-start-3 row-start-8",
//     size: "w-44 aspect-[2/3]",
//     shadowPosition: "-left-64 -top-20",
//   },
//   {
//     id: 2,
//     src: "/images/custom_img/try1/2.jpg",
//     alt: "Artwork 2",
//     grid: "col-start-7 row-start-3",
//     size: "w-56 aspect-[5/7]",
//     shadowPosition: "left-0 top-[260px]",
//   },
//   {
//     id: 3,
//     src: "/images/custom_img/try1/3.jpg",
//     alt: "Artwork 3",
//     grid: "col-start-11 row-start-10",
//     size: "w-44 aspect-square",
//     shadowPosition: "-left-28 -top-4",
//   },
//   {
//     id: 4,
//     src: "/images/custom_img/try1/4.jpg",
//     alt: "Artwork 4",
//     grid: "col-start-11 row-start-1",
//     size: "w-40 aspect-[3/4]",
//     shadowPosition: "-left-64 top-8",
//   },
//   {
//     id: 5,
//     src: "/images/custom_img/try1/5.jpg",
//     alt: "Artwork 5",
//     grid: "col-start-1 row-start-4",
//     size: "w-32 aspect-[2/3]",
//     shadowPosition: "left-16 top-72",
//   },
//   {
//     id: 6,
//     src: "/images/custom_img/try1/6.jpg",
//     alt: "Artwork 6",
//     grid: "col-start-14 row-start-5",
//     size: "w-36 aspect-[2/3]",
//     shadowPosition: "-left-52 top-32",
//   },
// ];

// const section2 = section1.map((item) => ({
//   ...item,
//   src: `/images/custom_img/try1/${6 + item.id}.jpg`,
// }));

// const section3 = section1.map((item) => ({
//   ...item,
//   src: `/images/custom_img/try1/${item.id}.jpg`,
// }));

// function ArtworkGrid({ artworks }) {
//   return (
//     <section className="relative h-screen overflow-hidden bg-[#f6f6f6]">
//       <div className="mx-auto grid h-full max-w-[1800px] grid-cols-14 grid-rows-12 px-10">
//         {artworks.map((item) => (
//           <div
//             key={item.id}
//             className={`${item.grid} relative self-start`}
//           >
//             {/* Shadow */}
//             <div
//               className={`
//                 absolute
//                 ${item.shadowPosition}
//                 ${item.size}
//                 rounded-sm
//                 bg-[#ececec]
//                 opacity-90
//                 z-0
//               `}
//             />

//             {/* Image */}
//             <div
//               className={`
//                 relative
//                 ${item.size}
//                 z-10
//                 overflow-hidden
//               `}
//             >
//               <Image
//                 src={item.src}
//                 alt={item.alt}
//                 fill
//                 sizes="300px"
//                 className="
//                   object-cover
//                   transition-all
//                   duration-700
//                   ease-out
//                   hover:scale-105
//                   shadow-[0_20px_45px_rgba(0,0,0,0.18)]
//                 "
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default function TravelSection() {
//   return (
//     <main>
//       <ArtworkGrid artworks={section1} />
//       <ArtworkGrid artworks={section2} />
//       <ArtworkGrid artworks={section3} />
//     </main>
//   );
// }


"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const section1 = [
  {
    id: 1,
    src: "/images/custom_img/try1/1.jpg",
    alt: "Artwork 1",
    grid: "col-start-3 row-start-8",
    size: "w-44 aspect-[2/3]",
    shadowPosition: "-left-64 -top-20",
  },
  {
    id: 2,
    src: "/images/custom_img/try1/2.jpg",
    alt: "Artwork 2",
    grid: "col-start-7 row-start-3",
    size: "w-56 aspect-[5/7]",
    shadowPosition: "left-0 top-[260px]",
  },
  {
    id: 3,
    src: "/images/custom_img/try1/3.jpg",
    alt: "Artwork 3",
    grid: "col-start-11 row-start-10",
    size: "w-44 aspect-square",
    shadowPosition: "-left-28 -top-4",
  },
  {
    id: 4,
    src: "/images/custom_img/try1/4.jpg",
    alt: "Artwork 4",
    grid: "col-start-11 row-start-1",
    size: "w-40 aspect-[3/4]",
    shadowPosition: "-left-64 top-8",
  },
  {
    id: 5,
    src: "/images/custom_img/try1/5.jpg",
    alt: "Artwork 5",
    grid: "col-start-1 row-start-4",
    size: "w-32 aspect-[2/3]",
    shadowPosition: "left-16 top-72",
  },
  {
    id: 6,
    src: "/images/custom_img/try1/6.jpg",
    alt: "Artwork 6",
    grid: "col-start-14 row-start-5",
    size: "w-36 aspect-[2/3]",
    shadowPosition: "-left-52 top-32",
  },
];

const section2 = section1.map((item) => ({
  ...item,
  src: `/images/custom_img/try1/${6 + item.id}.jpg`,
}));

const section3 = section1.map((item) => ({
  ...item,
  src: `/images/custom_img/try1/${item.id}.jpg`,
}));

const section4 = section1.map((item) => ({
  ...item,
  src: `/images/custom_img/try1/${6 +  item.id}.jpg`,
}));

function ArtworkGrid({ artworks }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });


  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const normalizedX = (e.clientX - centerX) / centerX;
      const normalizedY = (e.clientY - centerY) / centerY;

      // Inverted movement
      mouseX = -normalizedX * 50;
      mouseY = -normalizedY * 50;
    };

    const animate = () => {
      currentX = lerp(currentX, mouseX, 0.08);
      currentY = lerp(currentY, mouseY, 0.08);

      setOffset({
        x: currentX,
        y: currentY,
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#f6f6f6] scale-[0.9] ALLINCONT">
      <div
        className="mx-auto grid h-full max-w-[1800px] grid-cols-14 grid-rows-12 px-10"
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          willChange: "transform",
        }}
      >
        {artworks.map((item) => (
          <div
            key={item.id}
            className={`${item.grid} relative self-start`}
          >
            {/* Shadow */}
            <div
              className={`
                absolute
                ${item.shadowPosition}
                ${item.size}
                rounded-sm
                bg-[#ececec]
                opacity-90
                z-0
              `}
            />

            {/* Image */}
            <div
              className={`
                relative
                ${item.size}
                z-10
                overflow-hidden
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
export default function TravelSection() {


  useEffect(()=>{
    gsap.to('.ALLINCONT',{
      scale:1,
      ease:'none',
      scrollTrigger:{
        trigger:'.MainContALLStory',
        start:'top top',
        end:'top -10%',
        scrub:true,
      }
    })
  })

  return (
    <main className="bg-[#f6f6f6] MainContALLStory relative">
      <ArtworkGrid artworks={section1} />
      <ArtworkGrid artworks={section2} />
      <ArtworkGrid artworks={section3} />
      <ArtworkGrid artworks={section4} />
    </main>
  );
}