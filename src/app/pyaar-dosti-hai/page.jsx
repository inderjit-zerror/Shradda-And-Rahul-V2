import ChaptersAccordion from "@/components/common/ChaptersAccordion";
import TravelSection from "@/components/home/TravelSection";
import Destiny from "@/components/pyaar-dosti-hai/Destiny";
import Hearts from "@/components/pyaar-dosti-hai/Hearts";
import HeroSection from "@/components/pyaar-dosti-hai/HeroSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full h-fit overflow-x-hidden relative bg-[#f6f6f6] ">
        <HeroSection />
        {/* <Hearts /> */}
        {/* <Destiny /> */}

        <div className=" w-full h-fit overflow-x-hidden relative Collector ">
        <TravelSection />
        <ChaptersAccordion/>
        </div>
      </div>
    </>
  );
};

export default page;
