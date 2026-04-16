import bgImage from "../../assets/office-room.webp";
import H1 from "../ui/H1";
import H4 from "../ui/H4";
import H5 from "../ui/H5";

function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="p-8 pt-24 bg-brand-dark bg-center bg-cover text-brand-light h-dvh flex flex-col text-shadow-brand-dark text-shadow-bold border-b"
    >
      <H1 className="text-center">Hunafa Zaky</H1>
      <H4 className="text-center">Web Developer</H4>
      <H5 className="mt-16">
        Building Responsive, Secure, and Maintainable Web Apps
      </H5>
    </div>
  );
}

export default Hero;
