
import Header from "@/components/common/Header";
import HeartSection from "@/components/pyaar-dosti-hai/HeartSection";
import HeroSection from "@/components/pyaar-dosti-hai/HeroSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full h-fit overflow-x-hidden relative">
        <HeroSection />
        <HeartSection />
        <Header/>
      </div>
    </>
  );
};

export default page;
