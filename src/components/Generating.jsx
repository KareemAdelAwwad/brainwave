import { loading } from "../assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

const Generating = ({ className }) => {
  const textRef = useRef(null);

  useGSAP(() => {
    // Spinner animation
    gsap.to(".spinner", {
      duration: 1.2,
      rotation: -360,
      ease: "none",
      repeat: -1,
    });

    // Typewriter effect
    gsap.to(textRef.current, {
      duration: 2,
      text: "AI is Generating...",
      ease: "none",
    });
  });

  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base ${
        className || ""
      }`}
    >
      <img className="w-5 h-5 mr-4 spinner pointer-events-none" src={loading} alt="loading" />
      <p ref={textRef}></p>
    </div>
  );
};

export default Generating;
