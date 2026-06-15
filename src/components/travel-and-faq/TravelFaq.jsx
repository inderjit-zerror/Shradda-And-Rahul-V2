// "use client";
// import Link from "next/link";
// import { useRef, useState } from "react";

// const faqs = [
//   {
//     id: 1,
//     question: "Are children invited?",
//     answer: `While we love your little ones, this will be an adults-only celebration. We hope you enjoy a relaxing weekend with us!`,
//   },
//   {
//     id: 2,
//     question: "Is there a gift registry?",
//     answer: `Your presence at our wedding is the greatest gift. However, if you wish to honor us with a gift, we will be sharing registry details soon.`,
//   },
//   {
//     id: 3,
//     question: "Will there be parking available at the venue?",
//     answer: `Yes, complimentary parking will be available at the venue for all guests. Valet service will also be provided.`,
//   },
//   {
//     id: 4,
//     question: "Can I take photos during the",
//     answer: `We kindly request guests to limit phone usage during the ceremony and enjoy the moment with us. A professional photographer will capture all special moments.`,
//   },
//   {
//     id: 5,
//     question: "Are dietary restrictions accommodated?",
//     answer: `Absolutely! Please inform us of any dietary restrictions in advance, and we will ensure suitable arrangements are made.`,
//   },
//   {
//     id: 6,
//     question: "Will there be Wi-Fi at the venue?",
//     answer: `Yes, complimentary Wi-Fi will be available at the venue for all guests.`,
//   },
//   {
//     id: 7,
//     question: "What should I do if I arrive early?",
//     answer: `If you arrive early, feel free to explore the city, relax at the hotel, or connect with other guests before the celebrations begin.`,
//   },
//   {
//     id: 8,
//     question: "Is there a backup plan for outdoor events?",
//     answer: `Yes, in case of unexpected weather, all outdoor events will have a beautiful indoor backup arranged.`,
//   },
//   {
//     id: 9,
//     question: "Will there be live music or entertainment?",
//     answer: `Yes! We have planned live music and special performances to make the celebration even more memorable.`,
//   },
//   {
//     id: 10,
//     question: "Can I share the event details on social media?",
//     answer: `Of course! We'd love for you to share the joy. Please use our wedding hashtag when posting your photos.`,
//   },
// ];

// export default function TravelFaq() {
//   const [openId, setOpenId] = useState(null);
//   const contentRefs = useRef({});

//   const toggleFAQ = (id) => {
//     setOpenId(openId === id ? null : id);
//   };

//   return (
//     <section
//       id="FAQ"
//       className="min-h-screen max-sm:min-h-fit BG_Secondary w-full overflow-hidden  overflow-hidden  flex items-center relative justify-center max-sm:py-[20vw] py-[20vh] z-[1]"
//       style={{ fontFamily: "'Cormorant Garamond', serif" }}
//     >
//       <div className="w-full h-screen fixed top-0 left-0 z-[-1] ">
//         <img
//           src="/images/home/SkyBg.png"
//           alt="iomg"
//           className=" w-full h-full scale-[1.2] object-cover object-center absolute top-0 left-0 z-[-1] opacity-90"
//         />
//       </div>

//       {/* <div className="w-2/10  h-fit absolute top-[-5%] right-[-5%] ">
//         <img
//           src={`/assets/s01.png`}
//           alt="IMG"
//           className="w-full  object-center object-cover "
//         />
//       </div> */}

//       <div className="w-[80%] max-sm:w-full px-6 max-sm:px-[20px] flex flex-col gap-20 relative z-50">
//         <h2
//           className="text-center Font_CV uppercase text-[4vw] text-white  max-sm:text-[10vw] font-semibold  F1 flex flex-col justify-center items-center max-sm:justify-start max-sm:mt-10"

//         >
//           Travel and FAQs
//         </h2>

//         <div className="space-y-6 w-full z-50">
//           {faqs.map((faq) => (
//             <div
//               key={faq.id}
//               className="pb-6 group relative border-b border-white/10"

//             >
//               {/* BUTTON */}
//               <button
//                 onClick={() => toggleFAQ(faq.id)}
//                 className="group w-full flex items-center justify-between text-left"
//               >
//                 <span
//                   className="tracking-wide uppercase Font_CV  text-[1.5rem] max-sm:pr-[10vh] max-sm:text-[1.1rem] "
//                   style={{
//                     color: "#f5f5f5",

//                     // fontWeight: 500,
//                   }}
//                 >
//                   {faq.question}
//                 </span>

//                 {/* ICON */}
//                 <span
//                   className={`relative w-5 h-5 transition-transform duration-500 ${
//                     openId === faq.id ? "rotate-45" : ""
//                   }`}
//                 >
//                   <img
//                     src="/images/home/Tile.png"
//                     alt="icon"
//                     className="absolute inset-0 w-full h-full"
//                     // style={{ filter: "brightness(0) saturate(100%) invert(67%) sepia(48%) saturate(412%) hue-rotate(3deg) brightness(95%) contrast(89%)" }}
//                   />
//                   {/* <span
//                     className="absolute inset-0 m-auto w-[7px] h-[7px]"
//                     style={{ backgroundColor: "#F5F1ED" }}
//                   /> */}
//                 </span>
//               </button>

//               {/* CONTENT */}
//               <div
//                 ref={(el) => (contentRefs.current[faq.id] = el)}
//                 className="overflow-hidden transition-all duration-500  ease-in-out"
//                 style={{
//                   height:
//                     openId === faq.id
//                       ? `${contentRefs.current[faq.id]?.scrollHeight}px`
//                       : "0px",
//                 }}
//               >
//                 <div
//                   className="mt-4 text-[22px] Font_CI text-white max-sm:text-[1.1rem]"

//                 >
//                   {faq.answer}
//                 </div>
//               </div>

//               {/* HOVER LINE */}
//               <div
//                 className="w-0 h-px group-hover:w-full bg-white absolute bottom-0 left-0 transition-all duration-200"

//               />
//             </div>
//           ))}
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

  // ── Scroll-triggered entrance animations ────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading rises up
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Button rises up with slight delay
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // FAQ rows stagger up one by one
      gsap.fromTo(
        faqRowRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: faqRowRefs.current[0],
            start: "top 85%",
            toggleActions: "play none none none",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full  py-10 relative ">
      <GradFlow className=" fixed top-0 left-0 z-[-1]"
        config={{
          color1: "#FE951C",
          color2: "#BA366E",
          // color3: "",
          color3: "#592C75",
          speed: 0.4,
          scale: 1,
          type: "stripe",
        }}
      />

      <div className="grid lg:grid-cols-2 min-h-screen pt-[10vh]">
        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-0 flex items-start  max-sm:pb-[10vh] justify-center ">
          <div className="w-full px-8 lg:px-16">
            <h1 className="Font_CV text-6xl font-semibold text-white uppercase">
              Frequently Asked
              <br />
              Questions
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="px-8 lg:px-16  ">
          <div className="">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-[#dddddd] pb-5 ">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-start justify-between gap-6 pt-10 text-left"
                >
                  <h3
                    className={`
                  text-[white]
                 
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
                  text-white
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
                    text-white
                    text-lg
                    leading-relaxed
                    Font_CI
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
