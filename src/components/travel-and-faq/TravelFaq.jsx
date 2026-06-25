// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaArrowRight } from "react-icons/fa6";
// import Link from "next/link";
// import { GradFlow } from "gradflow";
// import DotField from "../common/DotField";

// gsap.registerPlugin(ScrollTrigger);

// export default function FAQSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const contentRefs = useRef([]);
//   const innerRefs = useRef([]);

//   // Scroll animation refs
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const btnRef = useRef(null);
//   const faqRowRefs = useRef([]);

//   const faqData = [
//     {
//       id: 1,
//       question: "Are children invited?",
//       answer: `While we love your little ones, this will be an adults-only celebration. We hope you enjoy a relaxing weekend with us!`,
//     },
//     {
//       id: 2,
//       question: "Is there a gift registry?",
//       answer: `Your presence at our wedding is the greatest gift. However, if you wish to honor us with a gift, we will be sharing registry details soon.`,
//     },
//     {
//       id: 3,
//       question: "Will there be parking available at the venue?",
//       answer: `Yes, complimentary parking will be available at the venue for all guests. Valet service will also be provided.`,
//     },
//     {
//       id: 4,
//       question: "Can I take photos during the",
//       answer: `We kindly request guests to limit phone usage during the ceremony and enjoy the moment with us. A professional photographer will capture all special moments.`,
//     },
//     {
//       id: 5,
//       question: "Are dietary restrictions accommodated?",
//       answer: `Absolutely! Please inform us of any dietary restrictions in advance, and we will ensure suitable arrangements are made.`,
//     },
//     {
//       id: 6,
//       question: "Will there be Wi-Fi at the venue?",
//       answer: `Yes, complimentary Wi-Fi will be available at the venue for all guests.`,
//     },
//     {
//       id: 7,
//       question: "What should I do if I arrive early?",
//       answer: `If you arrive early, feel free to explore the city, relax at the hotel, or connect with other guests before the celebrations begin.`,
//     },
//     {
//       id: 8,
//       question: "Is there a backup plan for outdoor events?",
//       answer: `Yes, in case of unexpected weather, all outdoor events will have a beautiful indoor backup arranged.`,
//     },
//     {
//       id: 9,
//       question: "Will there be live music or entertainment?",
//       answer: `Yes! We have planned live music and special performances to make the celebration even more memorable.`,
//     },
//     {
//       id: 10,
//       question: "Can I share the event details on social media?",
//       answer: `Of course! We'd love for you to share the joy. Please use our wedding hashtag when posting your photos.`,
//     },
//   ];

//   // ── Accordion GSAP logic ─────────────────────────────────────────
//   useEffect(() => {
//     contentRefs.current.forEach((content, index) => {
//       const inner = innerRefs.current[index];
//       if (index === activeIndex) {
//         gsap.to(content, {
//           height: inner.offsetHeight,
//           duration: 0.5,
//           ease: "power3.inOut",
//         });
//       } else {
//         gsap.to(content, {
//           height: 0,
//           duration: 0.5,
//           ease: "power3.inOut",
//         });
//       }
//     });
//   }, [activeIndex]);

//   // ── Scroll-triggered entrance animations ────────────────────────
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Heading rises up
//       gsap.fromTo(
//         headingRef.current,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.85,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: headingRef.current,
//             start: "top 85%",
//             toggleActions: "play none none none",
//           },
//         },
//       );

//       // Button rises up with slight delay
//       gsap.fromTo(
//         btnRef.current,
//         { opacity: 0, y: 40 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.75,
//           delay: 0.15,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: headingRef.current,
//             start: "top 85%",
//             toggleActions: "play none none none",
//           },
//         },
//       );

//       // FAQ rows stagger up one by one
//       gsap.fromTo(
//         faqRowRefs.current,
//         { opacity: 0, y: 40 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.6,
//           ease: "power3.out",
//           stagger: 0.1,
//           scrollTrigger: {
//             trigger: faqRowRefs.current[0],
//             start: "top 85%",
//             toggleActions: "play none none none",
//             scrub: true,
//           },
//         },
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="w-full  py-10 relative overflow-hidden ">
//       <div className="fixed top-0 left-0 inset-0 w-full h-full bg-[#6C1D35] z-[-1]">
//         <DotField
//           dotRadius={2.5}
//           dotSpacing={14}
//           bulgeStrength={67}
//           glowRadius={160}
//           sparkle={false}
//           waveAmplitude={0}
//           cursorRadius={500}
//           cursorForce={0.1}
//           bulgeOnly
//           gradientFrom="rgba(240, 225, 196, 0.2)"
//           gradientTo="rgba(214, 184, 146, 0.2)"
//           glowColor="rgba(214, 184, 146, 0.0)"
//         />
//       </div>

//       {/* <GradFlow className=" fixed top-0 left-0 z-[-1]"
//         config={{
//           color1: "#592C75",
//           color2: "#BA366E",
//           color3: "#FE951C",
//           speed: 0.4,
//           scale: 1,
//           type: "wave",
//         }}
//       /> */}

//       {/* <div
//     className="absolute inset-0 z-0"
//     style={{
//       backgroundColor: "#9D3759",
//       opacity: 0.15, // Adjust from 0.1 to 0.4 as needed
//       mixBlendMode: "multiply",
//     }}
//   /> */}

//       {/* <img
//         src={`/images/home/SkyBg.png`}
//         className="w-full h-full fixed top-0 scale-[1.2] left-0 object-cover object-center z-[-1]"
//       /> */}

//       <div className="grid lg:grid-cols-2 min-h-screen pt-[10vh]">
//         {/* LEFT SIDE */}
//         <div className="lg:sticky lg:top-0 flex items-start  max-sm:pb-[10vh] justify-center ">
//           <div className="w-full px-8 lg:px-16">
//             <h1 className="Font_CV text-6xl font-semibold text-[#F1E2C6] uppercase">
//               Frequently Asked
//               <br />
//               Questions
//             </h1>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="px-8 lg:px-16  ">
//           <div className="">
//             {faqData.map((item, index) => (
//               <div key={index} className="border-b border-[#F1E2C6] pb-2 ">
//                 <button
//                   onClick={() => toggleAccordion(index)}
//                   className="w-full flex items-start justify-between gap-6 pt-5 text-left"
//                 >
//                   <h3
//                     className={`
//                   text-[#F1E2C6]
                 
//                   Font_CV
//                   text-[1.4rem]
//                   md:text-[1.8rem]
//                   leading-[1.2]
//                   max-w-[85%]
//                 `}
//                   >
//                     {item.question}
//                   </h3>

//                   <div
//                     className={`
//                   flex-shrink-0
//                   w-12 h-12
//                   rounded-lg
//                   BgBlue
//                   text-[#F1E2C6]
//                   flex items-center justify-center
//                   text-xl
//                   transition-transform duration-300
//                 `}
//                   >
//                     {activeIndex === index ? "−" : "+"}
//                   </div>
//                 </button>

//                 <div
//                   ref={(el) => (contentRefs.current[index] = el)}
//                   className="overflow-hidden h-0"
//                 >
//                   <div
//                     ref={(el) => (innerRefs.current[index] = el)}
//                     className="pb-5 pr-16"
//                   >
//                     <p
//                       className={`
//                    capitalize tracking-tight text-[#F1E2C6] text-[0.9rem] leading-[1.1rem]
//                     max-w-[700px]
//                   `}
//                     >
//                       {item.answer}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { GradFlow } from "gradflow";
import DotField from "../common/DotField";

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const contentRefs = useRef([]);
  const innerRefs = useRef([]);

  // Scroll animation refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const btnRef = useRef(null);
  const faqRowRefs = useRef([]);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  const faqData = [
    {
      id: 1,
      question: "Are children invited?",
      answer: `While we love your little ones, this will be an adults-only celebration. We hope you enjoy a relaxing weekend with us!`,
    },
    {
      id: 2,
      question: "Is there a gift registry?",
      answer: `Your presence at our wedding is the greatest gift. However, if you wish to honor us with a gift, we will be sharing registry details soon.`,
    },
    {
      id: 3,
      question: "Will there be parking available at the venue?",
      answer: `Yes, complimentary parking will be available at the venue for all guests. Valet service will also be provided.`,
    },
    {
      id: 4,
      question: "Can I take photos during the",
      answer: `We kindly request guests to limit phone usage during the ceremony and enjoy the moment with us. A professional photographer will capture all special moments.`,
    },
    {
      id: 5,
      question: "Are dietary restrictions accommodated?",
      answer: `Absolutely! Please inform us of any dietary restrictions in advance, and we will ensure suitable arrangements are made.`,
    },
    {
      id: 6,
      question: "Will there be Wi-Fi at the venue?",
      answer: `Yes, complimentary Wi-Fi will be available at the venue for all guests.`,
    },
    {
      id: 7,
      question: "What should I do if I arrive early?",
      answer: `If you arrive early, feel free to explore the city, relax at the hotel, or connect with other guests before the celebrations begin.`,
    },
    {
      id: 8,
      question: "Is there a backup plan for outdoor events?",
      answer: `Yes, in case of unexpected weather, all outdoor events will have a beautiful indoor backup arranged.`,
    },
    {
      id: 9,
      question: "Will there be live music or entertainment?",
      answer: `Yes! We have planned live music and special performances to make the celebration even more memorable.`,
    },
    {
      id: 10,
      question: "Can I share the event details on social media?",
      answer: `Of course! We'd love for you to share the joy. Please use our wedding hashtag when posting your photos.`,
    },
  ];

  // ── Accordion GSAP logic ─────────────────────────────────────────
  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      const inner = innerRefs.current[index];
      if (index === activeIndex) {
        gsap.to(content, {
          height: inner.offsetHeight,
          duration: 0.5,
          ease: "power3.inOut",
        });
      } else {
        gsap.to(content, {
          height: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    });
  }, [activeIndex]);

  // ── Page Load & Scroll-triggered entrance animations ────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Left side fade in from left
      tl.fromTo(
        leftSideRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0
      );

      // Heading rises up
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0.1
      );

      // Right side fade in from right
      tl.fromTo(
        rightSideRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0
      );

      // FAQ rows stagger up one by one with staggered entrance
      tl.fromTo(
        faqRowRefs.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
        },
        0.3
      );

      // Scroll animations - FAQ rows on scroll
      gsap.fromTo(
        faqRowRefs.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: faqRowRefs.current[0],
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="w-full py-10 relative overflow-hidden">
      <div className="fixed top-0 left-0 inset-0 w-full h-full bg-[#6C1D35] z-[-1]">
        <DotField
          dotRadius={2.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="rgba(240, 225, 196, 0.2)"
          gradientTo="rgba(214, 184, 146, 0.2)"
          glowColor="rgba(214, 184, 146, 0.0)"
        />
      </div>

      <div className="grid lg:grid-cols-2 min-h-screen pt-[10vh]">
        {/* LEFT SIDE */}
        <div
          ref={leftSideRef}
          className="lg:sticky lg:top-0 flex items-start max-sm:pb-[10vh] justify-center"
        >
          <div className="w-full px-8 lg:px-16">
            <h1
              ref={headingRef}
              className="Font_CV text-6xl font-semibold text-[#F1E2C6] uppercase"
            >
              Frequently Asked
              <br />
              Questions
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div ref={rightSideRef} className="px-8 lg:px-16">
          <div>
            {faqData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (faqRowRefs.current[index] = el)}
                className="border-b border-[#F1E2C6] pb-2"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-start justify-between gap-6 pt-5 text-left"
                >
                  <h3
                    className={`
                    text-[#F1E2C6]
                    Font_CV
                    text-[1.4rem]
                    md:text-[1.8rem]
                    leading-[1.2]
                    max-w-[85%]
                  `}
                  >
                    {item.question}
                  </h3>

                  <div
                    className={`
                    flex-shrink-0
                    w-12 h-12
                    rounded-lg
                    BgBlue
                    text-[#F1E2C6]
                    flex items-center justify-center
                    text-xl
                    transition-transform duration-300
                  `}
                  >
                    {activeIndex === index ? "−" : "+"}
                  </div>
                </button>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden h-0"
                >
                  <div
                    ref={(el) => (innerRefs.current[index] = el)}
                    className="pb-5 pr-16"
                  >
                    <p
                      className={`
                      capitalize tracking-tight text-[#F1E2C6] text-[0.9rem] leading-[1.1rem]
                      max-w-[700px]
                    `}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}