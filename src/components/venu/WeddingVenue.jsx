'use client'
import React, { useState } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)


const WeddingVenue = () => {


  useGSAP(() => {
    const isMobile = window.innerWidth < 700

    gsap.from('.WeddingText', {
      opacity: 0,
      yPercent: 20,
      stagger: { each: 0.5 },
      ease: 'none',
      scrollTrigger: {
        trigger: '.WeddingTextCont',
        start: isMobile ? 'top 90%' : 'top 70%',
        end: isMobile ? 'top 50%' : 'top 20%',
        scrub: true,
        // markers: true
      }
    })
  }, [])


  return (
    <section className="h-fit max-md:h-fit  WeddingTextCont py-[10vh] flex items-center justify-center bg-[#6C1D35] px-6">
      <div className=" text-center text-[#F1E2C6]  ">

        {/* Description */}
        <p className="max-w-[70vw] mx-auto   text-[1rem] leading-[1rem] max-sm:text-[1.2rem] max-sm:leading-[1.4rem] COLOR_TEXT_RED  ">
        The Oberoi Marrakech is a monument to artisanal refinement and patience. It’s hard to feign nonchalance on entering this hotel's breathtaking entrance. The high and intricately domed cedar wood ceiling was handcrafted by 250 artisans with jaw-dropping mastery of detail. The space leads into an impressive marble-floored courtyard lined with black-and-white zellige tiles and keyhole arches that hark back to the Moorish palaces of Andalusia. Inside, Berber and Moghul paintings, studded sofas (handmade in Casablanca) and arabesque-tiled fireplaces lend the atmosphere of a grand noble home in which you feel like the family’s personal guest. At the helm of its culinary experience is Michelin-starred chef Rohit Ghai. The 28-acre property’s central feature is the arresting 790ft-long grand canal flanked by cypress trees and gardens that stretch towards the Atlas mountains in the distance. They enlisted craftsmen including specialist tilers from Fez, nejjarine carpenters and plaster carvers from Marrakech’s artisan base Sidi Ghanem. Such was the scale and ambition of this project that it led to a world shortage of Carrara marble. Set among lush citrus orchards and olive groves</p>
      </div>
    </section>
  );
};

export default WeddingVenue;