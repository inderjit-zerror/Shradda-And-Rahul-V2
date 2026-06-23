// "use client";

// import { useEffect, useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { HiPlay, HiSpeakerWave } from "react-icons/hi2";

// export default function HeroSection() {
//   const translations = {
//     English: {
//       text: "Love is Friendship",
//       lang: "en-US",
//       symbol: "A",
//     },
//     Tamil: {
//       text: "காதல் என்பது நட்பு",
//       lang: "ta-IN",
//       symbol: "அ",
//     },
//     Spanish: {
//       text: "El amor es amistad",
//       lang: "es-ES",
//       symbol: "A",
//     },
//     French: {
//       text: "L'amour est l'amitié",
//       lang: "fr-FR",
//       symbol: "A",
//     },
//     Japanese: {
//       text: "愛は友情です",
//       lang: "ja-JP",
//       symbol: "あ",
//     },
//   };

//   const [isPlaying, setIsPlaying] = useState(false);

//   const [selectedLanguage, setSelectedLanguage] = useState("English");
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);

//   const [isHindiPlaying, setIsHindiPlaying] = useState(false);
//   const [isEnglishPlaying, setIsEnglishPlaying] = useState(false);

//   const speakText = (text, languageCode, type) => {
//     if (typeof window === "undefined") return;

//     // Stop any currently playing speech
//     window.speechSynthesis.cancel();

//     // Reset both animations
//     setIsHindiPlaying(false);
//     setIsEnglishPlaying(false);

//     const utterance = new SpeechSynthesisUtterance(text);

//     utterance.lang = languageCode;
//     utterance.rate = 0.9;

//     const voices = window.speechSynthesis.getVoices();

//     const matchingVoice = voices.find((voice) =>
//       voice.lang
//         .toLowerCase()
//         .includes(languageCode.split("-")[0].toLowerCase()),
//     );

//     if (matchingVoice) {
//       utterance.voice = matchingVoice;
//     }

//     utterance.onstart = () => {
//       if (type === "hindi") {
//         setIsHindiPlaying(true);
//       } else {
//         setIsEnglishPlaying(true);
//       }
//     };

//     utterance.onend = () => {
//       setIsHindiPlaying(false);
//       setIsEnglishPlaying(false);
//     };

//     utterance.onerror = () => {
//       setIsHindiPlaying(false);
//       setIsEnglishPlaying(false);
//     };

//     window.speechSynthesis.speak(utterance);
//   };

//   useEffect(() => {
//     return () => {
//       window.speechSynthesis.cancel();
//     };
//   }, []);

//   return (
//     <section className="min-h-screen w-full relative  flex items-center justify-center px-[4vw] pt-[10vh]">
//       <div className="absolute top-0 scale-[1.4] left-0 w-full h-full overflow-hidden">
//         <img
//           src={`/images/home/SkyBg.png`}
//           className="w-full h-full scale-[1] object-cover object-center z-[1]"
//         />
//         {/* Brown Overlay */}
//         {/* <div className="absolute inset-0 bg-[#5C4033]/50 z-[2]" /> */}
//       </div>
//       <div className="w-full max-w-[90vw] z-10">
//         {/* Heading */}
//         <div className="text-center">
//           <h1 className="text-[4.5rem] font-semibold leading-none Font_CV uppercase text-[white]">
//             Pyaar Dosti Hai
//           </h1>

//           <div className="flex justify-center items-center gap-[0.8rem] mt-[1.5rem]">
//             <p className="uppercase Font_CV tracking-[0.25rem] text-[white] text-[1.1rem]">
//               Love Is Friendship
//             </p>
//           </div>
//         </div>

//         {/* Translation Section */}
//         <div className="mt-[5rem] flex flex-col lg:flex-row items-center gap-[2vw]">
//           {/* Left */}
//           <div className="flex-1 w-full">
//             <p className="uppercase text-[0.8rem] Font_CV tracking-[0.25rem] text-[white] mb-[0.8rem]">
//               From
//             </p>

//             <div className="bg-white border border-[#e7ddd4] rounded-[1.4rem] px-[1.5vw] py-[1rem] flex justify-between items-center">
//               <div className="flex items-center gap-[1rem]">
//                 <span className="text-[1.8rem] ">अ</span>

//                 <span className="text-[1.1rem] Font_CV uppercase text-[#4b403d]">
//                   Hindi
//                 </span>
//               </div>
//             </div>

//             <div className="mt-[1.5rem] bg-white border border-[#e7ddd4] rounded-[1.6rem] p-[2rem] min-h-[18rem] flex flex-col justify-between">
//               <div>
//                 <h2 className="text-[3rem] Font_CV text-[#651624]">
//                   प्यार दोस्ती है
//                 </h2>

//                 <p className="mt-[1rem] Font_CV text-[1.5rem] text-[#7c6d68]">
//                   Pyaar Dosti Hai
//                 </p>
//               </div>

//               <div className="flex justify-between items-end">
//                 <div className="flex items-center gap-[1rem]">
//                   <button
//                     onClick={() =>
//                       speakText("प्यार दोस्ती है", "hi-IN", "hindi")
//                     }
//                     className={`
//     group relative overflow-hidden
//     w-[4.5rem] h-[4.5rem]
//     rounded-full bg-[#651624]
//     flex items-center justify-center
//     transition-all duration-500
//     hover:scale-[1.08]
//     active:scale-[0.95]
//   `}
//                   >
//                     <span
//                       className={`
//       absolute inset-0 rounded-full
//       border border-[#8f4a55]
//       scale-0 group-hover:scale-100
//       transition-all duration-500
//     `}
//                     />

//                     {!isHindiPlaying ? (
//                       <HiPlay className="text-[1.4rem] text-white transition-all duration-300 group-hover:scale-110" />
//                     ) : (
//                       <HiSpeakerWave className="text-[1.5rem] text-white animate-pulse" />
//                     )}
//                   </button>

//                   <div className="flex items-center gap-[0.3rem]">
//                     {[...Array(12)].map((_, i) => (
//                       <span
//                         key={i}
//                         className={`
//         w-[0.12rem]
//         rounded-full
//         transition-all
//         duration-300
//         ${isHindiPlaying ? "bg-[#651624] animate-sound-wave" : "bg-[#d7c9c2]"}
//       `}
//                         style={{
//                           height: i % 2 === 0 ? "1rem" : "0.5rem",
//                           animationDelay: `${i * 0.08}s`,
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* <span className="text-[#7a6e69] text-[0.9rem]">14 / 5000</span> */}
//               </div>
//             </div>
//           </div>

//           {/* Center Swap */}
//           <div className="w-[4rem] h-[4rem] rounded-full flex items-center justify-center text-[white] text-[1.5rem]">
//             ⇄
//           </div>

//           {/* Right */}
//           <div className="flex-1 w-full">
//             <p className="uppercase text-[0.8rem] Font_CV tracking-[0.25rem] text-[white] mb-[0.8rem]">
//               To
//             </p>

//             {/* Language Dropdown */}
//             {/* Language Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsLanguageOpen(!isLanguageOpen)}
//                 className="w-full bg-white border border-[#e7ddd4] rounded-[1.4rem] px-[1.5vw] py-[1rem] flex justify-between items-center cursor-pointer"
//               >
//                 <div className="flex items-center gap-[1rem]">
//                   <span className="text-[1.8rem] Font_CV">
//                     {selectedLanguage === "Tamil"
//                       ? "அ"
//                       : selectedLanguage === "Japanese"
//                         ? "あ"
//                         : selectedLanguage === "Spanish"
//                           ? "A"
//                           : selectedLanguage === "French"
//                             ? "A"
//                             : "A"}
//                   </span>

//                   <span className="text-[1.1rem] Font_CV uppercase text-[#4b403d]">
//                     {selectedLanguage}
//                   </span>
//                 </div>

//                 <RiArrowDropDownLine
//                   className={`text-[2rem] transition-all duration-300 ${
//                     isLanguageOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {isLanguageOpen && (
//                 <div className="absolute top-[110%] left-0 w-full bg-white border border-[#e7ddd4] rounded-[1.4rem] overflow-hidden z-50 shadow-xl">
//                   {Object.entries(translations).map(([lang]) => (
//                     <button
//                       key={lang}
//                       onClick={() => {
//                         setSelectedLanguage(lang);
//                         setIsLanguageOpen(false);
//                       }}
//                       className={`w-full flex items-center gap-[1rem] px-[1.5vw] py-[1rem] text-left transition-all duration-300 hover:bg-[#f8f4ef]
//             ${
//               selectedLanguage === lang
//                 ? "bg-[#f8f4ef] text-[#651624]"
//                 : "text-[#4b403d]"
//             }`}
//                     >
//                       <span className="text-[1.4rem] Font_CV">
//                         {lang === "Tamil"
//                           ? "அ"
//                           : lang === "Japanese"
//                             ? "あ"
//                             : lang === "Spanish"
//                               ? "A"
//                               : lang === "French"
//                                 ? "A"
//                                 : "A"}
//                       </span>

//                       <span className="Font_CV">{lang}</span>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="mt-[1.5rem] bg-[#fdf8f1] border border-[#e7ddd4] rounded-[1.6rem] p-[2rem] min-h-[18rem] flex flex-col justify-between">
//               <div>
//                 <h2 className="text-[3rem] Font_CV text-[#4f322d]">
//                   {translations[selectedLanguage].text}
//                 </h2>
//               </div>

//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-[1rem]">
//                   <button
//                     onClick={() =>
//                       speakText(
//                         translations[selectedLanguage].text,
//                         translations[selectedLanguage].lang,
//                         "english",
//                       )
//                     }
//                     className={`
//     group relative overflow-hidden
//     w-[4.5rem] h-[4.5rem]
//     rounded-full bg-[#f1dfc4]
//     flex items-center justify-center
//     transition-all duration-500
//     hover:scale-[1.08]
//     active:scale-[0.95]
//   `}
//                   >
//                     <span
//                       className={`
//       absolute inset-0 rounded-full
//       border border-[#dcbf94]
//       scale-0 group-hover:scale-100
//       transition-all duration-500
//     `}
//                     />

//                     {!isEnglishPlaying ? (
//                       <HiPlay className="text-[1.4rem] text-[#8c6034] transition-all duration-300 group-hover:scale-110" />
//                     ) : (
//                       <HiSpeakerWave className="text-[1.5rem] text-[#8c6034] animate-pulse" />
//                     )}
//                   </button>

//                   <div className="flex items-center gap-[0.3rem]">
//                     {[...Array(12)].map((_, i) => (
//                       <span
//                         key={i}
//                         className={`
//         w-[0.12rem]
//         rounded-full
//         transition-all
//         duration-300
//         ${isEnglishPlaying ? "bg-[#b98b57] animate-sound-wave" : "bg-[#d7c9c2]"}
//       `}
//                         style={{
//                           height: i % 2 === 0 ? "1rem" : "0.5rem",
//                           animationDelay: `${i * 0.08}s`,
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiPlay, HiSpeakerWave } from "react-icons/hi2";

export default function HeroSection() {
  const translations = {
    English: {
      text: "Love is Friendship",
      lang: "en-US",
      symbol: "A",
    },
    Tamil: {
      text: "காதல் என்பது நட்பு",
      lang: "ta-IN",
      symbol: "அ",
    },
    Spanish: {
      text: "El amor es amistad",
      lang: "es-ES",
      symbol: "A",
    },
    French: {
      text: "L'amour est l'amitié",
      lang: "fr-FR",
      symbol: "A",
    },
    Japanese: {
      text: "愛は友情です",
      lang: "ja-JP",
      symbol: "あ",
    },
  };

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isHindiPlaying, setIsHindiPlaying] = useState(false);
  const [isEnglishPlaying, setIsEnglishPlaying] = useState(false);

  const speakText = (text, languageCode, type) => {
    if (typeof window === "undefined") return;

    window.speechSynthesis.cancel();

    setIsHindiPlaying(false);
    setIsEnglishPlaying(false);

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = languageCode;
    utterance.rate = 0.9;

    const voices = window.speechSynthesis.getVoices();

    const matchingVoice = voices.find((voice) =>
      voice.lang
        .toLowerCase()
        .includes(languageCode.split("-")[0].toLowerCase())
    );

    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    utterance.onstart = () => {
      if (type === "hindi") {
        setIsHindiPlaying(true);
      } else {
        setIsEnglishPlaying(true);
      }
    };

    utterance.onend = () => {
      setIsHindiPlaying(false);
      setIsEnglishPlaying(false);
    };

    utterance.onerror = () => {
      setIsHindiPlaying(false);
      setIsEnglishPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <section className="min-h-screen w-full relative flex items-center justify-center px-[4vw] pt-[10vh]">
      <div className="absolute top-0 scale-[1.4] left-0 w-full h-full overflow-hidden">
        <img
          src="/images/home/SkyBg.png"
          className="w-full h-full object-cover object-center z-[1]"
        />
      </div>

      <div className="w-full max-w-[90vw] z-10">
        <div className="text-center">
          <h1 className="text-[4.5rem] font-semibold leading-none Font_CV uppercase text-white">
            Pyaar Dosti Hai
          </h1>

          <div className="flex justify-center items-center gap-[0.8rem] mt-[1.5rem]">
            <p className="uppercase Font_CV tracking-[0.25rem] text-white text-[1.1rem]">
              Love Is Friendship
            </p>
          </div>
        </div>

        {/* Smaller Translation Section */}
        <div className="mt-[3rem] flex flex-col lg:flex-row items-center gap-[1.2vw] mx-auto  justify-center">

          {/* Left Card */}
          <div className="flex-1 w-full sm:max-w-[30vw]">
            <p className="uppercase text-[0.8rem] Font_CV tracking-[0.25rem] text-white mb-[0.6rem]">
              From
            </p>

            <div className="bg-white border border-[#e7ddd4] rounded-[1.1rem] px-[1.2vw] py-[0.7rem] flex justify-between items-center">
              <div className="flex items-center gap-[0.8rem]">
                <span className="text-[1.4rem]">अ</span>

                <span className="text-[0.95rem] Font_CV uppercase text-[#4b403d]">
                  Hindi
                </span>
              </div>
            </div>

            <div className="mt-[1rem] bg-white border border-[#e7ddd4] rounded-[1.3rem] p-[1.4rem] min-h-[14rem] flex flex-col justify-between">

              <div>
                <h2 className="text-[2.2rem] Font_CV text-[#651624]">
                  प्यार दोस्ती है
                </h2>

                <p className="mt-[0.8rem] Font_CV text-[1.15rem] text-[#7c6d68]">
                  Pyaar Dosti Hai
                </p>
              </div>
                            <div className="flex justify-between items-end">
                <div className="flex items-center gap-[0.8rem]">
                  <button
                    onClick={() =>
                      speakText("प्यार दोस्ती है", "hi-IN", "hindi")
                    }
                    className={`
                      group relative overflow-hidden
                      w-[3.5rem] h-[3.5rem]
                      rounded-full bg-[#651624]
                      flex items-center justify-center
                      transition-all duration-500
                      hover:scale-[1.08]
                      active:scale-[0.95]
                    `}
                  >
                    <span
                      className={`
                        absolute inset-0 rounded-full
                        border border-[#8f4a55]
                        scale-0 group-hover:scale-100
                        transition-all duration-500
                      `}
                    />

                    {!isHindiPlaying ? (
                      <HiPlay className="text-[1.1rem] text-white transition-all duration-300 group-hover:scale-110" />
                    ) : (
                      <HiSpeakerWave className="text-[1.2rem] text-white animate-pulse" />
                    )}
                  </button>

                  <div className="flex items-center gap-[0.2rem]">
                    {[...Array(12)].map((_, i) => (
                      <span
                        key={i}
                        className={`
                          w-[0.1rem]
                          rounded-full
                          transition-all duration-300
                          ${
                            isHindiPlaying
                              ? "bg-[#651624] animate-sound-wave"
                              : "bg-[#d7c9c2]"
                          }
                        `}
                        style={{
                          height: i % 2 === 0 ? "0.8rem" : "0.4rem",
                          animationDelay: `${i * 0.08}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Swap */}
          <div className="w-[3rem] h-[3rem] rounded-full flex items-center justify-center text-white text-[1.2rem]">
            ⇄
          </div>

          {/* Right Card */}
          <div className="flex-1 w-full sm:max-w-[30vw]">
            <p className="uppercase text-[0.8rem] Font_CV tracking-[0.25rem] text-white mb-[0.6rem]">
              To
            </p>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="w-full bg-white border border-[#e7ddd4] rounded-[1.1rem] px-[1.2vw] py-[0.7rem] flex justify-between items-center cursor-pointer"
              >
                <div className="flex items-center gap-[0.8rem]">
                  <span className="text-[1.4rem] Font_CV">
                    {selectedLanguage === "Tamil"
                      ? "அ"
                      : selectedLanguage === "Japanese"
                      ? "あ"
                      : "A"}
                  </span>

                  <span className="text-[0.95rem] Font_CV uppercase text-[#4b403d]">
                    {selectedLanguage}
                  </span>
                </div>

                <RiArrowDropDownLine
                  className={`text-[1.8rem] transition-all duration-300 ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLanguageOpen && (
                <div className="absolute top-[110%] left-0 w-full bg-white border border-[#e7ddd4] rounded-[1.1rem] overflow-hidden z-50 shadow-xl">
                  {Object.entries(translations).map(([lang]) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setIsLanguageOpen(false);
                      }}
                      className={`
                        w-full flex items-center gap-[0.8rem]
                        px-[1.2vw] py-[0.7rem]
                        text-left transition-all duration-300
                        hover:bg-[#f8f4ef]
                        ${
                          selectedLanguage === lang
                            ? "bg-[#f8f4ef] text-[#651624]"
                            : "text-[#4b403d]"
                        }
                      `}
                    >
                      <span className="text-[1.1rem] Font_CV">
                        {lang === "Tamil"
                          ? "அ"
                          : lang === "Japanese"
                          ? "あ"
                          : "A"}
                      </span>

                      <span className="text-[0.9rem] Font_CV">
                        {lang}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-[1rem] bg-[#fdf8f1] border border-[#e7ddd4] rounded-[1.3rem] p-[1.4rem] min-h-[14rem] flex flex-col justify-between">
              <div>
                <h2 className="text-[2.2rem] Font_CV text-[#4f322d]">
                  {translations[selectedLanguage].text}
                </h2>
              </div>
                            <div className="flex justify-between items-center">
                <div className="flex items-center gap-[0.8rem]">
                  <button
                    onClick={() =>
                      speakText(
                        translations[selectedLanguage].text,
                        translations[selectedLanguage].lang,
                        "english"
                      )
                    }
                    className={`
                      group relative overflow-hidden
                      w-[3.5rem] h-[3.5rem]
                      rounded-full bg-[#f1dfc4]
                      flex items-center justify-center
                      transition-all duration-500
                      hover:scale-[1.08]
                      active:scale-[0.95]
                    `}
                  >
                    <span
                      className={`
                        absolute inset-0 rounded-full
                        border border-[#dcbf94]
                        scale-0 group-hover:scale-100
                        transition-all duration-500
                      `}
                    />

                    {!isEnglishPlaying ? (
                      <HiPlay className="text-[1.1rem] text-[#8c6034] transition-all duration-300 group-hover:scale-110" />
                    ) : (
                      <HiSpeakerWave className="text-[1.2rem] text-[#8c6034] animate-pulse" />
                    )}
                  </button>

                  <div className="flex items-center gap-[0.2rem]">
                    {[...Array(12)].map((_, i) => (
                      <span
                        key={i}
                        className={`
                          w-[0.1rem]
                          rounded-full
                          transition-all duration-300
                          ${
                            isEnglishPlaying
                              ? "bg-[#b98b57] animate-sound-wave"
                              : "bg-[#d7c9c2]"
                          }
                        `}
                        style={{
                          height: i % 2 === 0 ? "0.8rem" : "0.4rem",
                          animationDelay: `${i * 0.08}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}