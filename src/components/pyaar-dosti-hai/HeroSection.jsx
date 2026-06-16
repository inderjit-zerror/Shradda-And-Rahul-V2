"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const translations = {
    English: {
      text: "Love is Friendship",
      lang: "en-US",
    },
    Tamil: {
      text: "காதல் என்பது நட்பு",
      lang: "ta-IN",
    },
    Spanish: {
      text: "El amor es amistad",
      lang: "es-ES",
    },
    French: {
      text: "L'amour est l'amitié",
      lang: "fr-FR",
    },
    Japanese: {
      text: "愛は友情です",
      lang: "ja-JP",
    },
  };

  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const speakText = (text, languageCode) => {
    if (typeof window === "undefined") return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageCode;
    utterance.rate = 0.9;

    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find((voice) =>
      voice.lang.toLowerCase().includes(languageCode.split("-")[0].toLowerCase())
    );

    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    

    window.speechSynthesis.speak(utterance);
  };

  useEffect(()=>{
    console.log(window.innerWidth)
  })

  return (
    <section className="min-h-screen w-full bg-[#f8f4ef] flex items-center justify-center px-[4vw] py-[6rem]">
      <div className="w-full max-w-[90vw]">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[4.5rem] leading-none Font_CV uppercase text-[#651624]">
            Pyaar Dosti Hai
          </h1>

          <div className="flex justify-center items-center gap-[0.8rem] mt-[1.5rem]">
            <p className="uppercase Font_CV tracking-[0.25rem] text-[#6d625d] text-[1.1rem]">
              Love Is Friendship
            </p>
          </div>
        </div>

        {/* Translation Section */}
        <div className="mt-[5rem] flex flex-col lg:flex-row items-center gap-[2vw]">
          {/* Left */}
          <div className="flex-1 w-full">
            <p className="uppercase text-[0.8rem] tracking-[0.25rem] text-[#6d625d] mb-[0.8rem]">
              From
            </p>

            <div className="bg-white border border-[#e7ddd4] rounded-[1.4rem] px-[1.5vw] py-[1rem] flex justify-between items-center">
              <div className="flex items-center gap-[1rem]">
                <span className="text-[1.8rem]">अ</span>
                <span className="text-[1.1rem] Font_CV text-[#4b403d]">
                  Hindi (Detected)
                </span>
              </div>

              {/* <span>⌄</span> */}
            </div>

            <div className="mt-[1.5rem] bg-white border border-[#e7ddd4] rounded-[1.6rem] p-[2rem] min-h-[18rem] flex flex-col justify-between">
              <div>
                <h2 className="text-[3rem] Font_CV text-[#651624]">
                  प्यार दोस्ती है
                </h2>

                <p className="mt-[1rem] Font_CV text-[1.5rem] text-[#7c6d68]">
                  Pyaar Dosti Hai
                </p>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex items-center gap-[1rem]">
                  <button
                    onClick={() =>
                      speakText("प्यार दोस्ती है", "hi-IN")
                    }
                    className="w-[3.5rem] h-[3.5rem] rounded-full bg-[#651624] hover:bg-[#4f0f1a] text-white flex items-center justify-center"
                  >
                    ▶
                  </button>

                  <div className="flex items-center gap-[0.3rem]">
                    {[...Array(12)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-[0.12rem] bg-[#d7c9c2] rounded-full ${
                          i % 2 === 0 ? "h-[1rem]" : "h-[0.5rem]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <span className="text-[#7a6e69] text-[0.9rem]">
                  14 / 5000
                </span>
              </div>
            </div>
          </div>

          {/* Center Swap */}
          <div className="w-[4rem] h-[4rem] rounded-full bg-[#f3eadf] flex items-center justify-center text-[#c29c5f] text-[1.5rem]">
            ⇄
          </div>

          {/* Right */}
          <div className="flex-1 w-full">
            <p className="uppercase text-[0.8rem] tracking-[0.25rem] text-[#6d625d] mb-[0.8rem]">
              To
            </p>

            <div className="bg-white border border-[#e7ddd4] rounded-[1.4rem] px-[1.5vw] py-[1rem] flex justify-between items-center">
              <div className="flex items-center gap-[1rem]">
                <span className="text-[1.8rem]">A</span>
                <span className="text-[1.1rem] Font_CV text-[#4b403d]">
                  {selectedLanguage}
                </span>
              </div>

              {/* <span>⌄</span> */}
            </div>

            <div className="mt-[1.5rem] bg-[#fdf8f1] border border-[#e7ddd4] rounded-[1.6rem] p-[2rem] min-h-[18rem] flex flex-col justify-between">
              <div>
                <h2 className="text-[3rem] Font_CV text-[#4f322d]">
                  {translations[selectedLanguage].text}
                </h2>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[1rem]">
                  <button
                    onClick={() =>
                      speakText(
                        translations[selectedLanguage].text,
                        translations[selectedLanguage].lang
                      )
                    }
                    className="w-[3.5rem] h-[3.5rem] rounded-full bg-[#f1dfc4] hover:bg-[#e3c699] text-[#7c542e] flex items-center justify-center"
                  >
                    ▶
                  </button>

                  <div className="flex items-center gap-[0.3rem]">
                    {[...Array(12)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-[0.12rem] bg-[#d7c9c2] rounded-full ${
                          i % 2 === 0 ? "h-[1rem]" : "h-[0.5rem]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-[1.5rem] text-[#7c6d68] text-[1.2rem]">
                  <span>⧉</span>
                  <span>↗</span>
                  <span>☆</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-[5rem]">
          <div className="flex items-center justify-center gap-[2vw] mb-[2rem]">
            <div className="w-[14vw] h-[0.06rem] bg-[#dccbb8]" />

            <p className="text-[1.5rem] text-[#5f4b46] Font_CV uppercase">
              Hear it in another language
            </p>

            <div className="w-[14vw] h-[0.06rem] bg-[#dccbb8]" />
          </div>

          <div className="flex flex-wrap justify-center gap-[1rem]">
            {Object.keys(translations).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setSelectedLanguage(lang);

                  speakText(
                    translations[lang].text,
                    translations[lang].lang
                  );
                }}
                className={`rounded-full border px-[2vw] py-[1rem] flex items-center Font_CV gap-[1rem] transition-all duration-300
                  ${
                    selectedLanguage === lang
                      ? "border-[#7f2a38] text-[#7f2a38] bg-white"
                      : "border-[#e5ddd4] text-[#554843] bg-white"
                  }`}
              >
                {lang}
            
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
