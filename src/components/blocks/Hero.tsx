import bgImage from "../../assets/office-room.webp";
import H1 from "../ui/H1";
import H4 from "../ui/H4";
import H6 from "../ui/H6";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="p-8 pt-24 bg-brand-dark bg-center bg-cover text-brand-light h-dvh flex flex-col text-shadow-brand-dark text-shadow-bold border-b"
    >
      <H1 className="text-center">Hunafa Zaky</H1>
      <H4 className="text-center">Web Developer</H4>
      <H6 className="mt-12">
        <TypeAnimation
          style={{ whiteSpace: "pre-line", height: "195px", display: "block" }}
          sequence={[
            "> welcome to my world.",
            2500,
            "> welcome to my world.\n> feel free to discover my lore",
            1000,
            "> welcome to my world.\n> feel free to check my skill tree",
            1000,
            "> welcome to my world.\n> feel free to learn my completed quests",
            1000,
            "> welcome to my world.\n> feel free to witness my achievements",
            1000,
            "> ",
            2500,
          ]}
          wrapper="span"
          speed={70}
          deletionSpeed={70}
          repeat={Infinity}
          cursor={true}
        />
      </H6>
    </div>
  );
}

export default Hero;
